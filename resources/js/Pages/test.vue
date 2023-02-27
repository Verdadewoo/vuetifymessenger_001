 <template>
   <v-app max-width="1280"
          class="mx-auto max-w-7xl p-6 lg:px-8">
      <v-main>

        <v-app-bar
          :style="appBarStyle"
          height="100"
          flat
          class="mt-n6 sticky"
          style="z-index: 2; background-color: white;"
          ref="appBar"
        >

        <v-container
          ref="appBar"
          :style="appBarStyle"
          class="sticky"
          color="primary"
          style="min-height: 100%; min-width: 130vw; background-color: white; left: 0; position:absolute; margin-left: -20vw;"
        ></v-container>

        <v-app-bar-nav-icon width="40">
          <v-img
          width="40"
          src="images/aaa.png"
          ></v-img>
        </v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-list class="hidden-xs-only">
          <v-btn
            small
            text
            depressed
            v-ripple="false"
            class="no-bg-color text-capitalize font-weight-bold subtitle-2"
            v-for="(item, i) in items"
            :key="i"
          ><span>{{ item.text }}</span></v-btn>
        </v-list>

        <v-app-bar-nav-icon  v-ripple="false" class="no-bg-color hidden-sm-and-up" @click="showContainer = !showContainer">
          <v-icon
            x-large
            color="black"
          >
          {{ !showContainer ? 'mdi-menu' : 'mdi-close' }}
          </v-icon>
        </v-app-bar-nav-icon>


        </v-app-bar>

        <v-container
        fluid
        style="overflow:visible; position: fixed;"
        class="pa-0 hidden-sm-and-up"
        v-if="showContainer">
          <v-row align="center">
            <v-col
              cols="12"
              sm="6"
            >
              <div>
                <div class="my-3 py-5 ml-n10 pl-10" style="background-color: #FAFAFA; width: 110vw;">
                  <v-btn x-large text depressed  v-ripple="false" class="no-bg-color text-capitalize font-weight-medium display-1 custom-btn"><span>Features</span></v-btn>
                </div>



                <div class="my-3 py-5 ml-n10 pl-10" style="background-color: #FAFAFA; width: 110vw;">
                  <v-btn x-large text depressed  v-ripple="false" class="no-bg-color text-capitalize font-weight-medium display-1 custom-btn"><span>Desktop App</span></v-btn>
                </div>



                <div class="my-3 py-5 ml-n10 pl-10" style="background-color: #FAFAFA; width: 110vw;">
                  <v-btn x-large text depressed  v-ripple="false" class="no-bg-color text-capitalize font-weight-medium display-1 custom-btn"><span>Privacy & Safety</span></v-btn>
                </div>



                <div class="my-3 py-5 ml-n10 pl-10" style="background-color: #FAFAFA; width: 110vw;">
                  <v-btn x-large text depressed  v-ripple="false" class="no-bg-color text-capitalize font-weight-medium display-1 custom-btn"><span>For Developers</span></v-btn>
                </div>
              </div>
            </v-col>

          </v-row>

        </v-container>

        <v-container
        v-if="showContainer != true"
        >
          <v-row no-gutters>
              <v-col cols="6">
                <v-container
                v-if="mobile != true"
                class="hidden-sm-and-down mx-n3 mx-md-n6 mx-xl-n4"
                >
                  <!-- Context Here -->

                  <v-container class="custom-text mx-n3 mx-md-n4 mx-xl-n4">
                    <span class="font-weight-medium blue--text">Hang out <br />
                      anytime, <br />
                      anywhere <br />
                    </span>
                  </v-container>

                  <p class="grey--text text--darken-2 mt-3">Messenger makes it easy and fun to stay close to your <br />
                    favorite people.
                  </p>
                  <v-container>
                    <v-text-field
                      ref="button"
                      @click="isOutlined = true" :outlined="isOutlined"
                      label="Email or phone number"
                      placeholder="Email or phone number"
                      class="rounded-lg mx-n3"
                      style="width: 320px;"
                      dense
                      solo
                      flat
                    ></v-text-field>

                    <!-- prepend-inner-icon="mdi-email" -->

                    <v-text-field
                      label="Password"
                      placeholder="Password"
                      class="rounded-lg mx-n3 my-n4"
                      style="width: 320px;"
                      dense
                      solo
                      flat
                      outlined
                      outlined-color="red"
                    ></v-text-field>

                    <br />

                    <v-btn
                      class="mx-n3 font-weight-bold text-capitalize"
                      rounded
                      depressed
                      color="primary"
                      large
                    >Log in</v-btn>

                    <span>
                      <v-btn
                      small
                      depressed
                      color="white"
                      class="text-capitalize text-decoration-underline mx-5 primary--text"
                      >Forgot your password?</v-btn>
                    </span>

                    <v-checkbox
                      class="mx-n3 mt-8"
                      
                      label="Keep me signed in"
                      color="primary"
                      value="primary"
                      hide-details
                    ></v-checkbox>

                    <v-container class="mt-4 mx-n5">
                      <span>
                        <a href="https://apps.apple.com/us/app/messenger/id454638411?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 132px; height: 44px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1312848000" alt="Download on the App Store" style="border-radius: 13px; width: 132px; height: 44px;"></a>
                      </span>
                      <span>
                        <img class="img" style="border-radius: 4px; width: 132px; height: 44px;" src="https://z-p3-scontent.fcrk3-1.fna.fbcdn.net/v/t39.8562-6/119656338_326247688451849_3018195711400016354_n.svg?_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=6825c5&amp;_nc_ohc=le6N73-y2dgAX8r5xzD&amp;_nc_ht=z-p3-scontent.fcrk3-1.fna&amp;oh=00_AfAx4HNcpw8ftucCk_QRv0iQEyiN7jz8l27FRI14d3bckA&amp;oe=6400A794" alt="">
                      </span>
                    </v-container>


                  </v-container>
                  <!-- End context Here -->
                </v-container>
              </v-col>
              <v-col cols="6">
                <v-container
                  class="hidden-sm-and-down"
                >
                  <!-- Context Here -->
                  <v-container style="display: flex; justify-content: center; align-items: center;">
                    <v-img
                      class="ml-16 mt-6"
                      style="width: 100%; transform: scale(1.2);"
                      src="images/side.png"
                    ></v-img>
                  </v-container>
                  <!-- End context Here -->

                </v-container>
              </v-col>
              <v-col class="hidden-md-and-up hidden-xs-only">
                <v-container>
                  <!-- Context Here -->
                  <v-container
                    class="mt-n3"
                    style="margin: auto; width: 440px;"
                  >

                    <v-container class="custom-text mx-n3 mx-md-n4 mx-xl-n4" style="text-align: center;">
                      <span class="font-weight-medium blue--text" style="font-size: 48px; line-height: 52px;"><p>Hang out <br />
                        <span style="white-space: nowrap;">anytime, anywhere</span></p>
                      </span>
                    </v-container>

                    <p class="grey--text text--darken-2 mt-n2" style="text-align: center;">Messenger makes it easy and fun to stay close to your <br />
                      favorite people.
                    </p>

                    <v-container class="mt-16">
                      <v-text-field
                        label="Email or phone number"
                        placeholder="Email or phone number"
                        class="rounded-lg mx-n3"
                        style="width: 100%;"
                        dense
                        solo
                        flat
                        outlined
                      ></v-text-field>

                      <v-text-field
                        label="Password"
                        placeholder="Password"
                        class="rounded-lg mx-n3 my-n4"
                        style="width: 100%;"
                        dense
                        solo
                        flat
                        outlined
                        outlined-color="red"
                      ></v-text-field>

                      <br />

                      <v-btn
                        class="mx-n3 font-weight-bold text-capitalize"
                        rounded
                        depressed
                        color="primary"
                        large
                      >Log in</v-btn>

                      <span>
                        <v-btn
                        small
                        depressed
                        color="white"
                        class="text-capitalize text-decoration-underline mx-5 primary--text"
                        >Forgot your password?</v-btn>
                      </span>

                      <v-checkbox
                        class="mx-n3 mt-8"
                        
                        label="Keep me signed in"
                        color="primary"
                        value="primary"
                        hide-details
                      ></v-checkbox>

                      <v-container class="mt-4 mx-n5">
                        <span>
                          <a href="https://apps.apple.com/us/app/messenger/id454638411?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 132px; height: 44px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1312848000" alt="Download on the App Store" style="border-radius: 13px; width: 132px; height: 44px;"></a>
                        </span>
                        <span>
                          <img class="img" style="border-radius: 4px; width: 132px; height: 44px;" src="https://z-p3-scontent.fcrk3-1.fna.fbcdn.net/v/t39.8562-6/119656338_326247688451849_3018195711400016354_n.svg?_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=6825c5&amp;_nc_ohc=le6N73-y2dgAX8r5xzD&amp;_nc_ht=z-p3-scontent.fcrk3-1.fna&amp;oh=00_AfAx4HNcpw8ftucCk_QRv0iQEyiN7jz8l27FRI14d3bckA&amp;oe=6400A794" alt="">
                        </span>
                      </v-container>
                    </v-container>

                    <v-container>
                      <v-img
                        class="mt-5"
                        style="width: 100%; transform: scale(1.2);"
                        src="images/side.png"
                      ></v-img>
                    </v-container>

                    <br /><br /><br /><br /><br />

                  </v-container>
                  <!-- End context Here -->
                </v-container>
              </v-col>
              <v-col class="hidden-sm-and-up">
                <v-container
                >
                  <!-- Context Here -->
                  <v-container
                    class="mt-n3"
                    style="margin: auto;"
                  >

                    <v-container class="custom-text mx-n3 mx-md-n4 mx-xl-n4 mt-16">
                      <span class="font-weight-medium blue--text" style="font-size: 48px; line-height: 52px;"><p>Hang out <br />
                        anytime, anywhere</p>
                      </span>
                    </v-container>

                    <p class="grey--text text--darken-2 mt-n2">Messenger makes it easy and fun to stay close to your favorite people.</p>

                    <v-container class="mt-16">
                      <v-text-field
                        label="Email or phone number"
                        placeholder="Email or phone number"
                        class="rounded-lg mx-n3"
                        style="width: 100%;"
                        dense
                        solo
                        flat
                        outlined
                      ></v-text-field>

                      <v-text-field
                        label="Passwords"
                        placeholder="Password"
                        class="rounded-lg mx-n3 my-n4 custom-text-field"
                        style="width: 100%;"
                        dense
                        solo
                        flat
                        outlined
                      ></v-text-field>

                      <br />

                      <v-btn
                        class="mx-n3 font-weight-bold text-capitalize"
                        rounded
                        depressed
                        color="primary"
                        large
                      >Log in</v-btn>

                      <span>
                        <v-btn
                        small
                        depressed
                        color="white"
                        class="text-capitalize text-decoration-underline mx-5 primary--text"
                        >Forgot your password?</v-btn>
                      </span>

                      <v-checkbox
                        class="mx-n3 mt-8"
                        
                        label="Keep me signed in"
                        color="primary"
                        value="primary"
                        hide-details
                      ></v-checkbox>

                      <v-container class="mt-4 mx-n5" style="z-index: 1; position: relative;">
                        <span>
                          <a href="https://apps.apple.com/us/app/messenger/id454638411?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 132px; height: 44px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1312848000" alt="Download on the App Store" style="border-radius: 13px; width: 132px; height: 44px;"></a>
                        </span>
                        <span>
                          <img class="img" style="border-radius: 4px; width: 132px; height: 44px;" src="https://z-p3-scontent.fcrk3-1.fna.fbcdn.net/v/t39.8562-6/119656338_326247688451849_3018195711400016354_n.svg?_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=6825c5&amp;_nc_ohc=le6N73-y2dgAX8r5xzD&amp;_nc_ht=z-p3-scontent.fcrk3-1.fna&amp;oh=00_AfAx4HNcpw8ftucCk_QRv0iQEyiN7jz8l27FRI14d3bckA&amp;oe=6400A794" alt="">
                        </span>
                      </v-container>
                    </v-container>

                    <v-container>
                      <v-img
                        class="mt-5"
                        style="width: 100%; transform: scale(1.4);"
                        src="images/side.png"
                      ></v-img>
                    </v-container>

                    <br /><br /><br /><br /><br />

                  </v-container>
                  <!-- End context Here -->
                </v-container>
              </v-col>
          </v-row>

          <!-- Footer MD and UP -->

          <v-container
            v-if="$vuetify.breakpoint.smAndDown != true"
            class="ml-n4 mt-12 pt-16"
            style="color: black; min-width: 103%; height: 70px; display: flex; align-items: center; text-align: center;"
            >
            <v-row no-gutters>
              <v-col style="max-width: max-content;"><p class="caption"><b>© Meta 2023.</b></p></v-col>
              <v-col style="max-width: max-content;"><p class="caption" style="white-space: nowrap;">&nbsp&nbspThe Apple and Google Play logos are trademarks of their respective owners.</p></v-col>
              <v-spacer></v-spacer>
              <v-col style="max-width: max-content;"><p class="caption mx-3">Privacy Policy</p></v-col>
              <v-col style="max-width: max-content;"><p class="caption mx-3">Cookie Policy</p></v-col>
              <v-col style="max-width: max-content;"><p class="caption mx-3">Terms</p></v-col>
              <v-col style="max-width: max-content;"><p class="caption ml-3">English US</p></v-col>
              <v-col style="max-width: max-content;">
                <v-img
                  style="max-width: 130px; margin-top: -12px;"
                  src="images/footer.png"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>

          <!-- Footer SM and XS -->

          <v-container
            v-else
            class="mb-n10"
            style="color: black; min-width: 103%; display: flex; align-items: center; text-align: center; flex-direction: column;"
          >
            <v-row>
              <v-col cols="12">
                <p class="caption"><b>© Meta 2023.</b>&nbsp&nbspThe Apple and Google Play logos are trademarks of their respective owners.</p>
              </v-col>
            </v-row>

            <v-row no-gutters class="pt-5">
              <v-col style="max-width: max-content;"><p class="caption mx-3">Privacy Policy</p></v-col>
              <v-col style="max-width: max-content;"><p class="caption mx-3">Cookie Policy</p></v-col>
              <v-col style="max-width: max-content;"><p class="caption mx-3">Terms</p></v-col>
              <v-col style="max-width: max-content;"><p class="caption ml-3">English US</p></v-col>
              <v-col style="max-width: max-content;">
                <v-img
                  style="max-width: 130px; margin-top: -12px;"
                  src="images/footer.png"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>

        </v-container>

        <!-- <v-container style="height: 100vh"></v-container> -->

      </v-main>
   </v-app>
