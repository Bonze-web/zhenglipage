<template>
  <!-- <div class="surface-photo-box" ref="surface-photo-box">
    <div v-for="(ele,idx) in photoOrientation" :key="idx">
      <img :src="ele" alt="">
    </div>
  </div> -->
  <div class="swiper-package-box">
     <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(ele,idx) in photoOrientation" :key="idx"><img :src="ele" alt=""></swiper-slide>
     
   
  </swiper>
   <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
    <div class="swiper-button-next" slot="button-next" @click="next"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

  let that = null;
  let mySwiperTab = null;
   export default {
   name: '',
   data(){
      return {
          
          swiperOptions: {
            notNextTick: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on : {
                init(){
                  mySwiperTab = this;
                },
                slideChange: function(){
                  if(this.activeIndex>that.photoOrientationOne.length-1&&this.activeIndex<=(that.photoOrientationTwo.length-1+that.photoOrientationOne.length)){
                      that.photoChangeTab(1);
                  }
                  else if(this.activeIndex>(that.photoOrientationTwo.length-1+that.photoOrientationOne.length)){
                      that.photoChangeTab(2);
                  }
                  else{
                      that.photoChangeTab(0);
                  }
                },  
              }
          },
          photoOrientation : [],
          photoOrientationOne : [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607698161032&di=5898137971d45b40b769f12a4888147e&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F552e0cf9a6fbd.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1816989317,71907386&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1836280379,3665293786&fm=26&gp=0.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607698158617&di=73e6776e49b39be837c858572462d4eb&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F59b38f7e912cd.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607698158617&di=71ecdd5359323b5cbc49bec96d7efe8c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-12-15%2F5c14703c171a3.jpg"
          ],
          photoOrientationTwo : [
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4144808941,210802668&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3798829805,2217453930&fm=26&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1597286437,2443922363&fm=26&gp=0.jpg",
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1695773581,2205151219&fm=26&gp=0.jpg",
          ],
          photoOrientationThree : [
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1701745585,389302545&fm=26&gp=0.jpg",
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2720894138,3738497627&fm=26&gp=0.jpg",
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2524769925,2402301097&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1736470247,1351700934&fm=26&gp=0.jpg"
          ],
          surfacePhotoWidth : 0,
      }
   },
   created(){
        that = this;
        this.photoOrientation = this.photoOrientation.concat(this.photoOrientationOne);
        this.photoOrientation = this.photoOrientation.concat(this.photoOrientationTwo);
        this.photoOrientation = this.photoOrientation.concat(this.photoOrientationThree);


        
   },
   methods : {
        //vuex的方法注册
        ...mapMutations(["photoChangeTab"]),
        prev() {
          this.$refs.mySwiper.$swiper.slidePrev();
        },
        next(){
          this.$refs.mySwiper.$swiper.slideNext();
        },
        swiperInit() {
            
            return {
              notNextTick: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
             
            }
        },

      
   },
   computed: {
      
    },
   mounted(){
     
      // console.log(this.$refs["surface-photo-box"].clientWidth);
      
      
   },
   props: ["amendTabChangeActive","photoprintTabFlag"],
   watch: {
     amendTabChangeActive : {
       handler(){
         this.swiperOptions = this.swiperInit();
       },
       deep : true,
     },
     photoprintTabFlag : {
       handler(newVal,oldVal){
        
          if(newVal==1){
             
            if(mySwiperTab.activeIndex>that.photoOrientationOne.length-1&&mySwiperTab.activeIndex<=(that.photoOrientationTwo.length-1+that.photoOrientationOne.length)){
                mySwiperTab.slideTo(mySwiperTab.activeIndex,1000,false);
            }else{
               mySwiperTab.slideTo((that.photoOrientationOne.length),1000,false);
            }
          }
          else if(newVal==2){
            if(mySwiperTab.activeIndex>(that.photoOrientationTwo.length-1+that.photoOrientationOne.length)){
                mySwiperTab.slideTo(mySwiperTab.activeIndex,1000,false);
            }else{
                mySwiperTab.slideTo((that.photoOrientationTwo.length+that.photoOrientationOne.length),1000,false);
            }
          }
          else {
            if(mySwiperTab.activeIndex<(that.photoOrientationOne.length)){
                mySwiperTab.slideTo(mySwiperTab.activeIndex,1000,false);
            }else{
                mySwiperTab.slideTo(0,1000,false);
            }
          }
       },
       deep : true,
     }
   }
}
</script>

<style scoped lang='less'>
  .swiper-package-box {
    position: relative;
    width: 100%;
    height : 100%;
    overflow: hidden;
  }
    // .surface-photo-box{
    //     width: 100%;
    // }
</style>