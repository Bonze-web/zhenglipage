<template>
    <div class='enclosure-subgroup cutting-menu-slicing' ref="enclosure-subgroup">
        <!-- 精密切割 -->
        <div class="cutting-tab">
            <div class="auriculae-posterior"  @click="hintPoint(0)" :class="{active:hintPointData==0}">颊侧</div>
            <div class="tongue"  @click="hintPoint(1)" :class="{active:hintPointData==1}">舌侧</div>
        </div>
        <div class="tooth-hint">
            <div class="hint-point">
                <div class="absence-tooth" ><div @mousedown="drafting($event)" @click="appendixAdd"><img src="@/assets/img/img72.png" alt=""></div><span>缺失牙齿</span></div>
                <!-- <div class="optimization-annex"><div @mousedown="drafting($event)"><img src="@/assets/img/optimize-bg.png" alt=""></div><span>优化附件</span></div> -->
            </div>
            <!-- 牙齿部分 -->
            <div class="marking-teeth">
                <!-- 上排牙齿 -->
                <div class="upper-teeth" ref="upper-teeth">
                    <div>
                        <div>
                            <img src="@/assets/img/img35.png" alt="">
                        </div>
                        <div>18</div>
                    </div>
                    <div>
                        <div>
                            <img src="@/assets/img/img34.png" alt="">
                        </div>
                        <div>17</div>
                    </div>
                    <div>
                        <div>
                            <img src="@/assets/img/img33.png" alt="">
                        </div>
                        <div>16</div>
                    </div>
                    <div>
                        <div>
                            <img src="@/assets/img/img32.png" alt="">
                        </div>
                        <div>15</div>
                    </div>
                    <div>
                        <div>
                            <img src="@/assets/img/img31.png" alt="">
                        </div>
                        <div>14</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img30.png" alt=""></div>
                        <div>13</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img29.png" alt=""></div>
                        <div>12</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img28.png" alt=""></div>
                        <div>11</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img36.png" alt=""></div>
                        <div>21</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img37.png" alt=""></div>
                        <div>22</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img38.png" alt=""></div>
                        <div>23</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img39.png" alt=""></div>
                        <div>24</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img40.png" alt=""></div>
                        <div>25</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img41.png" alt=""></div>
                        <div>26</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img42.png" alt=""></div>
                        <div>27</div>
                    </div>
                    <div>
                        <div><img src="@/assets/img/img43.png" alt=""></div>
                        <div>28</div>
                    </div>
                </div>
                <!-- 中间分线 -->
                <div class="cut-off-rule">
                    <span class="cut-off-right">右</span>
                    <span class="cut-off-left">左</span>
                </div>
                 <!-- 下排牙齿 -->
                <div class="under-teeth under-teeth-alone" ref="under-teeth">
                    <div>
                        <div>48</div>
                        <div>
                            <img src="@/assets/img/img59.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div>47</div>
                        <div>
                            <img src="@/assets/img/img58.png" alt="">
                        </div>
                        
                    </div>
                    <div>
                        <div>46</div>
                        <div>
                            <img src="@/assets/img/img57.png" alt="">
                        </div>
                        
                    </div>
                    <div>
                        <div>45</div>
                        <div>
                            <img src="@/assets/img/img56.png" alt="">
                        </div>
                        
                    </div>
                    <div>
                        <div>44</div>
                        <div>
                            <img src="@/assets/img/img55.png" alt="">
                        </div>
                        
                    </div>
                    <div>
                        <div>43</div>
                        <div><img src="@/assets/img/img54.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>42</div>
                        <div><img src="@/assets/img/img53.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>41</div>
                        <div><img src="@/assets/img/img52.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>31</div>
                        <div><img src="@/assets/img/img44.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>32</div>
                        <div><img src="@/assets/img/img45.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>33</div>
                        <div><img src="@/assets/img/img46.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>34</div>
                        <div><img src="@/assets/img/img47.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>35</div>
                        <div><img src="@/assets/img/img48.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>36</div>
                        <div><img src="@/assets/img/img49.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>37</div>
                        <div><img src="@/assets/img/img50.png" alt=""></div>
                        
                    </div>
                    <div>
                        <div>38</div>
                        <div><img src="@/assets/img/img51.png" alt=""></div>
                        
                    </div>
                </div>
            </div>
            <!-- 拖拽选择牙齿 -->
            <div class="choice-disease">
                <div @mousedown="drafting($event)"><img src="@/assets/img/img20.png" alt=""></div>
                <div @mousedown="drafting($event)"><img src="@/assets/img/img18.png" alt=""></div>
                <div @mousedown="drafting($event)"><img src="@/assets/img/img19.png" alt=""></div>
                <div @mousedown="drafting($event)" data-delet="deletEle" class="deletEle"><img src="@/assets/img/imgdel17.png" alt=""></div>
            </div>
            <!-- 重置按钮 -->
            <div class="choice-resetting" @click.stop="reinstallAgain">
                <div>
                    重置
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let that = null;
    let mouseUpFlag = 0;
     export default {
        name: '',
        data(){
            return {
                hintPointData : 0,
                selectArr : [],
                selectedArr : [],
                draftingFlag : 0,
                //记录拖拽最后的位置
                curEleEndX : null,
                curEleEndY : null,
                curEleEndFlag : 0,
                //记录拖的图片的信息
                imgElement : {},
                gou :{},
                mintooth : 0,   //记录最小的牙齿宽度
                myDelet : null,
                oldImgEle : [], //用来记录上次的图片
                imgEleClick : null,
                radio : 3,      //选择大小
                // radioSize : Array.apply(null,Array(32)).map((v,i)=>3),
               
            }
        },
        methods : {
            hintPoint(idx){
                this.hintPointData = idx;
            },
             //拖拽的方法
            drafting(event){
                
               
                let imgSrc = event.target.children[0].src;
                let imgWid = event.target.children[0].clientWidth;
                let imgHei = event.target.children[0].clientHeight;
                this.imgElement = {
                    imgSrc,
                    imgWid,
                    imgHei
                }
                let imgEle = document.createElement("img");
                imgEle.setAttribute("src",imgSrc);
                imgEle.style.position = "absolute";
                imgEle.style.zIndex = "99";
                imgEle.style.width = imgWid + "px";
                imgEle.style.height = imgHei + "px";
                imgEle.style.left = event.target.children[0].offsetLeft + "px";
                imgEle.style.top = event.target.children[0].offsetTop + "px";
                if(event.target.getAttribute("data-delet")){
                    this.myDelet = event.target;
                    imgEle.setAttribute("data-imgdelet","cunzai");
                    this.gou = {
                        imgEle
                    }
                }
                else {
                    this.gou = {
                        imgEle
                    }
                }
                this.$refs["enclosure-subgroup"].appendChild(imgEle);
                // document.body.appendChild(imgEle);
                //点击初始化
                var [moveX,moveY]=[null,null];
                var [initX,initY] = [null,null];
                var limitFlag = 0;
                var curEle = {
                    x : 0,
                    y : 0,
                    w : 0,
                    h : 0,
                    endX : null,
                    endY : null,
                }
                //初次点击赋值
                initX = event.clientX;
                initY = event.clientY;

                curEle.x = event.target.children[0].offsetLeft;
                curEle.y = event.target.children[0].offsetTop;
                curEle.w = imgWid;
                curEle.h = imgHei;
                function moveEle(e){
                    e.stopPropagation();
                    e.preventDefault();
                    let cueMoveX = curEle.x + e.clientX-initX;
                    let cueMoveY = curEle.y + e.clientY-initY;
                    if(cueMoveX<0) {
                        cueMoveX = 0;  
                    }
                    // // console.log(this.$refs["enclosure-subgroup"]);
                   
                    else if(cueMoveX>=document.querySelector(".cutting-menu-slicing").clientWidth-curEle.w){
                        cueMoveX = document.querySelector(".cutting-menu-slicing").clientWidth-curEle.w;
                    };
                    if(cueMoveY<0) {
                        cueMoveY = 0;  
                    }
                    else if(cueMoveY>=document.querySelector(".cutting-menu-slicing").clientHeight-curEle.h){
                        cueMoveY=document.querySelector(".cutting-menu-slicing").clientHeight-curEle.h;
                    };
                    // curEle.endX = cueMoveX-(curEle.w/2) + "px";
                    curEle.endX = cueMoveX + "px";
                    curEle.endY = cueMoveY + "px";
                    imgEle.style.left = curEle.endX;
                    imgEle.style.top = curEle.endY;
                    mouseUpFlag = 1;
                }
                document.addEventListener("mousemove",moveEle);
                //this.$refs["enclosure-subgroup"]
                // if(this.curEleEndFlag!=0) return false;
                document.onmouseup = function(e){
                    
                    curEle.endX = parseFloat(curEle.endX);
                    curEle.endY = parseFloat(curEle.endY);
                    let centerCurEleX = curEle.endX + curEle.w/2;
                    let centerCurEleY = curEle.endY + curEle.h/2;
                    let arr =  this.selectArr.filter((ele,idx)=>{
                        // if(ele.x<=curEle.endX&&curEle.endX<=(ele.x+ele.wid)&&ele.y<=curEle.endY&&curEle.endY<=(ele.y+ele.hei)){
                        //     return true;
                        // }
                        if(ele.x<=centerCurEleX&&centerCurEleX<=(ele.x+ele.wid)&&ele.y<=centerCurEleY&&centerCurEleY<=(ele.y+ele.hei)){
                            return true;
                        }
                    });
                    this.$set(this.selectedArr,0,arr[0]);
                    this.mouseUpCallBack();
                    if(mouseUpFlag!=1) return false;
                    document.removeEventListener("mousemove",moveEle);
                    mouseUpFlag = 0;
                }.bind(this);
            },
            mouseUpCallBack(){
                if(this.myDelet){
                        //如果里面没有图片
                        if(!this.selectedArr[0]) {
                            //没有图片说明图片还在大盒子里面,去掉大盒子里面的这个图片就行
                            if(this.gou.imgEle.parentNode===this.$refs["enclosure-subgroup"]){
                                this.gou.imgEle&&this.$refs["enclosure-subgroup"].removeChild(this.gou.imgEle);
                            }
                            return false;
                        }
                        //能进到这里,说明已经选这个了图片,判断鼠标选中的盒子的位置
                        if(this.selectedArr[0].idx<16&&this.selectedArr[0].idx>=0){
                            //判断图片是不是有两张,有两张的时候就删除一张
                            if(this.$refs["upper-teeth"].children[this.selectedArr[0].idx].children[0].children.length>=2){
                                this.$refs["upper-teeth"].children[this.selectedArr[0].idx].children[0].removeChild(this.$refs["upper-teeth"].children[this.selectedArr[0].idx].children[0].children[1]);
                                
                            }
                        }
                        else if(this.selectedArr[0].idx<32&&this.selectedArr[0].idx>=16){
                            if(this.$refs["under-teeth"].children[this.selectedArr[0].idx-16].children[1].children.length>=2){
                                this.$refs["under-teeth"].children[this.selectedArr[0].idx-16].children[1].removeChild(this.$refs["under-teeth"].children[this.selectedArr[0].idx-16].children[1].children[1]);
                                
                            }
                        }
                        //删除了盒子里面的图片,还有删除掉删除图片
                        console.log("删除图片");
                        this.myDelet = null;
                        if(this.gou.imgEle.parentNode!==this.$refs["enclosure-subgroup"]) return false;
                        this.gou.imgEle&&this.$refs["enclosure-subgroup"].removeChild(this.gou.imgEle);
                        
                        return false;
                        
                }
                //如果不是删除按钮
                //数据里有东西说明鼠标选中到了牙齿上
                if(this.selectedArr[0]){
                    //如果两次将同一张图片放到牙齿上
                    // if(this.selectedArr.length>0&&newVal[0].idx==oldVal[0].idx) return false;
                    if(this.gou.imgEle.clientWidth>this.mintooth){
                        this.gou.imgEle.style.width = this.mintooth + "px";
                        this.gou.imgEle.style.height = "auto";
                    }
                    this.gou.imgEle.style.left = "50%";
                    this.gou.imgEle.style.top = "50%";
                    this.gou.imgEle.style.transform = "translate(-50%,-50%) scale(0.8)";
                    this.gou.imgEle.classList.add("badge");
                    
                    if(this.selectedArr[0].idx<16&&this.selectedArr[0].idx>=0){
                        if(this.$refs["upper-teeth"].children[this.selectedArr[0].idx].children[0].children.length<2&&(this.gou.imgEle.getAttribute("data-imgdelet")!="cunzai")){       //判断牙齿盒子里面的图片是不是只有一张
                                this.$refs["upper-teeth"].children[this.selectedArr[0].idx].children[0].appendChild(this.gou.imgEle);       //如果只有一张,就添加上去
                                
                        }
                        else {
                            if(this.gou.imgEle.parentNode!==this.$refs["enclosure-subgroup"]) return false;
                            this.gou.imgEle&&this.$refs["enclosure-subgroup"].removeChild(this.gou.imgEle);     //如果不是一张,就删除掉鼠标上的图片
                        }
                    }
                    else if(this.selectedArr[0].idx<32&&this.selectedArr[0].idx>=16){
                        if(this.$refs["under-teeth"].children[this.selectedArr[0].idx-16].children[1].children.length<2&&(this.gou.imgEle.getAttribute("data-imgdelet")!="cunzai")){
                            this.$refs["under-teeth"].children[this.selectedArr[0].idx-16].children[1].appendChild(this.gou.imgEle);
                            
                        }
                        else {
                            if(this.gou.imgEle.parentNode!==this.$refs["enclosure-subgroup"]) return false;
                            this.gou.imgEle&&this.$refs["enclosure-subgroup"].removeChild(this.gou.imgEle);
                        }
                    }
                }
                //没有滑动到牙齿上
                else {
                    //没有滑动到牙齿上不管什么情况都要删除掉这张图片
                    if(this.gou.imgEle.parentNode!==this.$refs["enclosure-subgroup"]) return false; //判断子元素的父级是不是他,如果不是就不执行下面的删除语句
                    this.gou.imgEle&&this.$refs["enclosure-subgroup"].removeChild(this.gou.imgEle);
                }
            },
            gatherInformation(){
                // if(this.draftingFlag==0) { //如果数据变化则重新创建数据用于渲染
                    this.selectArr = []; 
                    this.$refs["upper-teeth"].children.forEach((ele,idx) => {
                        this.selectArr.push({wid:ele.children[0].clientWidth,hei:ele.children[0].clientHeight,x:ele.children[0].offsetLeft,y:ele.children[0].offsetTop,idx:idx});
                    });
                    this.$refs["under-teeth"].children.forEach((ele,idx) => {
                        this.selectArr.push({wid:ele.children[1].clientWidth,hei:ele.children[1].clientHeight,x:ele.children[1].offsetLeft,y:ele.children[1].offsetTop,idx:(16+idx)});
                    });
                    //下面是删选出来最小的牙齿
                    let arr = this.selectArr;
                    let min = arr[0];

                    for(var i = 1; i < arr.length; i++) {
                        var cur = arr[i];
                        cur.wid < min.wid ? min = cur : null;
                    }
                    this.mintooth = min.wid;
                    // this.draftingFlag=1;
                       
                // } 
            },
            //点击添加附件
            appendixAdd(event){
                if(event.target.getAttribute("data-delet")){
                    this.myDelet = event.target;
                }
                let imgSrc = event.target.children[0].src;
                let imgWid = event.target.children[0].clientWidth;
                let imgHei = event.target.children[0].clientHeight;
                let imgElement = {
                    imgSrc,
                    imgWid,
                    imgHei
                }
                this.imgEleClick = imgElement;
                console.log(imgElement);
            },
            //点击牙齿添加图片
            addToothAppend(event){
                if(!this.imgEleClick) return false;
                // let newImgEleInstall = document.createElement("img");
                // newImgEleInstall.src = this.imgEleClick.imgSrc;
                // newImgEleInstall.style.width = this.imgEleClick.imgWid + "px";
                // newImgEleInstall.style.height = this.imgEleClick.imgHei + "px";
                // event.target.appendChild(newImgEleInstall);
            },
            reinstallAgain(){
                this.$refs["upper-teeth"].children.forEach((ele,idx) => {
                    if(ele.children[0].children.length>=2){
                        ele.children[0].removeChild(ele.children[0].children[1]);
                        
                    }
                });
                this.$refs["under-teeth"].children.forEach((ele,idx) => {
                    if(ele.children[1].children.length>=2){
                        ele.children[1].removeChild(ele.children[1].children[1]);
                    }
                });
                //下面是限制的数据全部初始化
                document.onmouseup = null;
                this.gou.imgEle = null;
                this.selectedArr = [];
                
            }
        },
        props:["amendTabChangeActive","resizeFlag"],
        watch: { //监听父组件传过来的selectItems 
            amendTabChangeActive: { 
                handler(newVal,oldVal){ 
                    if(newVal!=2) return false;
                    
                    this.gatherInformation();
                }, 
                // immediate:true,//immediate:true代表如果在 wacth 里声明了之后，就会立即先去执行里面的                    
                            
                deep:true//deep，默认值是 false，代表是否深度监听。 
            },
            resizeFlag : {
                handler(){
                    this.gatherInformation();
                },
                deep : true,
            },
          
        },
        mounted(){
        }
}

