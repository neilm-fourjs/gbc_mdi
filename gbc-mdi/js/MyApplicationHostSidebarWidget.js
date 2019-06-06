/// FOURJS_START_COPYRIGHT(D,2014)
/// Property of Four Js*
/// (c) Copyright Four Js 2014, 2016. All Rights Reserved.
/// * Trademark of Four Js Development Tools Europe Ltd
///  in the United States and elsewhere
/// 
/// This file can be modified by licensees according to the
/// product manual.
/// FOURJS_END_COPYRIGHT

modulum('MyApplicationHostSidebarWidget', ['ApplicationHostSidebarWidget', 'WidgetFactory'],
  function(context, cls) {
    cls.MyApplicationHostSidebarWidget = context.oo.Class(cls.ApplicationHostSidebarWidget, function($super) {
      return {
        __name: "MyApplicationHostSidebarWidget"
			};
    });
    // register the class
    cls.WidgetFactory.register('ApplicationHostSidebar', cls.MyApplicationHostSidebarWidget);
});
