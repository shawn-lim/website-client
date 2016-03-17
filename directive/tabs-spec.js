describe('Tabs Directive', function() {

  beforeEach(module('tabs'));

  var scope,compile;

  beforeEach(inject(function($rootScope,$compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('Index Test', function() {

    /*
    To test your directive, you need to create some html that would use your directive,
    send that through compile() then compare the results.

    var element = compile('<div mydirective name="name">hi</div>')(scope);
    expect(element.text()).toBe('hello, world');
    */
		var element = compile('' +
			'<div ng-tabs>' +
			'<div ng-tab-head>First Tab</div>' +
			'<div ng-tab-head="active"></div>' +
			'<div ng-tab-body></div>' +
			'<div ng-tab-body></div>' +
			'</div>')(scope);
		expect(element.scope().tabs.index).toBe(2);

  });
});
