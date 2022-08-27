$(document).ready(function () {
	// $('.js_profile-select').select2({
	// 	width: '100%',
	// 	minimumResultsForSearch: -1,
	// });
	// ----------------------------------------------------------------------
	// $(window).on('click', function (e) {
	// 	if ($(e.target).closest('.account__user').length === 0 || $(e.target).hasClass('.account__user').length === 0) {
	// 		$('.account__user-nav').removeClass('active')
	// 		$('.js_account-ico').removeClass('active')
	// 	}
	// })
	// ---------------------------------------------------------------------
});
function openMenu(e) { //открытие большого меню
	$(e).toggleClass('active');
	$('.header-menu').toggleClass('active');
}
function openDrops(e) { //открытие языков / меню что справо
	$(e).toggleClass('active');
}
function offSound(e) {	// переключение звука
	if ($(e).children('i').hasClass('icon-sound-on')) {
		$(e).children('i')
			.removeClass('icon-sound-on')
			.addClass('icon-sound-off');
	} else {
		$(e).children('i')
			.removeClass('icon-sound-off')
			.addClass('icon-sound-on');
	}
}


// -----------------------------------------------------------------------
// function toggleVisibilityUserSettings(that) {
// 	$(that).parent().find('.account__user-nav').toggleClass('active')
// 	$(that).parent().find('.js_account-ico').toggleClass('active')
// }
$(document).mouseup(function (e) {
	if (!$('.header-menu').is(e.target) // если клик был не по нашему блоку
		&& $('.header-menu').has(e.target).length === 0 &&
		!$('.btn-menu').is(e.target) // если клик был не по нашему блоку
		&& $('.btn-menu').has(e.target).length === 0 &&
		!$('.lang-btn').is(e.target) // если клик был не по нашему блоку
		&& $('.lang-btn').has(e.target).length === 0 &&
		!$('.lang-drop').is(e.target) // если клик был не по нашему блоку
		&& $('.lang-drop').has(e.target).length === 0 &&
		!$('.menu-btn').is(e.target) // если клик был не по нашему блоку
		&& $('.menu-btn').has(e.target).length === 0 &&
		!$('.menu').is(e.target) // если клик был не по нашему блоку
		&& $('.menu').has(e.target).length === 0) { // и не по его дочерним элементам
		$('.header-menu').removeClass('active');
		$('.btn-menu').removeClass('active');
		$('.lang-btn').removeClass('active');
		$('.menu-btn').removeClass('active');
	}
});

