<template>
    <div class='amend-record-change'>
        <div class="scheme-record-tab">
            <div class="project" @click="recordTabChange(0)" :class="{active : recordTab==0}">方案备注</div>
            <div class="history" @click="recordTabChange(1)" :class="{active : recordTab==1}">历史记录</div>
        </div>
        <div class="programme-remarks">
            <div class="conceptual-design" :class="{dnn : !(recordTab==0)}">
                <div class="input-box">
                    <div class="picture-placement" v-for="(ele,idx) in imgTrends" :key="idx">
                        <div class="picture-seat" v-if="ele.pictureTrends!==null">
                            <img :src="ele.pictureTrends" alt="">
                            <div @click="deletePictureSeat(idx)" class="style-deleted-picture">
                                <img src="@/assets/img/deletMyImg.png" alt="">
                            </div>
                        </div>
                        <el-input
                            v-if="ele.showActive" 
                            type="textarea" 
                            :autosize="{ minRows: 2}"
                            v-model.trim="ele.textarea1" >
                        </el-input>
                    </div>
                </div>
                <div class="implement">
                    <div @click="printscreenBegins">截图</div>
                    <div @click="emptyElementary">清空</div>
                </div>
            </div>
            <div class="conceptual-record" :class="{dnn : !(recordTab==1)}">
                <div class="specific-treatment-options">
                    <h4 class="treatment-title">治疗方案一</h4>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                    <div>
                        <p class="remarks-time">2020.12.1 11:08</p>
                        <div><img src="" alt=""></div>
                        <p>佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火佛后发红红火火</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="record-techniques">
            <div class="record-title">操作记录</div>
            <div class="record-content">
                <ul>
                    <li v-for="(ele,idx) in recordedDataHistory" :key="idx">{{ele}}<div class="cancel" @click="cancelEleChange(idx)"><img src="@/assets/img/img81.png" alt=""></div></li>
                </ul>
            </div>
        </div>
        <div class="operation-button">
            <div class="resetting">重置</div>
            <div class="submit-btn">提交修改意见</div>
        </div>
    </div>
</template>

<script>
import {Slicing} from "@/assets/js/screenshot"
    export default {
        methods : {
            recordTabChange(idx){
                this.recordTab = idx;
            },
            cancelEleChange(idx){
                this.recordedDataHistory.splice(idx,1);
            },
            printscreenBegins(){
                let goudan = new Slicing();
                goudan.init().then((res)=>{
                    this.imgTrends.push({pictureTrends:res,textarea1 : "",showActive: 1});
                    this.imgTrends.forEach((ele,idx)=>{
                        if(idx<this.imgTrends.length-1) {
                            if(ele.textarea1==""){
                               ele.showActive = 0;
                            }
                        }
                       
                    })
                });
              
            },
            deletePictureSeat(idx){
                this.imgTrends[idx].pictureTrends = null;
                if(this.imgTrends[idx].textarea1==""&&idx<this.imgTrends.length-1){
                    this.imgTrends[idx].showActive = 0;
                }
            },
            emptyElementary(){
                this.imgTrends = [
                    {
                        pictureTrends : null,
                        textarea1 : "",
                        showActive : 1,
                    }
                ];
            }
        },
        computed: {
           
        },
        data(){
            return {
                recordTab : 0,
                recordedDataHistory : [
                    "奔驰的小野马和带刺的玫瑰",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                    "人间正道是沧桑",
                ],
                imgTrends : [
                    {
                        pictureTrends : null,
                        textarea1 : "",
                        showActive : 1,
                    }
                ],
            }
        },
        name: '',
        props: {

        }
    }
</script>

