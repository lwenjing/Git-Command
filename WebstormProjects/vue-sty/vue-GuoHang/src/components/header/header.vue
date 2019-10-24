<template>
  <div class="header_wrapper">
    <div class="header">
      <div class="logo"></div>
      <div class="header_right">
        <div class="localtion">
          <div name="first-menu" class="first-menu" v-for="(item, index) in resourceList" :key="item.id">
            <a :id="item.id" :url="item.url" @click="firstMenuClick(index, item.url)">{{item.name}}</a>
          </div>
        </div>
        <div class="user">
          <div class="messageUnRead">
            <div class="message"></div>
            <div id="messageNum" class="messageRed ui-hide">
              <div class="messageMore ui-hide"></div>
            </div>
          </div>
          <div class="role">{{realName}}</div>
          <!-- if:${fapiao.userInfo.id} !== 0 -->
          <a id="changePSW" class="changePSW">修改密码</a>
          <!-- else -->
          <a class="changePSW" style="display: none;">修改密码</a>
          <!-- /if -->
          <a id="loginOut" class="login-out">退出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../../common/js/bus.js';
  export default {
    props: {
      realName: {
        type: String,
        default: ''
      },
      resourceList: {
        type: Array,
        default() {
          return {};
        }
      }
    },
    methods: {
      firstMenuClick(index, route) {
        this.resourceList.forEach(function (_item, _index) {
          if (index === _index) {
            var headerData = {
              secondMenuList: _item.children,
              firstMenuIndex: index,
              firstMenuRoute: route
            };
            Bus.$emit('headerData', headerData);
          }
        }, this);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet" scoped>
  .header_wrapper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 70px;
    font-size: 0px;
    background: #fff;
    .header {
      width 100%
      height 100%
      .logo, .header_right {
        display: inline-block;
        vertical-align: top;
      }
      .logo {
        width: 200px;
        height: 100%;
        box-shadow: 0px 3px 6px 0px transparent;
        background: url('./logo.png') center center no-repeat;
        background-size: 200px 70px;
        font-size: 12px;
      }
      .header_right{
        .localtion {
          display: inline-block;
          height: 100%;
          font-size: 0;
          .first-menu {
            display: inline-block;
            width: auto;
            background: none;
            text-align: center;
            height: 70px;
            line-height: 70px;
            cursor: pointer;
            color: #3061b7;
            box-sizing: border-box;
            a {
              display: block;
              width: auto;
              box-sizing: border-box;
              color: #252D3A;
              font-size: 16px;
              font-weight: 400;
              padding: 0 20px;
            }
          }
        }
        .user {
          position: absolute;
          right: 0;
          top: 0;
          /*padding: 8px 0;*/
          box-sizing: border-box;
          height: 20px;
          margin-top: 28px;
          .messageUnRead {
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
            .message {
              width: 17px;
              height: 19px;
              display: inline-block;
              vertical-align: middle;
              background: url(./icon_message.png) no-repeat;
              margin-right: 5px;
            }
            .messageRed {
              width: 24px;
              height: 17px;
              position: absolute;
              top: -10px;
              left: 8px;
              background: url(./icon_messagered.png) no-repeat;
              text-align: center;
              font-size: 12px;
              color: #fff;
              .messageMore {
                width: 24px;
                height: 17px;
                background: url(./icon_messagemore.png) 7px no-repeat;
              }
            }
          }
          .role,
          .login-out,
          .changePSW {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            color: #737E91;
            width: auto;
            height: 14px;
            text-align: center;
            line-height: 14px;
            cursor: pointer;
            padding:0 13px;
            /*padding-left: 30px;
            margin-right: 30px;*/
          }
          .role {
            border-right: 1px solid #d9d9d9;
          }
          .login-out {
          }
          .changePSW {
            border-right: 1px solid #d9d9d9;
          }
        }
      }
    }
  }
</style>