</script>

<style scoped lang='less'>
    .enclosure-subgroup{
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 38/@rem;
    }
    .cutting-tab{
        margin-top: 40/@rem;
        display : flex;
        .tongue {
           margin-left:63/@rem ; 
        }
        .active {
            color : #1175d2;
            border-bottom: #1175d2 4/@rem solid;
        }
    }
    .tooth-hint {
        margin-top: 20/@rem;
        .hint-point {
            display : flex;
            >div{
                cursor: pointer;
                img:hover {
                   
                    pointer-events: auto;
                }
            }
            .absence-tooth{
                margin-left: 15/@rem;
                color : #f43e3e;
                font-size: 16/@rem;
                display: flex;
                img {
                    .wh(18,16);
                    margin-right: 10/@rem;
                }
            }
            .optimization-annex {
                margin-left: 50/@rem;
                color : #999999;
                font-size: 16/@rem;
                display: flex;
                img {
                    .wh(13,19);
                    margin-right: 10/@rem;
                }
            }
        }

        .marking-teeth{
            margin-top: 10/@rem;
            padding: 0 35/@rem;
            display: flex;
            flex-direction: column;
            // justify-content: space-between;
            .upper-teeth,
            .under-teeth{
                width: 100%;
                display: flex;
                justify-content: space-between;
                >div{
                    display : flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    margin-left: 5/@rem;
                    >div{
                        position: relative;
                        &:last-of-type  {
                            margin-top: 20/@rem;
                        }
                    }
                    &:nth-of-type(1){
                        margin-left: 0;
                    }
                }
                
            }
            .under-teeth-alone {
                >div {
                    justify-content: flex-start;
                }
            }
            //中间分割线
            .cut-off-rule {
                margin: 15/@rem 0;
                position: relative;
                background-color: #898888;
                height: 5/@rem;
                &::before{
                    content: "";
                    width: 4/@rem;
                    height: 113/@rem;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    background-color: #898888;
                    position: absolute;
                }
                .cut-off-right{
                    position: absolute;
                    left : -35/@rem;
                    top : 50%;
                    transform: translateY(-50%);
                }
                .cut-off-left{
                    position: absolute;
                    right : -35/@rem;
                    top : 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
    .choice-disease {
        display: flex;
        align-items: center;
        margin-top: 20/@rem;
        border-top: 2/@rem solid #898888;
        padding-top: 44/@rem;
        >div{
            margin-left: 40/@rem;
            cursor: pointer;
            &:first-of-type {
                margin-left: 0;
            }
            &:last-of-type {
                margin-left: 90/@rem;
                border: 2/@rem solid #1175d2;
                border-radius: 7/@rem;
                padding: 5/@rem 50/@rem;
            }
        }
    }
    .choice-resetting{
        cursor: pointer;
        position: absolute;
        right : 38/@rem;
        top: 80/@rem;
        .wh(100,40);
        color: #fff;
        background-color: #1175d2;
        font-size: 16/@rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3/@rem;
        // >div{
        //     .wh(100,40);
        //     color: #fff;
        //     background-color: #1175d2;
        //     font-size: 16/@rem;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     border-radius: 3/@rem;
        // }
    }
</style>