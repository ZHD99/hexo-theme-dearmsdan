$(document).pjax('a[target!=_blank]', '.main', {fragment: '.main',timeout: 8000}); 
    	/* .main为刷新的id */
    $(document).on('pjax:send', function() {
		/* 预加载函数 */
		
		links();
		tocs();
		pagegun();
		dearzoom();
});

/*
本pjax代码修改前请先备份 

*/




$(function(){
	
	links();
	tocs();
	pagegun();
	dearzoom();
});

$(document).on('pjax:complete', function() {
	
		links();
		tocs();
	    copycodes();
		pagegun();
		dearzoom();
	 
		/* 右侧布的高度，相当于左侧高度*/
		$(".main").css({ 
			height: $("#sidebar-nav").outerHeight()
		});
	
		/* 设置 post 样式*/
		$(".dearmsdan-post").css("animation","1s ease 0s 1 normal forwards running action_translateY");
	

   		/* pjax加载结束的回调函数 解决js无法定位的问题*/
});

$(document).on('ready pjax:end', function(event) {
	links();
	tocs();
	copycodes();
	pagegun();
	dearzoom();
	
	
		/* 淡入，如果大于移动设备宽度大于714这影响 移动端显示文章空白效果，修改会出问题 */
	  var windowWidth = $(window).width();
    if(windowWidth < 714){
		// 淡入
    }
    if(windowWidth >= 714){
        // do something
		$(".dearmsdan").delay(300).addClass("wrapShow");
    }
})



		/* 外链保护http://link.zhd99.cn \http://link.dearmsdan.com */
function links(){
	
	$("article a").not(".toc a,article h1 a,article h2 a,article h3 a,article h4 a,article h5 a,article h6 a,article .gallerys,.ui-artZoom-buttons a").attr("href",
																													function(){
		// 不是本站链接检测  article
		var str = this.href;
		var pattern = /http.+zhd99.cn/;
		var falg = pattern.test(str).toString().trim();
		
		var pattern2 = /http.+dearmsdan/;
		var falg2 = pattern2.test(str).toString().trim();
		if('true' != falg && 'true' != falg2){
			return 'http://link.dearmsdan.com/links.html' + '?target=' + str;
		   }
});
	
}

	// 当前刷新目录产生
function pagegun(){
	$(".second").pageslide();
}

	// 目录 被点击
	
function tocs(){
	$('.second').on('click', function () {
		
		if (!$('body').hasClass('layout-fullwidth')) {
			$('body').addClass('layout-fullwidth');    // 初始出现

		} else {
			$('body').addClass('layout-fullwidth');    // 初始出现
			
		}
		
		if ($(window).innerWidth() < 1025) {
			if (!$('body').hasClass('offcanvas-active')) {
				$('body').removeClass('offcanvas-active');
			} else {
				$('body').removeClass('offcanvas-active');
			}
		}
		
		
	});
}


// 图片放大
function dearzoom(){
	
	$('.dearmsdan article img').wrap('<span class="ex"></span>');
	
                /* simple call */
                $('.ex').zoom();
   
                /* With callback function. EX. colorbox plugin ! */
                $('a.photo').zoom({
                  url: 'photo-big.jpg',
                  callback: function(){
                    $(this).colorbox({href: this.src});
                  }
                });
}


/*页面载入完成后，创建复制按钮*/
function copycodes(){
	
	/* 代码高度 判断 */
	
	 $("figure td pre").scroll(function(){
        $("figure td:nth-child(1) pre").scrollTop($(this).scrollTop()); // 纵向滚动条
        $("figure td:nth-child(2) pre").scrollLeft($(this).scrollLeft()); // 横向滚动条
    });
	
		!function (e, t, a) {
		  /* code */
		  var initCopyCode = function(){
			var copyHtml = '';
			copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
			copyHtml += '  <i class="fa fa-globe"></i><span>copy</span>';
			copyHtml += '</button>';
			  // 设置 放置位置↓
			$("figure td:nth-child(2) pre").before(copyHtml);
			  		//$("figure td:nth-child(2) pre").wrap("<div></div>");
			new ClipboardJS('.btn-copy', {
				target: function(trigger) {
					return trigger.nextElementSibling;
				}
			});
		  }
		  initCopyCode();
			
			
		}(window, document);
}

