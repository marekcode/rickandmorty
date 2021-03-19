<template>
  <section class="table">
    <div v-for="(column, index) in columnNames" :key="index" class="th">
      {{ column }}
    </div>

    <template v-for="(character, index) in characters">
      <template v-for="(property, name) in character">
        <span
          v-if="name === 'image'"
          :key="name + index"
          :style="imageStyles(property)"
          class="image"
        >
        </span>
        <span v-else-if="name === 'gender'" :key="name + index" class="gender">
          <component :is="genderIcon(property)" />
          {{ property }}
        </span>
        <span v-else-if="name === 'episode'" :key="name + index">
          {{ lastEpisode(property) }}
        </span>
        <span v-else :key="name + index">{{ property }}</span>
      </template>
      <span :key="character.created" class="favorite">
        <button
          type="button"
          @click="updateFavo(character)"
          :class="{ selected: selected }"
        >
          <star-icon></star-icon>
        </button>
      </span>
    </template>
  </section>
</template>

<script lang="ts">
import Vue, { Component } from "vue";
import { mapActions } from "vuex";
import { RowType, CharacterType, OperationType } from "../types";
import starIcon from "./svgs/star-icon.vue";
import maleIcon from "./svgs/male-icon.vue";
import femaleIcon from "./svgs/female-icon.vue";
import closeIcon from "./svgs/close-icon.vue";
import removeIcon from "./svgs/remove-icon.vue";

export default Vue.extend({
  name: "TableApp",
  props: {
    selected: {
      type: Boolean,
      required: true
    }
  },
  components: { starIcon, maleIcon, femaleIcon, closeIcon, removeIcon },
  data() {
    return {
      www: RowType
    };
  },
  methods: {
    ...mapActions("favorites", ["initFavorites", "updateFavorites"]),
    ...mapActions("characters", ["getAllCharacters"]),
    genderIcon(property: string): Component {
      if (property === "Male") return maleIcon;
      if (property === "Female") return femaleIcon;
      if (property === "Genderless") return closeIcon;
      return removeIcon;
    },
    lastEpisode(episodes: Array<string>): string {
      const last = episodes[episodes.length - 1];
      const episodeSplitted = last.split("/");

      return "S01E" + episodeSplitted[episodeSplitted.length - 1];
    },
    imageStyles(property: string) {
      return {
        "background-image": `url(${property})`
      };
    },
    updateFavo(character: CharacterType) {
      const operation = this.selected
        ? OperationType.remove
        : OperationType.add;
        console.log('qqq', character, operation)
      this.$store.dispatch("updateFavorites", { character, operation });
    }
  },
  computed: {
    columnNames() {
      return this.$store.state.columns;
    },
    characters() {
      if (this.selected) {
        return this.$store.state.favorites.favoritesList;
      }

      return this.$store.getters.modifiedCharacters;
    }
  },
  created() {
    if (!this.selected) {
      this.$store.dispatch("getAllCharacters");
    } else {
      this.$store.dispatch("initFavorites");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/color";

.table {
  display: grid;
  grid-template-columns: 170px 170px 170px 170px 170px 170px 170px;
}

.th {
  background: $gray;
  font-weight: bold;
  padding: 15px;
  color: $secondary;
  text-align: left;
}

span {
  align-items: center;
  display: flex;

  color: $secondary;
  padding: 15px;

  &.gender {
    align-items: center;
    display: flex;
  }

  &.image {
    background-position: center;
    background-size: cover;
    height: 58px;
    width: 36px;
  }

  &.favorite {
    align-items: center;
    display: flex;
    justify-content: left;
  }

  &.gender {
    svg {
      margin-right: 5px;
    }
  }
}

button {
  align-items: center;
  background: none;
  border: 2px solid $primary;
  border-color: $primary;
  border-radius: 10px;
  display: flex;
  height: 36px;
  justify-content: center;
  width: 36px;

  &:focus {
    outline: none;
  }

  svg {
    fill: $primary;
  }

  &.selected {
    background: $primary;

    svg {
      fill: white;
    }
  }
}
</style>
