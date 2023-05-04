<template>
  <div class="aegle-title" :class="[blockClazz]">
    <span class="aegle-title__prefix" :class="[prefixClazz]"></span>
    <span class="aegle-title__content">
      <template v-if="isDropdown">
        <el-dropdown v-bind="$attrs" v-on="$listeners">
          <span class="el-dropdown-link"> <slot /><i class="el-icon-arrow-down el-icon--right"></i> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in dropdownOptions"
              :command="item.value"
              :disabled="item.disabled"
              :divided="item.divided"
              :icon="item.divided"
              :key="item.value"
              >{{ item.label }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown></template
      >
      <template v-else><slot /></template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AegleTitle',
  props: {
    prefix: {
      type: String,
      default: 'rectangle'
    },
    size: {
      type: String,
      default: 'default' // large == 22  small = 20
    },
    type: {
      type: String,
      default: ''
    },
    dropdownOptions: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    blockClazz() {
      return `aegle-title--${this.size}`
    },
    prefixClazz() {
      return `aegle-title__prefix--${this.prefix}`
    },
    isDropdown() {
      if (this.type === 'dropdown') {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss">
.aegle-title {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 500;

  &--default {
    height: 22px;
    font-size: 16px;
    & .aegle-title__content {
        line-height: 22px;
    }
  }
  &--large {
    @extend .aegle-title--default;
  }
  &--small {
    height: 20px;
    font-size: 14px;
    & .aegle-title__content {
        line-height: 20px;
    }
  }
}

.aegle-title__prefix {
  margin-right: 8px;
  background-color: #407df3;
}

.aegle-title__prefix--rectangle {
  width: 3px;
  height: 12px;
  border-radius: 2px;
}
.aegle-title__prefix--circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.aegle-title .el-dropdown {
  color: inherit;
  font-size: inherit;
  font-weight: inherit;

    .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    color: rgba(0,0,0,0.40);
    font-size: 16px;
  }
}
</style>