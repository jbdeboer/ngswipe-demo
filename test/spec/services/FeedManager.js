'use strict';

describe('Service: FeedManager', function () {
  var FeedManager;

  beforeEach(module('ngswipeDemoApp'));

  beforeEach(inject(function ($injector) {
    FeedManager = $injector.get('FeedManager');
  }));

  it('should provide a list of all feeds available for the user', function () {
    var list = FeedManager.getAll();
    expect(list.length).toBeGreaterThan(0);
  });

  it('should set selected feed when calling setSelected', function () {
    FeedManager.setSelected('DailyJS');
    expect(FeedManager.getSelected().name).toEqual('DailyJS');
    FeedManager.setSelected('AngularJS');
    expect(FeedManager.getSelected().name).toEqual('AngularJS');
  });

  it('should not set selected feed when calling setSelected with invalid name', function () {
    FeedManager.setSelected('DailyJS');
    FeedManager.setSelected('Foobar');
    expect(FeedManager.getSelected().name).toEqual('DailyJS');
  });

  it('should provide the currently-selected feed', function () {
    FeedManager.setSelected('AngularJS');
    expect(FeedManager.getSelected().name).toEqual('AngularJS');
  });

  it('should support addition of a feed through the "add" method', function () {
    FeedManager.add('Random Feed', {href: "http://random.feed"});

    expect(FeedManager.get('Random Feed').name).toEqual('Random Feed');
  });

  it ('should not add a feed without a name', function () {
    var passes = true, all;
    FeedManager.add({href: 'http://google.com/feed'});
    
    all = FeedManager.getAll();
    for (var i = 0; i<all.length; i++) {
      expect(all[i].href).not.toEqual('http://google.com/feed');
    }
  });

  it ('should not add a feed without an href', function () {
    FeedManager.add({name: 'Google'});
    expect(FeedManager.get('Google')).toBe(undefined);
  });

  it('should remove a feed', function () {
    FeedManager.remove("Random Feed");
    expect(FeedManager.get("Random Feed")).toBe(undefined);
  });
});