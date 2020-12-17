<template>
    <div class='page-compile' ref="pageCompile">
        <!-- 顶部信息栏 -->
        <div class="top-information">
            <div class="top-information-right">
                <img src="@/assets/img/img60.png" class="logo">
                <div class="return-before">
                    <img src="@/assets/img/img73.png" > <span>返回</span>
                </div>
            </div>
            <div class="top-information-left">
                <div class="sufferer">
                    患者 : <span>李琦</span>
                </div>
                <div class="illness">
                    病例详情 : <span>MA2055874</span>
                </div>
            </div>
        </div>
        <!-- 工具栏 -->
        <div class="my-tool" ref="my-tool">
            <div class="client">
                <img src="@/assets/img/img61.png" class="goudan">
                <span>打开客户端</span>
            </div>
            <div class="accessory">
                <img src="@/assets/img/img10.png" alt="">
                <span>附件</span>
            </div>
            <div>
                 <img src="@/assets/img/img13.png" alt="">
                <span>编号</span>
            </div>
            <div>
                 <img src="@/assets/img/img15.png" alt="">
                <span>IPR</span>
            </div>
            <div>
                 <img src="@/assets/img/img23.png" alt="">
                <span>牙弓宽度</span>
            </div>
            <div>
                 <img src="@/assets/img/img24.png" alt="">
                <span>测量</span>
            </div>
            <div>
                 <img src="@/assets/img/img25.png" alt="">
                <span>网格</span>
            </div>
            <div>
                 <img src="@/assets/img/img26.png" alt="">
                <span>叠加</span>
            </div>
            <div>
                 <img src="@/assets/img/img27.png" alt="">
                <span>咬合面</span>
            </div>
            <div @click="mobilityShowChange">
                 <img src="@/assets/img/img62.png" alt="">
                <span>移动量</span>
            </div>
            <div @click="boltonShowChange">
                 <img src="@/assets/img/img63.png" alt="">
                <span>Bolton</span>
            </div>
            <div @click="preferenceShowChange">
                 <img src="@/assets/img/img64.png" alt="">
                <span>偏好</span>
            </div>
            <div>
                 <img src="@/assets/img/img65.png" alt="">
                <span>上颌</span>
            </div>
            <div>
                 <img src="@/assets/img/img67.png" alt="">
                <span>上牙颌面</span>
            </div>
            <div>
                 <img src="@/assets/img/img68.png" alt="">
                <span>下牙颌面</span>
            </div>
            <div>
                 <img src="@/assets/img/img69.png" alt="">
                <span>右侧</span>
            </div>
            <div>
                 <img src="@/assets/img/img70.png" alt="">
                <span>正面</span>
            </div>
            <div>
                 <img src="@/assets/img/img71.png" alt="">
                <span>左侧</span>
            </div>
            <div class="scheme">
                <div class="scheme-select-box">
                    <div class="caption">
                        当前 :
                    </div>
                    <div class="scheme-select" @click="selectionChange">
                        <div class="pitch-on">{{programmeSelected}}</div>
                        <div class="triangle">
                            <img src="@/assets/img/jiantou.png" ref="triangleArrow">
                        </div>
                        <spread-height>
                            <div class="scheme-box" v-show="programmeShow" ref="scheme-box">
                                <div @click="selectionScheme(ele)" v-for="(ele,idx) in programmeSelect" :key="idx">{{ele}}</div>
                            </div>
                        </spread-height>
                    </div>
                </div>
                <div class="ratify">
                    <div>批准</div>
                    <div>不批准</div>
                </div>
            </div>
        </div>
        <!-- 中间展示部分 -->
        <div class="exhibition-area" ref="exhibition-area" >
            <div class="terrace" @click.self.stop="operationBox = false">
                <router-view/>
            </div>
            <div class="blocked-out">
                <div class="amend" @click="operationBoxChange(0)">
                    <img src="@/assets/img/img3.png" alt="">
                    修改
                </div>
                <div class="attachment" @click="operationBoxChange(1)">
                    <img src="@/assets/img/img2.png" alt="">
                    附件菜单
                </div>
                <div class="slicing" @click="operationBoxChange(2)">
                    <img src="@/assets/img/img5.png" alt="">
                    精密切割<br>菜单
                </div>
                <div class="photograph" @click="operationBoxChange(3)">
                    <img src="@/assets/img/img6.png" alt="">
                    照片
                </div>
                <div class="distribute" @click="operationBoxChange(4)">
                    <img src="@/assets/img/img4.png" alt="">
                    分布
                </div>
                <div class="situation" @click="operationBoxChange(5)">
                    <img src="@/assets/img/img74.png" alt="">
                    概况
                </div>
            </div>
            <div class="amend-medium"  ref="amend-medium">
                    <ul class="my-amend-tab" >
                        <li v-for="(ele,idx) in amendTab" :key="idx" @click="amendTabChange(idx)" :class="{active : amendTabChangeActive==idx}">{{ele}}</li>
                    </ul>
                    <ul class="effect-box">
                        <li class="suggestion" :class="{dnn: !(amendTabChangeActive==0)}">
                            <!-- 修改 -->
                            <amendment-record></amendment-record>
                            <!-- <div class="writing-area">

                            </div>
                            <div class="button-box">
                                <div class="">重置</div>
                                <div>提交修改意见</div>
                            </div> -->
                        </li>
                        <li class="cutting-menu" :class="{dnn: !(amendTabChangeActive==1)}" ref="cutting-menu">
                            <!-- 附件菜单 -->
                            <cutting-menu :amendTabChangeActive="amendTabChangeActive" ></cutting-menu>
                        </li>
                        <li class="cutting-menu" :class="{dnn: !(amendTabChangeActive==2)}">
                            <cutting-menu-slicing :amendTabChangeActive="amendTabChangeActive" :resizeFlag="resizeFlag"></cutting-menu-slicing>
                        </li>
                        <!-- 照片 -->
                        <li class="photoprint" :class="{dnn: !(amendTabChangeActive==3)}">
                            <ul class="my-photo-tab">
                                <li v-for="(ele,idx) in photoprintTab" :key="idx" :class="{active:photoprintTabActive==idx}" @click="photoprintTabChange(idx)">{{ele}}</li>
                            </ul>
                            <ul class="face-image">
                                <li>
                                    <photoprint :amendTabChangeActive="amendTabChangeActive" :photoprintTabFlag="photoprintTabFlag"></photoprint>   
                                </li>
                            </ul>
                        </li>
                        <li class="suggestion" :class="{dnn: !(amendTabChangeActive==4)}">
                           
                        </li>
                        <li class="suggestion" :class="{dnn: !(amendTabChangeActive==5)}">
                            <div class="writing-area">

                            </div>
                            <div class="button-box">
                                <div class="">下载</div>
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
        <!-- 下面的进度条 -->
        <div class="progress-bar">
            <!-- 调进度 -->
            <div class="adjust-progress">
                <div class="back-off">
                    <img src="@/assets/img/img75.png" alt="">
                </div>
                <div class="retreat">
                    <img src="@/assets/img/img79.png" alt="">
                </div>
                <div class="commence">
                    <img src="@/assets/img/img77.png" class="begin">
                    <img src="@/assets/img/img7.png" class="dn finish">
                </div>
                <div class="advance">
                    <img src="@/assets/img/img1.png" alt="">
                </div>
                <div class="go-ahead">
                    <img src="@/assets/img/img78.png" alt="">
                </div>
            </div>
            <!-- 小格子显示进度 -->
            <div class="rate-progress-box">
                <div class="rate-progress">
                    <div class="rate-progress-one">
                       <div class="punctuation" ref="punctuation" :style="{left : progressDot}"><img src="@/assets/img/punctuation.png" alt=""></div>
                       <div class="progress-dot">
                           <span v-for="(ele,idx) in 53" :key="idx" :class="{active:idx<=chequerBox}"></span>
                       </div>
                    </div>
                    <div class="rate-progress-two">
                        <!-- <div></div> -->
                        <div class="progress-dot">
                            <span v-for="(ele,idx) in 53" :key="idx" :class="{active:idx<=chequerBox}"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="score">
                <div>
                    <span>10</span>/<span>53</span>
                </div>
                <div>
                    <span>10</span>/<span>53</span>
                </div>
            </div>
        </div>

        <!-- 弹出的弹窗 -->
        <div class="Bolton-analyse wicket" :class="{dn:boltonShow}" ref="bolton-analyse">
            <div class="header" ref="bolton-analyse-header">
                <span>Bolton 分析</span>
                <span @click="boltonShowChange"><img src="@/assets/img/guanbi.png" alt=""></span>
            </div>
            <div class="concrete-content">
                <div class="concrete-content-one concrete-padding-one">
                    <div>
                        <span class="theme">超过</span>
                        <span>下颌多于3-3</span>
                        <span>下颌多于6-6</span>
                    </div>
                    <div>
                        <span class="theme">超过</span>
                        <span>下颌多于3-3</span>
                        <span>下颌多于6-6</span>
                    </div>
                </div>
                <div class="concrete-content-two concrete-padding-two">
                    <div class="content-alignment">
                        <span>上颌右侧</span>
                        <div class="theme"><span>牙位识别码</span><span>宽度</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                    </div>
                    <div class="content-alignment ">
                        <span>上颌右侧</span>
                        <div class="theme"><span>牙位识别码</span><span>宽度</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                    </div>
                </div>
                <div class="concrete-content-three concrete-padding-three">
                    <div class="content-alignment">
                        <span>上颌右侧</span>
                        <div class="theme"><span>牙位识别码</span><span>宽度</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                    </div>
                    <div class="content-alignment">
                        <span>上颌右侧</span>
                        <div class="theme"><span>牙位识别码</span><span>宽度</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                        <div><span>8</span><span>7.65毫米</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="preference wicket" :class="{dn:preferenceShow}" ref="preference" @click="bgColorChange(3)">
            <div class="header" ref="preference-header">
                <span>偏好</span>
                <span @click.stop="preferenceShowChange"><img src="@/assets/img/guanbi.png" alt=""></span>
            </div>
            <div class="concrete-content" >
                <div class="dyestuff">
                    <div class="dyestuff-header">颜色设置</div>
                    <div class="dyestuff-body">
                        <div class="bg-color">
                            背景色 : <div class="select-drop-down" :class="{active : bgBorder}" @click.stop="bgColorChange(0)">
                                <span class="area-color" :style="{'background-color':circleColorCurOne}"></span>
                                <span class="area-arrow" >
                                    <img src="@/assets/img/img-fav2.png" alt="" :class="{dn : bgBorder}">
                                    <img src="@/assets/img/img-fav3.png" :class="{dn : !bgBorder}">
                                </span>
                            </div>
                        </div>
                        <div class="enclosure enclosure-alone">
                            附件色 : <div class="select-drop-down" :class="{active : enclosureColor}" @click.stop="bgColorChange(1)">
                                <span class="area-color" :style="{'background-color':circleColorCurTwo}"></span>
                                <span class="area-arrow">
                                    <img src="@/assets/img/img-fav2.png" alt="" :class="{dn : enclosureColor}">
                                    <img src="@/assets/img/img-fav3.png" :class="{dn : !enclosureColor}">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="dyestuff-body dyestuff-occlude">
                        <div class="bg-color">
                            咬合色 : <div class="select-drop-down" :class="{active : occlusionColor}" @click.stop="bgColorChange(2)">
                                <span class="area-color" :style="{'background-color':circleColorCurThree}"></span>
                                <span class="area-arrow">
                                    <img src="@/assets/img/img-fav2.png" alt="" :class="{dn : occlusionColor}">
                                    <img src="@/assets/img/img-fav3.png" :class="{dn : !occlusionColor}">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="choose-color choose-color-one" :class="{'choose-color-active' : bgBorder}" v-show="bgBorder">
                        <span v-for="(ele,idx) in chooseColorArr" :key="idx" :style="{'background-color':ele}" :class="{'circle-color-active' : circleColorActiveOne==idx}" @click.stop="selectedColorChangeOne(idx)"></span>
                    </div>
                    <div class="choose-color choose-color-two" :class="{'choose-color-active' : enclosureColor }" v-show="enclosureColor" >
                        <span v-for="(ele,idx) in chooseColorArr" :key="idx" :style="{'background-color':ele}" :class="{'circle-color-active' : circleColorActiveTwo==idx}" @click.stop="selectedColorChangeTwo(idx)"></span>
                    </div>
                    <div class="choose-color choose-color-three" :class="{'choose-color-active' : occlusionColor }" v-show="occlusionColor" >
                        <span v-for="(ele,idx) in chooseColorArr" :key="idx" :style="{'background-color':ele}" :class="{'circle-color-active' : circleColorActiveThree==idx}" @click.stop="selectedColorChangeThree(idx)"></span>
                    </div>
                </div>
                <div class="interface-settings">
                    <div class="interface-header ">界面设置</div>
                    <div class="interface-revolve">
                        旋转模式 :
                        <div class="freedom-box freedom-one-alone" @click="interfaceSettings(0)">
                            <div>
                                <img src="@/assets/img/img-fav1.png" class="box-restrain">
                                <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn : !(patternSetting==0)}">
                            </div> 
                            自由模式
                        </div>   
                        <div class="freedom-box freedom-two-alone" @click="interfaceSettings(1)">
                            <div>
                                <img src="@/assets/img/img-fav1.png" class="box-restrain">
                                <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn : !(patternSetting==1)}">
                            </div> 
                            简洁
                        </div>   
                        <div class="freedom-box freedom-three-alone" @click="interfaceSettings(2)">
                            <div>
                                <img src="@/assets/img/img-fav1.png" class="box-restrain">
                                <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn : !(patternSetting==2)}">
                            </div> 
                            精准
                        </div>   
                    </div>
                    <div class="interface-patient">
                        患者信息 :
                        <div class="freedom-box patient-one-alone" @click="mesColorSetting(0)">
                            <div>
                                <img src="@/assets/img/img-fav1.png" class="box-restrain">
                                <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn : !(mesSetting==0)}">
                            </div> 
                            显示
                        </div>   
                        <div class="freedom-box patient-two-alone" @click="mesColorSetting(1)">
                            <div>
                                <img src="@/assets/img/img-fav1.png" class="box-restrain">
                                <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn : !(mesSetting==1)}">
                            </div> 
                            不显示
                        </div>   
                    </div>
                    <div class="tooth-movement">
                        <div>
                            <el-checkbox>牙齿移动时包含咬合矫正数值</el-checkbox>
                            <!-- 牙齿移动时包含咬合矫正数值 -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobility" :class="{dn:mobilityShow}" ref="mobility">
            <div class="mobility-header" ref="mobility-header">
                <span>移动量</span>
                <span @click="mobilityShowChange"><img src="@/assets/img/guanbi.png" alt=""></span>
            </div>
            <div class="mobility-content">
                <div class="dental-arch">
                    牙弓 :
                    <div class="freedom-box freedom-one-alone" @click="mobilityOneChange(0)">
                        <div>
                            <img src="@/assets/img/img-fav1.png" class="box-restrain">
                            <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn:!(dentalArchActive==0)}">
                        </div> 
                        上颌
                    </div>
                    <div class="freedom-box freedom-two-alone" @click="mobilityOneChange(1)">
                        <div>
                            <img src="@/assets/img/img-fav1.png" class="box-restrain">
                            <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn:!(dentalArchActive==1)}">
                        </div> 
                        下颌
                    </div>
                </div>
                <div class="tooth-anlage">
                    牙齿基底部 :
                    <div class="freedom-box freedom-one-alone" @click="mobilityTwoChange(0)">
                        <div>
                            <img src="@/assets/img/img-fav1.png" class="box-restrain">
                            <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn:!(toothAnlageActive==0)}">
                        </div> 
                        冠
                    </div>
                    <div class="freedom-box freedom-two-alone" @click="mobilityTwoChange(1)">
                        <div>
                            <img src="@/assets/img/img-fav1.png" class="box-restrain">
                            <img src="@/assets/img/img-fav5.png" class="box-circle" :class="{dn:!(toothAnlageActive==1)}">
                        </div> 
                        牙根
                    </div>
                </div>
            </div>
            <div class="adjust-form">
                <table>
                    <tr class="navigation-table">
                        <td></td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>
                        <td>16</td>  
                    </tr>
                    <tr>
                        <td>近中 (+) /远中 (-) mm</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                    </tr>
                    <tr>
                        <td>近中 (+) /远中 (-) mm</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                    </tr>
                    <tr>
                        <td>近中 (+) /远中 (-) mm</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                    </tr>
                    <tr>
                        <td>近中 (+) /远中 (-) mm</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                    </tr>
                    <tr>
                        <td>近中 (+) /远中 (-) mm</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                    </tr>
                    <tr>
                        <td>近中 (+) /远中 (-) mm</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                        <td>0.3°</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue"
    import spreadHeight from "@/assets/js/spreadOpen.js"
    import spreadWidth from "@/assets/js/spreadWidth.js"
    import 'element-ui/lib/theme-chalk/index.css';
    import cuttingMenu from "./cuttingMenu"
    import cuttingMenuSlicing from "./cuttingMenuSlicing"
    import amendmentRecord from "./amendmentRecord"
    import photoprint from "./photoprint"
   
     export default {
        
        computed:{
            progressDot(){
                // this.$refs.punctuation.style.left = ((24-15)+(28*2)) / 100 + "rem";
                return ((25.5-15)+(27*(this.chequerBox))) / 100 + "rem";
            },
        },
        data() {
            return {
                //右边窗口
                amendTab : ["修改","附件菜单","精密切割菜单","照片","分布","概况"],
                amendTabChangeActive : 0,
                amendTabChangeTwo : 0,
                //照片
                photoprintTab : ["面像照","口内照","X光片"],
                photoprintTabActive : 0,
                photoprintTabFlag : 0,

                //小格子显示进度
                chequerBox : 2,
                //方案
                programmeSelect : ["方案一","方案二","方案三"],
                programmeSelected : "方案一",
                programmeShow : false,
                //右边操作框显示隐藏
                operationBox : false,
                //Bolton按钮
                boltonShow : true,
                //偏好
                preferenceShow : true,
                bgBorder : false,
                enclosureColor : false,
                occlusionColor : false,
                chooseColorArr : ["pink","#ccc","#251e18","#e76f6f","#ecdecd","#d3e76f","#6fabe7","#6fe7e7"],
                circleColorActiveOne : 0,
                circleColorActiveTwo : 0,
                circleColorActiveThree : 0,
                circleColorCurOne : "red",
                circleColorCurTwo : "red",
                circleColorCurThree : "red",
                patternSetting : 0,
                mesSetting : 0,
                //移动量
                mobilityShow : true,
                dentalArchActive : 0, 
                toothAnlageActive : 0,

                resizeFlag : 0,
            }
        },
        watch : {
            operationBox:{
                handler(newVal,oldVal){
                    if(newVal==true){
                        this.$refs["amend-medium"].style.transition = "all 0.5s";
                        this.$refs["amend-medium"].style.transform = "translateX(0%)";
                    }
                    else {
                        this.$refs["amend-medium"].style.transition = "all 0.5s";
                        this.$refs["amend-medium"].style.transform = "translateX(100%)";
                    }
                },
                // immediate:true,
                deep:true,
            },
        },
        methods : {
            //清除导航栏的样式
            clearStyleActive(){
                let myTool = this.$refs["my-tool"].children;
                for(let j=1;j<myTool.length-1;j++){
                    myTool[j].style.backgroundColor = "#565759";
                }
            },
            //移动量
            mobilityShowChange(){
                this.mobilityShow = !this.mobilityShow;
                this.clearStyleActive();
            },
            mobilityOneChange(idx){
                this.dentalArchActive = idx;
            },
            mobilityTwoChange(idx){
                this.toothAnlageActive = idx;
            },
            //偏好
            preferenceShowChange(){
                this.preferenceShow = !this.preferenceShow;
                this.clearStyleActive();
            },
            selectedColorChangeOne(idx){
                this.circleColorActiveOne = idx;
                this.circleColorCurOne = this.chooseColorArr[idx];
            },
            selectedColorChangeTwo(idx){
                this.circleColorActiveTwo = idx;
                this.circleColorCurTwo = this.chooseColorArr[idx];
            },
            selectedColorChangeThree(idx){
                this.circleColorActiveThree = idx;
                this.circleColorCurThree = this.chooseColorArr[idx];
            },
            interfaceSettings(idx){
               this.patternSetting = idx;
            },
            mesColorSetting(idx){
                this.mesSetting = idx;
            },
            //偏好改颜色
            bgColorChange(idx){
                if(idx==0){
                    this.bgBorder = !this.bgBorder;
                    this.enclosureColor = false;
                    this.occlusionColor = false;
                }
                else if(idx==1){
                    this.bgBorder = false;
                    this.enclosureColor = !this.enclosureColor;
                    this.occlusionColor = false;
                }
                else if(idx==2) {
                    this.bgBorder = false;
                    this.enclosureColor = false;
                    this.occlusionColor = !this.occlusionColor;
                }
                else if(idx==3){
                    this.bgBorder = false;
                    this.enclosureColor = false;
                    this.occlusionColor = false;
                }
                
            },
            //boltonShow显示和隐藏
            boltonShowChange(){
                this.boltonShow = !this.boltonShow;
                this.clearStyleActive();
            },
            amendTabChange(idx){
                this.amendTabChangeActive = idx;
                this.amendTabChangeTwo = idx;
            },
            photoprintTabChange(idx) {
                this.photoprintTabActive = idx;
                this.photoprintTabFlag = idx;
            },
            //右边操作框弹出
            operationBoxChange(idx) {
                this.operationBox = !this.operationBox;
                this.amendTabChange(idx)
            },
            //右边弹窗消失
            operationBoxHidden(){
                this.operationBox = false;
            },
            selectionScheme(ele){
                this.programmeSelected = ele;
            },
            selectionChange() {
                this.programmeShow = !this.programmeShow;
                this.$refs.triangleArrow.style.transition = "transform 0.5s" ;
                if(this.programmeShow==true){
                    this.$refs.triangleArrow.style.transform =  "rotate(180deg)";
                    this.$refs["scheme-box"].style.height = "auto";
                }
                else {
                    this.$refs.triangleArrow.style.transform =  "rotate(0deg)";
                    this.$refs["scheme-box"].style.height = "0";
                }
                
            }
        },
         //创建前设置
        beforeCreate () {
            document.querySelector('body').setAttribute('style', 'overflow : hidden;height:100%');
        },
        //销毁前清除
        beforeDestroy () {
            document.querySelector('body').removeAttribute('style');
        },
        created(){
            this.$store.watch((state, getters) => {
                return state.photoChangeCount
                }, () => {
                this.photoprintTabActive = this.$store.state.photoChangeCount;
            })
        },
        mounted(){
            //设置页面的高度
            document.querySelector(".page-compile").style.height =  window.innerHeight+"px";
            // document.querySelector(".amend-medium").style.height =  document.querySelector(".exhibition-area").clientHeight + "px";
            window.onresize = ()=>{
                this.resizeFlag = new Date().getTime();
                document.querySelector(".page-compile").style.height =  window.innerHeight+"px";
                // document.querySelector(".amend-medium").style.height =  document.querySelector(".exhibition-area").clientHeight + "px";
            } 
            //点击其他任何区域,都使弹出框消失

            //移动弹窗
            function popUpMove(pressOn,moveOn,moveEle) {
                var [moveX,moveY]=[null,null];
                var [initX,initY] = [null,null];
                var limitFlag = 0;
                var curEle = {
                    x : 0,
                    y : 0,
                    w : 0,
                    h : 0,
                }
                pressOn.addEventListener("mousedown",function(){
                    initX = event.clientX;
                    initY = event.clientY;
                    curEle.x = moveEle.offsetLeft;
                    curEle.y = moveEle.offsetTop;
                    curEle.w = moveEle.offsetWidth;
                    curEle.h = moveEle.offsetHeight;
                    limitFlag=1;
                });
                moveOn.addEventListener("mousemove",function(){
                    event.preventDefault();
                    if(limitFlag==0) return false;
                    let cueMoveX = curEle.x + event.clientX - initX;
                    let cueMoveY = curEle.y + event.clientY - initY;
                    if(cueMoveX<0) {
                      cueMoveX = 0;  
                    }
                    else if(cueMoveX>window.innerWidth-curEle.w){
                        cueMoveX = window.innerWidth-curEle.w;
                    };
                    if(cueMoveY<0) {
                      cueMoveY = 0;  
                    }
                    else if(cueMoveY>=window.innerHeight-curEle.h-1){
                        cueMoveY=window.innerHeight-curEle.h;
                    };

                    moveEle.style.left = cueMoveX+(curEle.w/2) + "px";
                    moveEle.style.top = cueMoveY+(curEle.h/2) + "px";
                });
                moveOn.addEventListener("mouseup",function(){
                    limitFlag=0;
                });
            }
            popUpMove(this.$refs["bolton-analyse-header"],document,this.$refs["bolton-analyse"]);
            popUpMove(this.$refs["preference-header"],document,this.$refs["preference"]);
            popUpMove(this.$refs["mobility-header"],document,this.$refs["mobility"]);

            //偏好选择颜色初始化
            this.selectedColorChangeOne(0);
            this.selectedColorChangeTwo(0);
            this.selectedColorChangeThree(0);
            
            //工具栏点击显示背景颜色
            let myTool = this.$refs["my-tool"].children;
            for(let i=1;i<myTool.length-1;i++){
                myTool[i].addEventListener("click",function(){
                    for(let j=1;j<myTool.length-1;j++){
                        myTool[j].style.backgroundColor = "#565759";
                    }
                    myTool[i].style.backgroundColor = "#f99400";
                });
            }
            
        },
        name: '',
        props: {

        },
        components : {
            spreadHeight,
            spreadWidth,
            // 'el-checkbox' : Checkbox,
            "cutting-menu" : cuttingMenu,
            "cutting-menu-slicing" : cuttingMenuSlicing,
            amendmentRecord,
            photoprint
        }
}
</script>

