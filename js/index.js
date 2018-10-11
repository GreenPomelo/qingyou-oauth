$(document).ready(function () {
    let step = {
        0: `<div>联系肖辰旭学长（qq: 2092313702）提出申请（原则上只要是目前还在校的南邮人，都会通过）。<br>
        申请主要是确定clientId，授权类型，权限范围，回调地址等。<br><br>
        <span>Ps：如果肖辰旭学长不理你，请理解，大家正常时间都是要上课的。</span></div>`,
        1: `<div>在你的网页上放置一个肖辰旭的图片，引导用户使用肖辰旭账号第三方登录。<br><br>
        点击这个图片后跳转到<br><span>https://domain/oauth2?response_type={你申请到的type}&client_id={你申请到的clientId}&redirect_uri={你的回调地址}&scpre={你的权限范围}&state=123csrf</span><br><br>
        <span>（domain是指青柚认证系统的域名）</span></div>`,
        2: `<div>引导用户在授权页面输入手机号码与密码</div><img src="./img/授权.png" alt="">`,
        3: `<div>用户授权后，会根据你所选的模式，以get方式回调你的回调地址。<br><br>以步骤02为例<span>(simple模式，直接返回token，可以直接用token去请求用户资源)</span>，回调地址为<span>http://baidu.com</span>，所以回调如下</div><img src="./img/回调.png" alt="">`,
        4: `<div>一般来说回调地址建议<span>domain/user</span>之类的，后端拿到<span>token</span>之后获取用户资源。去完成自己的业务逻辑。<br><br><span>（此处就以postman发get请求为例，如果是java的后端，可以参考使用sdk）。</span></div>`,
        5: `<div>欢迎大家为南邮开发各种好玩有趣的东西。</div>`,
        6: `<div>未完待续...</div>`
    }
    let stepId = 0;
    $(window).scroll((e) => {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= 180) {
            $("nav").css({
                "background": "#fff",
                "box-shadow": "0 1px 1px 0 #efe8e1"
            });
        } else {
            $("nav").css({
                "background": "transparent",
                "box-shadow": "none"
            });
        }
    });
    for (let i = 0; i < 7; i++) {
        $(".guide-label-container").append(`
        <div class="guide-label guide-label0${i}" id="${i}">
            <span>0${i}</span>
        </div>`);
    }
    $(".guide-content-container").append(step[stepId]);
    $(".guide-label00").css({
        "bottom": "0"
    })
    $(".guide-label").click((e) => {
        let target = e.currentTarget;
        let id = Number($(target)[0].id);
        let container = $(".guide-content-container");
        $(".guide-label").css({
            "bottom": "-0.8rem"
        })
        $(target).css({
            "bottom": "0"
        })
        for (let i = 0; i < 7; i++) {
            if (id === i && stepId !== id) {
                container.empty();
                container.append(step[i]);
                stepId = id;
            }
        }
    })
    $(".header-contact").click(()=>{
        var h = $(document).height()-$(window).height();
        $(document).scrollTop(h);
    })
    hljs.initHighlightingOnLoad();
})