<style scoped lang='less'>
    .dnn{
        display: none !important;
    }
    .amend-record-change{
        height: 100%;
        display : flex;
        flex-direction: column;
        padding: 0 38/@rem;
        .scheme-record-tab{
            padding-top: 25/@rem;
            padding-bottom: 5/@rem;
            height: 60/@rem;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            .project{
                font-size: 16/@rem;
                padding-right: 10/@rem;
                border-right: 1/@rem #1175d2 solid;
                cursor: pointer;
            }
            .history{
                font-size: 16/@rem;
                padding-left: 10/@rem;
                cursor: pointer;
            }
            .active{
                color: #1175d2;
            }
        }
        .programme-remarks{
            // flex: 1;
            height : calc((100% - 0.6rem - 0.9rem)/2);
            border: #1175d2 1px solid;
            border-radius: 10/@rem;
            margin-bottom: 20/@rem;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            .conceptual-design{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                .input-box{
                    height : calc(100% - 0.4rem);
                    width: 100%;
                    padding: 8/@rem 16/@rem 8/@rem;
                    overflow-y: scroll;
                    display: flex;
                    flex-direction: column;
                    .picture-placement{
                        width: 100%;
                        margin-top: 10/@rem;
                        .picture-seat{
                            position: relative;
                            .wh(100,75);
                            margin-bottom: 10/@rem;
                            overflow: hidden;
                        }
                        /deep/.el-textarea__inner{
                            resize: none;
                        }
                        .style-deleted-picture{
                            position: absolute;
                            bottom : 0;
                            right :0;
                            .wh(25,26);
                            cursor: pointer;
                        }
                    }
                }
                .implement{
                    padding: 8/@rem 0;
                    display: flex;
                    height: 40/@rem;
                    box-sizing: border-box;
                    >div{
                        &:first-of-type{
                            color: #1175d2;
                            border-bottom: #1175d2 1px solid;
                        }
                        margin-right: 13/@rem;
                        padding-bottom:3/@rem;
                        border-bottom: #666 1px solid;
                        color: #666;
                        cursor: pointer;
                    }
                }
            }
            .conceptual-record{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                .specific-treatment-options{
                    height: 100%;
                    width: 100%;
                    // height : 100%;
                    padding: 8/@rem 16/@rem 8/@rem;
                    text-align: left;
                    overflow-y: scroll;
                    // max-height: 290/@rem;
                    .treatment-title{
                        font-size: 18/@rem;
                    }
                    >div{
                        margin-top: 10/@rem;
                        p {
                            line-height: 25/@rem;
                        }
                    }
                }
                //适配窗口
                // @media screen and (min-width : 1200px ) and (max-width : 1500px) {
                //     .specific-treatment-options {
                //         max-height: 500/@rem;
                //     }
                // }
            }
        }
        .record-techniques{
            // flex: 1;
            // height: 25%;
            display: flex;
            flex-direction: column;
            height : calc((100% - 0.6rem - 0.9rem)/2);
            .record-title{
                text-align: left;
                padding-bottom: 5/@rem;
            }
            .record-content{
                height: 100%;
                border: #1175d2 1px solid;
                border-radius: 10/@rem;
                overflow-y: scroll;
                // max-height: 290/@rem;
                ul {
                    padding-top: 8/@rem;
                    li {
                        position: relative;
                        // padding: 0 16/@rem;
                        margin: 0 16/@rem;
                        margin-bottom: 10/@rem;
                        padding-left: 16/@rem;
                        text-align: left;
                        display: flex;
                        justify-content: space-between;
                        .cancel{
                            .wh(11,11);
                        }
                        &::before{
                            content: "";
                            // border-top:4px #000 solid;
                            background-color: #000;
                            position: absolute;
                            left:0px;
                            top: 4px;
                            width: 4px;
                            height: 4px;
                            border-radius: 50%;
                        }
                    }
                }
            }
            //适配窗口
            // @media screen and (min-width : 1200px ) and (max-width : 1500px) {
            //     .record-content{
            //         max-height: 450/@rem;
            //     }
            // }
        }
        //下面的操作按钮
        .operation-button{
            display: flex;
            align-items: center;
            padding: 22/@rem 0 28/@rem;
            box-sizing: border-box;
            height: 90/@rem;
            >div{
                padding: 10/@rem 30/@rem;
                background-color: #1175d2;
                color: #fff;
                border-radius: 3/@rem;
            }
            .resetting{
                margin-right: 30/@rem;
            }
        }
        
    }
</style>