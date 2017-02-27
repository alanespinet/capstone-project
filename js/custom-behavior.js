(function(){

  // function to decide what screen size we are working on
  function checkScreenSize(){
    var screenSize = '';
    var modelColor = $('#width-model').css('background-color');

    if(modelColor === 'rgb(0, 128, 0)') screenSize = 'lg'; // +1200
    if(modelColor === 'rgb(255, 255, 0)') screenSize = 'md'; // 992 - 1200
    if(modelColor === 'rgb(255, 165, 0)') screenSize = 'sm'; // 768 - 991
    if(modelColor === 'rgb(255, 0, 0)') screenSize = 'xs'; // 0 - 767

    return screenSize;
  }
  // *************************** GENERAL ******************************** //
  $(window).on('load', function(){
    $('#skills-list-explanation').html(skillsDynExplanation[0]);
    $('#skills-list-explanation div').css('opacity', '1');
  });

  // *************************** MENU *********************************** //
  var isMenuVisible = false;
  $('#main-menu-button-wrapper').on('click', function(){
    if(!isMenuVisible){
      $('#main-menu-wrapper').css('transform', 'translateX(0)');
      $('#second-icon-bar').css('opacity', '0');
      $('#first-icon-bar').css('transform', 'rotate(36deg) translateY(11px)');
      $('#third-icon-bar').css('transform', 'rotate(-36deg) translateY(-11px)');
    } else {
      $('#main-menu-wrapper').css('transform', 'translateX(100%)');
      $('#second-icon-bar').css('opacity', '1');
      $('#first-icon-bar').css('transform', 'rotate(0) translateY(0)');
      $('#third-icon-bar').css('transform', 'rotate(0) translateY(0)');
    }

    isMenuVisible = !isMenuVisible;
  });

  // *************************** SKILLS ********************************** //
  var openedSkillsMenu = '';
  var openedSkillsMenuText = '';

  var openedSkillsMenuLG = '';
  var openedSkillsMenuTextLG = '';

  var skillsDynExplanation = [
    '<div><p class="explanation-text">Here you will see a list of my main skills,' +
    ' organized within <span>categories</span>. Please choose one to uncover the skills asociated to' +
    ' it. As expected, a single word can not determine the actual level of skillness someone' +
    ' could have in one specific area, so if you have doubts, please <span>do not hesitate</span> in' +
    ' contacting me. I am totally opened for clarify any requested aspect.</p></div>',

    '<div><p class="explanation-text">C++ was not my first programming language, but it was the first' +
    ' I took seriously (because you always have to take C++ in serious, trust me). Before started my' +
    ' Computer Engineering, I already knew some things about programming, but it was there, working' +
    ' with C++ along five years, where I maxed out my habilities. After that, <span>I worked a lot (teaching and' +
    ' programming) with C#, Java, VB and DataBases</span>. I have a solid knowledge about <span>Object Oriented' +
    ' programming</span> and my problem-solving skills can be considered very good.</p></div>',

    '<div><p class="explanation-text">Even when I did not worked them a lot in the past, I knew HTML,' +
    ' CSS and JavaScript since long ago. However, <span>school first and now my job as a Front End' +
    ' developer</span>, have given me the practice and skills to say, today, that I consider myself a ' +
    ' very competent developer to work the Front side of <span>any</span> Website or application in the market.' +
    ' Related to this, while working, I have created Websites from scratch as well as modified existing ones.' +
    ' <span>Responsive design for me is a MAXIMA</span>, and I try, everytime applies, a <span>mobile-first approach</span>. A recurrent task' +
    ' I have seen these days is converting a non-responsive website into a full-responsive one.</p></div>',

    '<div><p class="explanation-text">As a natural <span>C-based programmer</span>, it ts easily deductible that my' +
    ' skills with languages like PHP are pretty decent. In addition to it, my experience working with Databases, of' +
    ' course through SQL, gives me <span>everything I need</span> to work the Back part of PHP-based websites and applications.' +
    ' I can also work with Wordpress and, relative to it, <span>not only the content part</span>, but also the actual PHP code' +
    ' related to any theme. As a developer, this is actually a task I have done frecuently. I have <span>also</span> worked with' +
    ' NodeJS and Express.</p></div>',

    '<div><p class="explanation-text">Videogames are one of my <span>passions</span>. When I started gaming, <span>I feld the need to create' +
    ' as well</span>, to make things like the ones I was enjoying that much. Until I discovered Unity3D, my games were' +
    ' done in <span>pure C++ using DirectX API</span> and the related code for them was huge and tiresome. With Unity3D,' +
    ' I could create actual things. I can consider my skills with it as high to advanced, and <span>still learning</span>`.' +
    ' Besides, even when I am not a designer, I can do <span>basic</span> 3D modeling and texturing. </p></div>'
  ];

  $('.skill-group').on('click', function(){

      if(openedSkillsMenuText === ''){

        // there is not any skill menu opened
        openedSkillsMenu = $(this);
        openedSkillsMenuText = $(this).text();

        openedSkillsMenu.children('ul').css('height', openedSkillsMenu.children('ul').attr('recordedHeight'));
      } else {

        // there is already an opened menu. We have to check first if it is
        // the same we are clicking it
        if( $(this).text() === openedSkillsMenuText ){
          openedSkillsMenu.children('ul').css('height', '0');
          openedSkillsMenu = '';
          openedSkillsMenuText = '';
        } else {

          // There is a menu opened, but we are clicking other one, so first
          // close the opened and then open the new one
          // openedSkillsMenu.children('ul').css('display', 'none');
          openedSkillsMenu.children('ul').css('height', '0');

          openedSkillsMenu = $(this);
          openedSkillsMenuText = $(this).text();
          openedSkillsMenu.children('ul').css('height', openedSkillsMenu.children('ul').attr('recordedHeight'));
        }
      }

      if(checkScreenSize() === 'md' || checkScreenSize() === 'lg'){
        var explIndex = -1;
        if(openedSkillsMenu === '') {
          explIndex = 0;
        } else {
          explIndex = openedSkillsMenu.children('ul').attr('infoId');
        }
        var explHtml = skillsDynExplanation[explIndex];
        $('#skills-list-explanation').html(explHtml);
        TweenMax.to('#skills-list-explanation div', 1, {opacity: 1});
      }

  });
})();
