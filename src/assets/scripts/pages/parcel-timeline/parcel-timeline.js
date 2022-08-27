

$(document).ready(function () {
	$('.open-drop').on('click', function () {
		$(this).toggleClass('active');
		$(this).siblings('.down-drop').toggleClass('active');
	});
});
$(document).mouseup(function (e) {
if ( !$('.open-drop').is(e.target) // если клик был не по нашему блоку
		&& $('.open-drop').has(e.target).length === 0 &&
		!$('.down-drop').is(e.target) // если клик был не по нашему блоку
		&& $('.down-drop').has(e.target).length === 0) { // и не по его дочерним элементам
		$('.open-drop').removeClass('active');
		$('.down-drop').removeClass('active');
	}
});
$('.datapiker').daterangepicker({
	ranges: {
		'Сегодня': [moment(), moment()],
		'Вчера': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
		'Последние 7 Дней': [moment().subtract(6, 'days'), moment()],
		'Последние 30 Дней': [moment().subtract(29, 'days'), moment()],
		'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
		'Последний месяц': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
	},
	"startDate": "08/01/2022",
	"endDate": "08/05/2022"
}, function (start, end, label) {
	// console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});
$(document).ready(function () {
	const defData = $('.datapiker span').html();
	$('.applyBtn').click(function () {
		let datestart = $('.drp-selected').text();
		let datestart2 = datestart.split(' ')[0];
		$('.datapiker span').html('').append(datestart2);
	})
	$('.cancelBtn').click(function () {
		$('.datapiker span').html('').append(defData);
	})
});
$('.select-white-theme').select2({
	theme: "white-theme",
});
bindTabs('.task-form-type-delivery');
function bindTabs(container) {
	if (typeof container === 'string') {
		container = document.querySelector(container);
	}

	const titles = container.querySelectorAll('.radio');
	const contents = container.querySelectorAll('.tab-type-delivery');

	for (let i = 0; i < titles.length; i++) {
		const titleEl = titles[i];
		titleEl.addEventListener('click', () => {
			deactivate(titles);
			deactivate(contents);
			titles[i].classList.add('active');
			contents[i].classList.add('active');
		});
	}

	function deactivate(elements) {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			element.classList.remove('active');
		}
	}
}
