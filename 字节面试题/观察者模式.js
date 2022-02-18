  /**
   * 观察者模式组件
   * @author  wilton
   */


  function ObserverList() {
      this.observerLists = [];
  }

  // 添加观察者对象
  ObserverList.prototype.add = function (obj) {
          // 保证observer的唯一性 
          if (this.observerLists.indexOf(obj) != -1) return this.observerLists;
          return this.observerLists.push(obj);
      },

      // 清空观察者对象
      ObserverList.prototype.empty = function () {
          this.observerLists = [];
      },

      // 计算当前的观察者数量
      ObserverList.prototype.count = function () {
          return this.observerLists.length;
      },

      // 取出对应编号的观察者对象
      ObserverList.prototype.get = function (index) {
          if (index > -1 && index < this.observerLists.length) {
              return this.observerLists[index];
          }
      },

      // 指定位置上插入观察者对象
      ObserverList.prototype.insert = function (obj, index) {
          var pointer = -1;

          if (index === 0) {
              this.observerLists.unshift(obj);
              pointer = index;
          } else if (index === this.observerLists.length) {
              this.observerLists.push(obj);
              pointer = index;
          } else {
              this.observerLists.splice(index, 0, obj);
              pointer = index;
          }

          return pointer;
      },

      // 查找观察者对象所在的位置编号
      ObserverList.prototype.indexOf = function (obj, startIndex) {
          var i = startIndex || 0,
              pointer = -1;

          while (i < this.observerLists.length) {
              if (this.observerLists[i] === obj) {
                  pointer = i;
                  break;
              }
              i++;
          }

          return pointer;
      },

      // 移除指定编号的观察者
      ObserverList.prototype.removeIndexAt = function (index) {
          var temp = null;
          if (index === 0) {
              temp = this.observerLists.shift();
          } else if (index === this.observerLists.length) {
              temp = this.observerLists.pop();
          } else {
              temp = this.observerLists.splice(index, 1)[0];
          }

          return temp;
      }

  // 定义目标类
  export function Subject() {
      this.observers = new ObserverList();
  }

  // 添加观察者
  Subject.prototype.addObserver = function (observer) {
      this.observers.add(observer);
  }

  // 移除观察者
  Subject.prototype.removeObserver = function (observer) {
      this.observers.removeIndexAt(this.observers.indexOf(observer, 0));
  }

  // 通知观察者
  Subject.prototype.notify = function (params) {
      var observersCount = this.observers.count();

      for (var i = 0; i < observersCount; i++) {
          this.observers.get(i).update(params);
      }
  }

  export function Observer() {

      // 定义观察者内容更新事件
      this.update = function () {}
  }
  export default {
      Subject,
      Observer,
      // 对象扩展
      extend: function (obj, extension) {
          for (var key in obj) {
              extension[key] = obj[key];
          }
      }
  };