</template>

<style scoped>
  .no-bg-color span{
    border-bottom: 4px solid transparent;
    margin-top: 4px;
    padding-bottom: 4px;
  }

  .no-bg-color::before {
    background-color: transparent !important;
  }

  .no-bg-color:hover span{
    border-bottom: 4px solid #0A7CFF;
    margin-top: 4px;
    padding-bottom: 4px;
  }

  .custom-text {
    font-size: 4.65rem;
    line-height: 85px;

    background-image: linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%);
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;

  }

  .custom-btn {
    opacity: 0.6; /* Set the default opacity */
  }

  .custom-btn:hover {
    opacity: 1; /* Set the opacity when hovered over */
  }

  .sticky {
    position: sticky;
    top: 0;
  }

</style>

<script>
  export default {
    data: () => ({
      isOutlined: false,
      scrolled: false,
      showContainer: false,
      selectedItem: 1,
      items: [
        { text: 'Features'},
        { text: 'Desktop App'},
        { text: 'Privacy & Safety'},
        { text: 'For Developers'},
      ],
    }),
    focus() {
      this.$refs.input.focus();
    },
    computed: {
        mobile() {
          return this.$vuetify.breakpoint.xs
        },
        appBarStyle() {
      if (this.scrolled) {
        return {
          borderBottom: '0.1px solid rgba(50,50,50,0.10)'
        }
      } else {
        return {
          borderBottom: 'none'
        }
      }
    }
      },

      mounted() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener("click", this.handleOutsideClick);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener("click", this.handleOutsideClick);
    },

      methods: {
        handleScroll() {
          if (window.scrollY > 0) {
              this.scrolled = true;
            console.log('true');
          } else {
              this.scrolled = false;
            console.log('false');
          }},

        handleOutsideClick(event) {
          if (!this.$refs.button.$el.contains(event.target)) {
            this.isOutlined = false;
          }

        }
      }
  }
</script>
