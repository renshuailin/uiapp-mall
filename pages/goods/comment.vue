<template>
  <view >
    <video v-show="isShow" id="video" @fullscreenchange="control" :src="videoSrc" autoplay></video>
    <view class="content">
      <view class="label">
        <view @click="change(index)" :class="{'on': index == currentIndex}" v-for="(item,index) in labelList" :key="index">
          {{item.name}}({{item.number}})
        </view>
      </view>
      <!-- 评论 -->
      <view class="list">
        <view class="rating" v-for="(item,index) in commentList" :key='index'>
          <view class="left">
            <view class="face">
              <image :src="item.face" mode=""></image>
            </view>
          </view>
          <view class="right">
            <view class="date">
              <view class="username">{{item.username}}</view>
              <view class="datenow">2020-8-23</view>
            </view>
            <view class="spec"> {{item.spec}}</view>
            <!-- 图片 -->
            <view class="media">
              <view class="content">{{item.content}}</view>
              <view class="video">
                <view @click="play(i.path)" class="box" v-for="i in item.video" :key='i.path'>
                  <image :src="i.img" mode="aspectFill"></image>
                  <view class="playbtn">
                    <view class="icon iconfont">&#xe7e9;</view>
                  </view>
                </view>
                <!-- img -->
                <view @click="showBigImg(img,item.img)" class="box" v-for='(img,index) in item.img' :key='index'>
                  <image :src="img" mode="aspectFill"></image>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isshow:true,
        videoContext:null,
        videoSrc:'',
        commentList: [],
        labelList: [{
            name: '全部',
            number: 25,
            type: 'all'
          },
          {
            name: '好评',
            number: 23,
            type: 'good'
          },
          {
            name: '中评',
            number: 1,
            type: 'secondary'
          },
          {
            name: '差评',
            number: 1,
            type: 'poor'
          },
          {
            name: '有图',
            number: 12,
            type: 'img'
          },
          {
            name: '视频',
            number: 2,
            type: 'video'
          },
          {
            name: '追加',
            number: 2,
            type: 'append'
          }

        ],
        currentIndex: 0
      }
    },
    onReady() {
    this.videoContext =  uni.createVideoContext('video')
    console.log(this.videoContext)
    },
    methods: {
      change(index) {
        this.currentIndex = index
      },
      showBigImg(image, images) {
        // console.log(images)
        uni.previewImage({
          current: image,
          urls: images
        })
      },
      play(path){
        console.log(path)
        this.videoSrc=path
        // 全部
        this.$nextTick(()=>{
          this.videoContext.requestFullScreen({
            //正常
            direction:0
          })
          // this.videoContext.play()
        })
      },
      control(e){
        console.log(e)
           if(e.detail.fullScreen){
           // this.videoContext.play()

           }else{
             this.videoContext.pause()
           }

        // if(!e.detail.fullscreen){
        //    //自动播放
        //   // uni.createVideoContext('video')
        // }else{
        //   //
        // }
      }
    },
    onLoad() {
      // #ifdef MP
        this.isshow=false
      // #endif
      try {
        const comment = uni.getStorageSync('comment')
        if (comment) {
          this.commentList = comment
          console.log(this.commentList)
        }
      } catch (e) {
        //TODO handle the exception
        console.log(e)
      }

    }
  }
</script>

<style lang="scss">
  .content {
    view {
      display: flex;
    }

    width: 94%;
    padding: 0 3%;

    .label {
      width: 100%;
      flex-wrap: wrap;

      view {
        padding: 0 20upx;
        height: 50upx;
        border-radius: 40upx;
        border: solid 1upx #ddd;
        align-items: center;
        color: #555;
        font-size: 26upx;
        background-color: #f9f9f9;
        margin: 10upx 20upx 10upx 0;

        &.on {
          border: solid 1upx #f06c7a;
          color: #f06c7a;
        }
      }
    }
  }

  .list {
    width: 100%;
    flex-wrap: wrap;
    padding: 20upx 0;

    .rating {
      width: 100%;
      margin-top: 30upx;

      .left {
        width: 10vw;
        flex-shrink: 0;
        margin-right: 10upx;

        .face {
          width: 100%;

          image {
            width: 10vw;
            height: 10vw;
            border-radius: 100%;
          }

        }
      }

      .right {
        width: 100%;
        flex-wrap: wrap;

        .date {
          width: 100%;
          justify-content: space-between;
          align-items: baseline;

          .username {
            font-size: 32upx;
            color: #555;
          }

          .datenow {
            font-size: 28upx;
            color: #aaa;
          }
        }

        .spec {
          width: 100%;
          color: #aaa;
          font-size: 26upx;
        }

        .media {
          width: 100%;
          flex-wrap: wrap;

          .content {
            font-size: 30upx;
          }

          .video {
            width: 100%;
            flex-wrap: wrap;

            .box {
              width: calc((84.6vw - 50upx)/4);
              height: calc((84.6vw - 50upx)/4);
              margin: 5upx 5upx;
              position: relative;
              justify-content: center;
              align-items: center;

              image {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 10upx;
              }

              .playbtn {
                position: absolute;

                .icon {
                  font-size: 80upx;
                  color: rgba(255, 255, 255, .9)
                }
              }
            }
          }
        }
      }
    }
  }

#video{
		position: fixed;
		top: 50%;
		right: 100%;
		// #ifdef  MP
		top: 0;
		right: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		// #endif
	}
</style>
