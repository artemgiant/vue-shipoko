function tippyUse() {
	tippy('[data-tippy-content]',
		{
			placement: 'bottom',
			arrow: true,
			theme: 'light-blueBorder',
			duration: 0,
			delay: [700, 500],
			dynamicTitle: true,
		});
}
tippyUse();
$('.datapiker').daterangepicker({
	ranges: {
		'Сегодня': [moment(), moment()],
		'Вчера': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
		'Последние 7 Дней': [moment().subtract(6, 'days'), moment()],
		'Последние 30 Дней': [moment().subtract(29, 'days'), moment()],
		'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
		'Последний месяц': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	},
	"startDate": "09/28/2021",
	"endDate": "10/04/2021"
}, function (start, end, label) {
	console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});
$(document).ready(function () {
	const defaultData = $('.datapiker').attr('data-tippy-content');
	const defData = $('.datapiker span').html();
	$('.applyBtn').click(function () {
		$('.datapiker').addClass('active');
		let datestart = $('.drp-selected').html();
		let datestart2 = datestart.split(' ')[0];
		$('.datapiker').attr('data-tippy-content', datestart);
		$('.datapiker span').html('').append(datestart2);
		tippyUse();
	})
	$('.cancelBtn').click(function () {
		$('.datapiker').removeClass('active');
		$('.datapiker span').html('').append(defData);
		$('.datapiker').attr('data-tippy-content', defaultData);
		tippy('[data-tippy-content]',
			{
				placement: 'bottom',
				arrow: true,
				theme: 'light-blueBorder',
				duration: 0,
				delay: [500, 500],
				dynamicTitle: true,
				onShow(tip) {
					return false;
				},
			});
	})
});
//работа дата пикера выше
//работа типи бокса ниже


function offSelect(e) {
	$(e).click(function () {
		$(e).parent('.select-off').siblings('.select').children('.js_profile-select').select2();
	})
}

