/*** Keyframesvar anim = Crafty.animation("FadeOut", 10).keyframe(5, {alpha: 0.5, frame: [0,0]}).keyframe(10, {alpha: 1.0});ent.addAnimation(anim).playAnimation("FadeOut");*/Crafty.extend({	_animations: {},		animation: function(label, duration) {		this._animations[label] = {			_reel: [],						keyframe: function(key, props) {				var reel = this._reel, i = reel.length,					diff = 1 + key - i, prop = {}, p, old;									console.log(props);				for(;i <= key; ++i) {					prop = {};					old = reel[i - 1];										for(p in props) {						console.log(p, props[p], diff, props, old);						if(old && old[p]) {							prop[p] = (old[p] - props[p]) / diff;						} else {							prop[p] = props[p];						}					}										reel.push(prop);				}								return this;			}		};				return this._animations[label];	}});Crafty.c("Animation", {	addAnimation: function(reel) {			},		playAnimation: function(reel) {			}});