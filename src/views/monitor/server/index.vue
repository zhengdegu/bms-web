<template>
  <elFrame :src="grafanaApi" />
</template>
<script>
import { mapGetters } from 'vuex'
import elFrame from '@/components/Iframe/index'
export default {
  name: 'Grafana',
  components: { elFrame },
  computed: {
    ...mapGetters([
      'grafanaApi'
    ])
  }
}
</script>