<style scoped lang='less'>
    // //设置swiper
    // .swiper-container{
    //     position: relative;
    //      width: 100%;
    //     height: 100%;
    //     overflow: hidden;
    // }
    // .swiper-slide {
    //   text-align: center;
    //   font-size: 18px;
    //   background: #fff;

    //   /* Center slide text vertically */
    //   display: -webkit-box;
    //   display: -ms-flexbox;
    //   display: -webkit-flex;
    //   display: flex;
    //   -webkit-box-pack: center;
    //   -ms-flex-pack: center;
    //   -webkit-justify-content: center;
    //   justify-content: center;
    //   -webkit-box-align: center;
    //   -ms-flex-align: center;
    //   -webkit-align-items: center;
    //   align-items: center;
    // }
    .tooth-movement /deep/ .el-checkbox__inner {
        .wh(18,18);
        border: 1px solid #f99400;
    }
    /deep/.el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: #f99400;
    }
    /deep/.el-checkbox__label {
        font-size: 15/@rem;
        color : #3f3f3f;
    }
    /deep/.el-checkbox__input.is-checked+.el-checkbox__label {
        font-size: 15/@rem;
        color : #3f3f3f;
    }
    .dnn {
        display: none!important;
    }
    .amend-medium {
        position: absolute;
        box-sizing: border-box;
        // width: 578/@rem;
        right : 0;
        top :0;
        height : 100%;
        transform: translateX(100%);
        border :1px solid #1175d2;
        border-radius: 3/@rem 0 0 3/@rem;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        .my-amend-tab {
            padding-top: 45/@rem;
            display: flex;  
            height : 70/@rem;
            box-sizing: border-box;
            justify-content: space-around; 
           
        }
        .active {
            color: #1175d2;
            border-bottom : 2px #1175d2 solid;
        }
        .effect-box {
            // flex: 1;
            height : calc(100% - 0.7rem);
            //修改
            .suggestion {
                width : 500/@rem;
                height: 100%;
                // display : flex;
                // flex-direction: column;
                // padding: 0 38/@rem;
               
            }
            //精密切割菜单
            .cutting-menu{
                width : (1112)/@rem;
                height: 100%;
                // padding: 0 38/@rem;
            }
            //照片
            .photoprint {
                width : 500/@rem;
                height: 100%;
                display : flex;
                flex-direction: column;
                padding: 0 38/@rem;
                .my-photo-tab {
                    padding-top: 45/@rem;
                    display: flex;  
                    justify-content: space-around; 
                    height : 25/@rem;
                    >li {
                        cursor: pointer;
                    }
                    .active {
                        color: #1175d2;
                        border-bottom : 2px #1175d2 solid;
                    }
                }
                .face-image {
                    // flex: 1;
                    height : calc(100% - 0.25rem);
                    overflow: hidden;
                    margin-top: 10/@rem;
                    margin-bottom: 30/@rem;
                    display: flex;
                    flex-direction: column;
                    li {
                        flex : 1;
                        border-radius: 7/@rem;
                        border : 1px #1175d2 solid;
                        overflow : hidden;
                    }
                }
            }
        }
    }
    .page-compile {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        max-width: 1920px;
        //头部
        .top-information {
            min-height: 82/@rem;
            height : 82/@rem;
            background-color: #353b43;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30/@rem;
            font-size: 16/@rem;
            .top-information-right {
                display: flex;
                align-items: center;
                .logo {
                    .wh(135,22);
                }
                .return-before {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-left: 69/@rem;
                    color: #fff;
                    img {
                        .wh(10,16);
                    }
                    
                    span {
                        margin-left: 7/@rem;
                    }
                }
            }
            .top-information-left {
                color: #fff;
                display: flex;
                align-items: center;
                .sufferer {
                    margin-right: 31/@rem;
                }

            }
        }
        //工具栏
        .my-tool{
            background-color: #565759;
            display: flex;
            height: 89/@rem;
            color: #fff;
            
            >div {
                position: relative;
                display: flex;
                align-items: center;
                border-right: #454648 solid 1px;
                :last-of-type {
                      border-right:0;
                }
                
            }
            >div:nth-child(n+2) {
                position : relative;
                &::before {
                    content : "";
                    position : absolute;
                    top : 0;
                    width :0;
                    height : 5/@rem;
                    background-color : #f99400;
                }
                &:hover::before{
                   width : 100%;
                }
                    span {
                        position: absolute;
                        width: 100%;
                        text-align: center;
                        left: 50%;
                        transform: translate(-50%);
                        top: 58/@rem;
                    }
            }
            >div:last-of-type {
                position : relative;
                &::before {
                    content : none;
                    position : absolute;
                    top : 0;
                    width : 100%;
                    height : 5/@rem;
                    background-color : #f99400;
                }
            }
            .client {
                width: 160/@rem;
                flex-direction: column;
                
                img {
                    margin-top: 13/@rem;
                    .wh(40,40);
                }
                span {
                    display: block;
                    width: 95/@rem;
                    margin-top: 10/@rem;
                    background-color: #1175d2;
                    color: #fff;
                }
            }
            .accessory {
                img {
                    .wh(72,89);
                } 
            }
            .scheme {
                flex: 1;
                padding-left: 60/@rem;
                padding-right: 30/@rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .scheme-select-box {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .caption {
                    width : 60/@rem;
                }
                .scheme-select {
                    margin-left: 14/@rem;
                    position: relative;
                    width: 134/@rem;
                    height: 35/@rem;
                    border: 1px #1175d2 solid;
                    border-radius: 7/@rem;
                    background-color: #fff;
                    color: #1175d2;
                    display: flex;
                    align-items: center;
                    // justify-content: center;
                    .pitch-on {
                        width: 101/@rem;
                    }
                    .scheme-box {
                        position: absolute;
                        z-index: 99;
                        top: 40/@rem;
                        width: 100%;
                        color: #1175d2;
                        border-radius: 7/@rem;
                        background-color: #fff;
                        >div {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 35/@rem;
                        }
                    }
                    .triangle {
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 33/@rem;
                        height: 35/@rem;
                        border-left: 1px solid #1175d2;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img {
                            .wh(12,7);
                        }
                    }
                }
                .ratify{
                    margin-left: 48/@rem;
                    width : 100/@rem;
                    // .wh(100,35);
                    // background-color: #1175d2;
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    // justify-content: center;
                    // align-items: center;
                    border-radius: 7/@rem;
                    >div {
                        border-radius: 3/@rem;
                        padding: 3/@rem 0;
                        &:first-of-type {
                            background-color: #f99400;
                        }
                        &:last-of-type {
                            margin-top: 6/@rem;
                            background-color: #1175d2;
                        }
                    }
                }
            }
        }
        //中间展示部分
        .exhibition-area {
            position: relative;
            flex: 1;
            height: calc(100% - 0.82rem - 0.89rem - 0.97rem);
            display: flex;
            .terrace {
                flex: 1;
                background-color: #dfe0e2;
            }
            .blocked-out {
                width: 100/@rem;
                display: flex;
                flex-direction: column;
                >div {
                    flex:1;
                    min-height: 80/@rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 16/@rem;
                    color: #333333;
                    img {
                        margin-bottom:12/@rem;
                    }
                }
                .amend {
                    img {
                        .wh(32,34);
                    }
                }
                .attachment {
                    img {
                        .wh(37,34);
                    }
                }
                .slicing {
                    img {
                        .wh(32,34);
                    }
                }
                .photograph {
                    img {
                        .wh(36,34);
                    }
                }
                .distribute {
                    img {
                        .wh(34,34);
                    }
                }
                .situation {
                    img {
                        .wh(34,34);
                    }
                }
            }
        }
        //下面的进度条
        .progress-bar {
            padding: 0 30/@rem;
            height: 97/@rem;
            display: flex;
            align-items: center;
            //调节进度
            .adjust-progress{
                display: flex;
                align-items: center;
                >div {
                    margin-left: 35/@rem;
                    :first-of-type {
                        margin-left: 0; 
                    }
                }
                .back-off {
                    // .wh(30,24);
                    width : 30/@rem;
                }
                .retreat {
                    // .wh(24,24);
                     width : 24/@rem;
                }
                .commence {
                    display: flex;
                    .begin {
                        .wh(21,24);
                    }
                    .finish {
                        .wh(18,24);
                    }
                }
                .advance {
                    // .wh(24,24);
                     width : 24/@rem;
                }
                .go-ahead {
                    // .wh(30,24);
                     width : 30/@rem;
                }
            }
            //进度显示
            .rate-progress-box {
                flex: 1;
                display: flex;
                margin-left: 60/@rem;
                .rate-progress {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    .rate-progress-one,
                    .rate-progress-two{
                        position: relative;
                        .punctuation {
                                position: absolute;
                                top : -16/@rem;
                                // left : ((24-15)+(28*2))/@rem;
                                .wh(30,36);
                        }
                        .progress-dot {
                                margin-top : 20/@rem;
                                display: flex;
                                span {
                                    .wh(24,8);
                                    margin-left: 3/@rem;
                                    background-color: #fff;
                                    border: 1/@rem  #1175d2 solid;
                                    box-sizing: border-box;
                                    &:first-of-type {
                                        margin-left : 0;
                                    }
                                }
                                .active {
                                    background-color: #1175d2;
                                }
                        }
                    }
                }
            }
            //分数显示进度
            .score {
                width: 70/@rem;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 15/@rem;
                color: #1175d2;
            }
        }

        //弹窗公共样式
        .wicket {
            position: absolute;
            width: 510/@rem;
            height : 650/@rem;
            background-color: #fff;
            .header {
                padding: 0 20/@rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40/@rem;
                background-color: #565759;
                color: #fff;
                font-size: 14/@rem;
                img {
                    .wh(14,14);
                }
            }
            .concrete-content {
                display: flex;
                flex-direction: column;
                font-size: 14/@rem;
                .theme {
                    color :#1175d2; 
                }
            }
        }
        //Bolton-分析
        .Bolton-analyse{
            left: 50%;
            top: 50%;
            // transform: translate(-50%,-50%);
            margin-left: -510/2/@rem;
            margin-top: -650/2/@rem;
            .concrete-content {
            >div{
                border-bottom: 1px solid #e0e0e0;
                //里面横排显示的那一层
                >div {
                        width: 50%;
                        padding-left: 20/@rem;
                        box-sizing: border-box;
                }
                &:last-of-type {
                    border-bottom:0;
                }
            }
            }
           
            .concrete-content-one,
            .concrete-content-two,
            .concrete-content-three
            {
                // padding-top: 35/@rem;
                display: flex;
                justify-content: space-between;
                //横排显示的单独样式
                >div {
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                }
           }
           //三个单独的排列
           .concrete-padding-one {
                padding-top: 20/@rem;
                padding-bottom: 20/@rem;
           }
           .concrete-padding-two {
                padding-top: 20/@rem;
                padding-bottom: 20/@rem;
           }
           .concrete-padding-three {
                padding-top: 20/@rem;
                // padding-bottom: 48/@rem;
           }
           //第二个和第三个的排列
           .content-alignment
            {
                >div {
                    display: flex;
                    justify-content: space-between;
                    text-align: left;
                    span{
                        width: 50%;
                        box-sizing: border-box;
                    }
                }
           }
        }
        //偏好
        .preference {
            left: 50%;
            top: 50%;
            // transform: translate(-50%,-50%);
            margin-left: -510/2/@rem;
            margin-top: -650/2/@rem;
            .dyestuff {
                position: relative;
                padding-top: 28/@rem;
                padding-left: 20/@rem;
                //弹出的选择框
                .choose-color{
                    position : absolute;
                    
                    width : 216/@rem;
                    padding: 14/@rem;
                    background-color: #fff;
                    border : 1px #666666 solid;
                    border-radius: 3/@rem;
                    display : flex;
                    flex-wrap:wrap;
                    span {
                        .wh(20,20);
                        border : 1px solid #fff;
                        margin-right: 8/@rem;
                        &:nth-of-type(n+1){
                            margin-top: 8/@rem;
                        }
                    }
                    .circle-color-active {
                        border : 1px #f99400 solid;
                    }
                }
                .choose-color-one {
                    left: 25/@rem;
                    top : 115/@rem;
                }
                .choose-color-two {
                    right: 25/@rem;
                    top : 115/@rem;
                }
                .choose-color-three {
                    left: 25/@rem;
                    top : 182/@rem;
                }
                .choose-color-active {
                    border : 1px #f99400 solid;
                }
                .dyestuff-header {
                    text-align: left;
                    font-size: 15/@rem;
                    color : #3f3f3f;
                }
                .dyestuff-body {
                    margin-top : 20/@rem;
                    font-size: 15/@rem;
                    color : #888888;
                    display : flex;
                    .bg-color,
                    .enclosure {
                        display: flex;
                        align-items: center;
                        .select-drop-down {
                            position : relative;
                            margin-left: 15/@rem;
                            .wh(148,40);
                            border: 1px solid #666666;
                            border-radius: 7/@rem;
                            display : flex;
                            justify-content: space-between;
                            align-items: center;
                            .area-color {
                                .wh(90,30);
                                background-color: red;
                                margin-left: 5/@rem;
                            }
                            .area-arrow {
                                margin-right: 10/@rem;
                                .wh(15,7);
                                display : flex;
                                align-items: center;
                            }

                           
                        }
                        .active {
                            border: 1px solid #f99400;
                        }
                    }
                    .enclosure-alone {
                        margin-left: 30/@rem;
                    }
                }
                .dyestuff-occlude {
                    margin-top : 25/@rem;
                }
            }
            .interface-settings {
                margin-top: 94/@rem;
                padding-left: 20/@rem;
                 .interface-header {
                    text-align: left;
                    font-size: 15/@rem;
                    color : #3f3f3f;
                }
                .interface-revolve,
                .interface-patient  {
                    margin-top: 20/@rem;
                    font-size: 15/@rem;
                    color : #3f3f3f;
                    display : flex;
                    align-items: center;
                }
                .freedom-box {
                    color : #888888;
                    display: flex;
                    align-items: center;
                    >div{
                        position: relative;
                        display: flex;
                        align-items: center;
                        margin-right: 8/@rem;
                        img {
                            vertical-align: middle;
                        }
                        .box-restrain {
                            .wh(18,18);
                        }
                        .box-circle {
                            .wh(10,10);
                            position: absolute;
                            left:50%;
                            top :50%;
                            transform: translate(-50%,-50%);
                        }
                    }
                }
                .freedom-one-alone {
                    margin-left: 36/@rem;
                }
                .freedom-two-alone,
                .freedom-three-alone {
                    margin-left : 27/@rem;
                }
                .patient-one-alone {
                    margin-left: 36/@rem;
                }
                .patient-two-alone {
                    margin-left : 27/@rem;
                }
                .tooth-movement {
                    margin-top:33/@rem;
                    display : flex;
                    color : #3f3f3f;
                    >div{
                       display: flex;
                       align-items: center;
                    }
                    #menuToggle {
                        margin-right: 11/@rem;
                        .wh(20,20);
                        border: 1px solid #f99400;
                        position : relative;
                    }
                }
            }
        }
        //移动量
        .mobility {
            position: absolute;
            left : 50%;
            top: 50%;
            // transform: translate(-50%,-50%);
            width: 1208/@rem;
            height : 360/@rem;
            margin-left : -1208/2/@rem;
            margin-top: -360/2/@rem;
            background-color: #fff;
            font-size: 15/@rem;
            color : #3f3f3f;
            .mobility-header {
                padding: 0 20/@rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40/@rem;
                background-color: #565759;
                color: #fff;
                font-size: 14/@rem;
                img {
                    .wh(14,14);
                }
            }
            .mobility-content {
                padding-left: 30/@rem;
                margin-top: 28/@rem;
                display : flex;
                align-items: center;
                .dental-arch {
                    display: flex;
                    .freedom-one-alone {
                        margin-left : 20/@rem;
                    }
                    .freedom-two-alone {
                        margin-left : 29/@rem;
                    }
                }
                .tooth-anlage {
                    margin-left: 95/@rem;
                    display : flex;
                    .freedom-one-alone {
                        margin-left : 20/@rem;
                    }
                    .freedom-two-alone {
                        margin-left : 29/@rem;
                    }
                }
                .freedom-box {
                    display: flex;
                    align-items: center;
                    >div{
                        position: relative;
                        display: flex;
                        align-items: center;
                        margin-right: 8/@rem;
                        img {
                            vertical-align: middle;
                        }
                        .box-restrain {
                            .wh(18,18);
                        }
                        .box-circle {
                            .wh(10,10);
                            position: absolute;
                            left:50%;
                            top :50%;
                            transform: translate(-50%,-50%);
                        }
                    }
                }
              
            }
            .adjust-form {
                margin-top : 30/@rem;
                margin-left: 30/@rem;
                table {
                    width: 1134/@rem;
                    height: 216/@rem;
                    border-collapse: collapse;
                    td {
                        border: 1px solid #999999;
                        border-right: #f99400 1px solid;
                        &:last-of-type {
                            border-right: 1px solid #999999;
                        }
                        &:first-of-type {
                            padding-left: 16/@rem;
                            text-align: left;
                        }
                    }
                   
                }
                .navigation-table {
                    td {
                        border: 0;
                        &:last-of-type {
                            border-right: 0;
                        }
                    }
                    
                }
            }
            
        }
    }
</style>