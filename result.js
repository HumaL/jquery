function resultHtml( target ) {
	if( !target ) {
		$('.result .description').text('값 없음.');
	} else {
		if( target.length != 0 ) {
			var message_html = $('.result_html').append( $(target).clone() ).html();
			$('.result .description').empty().text( message_html );
		} else {
			$('.result .description').text('값 없음.');
		}
	}
}

function resultText( target ) {
	if( !target ) {
		$('.result .description').text('값 없음.');
		if( target == 0 || target == '0' ) {
			if( target.length != 0 ) {
				$('.result .description').text( target );
			} else {
				$('.result .description').text('값 없음.');
			}
		}
	} else {
		$('.result .description').text( target );
	}
}

function resultValue( target ) {
	if( !target ) {
		$('.result .description').text('값 없음.');
		if( target == 0 || target == '0' ) {
			$('.result .description').text( target.val() );
		}
	} else {
		$('.result .description').text( target.val() );
	}
}

function resultSelector( selector, lineColor ) {
	if( !lineColor ) lineColor = 'red';
	if( selector.selector != ':selected' ) {
		$(selector).css({ outline:'3px solid ' + lineColor });
	} else {
		$(selector)
			.parent()
			.css({ outline:'3px solid ' + lineColor });
	}
}