var path = require('path');

describe('Form Test', function() {
	browser.get('http://localhost:8080');

	var coupon = element(by.css('input[name="coupon"]'));

	describe('Coupon', function () {
		var messages = element(by.css('.coupon-errors'));

		it('should make sure the coupon is incorrect 1', function() {
			coupon.click();
			coupon.sendKeys('21');
			expect(messages.getText()).toContain('incorrect');
		});

		it('should make sure the coupon is incorrect 2', function() {
			coupon.click();
			coupon.sendKeys('DDDD21');
			expect(messages.getText()).toEqual('');
		});

		it('should set the coupon to always be lowercase', function() {
			expect(element(by.css('.coupon')).getText()).toEqual('21dddd21');
		});
	});
});
