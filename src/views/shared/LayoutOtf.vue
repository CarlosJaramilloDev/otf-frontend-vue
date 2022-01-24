<template>
<header-otf></header-otf>
  <router-view/>
</template>

<script>
import HeaderOtf from '@/views/shared/HeaderOtf'

export default {
  name: 'LayoutOtf',
  components: {
    HeaderOtf
  },
  data() {
    return {}
  }
}
</script>