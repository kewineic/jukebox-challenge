<template>
  <v-footer
    dark
    color="primary"
  >
    <v-container>
      <v-card
        flat
        tile
        class="indigo white--text text-center"
        color="primary"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          
          Desafio para a empresa Jukebox Agenciamento utilizando VueJs, VueX e Vuetify.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Kewin Costa</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<style src="./styles.scss" lang="scss" scoped>

</style>