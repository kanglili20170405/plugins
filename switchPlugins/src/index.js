/**
 * Created by xiaomekang on 2017/12/25.
 */
// $('.switch').on('click',function(){
//   $(this).toggleClass('on');
// })

//=>在jquery的原型上增加方法
(function($){
  var num=1;
  $.fn.extend({
    simpleSwitch:function(options){
      var NEW_OPTIONS={
        size:80,
        theme:'Flat',
        callback:null
      };
      //=>使用jquery中的extend方法，参数进行合并
      $.extend(NEW_OPTIONS,options);

      //=>原生js，遍历对象使用for..in，进行参数合并
      // for(var key in options){
      //   if(options.hasOwnProperty(key)){
      //     NEW_OPTIONS[key]=options[key];
      //   }
      // };
      var size=NEW_OPTIONS.size,theme=NEW_OPTIONS.theme,callback=NEW_OPTIONS.callback;
      var all=this;

      //用来设置开关大小
      $(all[0]).parents('html').css({fontSize:size+'px'});

      all.each(function(){
        var that=$(this);

        var isDisabled=that.attr('disabled');
        var isChecked=that.attr('checked');
        console.log(isChecked, isDisabled);
        //=>隐藏元素并替换
        that.hide();
        that.after('<div class="switch switch'+theme+'" id="switch'+num+'"><div class="switchContent"></div><div class="switchButton"></div></div>');
        if(isDisabled){
          $('#switch'+num).addClass('disabled')
          $('#switch'+num).on('click',function(){
            if(callback&&typeof callback==='function'){
              callback.apply(this,arguments);
            }
          })
        }else{
          if(isChecked){
            $('#switch'+num).addClass('on');
          }
          //=>增加点击事件
          $('#switch'+num).on('click',function(){
            $(this).toggleClass('on');
            if(callback&&typeof callback==='function'){
              callback.apply(this,arguments);
            }
          })

        }
        num++;
      })
    }
  })
})(jQuery);
