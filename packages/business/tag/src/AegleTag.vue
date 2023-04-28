<template>
  <div @click="handleClick" :style="colorStyle" class="aegle-tag" :class="[round ? 'is-round' : null, computedClazz]">
    <slot />
  </div>
</template>

<script>
const hexToRGBA = function (_color, _opacity) {
  var sColor = _color.toLowerCase()
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    //处理六位的颜色值
    var sColorChange = []
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return 'rgba(' + sColorChange.join(',') + ',' + _opacity + ')'
  }
  return sColor
}

const typeMap = {
  primary: '#1890FF',
  warning: '#FF9503',
  info: '#000000',
  success: '#2EB16E',
  warning: '#FF9503'
}

export default {
  name: 'AegleTag',
  props: {
    border: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: ''
    }
  },

  computed: {
    colorStyle() {
      let color = ''

      if (this.type) {
        color = typeMap[this.type]
        console.log(color)
      }

      if (this.color) {
        color = this.color
      }

      return {
        background: hexToRGBA(color, 0.1),
        color: color,
        borderColor: hexToRGBA(color, 0.2)
      }
    },
    computedClazz() {
      return `aegle-tag--${this.size}`
    }
  },
  methods: {
    handleClick() {
        this.$emit("click")
    }
  }
}
</script>

<style lang="scss">
.aegle-tag {
  display: inline-block;
  height: 22px;
  padding: 0 8px;
  line-height: 22px;
  border: 1px solid;
  border-radius: 2px;
  font-size: 12px;
  cursor: pointer;
}

.aegle-tag.is-round {
  border-radius: 12px;
}

.aegle-tag.aegle-tag--small {
  height: 18px;
  line-height: 18px;

  &.is-round {
    border-radius: 10px;
  }
}
</style>