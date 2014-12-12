jquery.linemover
================

Allows user to move line blocks, like volume and process.

![](http://i.imgur.com/qOvF1Tv.png)

```javascript
$('.ac__progress-line').linemover({
  onChange: $.noop,
  onStart: $.noop,
  onEnd: $.noop
});
```

```html
<div class="ac__vol">
	<div class="ac__white-line"></div>
	<div class="ac__back-line"></div>
	<div class="ac__progress-line" style="width: 1%;"></div>
</div>
```
