$(window).scroll(function(){
                 if($(document).scrollTop()>0){
                 $('.main-header-wrap').addClass('on');
                 } else if($(document).scrollTop()==0){
                 $('.main-header-wrap').removeClass('on');
                 }
                 })
/*
if($(window).width()>='1200px'){
    $('.navbar-nav>li>a').mouseenter(function(){
                                 if($('.main-header-wrap').hasClass('on')){
                                 $(this).css({'border-bottom':'2px solid #5e2750'});
                                 } else {
                                 $(this).css({'border-bottom':'2px solid rgba(255,255,255,.9)'});
                                 }
                                 })
    $('.navbar-nav>li>a').mouseleave(function(){
                                 $(this).css({'border-bottom':'1px solid transparent'});
                                 })
}
*/
//navigation
$('.navbar-toggle').click(function(){
                          if($('.icon-bar').hasClass('on')){
                          $('.navbar-bg').animate({'right':'-195px'},1000);
                          $('.icon-bar').removeClass('on');
                          $('.ib01').fadeIn('fast');
                          } else {
                          $('.navbar-bg').animate({'right':0},1000);
                          $('.ib01').fadeOut('fast');
                          $('.icon-bar').addClass('on');
                          }
                          });

/*popup*/
$('.col>a').click(function(){
                  $(this).parents().next().show();
                  $('body').css({overflow:'hidden'});
                  var pop_height = $(this).parents().next().find('.pop_contents').children('img').height();
$('.pop_in').css({'height':'auto'});
                  $('.pop_in').css({'height':pop_height});
                  $(window).resize(function(){
                                   $('.pop_in').css({'height':pop_height});
                                   })

                  return false;
                  })
$('.close, .pop>.pop_in, .pop>.pop_contents>img').click(function(){
                        $('.pop').hide();
                        $('body').css({overflowY:'scroll'});
                        return false;
                        })

//특정영역까지 부드럽게 움직이는 효과
$('.navbar-nav>li>a, .top_btn>a').click(function(e){
                        e.preventDefault();
                        var $achor=$(this);
                        $('html,body').stop().animate({scrollTop:$($achor.attr('href')).offset().top},1250)
                        })

$('.skills').mouseenter(function(){
                        $('.per85').stop().animate({'stroke-dashoffset':'80'},1200);
                        $('.per95').stop().animate({'stroke-dashoffset':'27'},1200);
                        $('.per70').stop().animate({'stroke-dashoffset':'160'},1200);
                        })
$('.skills').mouseleave(function(){
                        $('.outer').stop().animate({'stroke-dashoffset':'534'},1200);
                        })
                        
/*
 $(window).resize(function(){
 if((this).width()>=684){
 $('.portfolio .content').masonry({
 // options
 itemSelector: '.col297',
 columnWidth: 297,
 gutter:30
 });
 }
 })
 */
/*
 $(window).resize(function(){
 if($(this).width()>960){
 $('.navbar-bg').show()
 }else{
 $('.navbar-bg').hide()
 }
 
 })
 */

/*
 const { Component } = React
 const { render } = ReactDOM
 const { Motion, spring } = ReactMotion
 class ToggleButton extends Component {
 static defaultProps = {
 height: '1.5em'
 };
 
 render() {
 const style = {
 container: {
 cursor: 'pointer'
 },
 inner: {
 fill: 'none',
 stroke: 'currentColor',
 strokeWidth: '3',
 strokeLinecap: 'round',
 strokeLinejoin: 'round'
 },
 ...this.props.style
 }
 
 const totalLength = 72.7977294921875
 const circleLength = 50.24085998535156
 const checkedLength = -22.55687141418457
 
 const defaultSpring = -totalLength
 const circleSpring = spring(circleLength, {stiffness: 60, damping: 11})
 const checkedSpring = spring(checkedLength, {stiffness: 120, damping: 13.8})
 
 return (
 <svg {...this.props} style={style.container} viewBox="0 0 24 24" >
 <g style={style.inner}>
 <Motion
 defaultStyle={{offset: defaultSpring}}
 style={{offset: this.props.active ? circleSpring : checkedSpring}}
 >
 {({ offset }) =>
 <path
 strokeDasharray={`${totalLength} ${totalLength}`}
 strokeDashoffset={offset}
 d="M20 6.7L9.3 17.3 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8"
 />
 }
 </Motion>
 </g>
 </svg>
 )
 }
 }
 class Test extends Component {
 constructor() {
 super()
 
 this.state = {
 active: false
 }
 }
 
 handleToggle() {
 this.setState({active: !this.state.active})
 }
 
 render() {
 const style = {
 fontSize: '6em',
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)'
 }
 
 return (
 <span style={style} onClick={this.handleToggle.bind(this)}>
 <ToggleButton active={this.state.active} />
 </span>
 )
 }
 }
 render(
 <Test />,
 document.getElementById('render')
 )
 */
