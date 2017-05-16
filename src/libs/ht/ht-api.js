/**
 * This file is part of HT for web.
 * Copyright (c) 2014 by www.hightopo.com
 *
 * @description HT for web顶层包
 * @namespace
 */
var ht = {};

/**
 * 通用组件包
 * @namespace
 */
ht.widget = {};

/**
 * 2D拓扑包
 * @namespace
 */
ht.graph = {};

/**
 * 3D渲染引擎包，与3D渲染引擎相关的类皆在此包下
 * @namespace
 */
ht.graph3d = {};


/**
 * 集合类，提供比原生数组更便捷的API
 * @constructor
 */
ht.List = function (){};

/**
 * 增加元素
 * @param {Object} item 新元素
 * @param {Number} [index] 插入索引
 */
ht.List.prototype.add = function (item, index){};

/**
 * 将一批元素加入到当前集合中
 * @param {Array|ht.List} array 元素数组或集合
 */
ht.List.prototype.addAll = function (array){};

/**
 * 清空集合
 */
ht.List.prototype.clear = function (){};

/**
 * 判断当前集合是否包含参数元素
 * @param {Object} item 是否包含此元素
 */
ht.List.prototype.contains = function (item){};

/**
 * 提供一个回调函数遍历此集合
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example list.each(function(item) {
 *   console.log(item);
 * });
 */
ht.List.prototype.each = function (func, scope){};

/**
 * 返回索引位置的的元素
 * @param {Number} index 索引
 * @return {Object} 处于索引位置的元素
 */
ht.List.prototype.get = function (index){};

/**
 * 获取类声明(构造函数)
 * @return {Function} 类声明(构造函数)
 */
ht.List.prototype.getClass = function (){};

/**
 * 获取类全名
 * @return {String} 类全名
 */
ht.List.prototype.getClassName = function (){};

/**
 * 获取父类声明(构造函数)
 * @return {Function} 父类声明(构造函数)
 */
ht.List.prototype.getSuperClass = function (){};

/**
 * 获得参数元素的索引
 * @param {Object} item 元素
 * @return {Number} 元素的索引
 */
ht.List.prototype.indexOf = function (item){};

/**
 * 判断集合是否为空
 * @return {Boolean} 集合是否为空
 */
ht.List.prototype.isEmpty = function (){};

/**
 * 将参数元素从集合中删除
 * @param {Object} item 要删除的元素
 * @return {Number} 要删除的元素的索引
 */
ht.List.prototype.remove = function (item){};

/**
 * 删除索引位置的元素
 * @param {Number} index 要删除的索引
 * @return {Ojbect} 删除的元素
 */
ht.List.prototype.removeAt = function (index){};

/**
 * 将集合中的元素顺序倒序排序
 */
ht.List.prototype.reverse = function (){};

/**
 * 提供一个回调函数倒序遍历此集合
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example list.reverseEach(function(item) {
 *   console.log(item);
 * });
 */
ht.List.prototype.reverseEach = function (){};

/**
 * 设置索引处的元素
 * @param {Number} index 索引，如果此索引处存在元素则将其替换
 * @param {Object} item 新元素
 */
ht.List.prototype.set = function (index, item){};

/**
 * 获取集合中的元素数
 * @return {Number} 集合中的元素数
 */
ht.List.prototype.size = function (){};

/**
 * 提取集合中的部分元素组成一个新集合并返回
 * @param {Number} start 开始索引(包含)
 * @param {Number} end 结束索引(不包含)
 * @return {ht.List} 新集合
 */
ht.List.prototype.slice = function (start, end){};

/**
 * 根据参数函数将元素排序
 * @param {Function} sortFunc 排序函数
 * @example list.sort(function(item1, item2) {
 *      return item1.age > item2.age;
 * });
 * @return {ht.List} 自身
 */
ht.List.prototype.sort = function (sortFunc){};

/**
 * 以matchFunc为过滤函数构建新的元素数组
 * @param {Function} [matchFunc] 过滤函数
 * @param {Object} [scope] 函数域
 * @example var array = list.toArray(function(item) {
 *    if (item.a('visible')) {
 *    	return true;
 *    }
 * });
 * 
 * @return {Array} 元素数组
 */
ht.List.prototype.toArray = function (mathFunc, scope){};

/**
 * 以matchFunc为过滤函数构建新的元素集合
 * @param {Function} [matchFunc] 过滤函数
 * @param {Object} [scope] 函数域
 * @example var list = list.toList(function(item) {
 *    if (item.a('visible')) {
 *    	return true;
 *    }
 * });
 * 
 * @return {ht.List} 元素集合
 */
ht.List.prototype.toList = function (mathFunc, scope){};

/**
 * 重写js默认的toString
 * @return {String}
 */
ht.List.prototype.toString = function (){};


/**
 * 事件派发器
 * @constructor
 */
ht.Notifier = function (){};

/**
 * 增加监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.Notifier.prototype.add = function (listener, scope, ahead){};

/**
 * 是否包含此监听器函数
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.Notifier.prototype.contains = function (listener, scope){};

/**
 * 派发事件，依次调用所有的监听器函数
 * @param {Object} event 事件对象
 */
ht.Notifier.prototype.fire = function (event){};

/**
 * 删除监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.Notifier.prototype.remove = function (listener, scope){};




/**
 * 数据容器ht.DataModel作为承载Data数据的模型，
 * 管理着Data数据的增删以及变化事件派发， 
 * HT框架所有组件都是通过绑定DataModel，以不同的形式呈现到用户界面；
 * 同时组件也会监听DataModel模型的变化事件， 实时同步更新界面数据信息，
 * 掌握了DataModel的操作就掌握了所有组件的模型驱动方式。
 * @constructor
 */
ht.DataModel = function (){};

/**
 * 获取或设置attr属性，仅有一个参数时相当于{@link ht.DataModel#getAttr getAttr}，有两个参数时相当于{@link ht.DataModel#setAttr setAttr}
 * @param {String} name 属性名
 * @param {Object} [value] 属性值
 * @returns {Object}
 */
ht.DataModel.prototype.a = function (name, value){};

/**
 * 增加数据元素
 * @param {ht.Data} data 数据元素
 * @param {Number} [index] 插入索引
 */
ht.DataModel.prototype.add = function (data, index){};

/**
 * 增加数据模型增删变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @example dataModel.addDataModelChangeListener(function(event) {
 *      //event格式：
 *      {
 *      	kind: "add"|"remove"|"clear",//事件类型
 *      	data: data//事件相关data
 *      }
 * });
 * @see {@link ht.DataModel#mm mm}
 */
ht.DataModel.prototype.addDataModelChangeListener = function (listener, scope, ahead){};

/**
 * 增加数据模型增删变化事件监听器，{@link ht.DataModel#addDataModelChangeListener addDataModelChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @example dataModel.mm(function(event) {
 *      //event格式：
 *      {
 *      	kind: "add"|"remove"|"clear",//事件类型
 *      	data: data//事件相关data
 *      }
 * });
 * @see {@link ht.DataModel#addDataModelChangeListener addDataModelChangeListener}
 */
ht.DataModel.prototype.mm = function (listener, scope, ahead){};

/**
 * 增加模型中Data元素属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @example dataModel.addDataPropertyChangeListener(function(event) {
 *      //event格式：
 *      {
 *      	property: "name",//发生变化的属性
 *      	data: data,//属性发生变化的data
 *      	oldValue: 0,//旧值
 *      	newValue: 1//新值
 *      }
 * });
 * @see {@link ht.DataModel#md md}
 */
ht.DataModel.prototype.addDataPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 增加模型中Data元素属性变化事件监听器，{@link ht.DataModel#addDataPropertyChangeListener addDataPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @example dataModel.md(function(event) {
 *      //event格式：
 *      {
 *      	property: "name",//发生变化的属性
 *      	data: data,//属性发生变化的data
 *      	oldValue: 0,//旧值
 *      	newValue: 1//新值
 *      }
 * });
 * @see {@link ht.DataModel#addDataPropertyChangeListener addDataPropertyChangeListener}
 */
ht.DataModel.prototype.md = function (listener, scope, ahead){};


/**
 * 增加监听器，监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @example dataModel.addHierarchyChangeListener(function(event) {
 *      //event格式：
 *      {
 *      	data: data,//事件相关Data
 *      	oldIndex: 0,//旧层次
 *      	newIndex: 1//新层次
 *      }
 * });
 * @see {@link ht.DataModel#mh mh}
 */
ht.DataModel.prototype.addHierarchyChangeListener = function (listener, scope, ahead){};

/**
 * 增加监听器，监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件，{@link ht.DataModel#addHierarchyChangeListener addHierarchyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @example dataModel.mh(function(event) {
 *      //event格式：
 *      {
 *      	data: data,//事件相关Data
 *      	oldIndex: 0,//旧层次
 *      	newIndex: 1//新层次
 *      }
 * });
 * @see {@link ht.DataModel#addHierarchyChangeListener addHierarchyChangeListener}
 */
ht.DataModel.prototype.mh = function (listener, scope, ahead){};

/**
 * 增加监听器，监听Data在DataModel中的索引(用于拓扑组件)变化事件
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @example dataModel.addIndexChangeListener(function(event) {
 *      //event格式：
 *      {
 *      	data: data,//事件相关Data
 *      	oldIndex: 0,//旧索引
 *      	newIndex: 1//新索引
 *      }
 * });
 */
ht.DataModel.prototype.addIndexChangeListener = function (listener, scope, ahead){};

/**
 * 删除容器中所有Data对象，该操作一次性清空，没有逐个remove的过程，不会影响Data父子关系
 */
ht.DataModel.prototype.clear = function (){};

/**
 * 判断容器是否包含该data对象
 * @param {ht.Data} data 要判断的数据元素 
 * @return {Boolean} 容器是否包含参数data
 */
ht.DataModel.prototype.contains = function (data){};

/**
 * 反序列化数据到数据容器
 * @param {String} json 要被反序列化的json字符串
 * @param {ht.Data} rootParent 指定反序列化的数据元素的父元素
 * @param {Boolean} setId 反序列化后的数据元素是否保留原id
 * @return {ht.List} 被反序列化的数据元素集合
 */
ht.DataModel.prototype.deserialize= function (json, rootParent, setId){};

/**
 * 提供一个回调函数遍历此容器
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example dataModel.each(function(data) {
 *   console.log(data);
 * });
 */
ht.DataModel.prototype.each = function (func, scope){};

/**
 * 以data为起始深度优先遍历Data对象
 * @param {Function} func 遍历函数
 * @param {ht.Data} [data] 遍历起点元素
 * @param {Object} [scope] 函数域
 */
ht.DataModel.prototype.eachByDepthFirst = function (func, data, scope){};

/**
 * 以data为起始广度优先遍历Data对象
 * @param {Function} func 遍历函数
 * @param {ht.Data} [data] 遍历起点元素
 * @param {Object} [scope] 函数域
 */
ht.DataModel.prototype.eachByBreadthFirst = function (func, data, scope){};

/**
 * 获取attr属性
 * @param {String} name 属性名
 * @returns {Object}
 */
ht.DataModel.prototype.getAttr = function (name){};

/**
 * 设置attr属性
 * @param {String} name 属性名
 * @param {Object} value 属性值
 */
ht.DataModel.prototype.setAttr = function (name, value){};

/**
 * 获取attr属性对象，该属性默认为空，用于存储用户业务信息
 * @return {Object} attr属性对象
 */
ht.DataModel.prototype.getAttrObject = function (){};

/**
 * 设置attr属性对象，该属性默认为空，用于存储用户业务信息
 * @param {Object} attrObject attr属性对象
 */
ht.DataModel.prototype.setAttrObject = function (attrObject){};

/**
 * 根据id快速查找Data对象，模型内部维护着一个id->data的映射表，因此查找速度比遍历方式快
 * @param {String|Number} id 要查找的id
 * @return {ht.Data} 查找到的Data
 */
ht.DataModel.prototype.getDataById = function (id){};

/**
 * 根据tag快速查找，模型内部维护着一个tag->data的映射表，因此查找速度比遍历方式快
 * @param {String|Number} tag 要查找的tag
 * @return {ht.Data} 查找到的Data
 */
ht.DataModel.prototype.getDataByTag = function (tag){};

/**
 * 获取所有添加到容器的Data数据集合
 * @return {ht.List}
 */
ht.DataModel.prototype.getDatas = function (){};

/**
 * 获取历史管理器
 * @return {ht.HistoryManager}
 */
ht.DataModel.prototype.getHistoryManager = function (){};

/**
 * 获取所有parent为空的Data对象
 * @return {ht.List}
 */
ht.DataModel.prototype.getRoots = function (){};

/**
 * 获取该容器的选择模型
 * @see {@link ht.DataModel#sm sm}
 * @return {ht.SelectionModel}
 */
ht.DataModel.prototype.getSelectionModel = function (){};

/**
 * 此函数返回一个map，决定序列化时哪些attr属性可被序列化，默认所有attr对象里的属性都会被序列化
 * @example function(){
 *     var name, map = {};
 *     for (name in this._attrObject) {            
 *         map[name] = 1;
 *     }
 *     return map; 
 * }
 * @return {Object} 需要被序列化的attr属性map
 */
ht.DataModel.prototype.getSerializableAttrs = function(){};

/**
 * 获取和data同父子层次的兄弟数组，如果data父亲为空，则返回dataModel.getRoots()
 * @param {ht.Data} data 目标data
 * @return {ht.List}
 */
ht.DataModel.prototype.getSiblings = function(data){};

/**
 * 是否自动调整data在容器中索引顺序
 * @return {Boolean}
 */
ht.DataModel.prototype.isAutoAdjustIndex = function(){};

/**
 * 判断容器是否为空
 * @return {Boolean}
 */
ht.DataModel.prototype.isEmpty = function(){};

/**
 * 移动data到同层兄弟数组中的下一个位置
 * @param {ht.Data} data 要移动的数据元素
 */
ht.DataModel.prototype.moveDown = function(data){};

/**
 * 移动当前选中的数据元素到同层兄弟数组中的下一个位置
 * @param {ht.SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
 */
ht.DataModel.prototype.moveSelectionDown = function(sm){};

/**
 * 移动当前选中的数据元素到同层兄弟数组的底部
 * @param {ht.SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
 */
ht.DataModel.prototype.moveSelectionToBottom = function(sm){};

/**
 * 移动当前选中的数据元素到同层兄弟数组的顶部
 * @param {ht.SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
 */
ht.DataModel.prototype.moveSelectionToTop = function(sm){};

/**
 * 移动当前选中的数据元素到同层兄弟数组中的上一个位置
 * @param {ht.SelectionModel} [sm] 要操作的选中模型，如果为空，使用dataModel自身绑定的选中模型
 */
ht.DataModel.prototype.moveSelectionUp = function(sm){};

/**
 * 移动数据元素到同层兄弟数组中的指定索引
 * @param {ht.Data} data 要移动的数据元素
 * @param {Number} newIndex 目标索引
 */
ht.DataModel.prototype.moveTo = function(data, newIndex){};

/**
 * 移动数据元素到同层兄弟数组的底部
 * @param {ht.Data} data 要移动的数据元素
 */
ht.DataModel.prototype.moveToBottom = function(data){};

/**
 * 移动数据元素到同层兄弟数组的顶部
 * @param {ht.Data} data 要移动的数据元素
 */
ht.DataModel.prototype.moveToTop = function(data){};

/**
 * 移动数据元素到同层兄弟数组中的上一个位置
 * @param {ht.Data} data 要移动的数据元素
 */
ht.DataModel.prototype.moveUp = function(data){};

/**
 * 数据元素添加的回调函数，可重载做后续处理
 * @param {ht.Data} data 新添加的数据元素
 */
ht.DataModel.prototype.onAdded = function(data){};

/**
 * 数据元素属性变化回调函数，可重载做后续处理
 * @param {ht.Data} data 发生变化的数据元素
 * @param {Object} e 事件信息
 */
ht.DataModel.prototype.onDataPropertyChanged = function(data, e){};

/**
 * 数据元素删除时回调函数，可重载做后续处理
 * @param {ht.Data} data 被删除的数据元素
 */
ht.DataModel.prototype.onRemoved = function(data){};

/**
 * 删除数据元素，该操作有以下副作用：
 * <ul>
 * <li>其子孙被递归从DataModel中删除</li>
 * <li>被断开父子关系data.setParent(null)</li>
 * <li>Edge类型通过edge.setSource(null)和data.setTarget(null)断开节点关系</li>
 * <li>Node类型会将其关联的连线从DataModel中删除</li>
 * <li>Node类型通过data.setHost(null)断开与宿主吸附节点关系</li>
 * </ul>
 * @param {ht.Data} data 要删除的数据元素
 */
ht.DataModel.prototype.remove = function(data){};

/**
 * 通过id删除数据元素
 * @param {Number} id 要删除的数据元素id
 * @see {@link ht.DataModel#remove remove}
 */
ht.DataModel.prototype.removeDataById = function(id){};

/**
 * 通过tag删除数据元素
 * @param {String} tag 要删除的数据元素tag
 * @see {@link ht.DataModel#remove remove}
 */
ht.DataModel.prototype.removeDataByTag = function(tag){};

/**
 * 删除数据模型增删变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.DataModel#umm umm}
 */
ht.DataModel.prototype.removeDataModelChangeListener = function(listener, scope){};

/**
 * 删除数据模型增删变化事件监听器，{@link ht.DataModel#removeDataModelChangeListener removeDataModelChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.DataModel#removeDataModelChangeListener removeDataModelChangeListener}
 */
ht.DataModel.prototype.umm = function(listener, scope){};

/**
 * 删除模型中Data元素属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.DataModel#umd umd}
 */
ht.DataModel.prototype.removeDataPropertyChangeListener = function(listener, scope){};

/**
 * 删除模型中Data元素属性变化事件监听器，{@link ht.DataModel#removeDataPropertyChangeListener removeDataPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.DataModel#removeDataPropertyChangeListener removeDataPropertyChangeListener}
 */
ht.DataModel.prototype.umd = function(listener, scope){};

/**
 * 删除监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件的监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.DataModel#umh umh}
 */
ht.DataModel.prototype.removeHierarchyChangeListener = function(listener, scope){};

/**
 * 删除监听Data在DataModel中的层次(用于TreeView、TreeTableView等)变化事件的监听器，{@link ht.DataModel#removeHierarchyChangeListener removeHierarchyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.DataModel#removeHierarchyChangeListener removeHierarchyChangeListener}
 */
ht.DataModel.prototype.umh = function(listener, scope){};

/**
 * 删除监听Data在DataModel中的索引(用于拓扑组件)变化事件的监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.DataModel.prototype.removeIndexChangeListener = function(listener, scope){};

/**
 * 将data在拓扑上置底
 * @param {ht.Data} data 要置底的数据元素
 */
ht.DataModel.prototype.sendToBottom = function(data){};

/**
 * 将data在拓扑上置顶
 * @param {ht.Data} data 要置顶的数据元素
 */
ht.DataModel.prototype.sendToTop = function(data){};

/**
 * 将数据模型序列化成JSON格式字符串
 * @param {Number} space 缩进空格数
 */
ht.DataModel.prototype.serialize = function(space){};

/**
 * 设置是否自动调整data在容器中索引顺序
 * @param {Boolean} autoAdjustIndex 是否自动调整data在容器中索引顺序
 */
ht.DataModel.prototype.setAutoAdjustIndex = function(autoAdjustIndex){};

/**
 * 返回当前容器中Data对象的总数
 * @return {Number}
 */
ht.DataModel.prototype.size = function(){};

/**
 * 获取该容器的选择模型
 * @see {@link ht.DataModel#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.DataModel.prototype.sm = function(){};

/**
 * 以matchFunc为过滤函数构建新的元素集合并返回
 * @param {Function} [matchFunc] 过滤函数
 * @param {Object} [scope] 函数域
 * @return {ht.List} 元素集合
 */
ht.DataModel.prototype.toDatas = function(matchFunc, scope){};

/**
 * 将数据模型序列化成JSON格式对象
 * @return {Object} JSON对象
 */
ht.DataModel.prototype.toJSON = function(){};




/**
 * 选择模型管理DataModel模型中Data对象的选择状态， 
 * 每个DataModel对象都内置一个SelectionModel选择模型，
 * 控制这个SelectionModel即可控制所有绑定该DataModel的视图组件的对象选择状态， 
 * 这意味着共享同一DataModel的组件默认就具有选中联动功能。<br>
 * 如果希望某些组件不与其他组件选中联动，
 * 可通过调用view.setSelectionModelShared(false)， 
 * 这样该view将创建一个专属的SelectionModel实例。
 * @constructor
 */
ht.SelectionModel = function (){};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.SelectionModel#mp mp}
 */
ht.SelectionModel.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 增加自身属性变化事件监听器，{@link ht.SelectionModel#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.SelectionModel#addPropertyChangeListener addPropertyChangeListener}
 */
ht.SelectionModel.prototype.mp = function (listener, scope, ahead){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.SelectionModel#ump ump}
 */
ht.SelectionModel.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除自身属性变化事件监听器，{@link ht.SelectionModel#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.SelectionModel#removePropertyChangeListener removePropertyChangeListener}
 */
ht.SelectionModel.prototype.ump = function (listener, scope){};


/**
 * 增加监听器，监听选中变化事件
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.SelectionModel#ms ms}
 * @example dataModel.addSelectionChangeListener(function(event) {
 *      //event格式：
 *      {
 *      	kind: "set",//事件类型set|remove|append|clear
 *      	datas: datas,//包含所有选中状态变化的数据元素，之前选中现在取消选中，和之前没选中现在被选中的数据元素
 *      }
 * });
 */
ht.SelectionModel.prototype.addSelectionChangeListener = function (listener, scope, ahead){};

/**
 * 增加监听器，监听选中变化事件，{@link ht.SelectionModel#addSelectionChangeListener addSelectionChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.SelectionModel#addSelectionChangeListener addSelectionChangeListener}
 * @example dataModel.ms(function(event) {
 *      //event格式：
 *      {
 *      	kind: "set",//事件类型set|remove|append|clear
 *      	datas: datas,//包含所有选中状态变化的数据元素，之前选中现在取消选中，和之前没选中现在被选中的数据元素
 *      }
 * });
 */
ht.SelectionModel.prototype.ms = function (listener, scope, ahead){};

/**
 * 删除监听选中变化事件的监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.SelectionModel#ums ums}
 */
ht.SelectionModel.prototype.removeSelectionChangeListener = function (listener, scope){};

/**
 * 删除监听选中变化事件的监听器，{@link ht.SelectionModel#removeSelectionChangeListener removeSelectionChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.SelectionModel#removeSelectionChangeListener removeSelectionChangeListener}
 */
ht.SelectionModel.prototype.ums = function (listener, scope){};

/**
 * 追加选中一个或多个数据元素，参数可为单个数据元素，也可为ht.List或Array数组
 * @param {ht.Data|ht.List|Array} datas 数据元素
 * @see {@link ht.SelectionModel#as as}
 */
ht.SelectionModel.prototype.appendSelection = function (datas){};

/**
 * 追加选中一个或多个数据元素，参数可为单个数据元素，也可为ht.List或Array数组，{@link ht.SelectionModel#appendSelection appendSelection}的缩写
 * @param {ht.Data|ht.List|Array} datas 数据元素
 * @see {@link ht.SelectionModel#appendSelection appendSelection}
 */
ht.SelectionModel.prototype.as = function (datas){};

/**
 * 取消所有选中数据元素
 * @see {@link ht.SelectionModel#cs cs}
 */
ht.SelectionModel.prototype.clearSelection = function (){};

/**
 * 取消所有选中数据元素，{@link ht.SelectionModel#clearSelection clearSelection}的缩写
 * @see {@link ht.SelectionModel#clearSelection clearSelection}
 */
ht.SelectionModel.prototype.cs = function (){};

/**
 * 判断data对象是否被选中
 * @param {ht.Data} data 要判断的data对象
 * @see {@link ht.SelectionModel#co co}
 */
ht.SelectionModel.prototype.contains = function (data){};

/**
 * 判断data对象是否被选中，{@link ht.SelectionModel#contains contains}的缩写
 * @param {ht.Data} data 要判断的data对象
 * @see {@link ht.SelectionModel#contains contains}
 */
ht.SelectionModel.prototype.co = function (data){};

/**
 * 获取{@link ht.DataModel DataModel}，{@link ht.SelectionModel#getDataModel getDataModel}的缩写
 * @return {ht.DataModel} dataModel
 * @see {@link ht.SelectionModel#getDataModel getDataModel}
 */
ht.SelectionModel.prototype.dm = function (){};

/**
 * 获取{@link ht.DataModel DataModel}
 * @return {ht.DataModel} dataModel
 * @see {@link ht.SelectionModel#dm dm}
 */
ht.SelectionModel.prototype.getDataModel = function (){};

/**
 * 提供一个回调函数遍历此选中模型
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example selectionModel.each(function(data) {
 *   console.log(data);
 * });
 */
ht.SelectionModel.prototype.each = function (func, scope){};

/**
 * 返回首个被选中的数据元素，如果没有选中数据元素则返回空
 * @return {ht.Data} 首个被选中的数据元素 
 * @see {@link ht.SelectionModel#fd fd}
 */
ht.SelectionModel.prototype.getFirstData = function (){};

/**
 * 返回首个被选中的数据元素，如果没有选中数据元素则返回空，此方法是{@link ht.SelectionModel#getFirstData getFirstData}的缩写
 * @return {ht.Data} 首个被选中的数据元素 
 * @see {@link ht.SelectionModel#getFirstData getFirstData}
 */
ht.SelectionModel.prototype.fd = function (){};

/**
 * 返回最后被选中的数据元素，如果没有选中数据元素则返回空
 * @return {ht.Data} 最后被选中的数据元素 
 * @see {@link ht.SelectionModel#ld ld}
 */
ht.SelectionModel.prototype.getLastData = function (){};

/**
 * 返回最后被选中的数据元素，如果没有选中数据元素则返回空，{@link ht.SelectionModel#getLastData getLastData}的缩写
 * @return {ht.Data} 最后被选中的数据元素 
 * @see {@link ht.SelectionModel#getLastData getLastData}
 */
ht.SelectionModel.prototype.ld = function (){};

/**
 * 返回选中过滤器函数<br>
 * 有些数据元素不希望被用户选中，可以通过设置此过滤器实现
 * @return {Function} 选中过滤器函数 
 * @see {@link ht.SelectionModel#setFilterFunc setFilterFunc}
 */
ht.SelectionModel.prototype.getFilterFunc = function (){};

/**
 * 设置选中过滤器函数<br>
 * 有些数据元素不希望被用户选中，可以通过设置此过滤器实现
 * @param {Function} func 选中过滤器函数 
 * @example //禁止选中name为test的数据元素
 * selectionModel.setFilterFunc(function(data) {
 *  if (data.getName() === 'test') {
 *  	return false;
 *  } else {
 *  	return true;
 *  }
 * });
 */
ht.SelectionModel.prototype.setFilterFunc = function (func){};

/**
 * 获取所有被选中数据元素集合，注意不可直接对返回的集合进行增删操作，
 * 如果需要增删操作，应使用toSelection方法
 * @return {ht.List} 被选中的数据元素集合 
 * @see {@link ht.SelectionModel#toSelection toSelection}
 */
ht.SelectionModel.prototype.getSelection = function (){};

/**
 * 获取所有被选中数据元素集合，注意不可直接对返回的集合进行增删操作，
 * 如果需要增删操作，应使用toSelection方法
 * @return {ht.List} 被选中的数据元素集合 
 * @see {@link ht.SelectionModel#toSelection toSelection}
 */
ht.SelectionModel.prototype.toSelection = function (matchFunc, scope){};

/**
 * 以matchFunc为过滤函数构建新的元素集合并返回
 * @param {Function} [matchFunc] 过滤函数
 * @param {Object} [scope] 函数域
 * @return {ht.List} 元素集合
 */
ht.SelectionModel.prototype.setSelection = function (datas){};

/**
 * 设置选中数据元素，参数可为单个数据元素，也可为ht.List或Array数组，{@link ht.SelectionModel#setSelection setSelection}的缩写
 * @param {ht.Data|ht.List|Array} datas 数据元素
 */
ht.SelectionModel.prototype.ss = function (datas){};

/**
 * 获取选中模式
 * @default multiple
 * @return {String} none|single|multiple
 */
ht.SelectionModel.prototype.getSelectionMode = function (){};

/**
 * 设置选中模式，可选值：
 * <ul>
 * <li>none:不可选中</li>
 * <li>single:只能选中一个数据元素</li>
 * <li>multiple:可以选中多个数据元素</li>
 * </ul>
 * @default multiple
 * @param {String} mode 选中模式
 */
ht.SelectionModel.prototype.setSelectionMode = function (mode){};

/**
 * 判断是否有选中的数据元素
 * @return {Boolean}
 */
ht.SelectionModel.prototype.isEmpty = function(){};

/**
 * 
 * 判断数据元素是否可被选中
 * @param {ht.Data} data 要判断的数据元素
 * @return {Boolean}
 */
ht.SelectionModel.prototype.isSelectable = function(data){};

/**
 * 取消选中数据元素，参数可为单个数据元素，也可为ht.List或Array数组
 * @param {ht.Data|ht.List|Array} datas 数据元素
 * @see {@link ht.SelectionModel#rs rs}
 */
ht.SelectionModel.prototype.removeSelection = function(datas){};

/**
 * 取消选中数据元素，参数可为单个数据元素，也可为ht.List或Array数组，{@link ht.SelectionModel#removeSelection removeSelection}的缩写
 * @param {ht.Data|ht.List|Array} datas 数据元素
 * @see {@link ht.SelectionModel#removeSelection removeSelection}
 */
ht.SelectionModel.prototype.rs = function(datas){};

/**
 * 选中DataModel中的所有数据元素
 * @see {@link ht.SelectionModel#sa sa}
 */
ht.SelectionModel.prototype.selectAll = function(){};

/**
 * 选中DataModel中的所有数据元素，{@link ht.SelectionModel#selectAll selectAll}的缩写
 * @see {@link ht.SelectionModel#selectAll selectAll}
 */
ht.SelectionModel.prototype.sa = function(){};

/**
 * 获取选中模型中数据元素的个数
 * @return {Number}
 */
ht.SelectionModel.prototype.size = function(){};






/**
 * 数据元素基类，包含基本属性设置、样式设置、事件派发、父子关系等功能
 * @constructor
 */
ht.Data = function (){};

/**
 * 添加孩子节点，index为孩子插入索引，为空则插入作为最后的孩子，内部会自动调用child的setParent
 * @param {ht.Data} child 孩子元素
 * @param {Number} [index] 插入索引
 */
ht.Data.prototype.addChild = function (child, index){};

/**
 * 增加icon，icon参数请参考beginner guide
 * @param {String} name icon名
 * @param {Object} icon icon参数
 * @example
 * data.addStyleIcon("arrow1", {
  *    position: 2,
  *    width: 50,
  *    height: 25,
  *    keepOrien: true,
  *    names: ['arrow']
  *});
 */
ht.Data.prototype.addStyleIcon = function (name, icon){};

/**
 * 删除所有孩子节点，内部会自动调用setParent
 */
ht.Data.prototype.clearChildren = function (){};

/**
 * 获取{@link ht.DataModel DataModel}，{@link ht.Data#getDataModel getDataModel}的缩写
 * @return {ht.DataModel} dataModel
 */
ht.Data.prototype.dm = function (dataModel){};

/**
 * 遍历孩子元素
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example data.eachChild(function(child) {
 *    console.log(child.getId());
 * });
 * 
 */
ht.Data.prototype.eachChild = function (func, scope){};

/**
 * 派发属性变化事件
 * @param {String} property 属性名
 * @param {Object} oldValue 旧值
 * @param {Object} newValue 新值
 */
ht.Data.prototype.firePropertyChange = function (property, oldValue, newValue){};

/**
 * 派发属性变化事件，同{@link ht.Data#firePropertyChange firePropertyChange}
 * @param {String} property 属性名
 * @param {Object} oldValue 旧值
 * @param {Object} newValue 新值
 */
ht.Data.prototype.fp = function (property, oldValue, newValue){};


/**
 * 获取attr属性对象，该属性默认为空，用于存储用户业务信息
 * @return {Object} attr属性对象
 */
ht.Data.prototype.getAttrObject = function (){};

/**
 * 返回指定索引位置的孩子
 * @param {Number} index 索引
 * @return {ht.Data} 索引对应的孩子
 */
ht.Data.prototype.getChildAt = function (index){};

/**
 * 获取所有孩子节点
 * @return {ht.List} 孩子元素集合
 */
ht.Data.prototype.getChildren = function (){};

/**
 * 获取类声明(构造函数)
 * @return {Function} 类声明(构造函数)
 */
ht.Data.prototype.getClass = function (){};

/**
 * 获取类全名，继承Data并希望序列化时应该重写此方法返回子类的类名字符串
 * @see {@link ht.Data#getSuperClass}
 * @return {String} 类全名
 */
ht.Data.prototype.getClassName = function (){};

/**
 * 获取所属的DataModel
 * @return {ht.DataModel} DataModel数据容器
 */
ht.Data.prototype.getDataModel = function (){};

/**
 * 获取显示名称，常作为Column和Property的列头和属性名称显示
 * @return {String} 显示名称
 */
ht.Data.prototype.getDisplayName = function (){};

/**
 * 获取小图标名称，常作为TreeView和ListView等组件上的节点小图标
 * @return {String|Object} 图标名或矢量
 */
ht.Data.prototype.getIcon = function (){};

/**
 * 获取唯一编号
 * @return {Number} 唯一编号
 */
ht.Data.prototype.getId = function (){};

/**
 * 获取数据元素在GraphView组件中的图层位置
 * @default 0
 * @return {String|Number} 图层名
 */
ht.Data.prototype.getLayer = function (){};

/**
 * 获取父元素
 * @return {ht.Data} 父元素
 */
ht.Data.prototype.getParent = function (){};

/**
 * 获取数据元素名
 * @return {String} 名称
 */
ht.Data.prototype.getName = function (){};

/**
 * 此函数返回一个map，决定序列化时哪些属性可被序列化，如果有自定义的get/set属性并且需要序列化，应该重写此方法
 * @example function(){
 *     return {
 *         name: 1,
 *         displayName: 1, 
 *         icon: 1, 
 *         toolTip: 1, 
 *         parent: 1,
 *         layer: 1,
 *         tag: 1,
 *         adjustChildrenToTop: 1            
 *     };
 * }
 * @return {Object} 需要被序列化的属性map
 */
ht.Data.prototype.getSerializableProperties = function(){};

/**
 * 此函数返回一个map，决定序列化时哪些attr属性可被序列化，默认所有attr对象里的属性都会被序列化
 * @example function(){
 *     var name, map = {};
 *     for (name in this._attrObject) {            
 *         map[name] = 1;
 *     }
 *     return map; 
 * }
 * @return {Object} 需要被序列化的attr属性map
 */
ht.Data.prototype.getSerializableAttrs = function(){};

/**
 * 此函数返回一个map，决定序列化时哪些样式可被序列化，默认所有样式都会被序列化
 * @example function(){            
 *     var name, map = {};
 *     for (name in this._styleMap) {            
 *         map[name] = 1;
 *     }
 *     return map; 
 * }
 * @return {Object} 需要被序列化的样式map
 */
ht.Data.prototype.getSerializableStyles = function(){};

/**
 * 获取或设置attr属性，仅有一个参数时相当于{@link ht.Data#getAttr getAttr}，有两个参数时相当于{@link ht.Data#setAttr setAttr}
 * @param {String} name 属性名
 * @param {Object} [value] 属性值
 * @returns {Object}
 */
ht.Data.prototype.a = function (name, value){};

/**
 * 获取或设置样式，仅有一个参数时相当于{@link ht.Data#getStyle getStyle}，有两个参数时相当于{@link ht.Data#setStyle setStyle}
 * @param {String} name 样式名
 * @param {Object} [value] 样式值
 * @returns {Object}
 */
ht.Data.prototype.s = function (name, value){};

/**
 * 获取样式属性
 * @param {String} name 样式名
 * @returns {Object}
 */
ht.Data.prototype.getStyle = function (name){};
/**
 * 设置样式
 * @param {String} name 样式名
 * @param {Object} value 样式值
 */
ht.Data.prototype.setStyle = function (name, value){};

/**
 * 获取attr属性
 * @param {String} name 属性名
 * @returns {Object}
 */
ht.Data.prototype.getAttr = function (name){};
/**
 * 设置attr属性
 * @param {String} name 属性名
 * @param {Object} value 属性值
 */
ht.Data.prototype.setAttr = function (name, value){};

/**
 * 获取图元内部样式映射信息
 * @returns {Object} 样式映射表
 */
ht.Data.prototype.getStyleMap = function (){};

/**
 * 获取父类声明(构造函数)，继承类时可以用来调用父类构造或函数
 * @example function MyNode() {
 *      this.getSuperClass().call(this);//调用父类构造函数
 * }
 * ht.Default.def(MyNode, ht.Data, {
 *    setName: function(name) {
 *    	this.getSuperClass().prototype.setName.call(this, name);//调用父类的setName函数 
 *    	this._username = name;
 *    }
 * });
 * 
 * @returns {Function} 父类声明(构造函数)
 */
ht.Data.prototype.getSuperClass = function (){};

/**
 * 获取标示号，可通过{@link ht.DataModel#getDataByTag getDataByTag}快速查找
 * @returns {String} 标示号
 */
ht.Data.prototype.getTag = function (){};

/**
 * 获取文字提示信息
 * @returns {String} 文字提示
 */
ht.Data.prototype.getToolTip = function (){};

/**
 * 获取拓扑组件上的UI类
 * @returns {Function} UI类声明(构造函数)
 */
ht.Data.prototype.getUIClass = function (){};

/**
 * 判断是否有孩子
 * @returns {Boolean} 是否有孩子
 */
ht.Data.prototype.hasChildren = function (){};

/**
 * 强制触发属性变化事件通知界面更新
 */
ht.Data.prototype.invalidate = function (){};

/**
 * GraphView点击图元会自动sendToTop，该属性决定是否对子图元也进行sendToTop操作
 * @return {Boolean} 是否将children自动sendToTop
 */
ht.Data.prototype.isAdjustChildrenToTop = function (){};

/**
 * 判断自身是否为指定data的子孙
 * @param {ht.Data} data 要对比的数据元素
 * @return {Boolean} 自身是否为指定data的子孙
 */
ht.Data.prototype.isDescendantOf = function (data){};

/**
 * 判断是否有孩子，同{@link ht.Data#hasChildren hasChildren}
 * @return {Boolean} 是否有孩子
 */
ht.Data.prototype.isEmpty = function (){};

/**
 * 判断自身是否为指定data的父亲
 * @param {ht.Data} data 要对比的数据元素
 * @return {Boolean} 自身是否为指定data的父亲
 */
ht.Data.prototype.isParentOf = function (data){};

/**
 * 判断自身与指定data是否有父子或子孙关系
 * @param {ht.Data} data 要对比的数据元素
 * @return {Boolean} 自身与指定data是否有父子或子孙关系
 */
ht.Data.prototype.isRelatedTo = function (data){};

/**
 * 强制触发属性变化事件通知界面更新，{@link ht.Data#invalidate invalidate}的缩写
 */
ht.Data.prototype.iv = function (){};

/**
 * 添加孩子时的回调函数，可重载做后续处理
 * @param {ht.Data} child 新增加的孩子元素
 * @param {Number} index 索引
 */
ht.Data.prototype.onChildAdded = function (child, index){};

/**
 * 删除孩子时的回调函数，可重载做后续处理
 * @param {ht.Data} child 被删除的孩子元素
 * @param {Number} index 索引
 */
ht.Data.prototype.onChildRemoved = function (child, index){};

/**
 * 改变父亲元素时的回调函数，可重载做后续处理
 * @param {ht.Data} oldParent 旧的父元素
 * @param {ht.Data} parent 新的父元素
 */
ht.Data.prototype.onParentChanged = function (oldParent, parent){};

/**
 * 属性变化回调函数，可重载做后续处理
 * @param {Object} event 属性变化事件
 * @example //event格式：
 * {
 * 	property: 'name',//发生变化的属性
 * 	oldValue: 'oldValue',//旧值
 * 	newValue: 'newValue',''新值
 * 	data: data//发生变化的data
 * }
 * 
 */
ht.Data.prototype.onPropertyChanged = function (event){};

/**
 * 样式属性变化时会回调该函数，可重载做后续处理
 * @param {String} name 样式名
 * @param {Object} oldValue 旧的样式值
 * @param {Object} newValue 新的样式值
 */
ht.Data.prototype.onStyleChanged = function (name, oldValue, newValue){};

/**
 * 删除指定孩子元素，内部会自动调用孩子元素的setParent
 * @param {ht.Data} child 要删除的孩子元素
 */
ht.Data.prototype.removeChild = function (child){};

/**
 * 删除icon
 * @param {String} name 要删除的icon名
 */
ht.Data.prototype.removeStyleIcon = function (name){};

/**
 * GraphView点击图元会自动sendToTop，该属性决定是否对子图元也进行sendToTop操作
 * @param {Boolean} adjustToTop 是否将children自动sendToTop
 */
ht.Data.prototype.setAdjustChildrenToTop = function (adjustToTop){};

/**
 * 设置attr属性对象，该属性默认为空，用于存储用户业务信息
 * @param {Object} attrObject attr属性对象
 */
ht.Data.prototype.setAttrObject = function (attrObject){};

/**
 * 设置显示名称，常作为Column和Property的列头和属性名称显示
 * @param {String}  displayName 显示名称
 */
ht.Data.prototype.setDisplayName = function (displayName){};

/**
 * 设置小图标名称，常作为TreeView和ListView等组件上的节点小图标
 * @param {String|Object} icon 图标名或矢量
 */
ht.Data.prototype.setIcon = function (icon){};

/**
 * 设置唯一编号，如果手工设置，一定要确保在data加入到DataModel之前设置并且唯一不重复
 * @param {String|Number} id 唯一编号
 */
ht.Data.prototype.setId = function (id){};

/**
 * 设置数据元素在GraphView组件中的图层位置
 * @param {String|Number} layer 图层名
 */
ht.Data.prototype.setLayer = function (layer){};

/**
 * 设置数据元素名称
 * @param {String} name 数据元素名称
 */
ht.Data.prototype.setName = function (name){};

/**
 * 设置父元素
 * @param {ht.Data} parent 父元素
 */
ht.Data.prototype.setParent = function (parent){};

/**
 * 设置标示号，可通过{@link ht.DataModel#getDataByTag getDataByTag}快速查找
 * @param {String} tag 标示号
 */
ht.Data.prototype.setTag = function (tag){};

/**
 * 设置文字提示信息
 * @param {String} toolTip 文字提示
 */
ht.Data.prototype.setToolTip = function (toolTip){};

/**
 * 获取孩子元素总数
 * @return {Number} 孩子元素总数
 */
ht.Data.prototype.size = function (){};

/**
 * 以matchFunc为过滤函数构建新的孩子元素集合
 * @param {Function} [matchFunc] 过滤函数
 * @param {Object} [scope] 函数域
 * @example var list = data.toChildren(function(child) {
 *    if (child.a('visible')) {
 *    	return true;
 *    }
 * });
 * 
 * @return {ht.List} 孩子元素集合
 */
ht.Data.prototype.toChildren = function (matchFunc, scope){};

/**
 * 返回值作为TreeView和GraphView等组件上的图元文字标签，默认返回displayName||name信息
 * @return {String} 文字标签
 */
ht.Data.prototype.toLabel = function (){};

/**
 * 重写js默认的toString
 * @return {String}
 */
ht.Data.prototype.toString = function (){};





/**
 * 拓扑图元类型
 * @constructor
 * @extends ht.Data
 */
ht.Node = function() {};

/** 
 * 获取当前图元代理的连线集合
 * @return {ht.List}
 */
ht.Node.prototype.getAgentEdges = function(){};

/** 
 * 获取吸附到自身的所有图元
 * @return {ht.List}
 */
ht.Node.prototype.getAttaches = function(){};

/** 
 * 获取图元四个角的实时坐标(包括旋转后的坐标)
 * @param {Number} xPadding 水平方向padding
 * @param {Number} yPadding 垂直方向padding
 * @example //返回值示例：
 * [
 * {x: 0, y: 0},//左上
 * {x: 100, y: 0},//右上
 * {x: 100, y: 100},//右下
 * {x: 0, y: 100}//左下
 * ]
 * @return {Array} 四个角坐标，顺序为左上，右上，右下，左下
 */
ht.Node.prototype.getCorners = function(xPadding, yPadding){};

/** 
 * 获取图元中心在3D坐标系中的y坐标
 * @return {Number}
 */
ht.Node.prototype.getElevation = function(){};

/** 
 * 获取所有跟图元关联的连线(不包括代理的连线)
 * @return {ht.List}
 */
ht.Node.prototype.getEdges = function(){};

/** 
 * 获取图元在2D拓扑中的高度，或3D拓扑中的z轴长度
 * @return {Number}
 */
ht.Node.prototype.getHeight = function(){};

/** 
 * 获取宿主图元，当图元吸附上宿主图元时，宿主移动或旋转时会带动所有吸附者
 * @return {ht.Data}
 */
ht.Node.prototype.getHost = function(){};

/** 
 * 获取拓扑上展现的图片信息，在GraphView拓扑图中图片一般以position为中心绘制
 * @return {ht.Data}
 */
ht.Node.prototype.getImage = function(){};

/** 
 * 获取所有跟节点关联的自环连线
 * @return {ht.List}
 */
ht.Node.prototype.getLoopedEdges = function(){};

/** 
 * 获取图元中心点坐标
 * @example //返回值示例：
 * {
 * 	x: 0,
 * 	y: 0
 * }
 * 
 * @return {Object}
 */
ht.Node.prototype.getPosition = function(){};

/** 
 * 获取图元中心点在3D拓扑中的三维坐标
 * @return {Array} 三维坐标数组，格式为[x, y, z]
 */
ht.Node.prototype.getPosition3d = function(){};

/** 
 * 获取图元的矩形区域(包括旋转)
 * @example //返回值示例：
 * {x: 0, y: 0, width: 100, height: 100}
 * @return {Object} 矩形区域
 */
ht.Node.prototype.getRect = function(){};

/** 
 * 获取图元的旋转角度，围绕中心点顺时针旋转
 * @return {Number} 旋转角度(弧度制)
 */
ht.Node.prototype.getRotation = function(){};

/** 
 * 获取图元在3D拓扑中的三维旋转角度
 * @return {Array} 三维旋转角度(弧度制)，格式为[x, y, z]，即[getRotationX(), -getRotation(), getRotationZ()]
 */
ht.Node.prototype.getRotation3d = function(){};

/** 
 * 返回三维旋转模式<br>
 * 图元在3D拓扑中旋转时，先沿x轴旋转，再沿y轴旋转和先沿y轴旋转，再沿x轴旋转最后的结果是不一样的
 * @return {String} 三维旋转模式，xyz|xzy|yxz|yzx|zxy|zyx
 * @see {@link ht.Node#setRotationMode setRotationMode}
 */
ht.Node.prototype.getRotationMode = function(){};

/** 
 * 获取图元在3d拓扑中沿x轴的旋转角度(弧度制)
 * @return {Number} 
 */
ht.Node.prototype.getRotationX = function(){};

/** 
 * 获取图元在3d拓扑中沿y轴的旋转角度(弧度制)
 * @return {Number} 
 */
ht.Node.prototype.getRotationY = function(){};

/** 
 * 获取图元在3d拓扑中沿z轴的旋转角度(弧度制)
 * @return {Number} 
 */
ht.Node.prototype.getRotationZ = function(){};

/** 
 * 获取图元在2D拓扑中的尺寸(宽高)
 * @example //返回值示例：
 * {
 * 	with: 100,
 * 	height: 100
 * }
 * @return {Object} 
 */
ht.Node.prototype.getSize = function(){};

/** 
 * 获取图元在3D拓扑中的尺寸(长宽高)
 * @return {Array} 格式为[x, y, z]，即[getWidth(), getTall(), getHeight()]
 */
ht.Node.prototype.getSize3d = function(){};

/** 
 * 获取代理的起始于该图元的连线
 * @return {ht.List} 
 */
ht.Node.prototype.getSourceAgentEdges = function(){};

/** 
 * 获取跟图元关联的并起始于该图元的连线(不包括代理的连线)
 * @return {ht.List} 
 */
ht.Node.prototype.getSourceEdges = function(){};

/** 
 * 获取图元在3D拓扑中的y轴长度
 * @return {Number} 
 */
ht.Node.prototype.getTall = function(){};

/** 
 * 获取图元代理的结束于该图元的连线
 * @return {ht.List} 
 */
ht.Node.prototype.getTargetAgentEdges = function(){};

/** 
 * 获取跟图元关联的并结束于该图元的连线(不包括代理的连线)
 * @return {ht.List} 
 */
ht.Node.prototype.getTargetEdges = function(){};

/** 
 * 获取图元在2D拓扑中的宽度，或在3D拓扑中x轴的长度
 * @return {Number} 
 */
ht.Node.prototype.getWidth = function(){};

/** 
 * 当吸附宿主对象属性发生变化时回调该函数，可重载做后续处理
 * @param {Event} event 事件对象
 */
ht.Node.prototype.handleHostPropertyChange = function(event){};

/** 
 * 判断当前图元上是否有代理连线
 * @return {Boolean} 
 */
ht.Node.prototype.hasAgentEdges = function(){};

/** 
 * 判断当前图元是否吸附到指定图元对象上
 * @param {ht.Node} node 指定的图元
 * @return {Boolean} 
 */
ht.Node.prototype.isHostOn = function(node){};

/** 
 * 当吸附的宿主对象发生变化时回调该函数，可重载做后续处理
 * @param {ht.Node} oldHost 旧的宿主
 * @param {ht.Node} newHost 新的宿主
 */
ht.Node.prototype.onHostChanged = function(oldHost, newHost){};

/** 
 * 获取或设置设置图元中心点坐标，有两个参数时相当于{@link ht.Node#setPosition setPosition}，没有参数时相当于{@link ht.Node#getPosition getPosition}
 * @param {Number} [x] x坐标
 * @param {Number} [y] y坐标
 * @see {@link ht.Node#setPosition setPosition}
 * @see {@link ht.Node#getPosition getPosition}
 * @return {Object} 坐标值，格式为:{x: x, y: y}
 */
ht.Node.prototype.p = function(x, y){};

/** 
 * 获取或设置图元中心点在3D拓扑中的三维坐标，有三个参数时相当于{@link ht.Node#setPosition3d setPosition3d}，没有参数时相当于{@link ht.Node#getPosition3d getPosition3d}
 * @param {Number} [x] x坐标
 * @param {Number} [y] y坐标
 * @param {Number} [z] z坐标
 * @see {@link ht.Node#setPosition3d setPosition3d}
 * @see {@link ht.Node#getPosition3d getPosition3d}
 * @return {Array} 三维坐标数组，格式为[x, y, z]
 */
ht.Node.prototype.p3 = function(x, y, z){};

/** 
 * 获取或设置图元在3D拓扑中的三维旋转角度，有三个参数时相当于{@link ht.Node#setRotation3d setRotation3d}，没有参数时相当于{@link ht.Node#getRotation3d getRotation3d}
 * @param {Number} [rotationX] 沿x轴的旋转角度(弧度制)
 * @param {Number} [rotationY] 沿y轴的旋转角度(弧度制)
 * @param {Number} [rotationZ] 沿z轴的旋转角度(弧度制)
 * @see {@link ht.Node#setRotation3d setRotation3d}
 * @see {@link ht.Node#getRotation3d getRotation3d}
 * @return {Array} 三维旋转角度(弧度制)，格式为[x, y, z]，即[getRotationX(), -getRotation(), getRotationZ()]
 */
ht.Node.prototype.r3 = function(rotationX, rotationY, rotationZ){};

/** 
 * 以指定的坐标为中心旋转图元
 * @param {Number} x 指定x坐标
 * @param {Number} y 指定y坐标
 * @param {Number} angle 旋转角度(弧度制)
 */
ht.Node.prototype.rotateAt = function(x, y, angle){};

/** 
 * 获取或设置图元在3D拓扑中的尺寸，有三个参数时相当于{@link ht.Node#setSize3d setSize3d}，没有参数时相当于{@link ht.Node#getSize3d getSize3d}
 * @param {Number} width x轴方向的长度
 * @param {Number} tall y轴方向的长度
 * @param {Number} height z轴方向的长度
 * @see {@link ht.Node#setSize3d setSize3d}
 * @see {@link ht.Node#getSize3d getSize3d}
 * @return {Array} 格式为[x, y, z]，即[getWidth(), getTall(), getHeight()]
 */
ht.Node.prototype.s3 = function(width, tall, height){};

/** 
 * 设置图元中心在3D坐标系中的y坐标
 * @param {Number} elevation y轴方向的坐标值
 */
ht.Node.prototype.setElevation = function(elevation){};

/** 
 * 设置图元在2D拓扑中的高度，或3D拓扑中的z轴长度
 * @param {Number} height 2D拓扑中的高度，或3D拓扑中的z轴长度
 */
ht.Node.prototype.setHeight = function(height){};

/** 
 * 设置宿主图元，当图元吸附上宿主图元时，宿主移动或旋转时会带动所有吸附者
 * @param {ht.Data} data 宿主图元
 */
ht.Node.prototype.setHost = function(data){};

/** 
 * 设置拓扑上展现的图片信息，在GraphView拓扑图中图片一般以position为中心绘制
 * @param {String|Object} image 注册的图片名或url或矢量对象
 */
ht.Node.prototype.setImage = function(image){};

/** 
 * 设置图元中心点坐标
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 */
ht.Node.prototype.setPosition = function(x, y){};

/** 
 * 设置图元中心点在3D拓扑中的三维坐标
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Number} z z坐标
 */
ht.Node.prototype.setPosition3d = function(x, y, z){};

/** 
 * 设置图元矩形区域
 * @param {Number} x x坐标
 * @param {Number} y y坐标
 * @param {Number} width 宽度
 * @param {Number} height 高度
 */
ht.Node.prototype.setRect = function(x, y, width, height){};

/** 
 * 设置图元的旋转角度，围绕中心点顺时针旋转
 * @param {Number} rotation 旋转角度(弧度制)
 */
ht.Node.prototype.setRotation = function(rotation){};

/** 
 * 设置图元在3D拓扑中的三维旋转角度
 * @param {Number} x 沿x轴的旋转角度(弧度制)
 * @param {Number} y 沿y轴的旋转角度(弧度制)
 * @param {Number} z 沿z轴的旋转角度(弧度制)
 */
ht.Node.prototype.setRotation3d = function(x, y, z){};

/** 
 * 设置三维旋转模式<br>
 * 图元在3D拓扑中旋转时，先沿x轴旋转，再沿y轴旋转和先沿y轴旋转，再沿x轴旋转最后的结果是不一样的
 * @param {String} rotationMode 旋转模式，可选值如下：
 * <ul>
 * <li>xyz:先进行x轴旋转，再进行y轴旋转，最后进行z轴旋转</li>
 * <li>xzy:先进行x轴旋转，再进行z轴旋转，最后进行y轴旋转</li>
 * <li>yxz:先进行y轴旋转，再进行x轴旋转，最后进行z轴旋转</li>
 * <li>yzx:先进行y轴旋转，再进行z轴旋转，最后进行x轴旋转</li>
 * <li>zxy:先进行z轴旋转，再进行x轴旋转，最后进行y轴旋转</li>
 * <li>zyx:先进行z轴旋转，再进行y轴旋转，最后进行x轴旋转</li>
 * </ul>
 * @see {@link ht.Node#getRotationMode getRotationMode}
 */
ht.Node.prototype.setRotationMode = function(rotationMode){};

/** 
 * 设置图元在3D拓扑中沿x轴的旋转角度(弧度制)
 * @param {Number} rotationX 旋转角度(弧度制)
 */
ht.Node.prototype.setRotationX = function(rotationX){};

/** 
 * 设置图元在3D拓扑中沿y轴的旋转角度(弧度制)
 * @param {Number} rotationY 旋转角度(弧度制)
 */
ht.Node.prototype.setRotationY = function(rotationY){};

/** 
 * 设置图元在3D拓扑中沿z轴的旋转角度(弧度制)
 * @param {Number} rotationZ 旋转角度(弧度制)
 */
ht.Node.prototype.setRotationZ = function(rotationZ){};

/** 
 * 设置图元在2D拓扑中的尺寸(宽高)
 * @param {Number} width 宽度
 * @param {Number} height 高度
 */
ht.Node.prototype.setSize = function(width, height){};

/** 
 * 设置图元在3D拓扑中的尺寸
 * @param {Number} width x轴方向的长度
 * @param {Number} tall y轴方向的长度
 * @param {Number} height z轴方向的长度
 */
ht.Node.prototype.setSize3d = function(width, tall, height){};

/** 
 * 设置图元在3D拓扑中的y轴方向的长度
 * @return {Number} tall y轴方向的长度
 */
ht.Node.prototype.setTall = function(tall){};

/** 
 * 设置图元在3D拓扑中的x轴方向的长度
 * @return {Number} width x轴方向的长度
 */
ht.Node.prototype.setWidth = function(width){};

/** 
 * 在当前坐标的基础上增加x、y、z三个方向的平移值，{@link ht.Node#translate3d translate3d}的缩写
 * @param {Number} tx x轴方向的平移值
 * @param {Number} ty y轴方向的平移值
 * @param {Number} tz z轴方向的平移值
 * @see {@link ht.Node#translate3d translate3d}
 */
ht.Node.prototype.t3 = function(tx, ty, tz){};

/** 
 * 在当前坐标的基础上增加x、y两个方向的平移值
 * @param {Number} tx x轴方向的平移值
 * @param {Number} ty y轴方向的平移值
 */
ht.Node.prototype.translate = function(tx, ty){};

/** 
 * 在当前坐标的基础上增加x、y、z三个方向的平移值，{@link ht.Node#t3 t3}的缩写
 * @param {Number} tx x轴方向的平移值
 * @param {Number} ty y轴方向的平移值
 * @param {Number} tz z轴方向的平移值
 * @see {@link ht.Node#t3 t3}
 */
ht.Node.prototype.translate3d = function(tx, ty, tz){};

/** 
 * 沿向量平移
 * @param {Array} direction 方向向量
 * @param {Number} distance 平移距离
 */
ht.Node.prototype.translate3dBy = function(direction, distance){};

/** 
 * 沿向量[0, 0, -1]平移
 * @param {Number} distance 平移距离
 */
ht.Node.prototype.translateBack = function(distance){};

/** 
 * 沿向量[0, -1, 0]平移
 * @param {Number} distance 平移距离
 */
ht.Node.prototype.translateBottom = function(distance){};

/** 
 * 沿向量[0, 0, 1]平移
 * @param {Number} distance 平移距离
 */
ht.Node.prototype.translateFront = function(distance){};

/** 
 * 沿向量[-1, 0, 0]平移
 * @param {Number} distance 平移距离
 */
ht.Node.prototype.translateLeft = function(distance){};

/** 
 * 沿向量[1, 0, 0]平移
 * @param {Number} distance 平移距离
 */
ht.Node.prototype.translateRight = function(distance){};

/** 
 * 沿向量[0, 1, 0]平移
 * @param {Number} distance 平移距离
 */
ht.Node.prototype.translateTop = function(distance){};





/**
 * 拓扑连线，用于连接起始和目标两个Node节点，两个节点间可以有多条Edge存在，
 * 也允许起始和目标为同一节点。 <br>
 * 连线的agent指的是目前拓扑上真正代理连接该连线的节点，
 * 当节点位于关闭的Group之内时，Group将代理内部的节点进行连接。
 * @constructor
 * @extends ht.Data
 */
ht.Edge = function() {};

/** 
 * 获取连线组，起始和目标节点间有多条连线时才有值
 * @return {ht.EdgeGroup} 连线分组
 */
ht.Edge.prototype.getEdgeGroup = function(){};

/** 
 * 获取当前连线在连线组内的索引
 * @return {Number} 索引
 */
ht.Edge.prototype.getEdgeGroupIndex = function(){};

/** 
 * 获取当前连线在连线组内的索引
 * @return {Number} 索引
 */
ht.Edge.prototype.getEdgeGroupIndex = function(){};

/** 
 * 获取当前连线所在的连线组中的连线数
 * @return {Number} 连线数
 */
ht.Edge.prototype.getEdgeGroupSize = function(){};

/** 
 * 获取起始图元
 * @return {ht.Node} 起始图元
 */
ht.Edge.prototype.getSource = function(){};

/** 
 * 获取拓扑上连接的起始图元(代理)
 * @return {ht.Node} 起始图元(代理)
 */
ht.Edge.prototype.getSourceAgent = function(){};

/** 
 * 获取目标图元
 * @return {ht.Node} 目标图元
 */
ht.Edge.prototype.getTarget = function(){};

/** 
 * 获取拓扑上连接的目标图元(代理)
 * @return {ht.Node} 目标图元(代理)
 */
ht.Edge.prototype.getTargetAgent = function(){};

/** 
 * 获取当前连线是否为所在连线组的代理
 * @return {Boolean}
 */
ht.Edge.prototype.isEdgeGroupAgent = function(){};

/** 
 * 判断当前连线在连线组中是否被隐藏
 * @return {Boolean}
 */
ht.Edge.prototype.isEdgeGroupHidden = function(){};

/** 
 * 是否是自环(起始和目标是同一个图元)
 * @return {Boolean}
 */
ht.Edge.prototype.isLooped = function(){};

/** 
 * 设置起始图元
 * @param {ht.Node} source 起始图元
 */
ht.Edge.prototype.setSource = function(source){};

/** 
 * 设置目标图元
 * @param {ht.Node} target 目标图元
 */
ht.Edge.prototype.setTarget = function(target){};





/**
 * 连线分组
 * @constructor
 */
ht.EdgeGroup = function() {};

/**
 * 提供一个回调函数遍历此分组的所有连线
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example edgeGroup.each(function(edge) {
 *   console.log(edge);
 * });
 */
ht.EdgeGroup.prototype.each = function(func, scope){};

/**
 * 提供一个回调函数遍历相同起始和目标图元之间其它分组中的连线
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example edgeGroup.eachSiblingEdge(function(edge) {
 *   console.log(edge);
 * });
 */
ht.EdgeGroup.prototype.eachSiblingEdge = function(func, scope){};

/**
 * 根据索引获取分组中的连线
 * @param {Number} index 索引
 * @return {ht.Edge}
 */
ht.EdgeGroup.prototype.get = function(index){};

/**
 * 获取分组中所有连线
 * @return {ht.List}
 */
ht.EdgeGroup.prototype.getEdges = function(){};

/**
 * 获取相同起始和目标图元之间的其它分组
 * @return {ht.List}
 */
ht.EdgeGroup.prototype.getSiblings = function(){};

/**
 * 获取参数连线在分组中的索引
 * @param {ht.Edge} edge 连线
 * @return {Number}
 */
ht.EdgeGroup.prototype.indexOf = function(edge){};

/**
 * 获取分组中的连线数量
 * @return {Number}
 */
ht.EdgeGroup.prototype.size = function(){};





/**
 * 组图元类型，可以包含Node和其它孩子元素，可双击展开或关闭
 * @constructor
 * @extends ht.Node
 */
ht.Group = function() {};

/** 
 * 判断Group对象是否处于展开状态
 * @return {Boolean}
 */
ht.Group.prototype.isExpanded = function(){};

/** 
 * 设置Group对象的展开关闭状态
 * @param {Boolean} expanded 为true展开，false关闭
 */
ht.Group.prototype.setExpanded = function(expanded){};

/** 
 * 切换展开关闭状态
 */
ht.Group.prototype.toggle = function(){};


/**
 * 多边形元素，由多点组合形成的多边形，如果不填充背景色，可作为折线或曲线
 * @constructor
 * @extends ht.Node
 */
ht.Shape = function() {};

/** 
 * 增加点 
 * @param {Object} point 坐标点 
 * @param {Number} [index] 索引，如果不指定索引则加到最后
 */
ht.Shape.prototype.addPoint = function(point, index){};

/** 
 * 计算Shape的长度
 * @param {Number} [resolution] 曲线分段微分数，默认为12，数字越大计算结果越精确，同时也越耗费性能
 * @return {Number}
 */
ht.Shape.prototype.getLength = function(resolution){};

/** 
 * 获取点集合
 * @return {ht.List}
 */
ht.Shape.prototype.getPoints = function(){};

/** 
 * 获取线段类型集合
 * @return {ht.List}
 */
ht.Shape.prototype.getSegments = function(){};

/** 
 * 获取3D拓扑中的线段厚度，小于0时可实现类似地板的填充效果
 * @return {Number}
 */
ht.Shape.prototype.getThickness = function(){};

/** 
 * 是否闭合Shape
 * @return {Boolean}
 */
ht.Shape.prototype.isClosePath = function(){};

/** 
 * 根据索引删除点
 * @param {Number} index 索引
 */
ht.Shape.prototype.removePointAt = function(index){};

/** 
 * 设置是否闭合Shape
 * @param {Boolean} v
 */
ht.Shape.prototype.setClosePath = function(v){};

/** 
 * 修改索引指向的点坐标
 * @param {Number} index 索引
 * @param {Object} point 新坐标点
 */
ht.Shape.prototype.setPoint = function(index, point){};

/** 
 * 设置Shape的点
 * @param {ht.List} points
 */
ht.Shape.prototype.setPoints = function(points){};

/** 
 * 设置Shape的线段类型
 * @param {ht.List} segments
 */
ht.Shape.prototype.setSegments = function(segments){};

/** 
 * 设置3D拓扑中的线段厚度，小于0时可实现类似地板的填充效果
 * @param {Number} thickness
 */
ht.Shape.prototype.setThickness = function(thickness){};

/** 
 * 构建一个新的Shape点集合并返回
 * @return {ht.List}
 */
ht.Shape.prototype.toPoints = function(){};

/** 
 * 构建一个新的线段类型集合并返回
 * @return {ht.List}
 */
ht.Shape.prototype.toSegments = function(){};





/**
 * 网格类型，可嵌套包含附属节点，以网格方式定位附属节点，一般用于呈现设备面板
 * @constructor
 * @extends ht.Node
 */
ht.Grid = function() {};

/** 
 * 获取单元格的矩形范围
 * @param {Number} rowIndex 行索引
 * @param {Number} columnIndex 列索引
 */
ht.Grid.prototype.getCellRect = function(rowIndex, columnIndex){};
/**
 * 子网类型，分层次管理呈现图元，可根据区域或业务分类管理图元
 * @constructor
 * @extends ht.Node
 */
ht.SubGraph = function() {};
/**
 * 页签，用于加入TabView页签组件
 * @constructor
 * @extends ht.Data
 */
ht.Tab = function() {};

/** 
 * 获取页签被选中时呈现的视图组件
 * @return {HTMLElement}
 */
ht.Tab.prototype.getView = function(){};

/** 
 * 页签是否可被关闭
 * @return {Boolean}
 */
ht.Tab.prototype.isClosable = function(){};

/** 
 * 页签是否被禁用
 * @return {Boolean}
 */
ht.Tab.prototype.isDisabled = function(){};

/** 
 * 设置页签是否可被关闭
 * @param {Boolean} v
 */
ht.Tab.prototype.setClosable = function(v){};

/** 
 * 设置页签是否被禁用
 * @param {Boolean} v
 */
ht.Tab.prototype.setDisabled = function(v){};

/** 
 * 设置页签被选中时呈现的视图组件
 * @param {HTMLElement} v
 */
ht.Tab.prototype.setView = function(v){};

/**
 * 列数据，用于定义表格组件的列信息，包含列名称、类型以及自定义渲染和编辑单元格等信息
 * @constructor
 * @extends ht.Data
 */
ht.Column = function() {};

/** 
 * 将要显示的值传入此方法格式化处理并返回，一般用于将数字转换更易读的文本格式，可重载自定义
 * @param {Object} value 格式化之前值
 * @return {Object} 格式化之后的值
 */
ht.Column.prototype.formatValue = function(value) {};

/** 
 * 获取列的属性类型，值列表如下：<br>
 * <ul>
 * <li>null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取</li>
 * <li>style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取</li>
 * <li>field：如name为age，采用data.age和data.age = 98的方式存取</li>
 * <li>attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取</li>
 * </ul>
 * @return {String|null}
 */
ht.Column.prototype.getAccessType = function() {};

/** 
 * 获取文字的水平对齐方式，可用值有left|right|center，默认为left
 * @return {String}
 */
ht.Column.prototype.getAlign = function() {};

/** 
 * 获取表头文字的颜色
 * @return {color}
 */
ht.Column.prototype.getColor = function() {};

/** 
 * 获取颜色选择器配置
 * @see {@link ht.Column#setColorPicker setColorPicker}
 * @return {Object}
 */
ht.Column.prototype.getColorPicker = function() {};

/** 
 * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举icon数组
 * @return {Array}
 */
ht.Column.prototype.getEnumIcons = function() {};

/** 
 * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举文字数组
 * @return {Array}
 */
ht.Column.prototype.getEnumLabels = function() {};

/** 
 * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的最大高度(超出使用滚动条)
 * @return {Array}
 */
ht.Column.prototype.getEnumMaxHeight = function() {};

/** 
 * 当此列使用下拉列表作为编辑器时，此方法返回下拉列表的值数组
 * @return {Array}
 */
ht.Column.prototype.getEnumValues = function() {};

/** 
 * 获取自定义的单元格编辑器
 * @return {Function}
 */
ht.Column.prototype.getItemEditor = function() {};

/** 
 * 获取拉条配置
 * @see {@link ht.Column#setSlider setSlider}
 * @return {Object}
 */
ht.Column.prototype.getSlider = function() {};

/** 
 * 获取排序函数
 * @return {Function}
 */
ht.Column.prototype.getSortFunc = function() {};

/** 
 * 获取排序状态<br>
 * <ul>
 * <li>asc: 升序</li>
 * <li>desc: 降序</li>
 * </ul>
 * @return {String}
 */
ht.Column.prototype.getSortOrder = function() {};

/** 
 * 获取toolTip文字
 * @param {ht.Data} data 数据元素
 * @param {ht.widget.TableView} tableView 视图对象
 * @return {String}
 */
ht.Column.prototype.getToolTip = function(data, tableView) {};

/** 
 * 获取值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过parseInt进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换</li>
 * </ul>
 * @return {String}
 */
ht.Column.prototype.getValueType = function() {};

/** 
 * 获取列宽度
 * @return {Number}
 */
ht.Column.prototype.getWidth = function() {};

/** 
 * 判断该列是否允许多选时批量编辑，默认为true
 * @return {Boolean}
 */
ht.Column.prototype.isBatchEditable = function() {};

/** 
 * 判断此列是否可编辑
 * @return {Boolean}
 */
ht.Column.prototype.isEditable = function() {};

/** 
 * 判断属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
 * @return {Boolean}
 */
ht.Column.prototype.isEmptiable = function() {};

/** 
 * 枚举下拉编辑器是否允许可输入，默认为false
 * @return {Boolean}
 */
ht.Column.prototype.isEnumEditable = function() {};

/** 
 * 判断值匹配时是否采用严格的===进行比较，默认为true，若为false则采用==进行比较
 * @return {Boolean}
 */
ht.Column.prototype.isEnumStrict = function() {};

/** 
 * 判断属性是否可为空，默认为true，设置为false可避免输入null或undefined
 * @return {Boolean}
 */
ht.Column.prototype.isNullable = function() {};

/** 
 * 判断当前列是否可排序
 * @return {Boolean}
 */
ht.Column.prototype.isSortable = function() {};

/** 
 * 判断当前列是否是否可见
 * @return {Boolean}
 */
ht.Column.prototype.isVisible = function() {};

/** 
 * 设置列的属性类型，可选值如下：<br>
 * <ul>
 * <li>null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取</li>
 * <li>style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取</li>
 * <li>field：如name为age，采用data.age和data.age = 98的方式存取</li>
 * <li>attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取</li>
 * </ul>
 * @param {String|null} accessType
 */
ht.Column.prototype.setAccessType = function(accessType) {};

/** 
 * 设置文字的水平对齐方式，可用值有left|right|center，默认为left
 * @param {String} align 对齐方式
 */
ht.Column.prototype.setAlign = function(align) {};

/** 
 * 设置该列是否允许多选时批量编辑，默认为true
 * @param {Boolean} v
 */
ht.Column.prototype.setBatchEditable = function(v) {};

/** 
 * 设置表头文字的颜色
 * @param {color} color
 */
ht.Column.prototype.setColor = function(color) {};

/** 
 * 设置颜色选择器配置，需要引入form插件，设置此属性后，此列将使用颜色选择器作为单元格编辑器
 * @param {Object} v 颜色选择器配置，如{background: 'red'}可以指定颜色选择器背景为红色，如果要使用默认配置，使用空对象{}即可
 */
ht.Column.prototype.setColorPicker = function(v) {};

/** 
 * 设置此列是否可编辑
 * @param {Boolean} editable
 */
ht.Column.prototype.setEditable = function(editable) {};

/** 
 * 设置属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
 * @param {Boolean} emptiable
 */
ht.Column.prototype.setEmptiable = function(emptiable) {};

/** 
 * 设置枚举列表，此列自动采用下拉列表作为单元格编辑器
 * @param {Object|Array} v
 * @example //示例，参数依次表示：值，文字、icon
 * column.setEnum([1,2,3], ['C','C++','JS'], ['c_icon', 'c++_icon', 'js_icon']);
 * //也可以使用对象的方式：
 * column.setEnum({values:[1,2,3], labels:['C','C++','JS'], icons:['c_icon', 'c++_icon', 'js_icon']});
 */
ht.Column.prototype.setEnum = function(v) {};

/** 
 * 设置自定义的单元格编辑器
 * @param {Function} editor
 */
ht.Column.prototype.setItemEditor = function(editor) {};

/** 
 * 设置属性是否可为空，默认为true，设置为false可避免输入null或undefined
 * @param {Boolean} nullable 
 */
ht.Column.prototype.setNullable = function(nullable) {};

/** 
 * 设置拉条配置，需要引入form插件，设置此属性后，此列将使用拉条作为单元格编辑器
 * @param {Object} v 拉条配置，如{background: 'red'}可以指定拉条背景为红色，如果要使用默认配置，使用空对象{}即可
 */
ht.Column.prototype.setSlider = function(v) {};

/** 
 * 设置当前列是否可排序
 * @param {Boolean} nullable
 */
ht.Column.prototype.setSortable = function(nullable) {};

/** 
 * 设置排序函数
 * @param {Function} func
 */
ht.Column.prototype.setSortFunc = function(func) {};

/** 
 * 设置排序状态<br>
 * <ul>
 * <li>asc: 升序</li>
 * <li>desc: 降序</li>
 * </ul>
 * @param {String} sortOrder
 */
ht.Column.prototype.setSortOrder = function(sortOrder) {};

/** 
 * 设置值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过parseInt进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换</li>
 * </ul>
 * @param {String|null} type
 */
ht.Column.prototype.setValueType = function(type) {};

/** 
 * 设置当前列是否是否可见
 * @param {Boolean} v
 */
ht.Column.prototype.setVisible = function(v) {};

/** 
 * 设置列宽度
 * @param {Number} v
 */
ht.Column.prototype.setWidth = function(v) {};

/** 
 * 根据value查找对应的枚举icon
 * @param {Object} value 枚举值
 * @return {String}
 */
ht.Column.prototype.toEnumIcon = function(value) {};

/** 
 * 根据value查找对应的枚举label文字
 * @param {Object} value 枚举值
 * @return {String}
 */
ht.Column.prototype.toEnumLabel = function(value) {};











/**
 * 属性数据，指定PropertyView属性组件要显示的属性
 * @constructor
 * @extends ht.Data
 */
ht.Property = function() {};

/**
 * 绘制属性值，可重载自定义，如果返回值为HTML元素，则使用HTML元素当作Renderer
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Property} property 属性对象
 * @param {Object} value 值
 * @param {Number} rowIndex 行索引
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} w 绘制的宽度
 * @param {Number} w 绘制的宽度
 * @param {ht.Data} data 数据元素
 * @param {ht.widget.PropertyView} view 视图组件
 * @return {HTMLElement}
 */
ht.Property.prototype.drawPropertyValue = function (g, property, value, rowIndex, x, y, w, h, data, view){};


/** 
 * 将要显示的值传入此方法格式化处理并返回，一般用于将数字转换更易读的文本格式，可重载自定义
 * @param {Object} value 格式化之前值
 * @return {Object} 格式化之后的值
 */
ht.Property.prototype.formatValue = function(value) {};

/** 
 * 获取属性类型，值列表如下：<br>
 * <ul>
 * <li>null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取</li>
 * <li>style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取</li>
 * <li>field：如name为age，采用data.age和data.age = 98的方式存取</li>
 * <li>attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取</li>
 * </ul>
 * @return {String|null}
 */
ht.Property.prototype.getAccessType = function() {};

/** 
 * 获取文字的水平对齐方式，可用值有left|right|center，默认为left
 * @return {String}
 */
ht.Property.prototype.getAlign = function() {};

/** 
 * 获取属性分类名称
 * @return {String}
 */
ht.Property.prototype.getCategoryName = function() {};

/** 
 * 获取属性名文字的颜色
 * @return {color}
 */
ht.Property.prototype.getColor = function() {};

/** 
 * 获取颜色选择器配置
 * @see {@link ht.Property#setColorPicker setColorPicker}
 * @return {Object}
 */
ht.Property.prototype.getColorPicker = function() {};

/** 
 * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举icon数组
 * @return {Array}
 */
ht.Property.prototype.getEnumIcons = function() {};

/** 
 * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的所有枚举文字数组
 * @return {Array}
 */
ht.Property.prototype.getEnumLabels = function() {};

/** 
 * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的最大高度(超出使用滚动条)
 * @return {Array}
 */
ht.Property.prototype.getEnumMaxHeight = function() {};

/** 
 * 当属性使用下拉列表作为编辑器时，此方法返回下拉列表的值数组
 * @return {Array}
 */
ht.Property.prototype.getEnumValues = function() {};

/** 
 * 获取自定义的单元格编辑器
 * @return {Function}
 */
ht.Property.prototype.getItemEditor = function() {};

/** 
 * 获取拉条配置
 * @see {@link ht.Property#setSlider setSlider}
 * @return {Object}
 */
ht.Property.prototype.getSlider = function() {};

/** 
 * 获取toolTip文字
 * @param {ht.Data} data 数据元素
 * @param {Boolean} isValue 是否是属性值
 * @param {ht.widget.PropertyView} propertyView 视图对象
 * @return {String}
 */
ht.Property.prototype.getToolTip = function(data, isValue, propertyView) {};

/** 
 * 获取值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过parseInt进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换</li>
 * </ul>
 * @return {String}
 */
ht.Property.prototype.getValueType = function() {};

/** 
 * 判断是否允许多选时批量编辑，默认为true
 * @return {Boolean}
 */
ht.Property.prototype.isBatchEditable = function() {};

/** 
 * 判断属性是否可编辑
 * @return {Boolean}
 */
ht.Property.prototype.isEditable = function() {};

/** 
 * 判断属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
 * @return {Boolean}
 */
ht.Property.prototype.isEmptiable = function() {};

/** 
 * 枚举下拉编辑器是否允许可输入，默认为false
 * @return {Boolean}
 */
ht.Property.prototype.isEnumEditable = function() {};

/** 
 * 判断值匹配时是否采用严格的===进行比较，默认为true，若为false则采用==进行比较
 * @return {Boolean}
 */
ht.Property.prototype.isEnumStrict = function() {};

/** 
 * 判断属性是否可为空，默认为true，设置为false可避免输入null或undefined
 * @return {Boolean}
 */
ht.Property.prototype.isNullable = function() {};

/** 
 * 设置属性类型，可选值如下：<br>
 * <ul>
 * <li>null: 默认类型，如name为age，采用getAge()和setAge(98)的get/set或is/set方式存取</li>
 * <li>style: 如name为age，采用getStyle('age')和setStyle('age', 98)的方式存取</li>
 * <li>field：如name为age，采用data.age和data.age = 98的方式存取</li>
 * <li>attr：如name为age，采用getAttr('age')和setAttr('age', 98)的方式存取</li>
 * </ul>
 * @param {String|null} accessType
 */
ht.Property.prototype.setAccessType = function(accessType) {};

/** 
 * 设置文字的水平对齐方式，可用值有left|right|center，默认为left
 * @param {String} align 对齐方式
 */
ht.Property.prototype.setAlign = function(align) {};

/** 
 * 设置是否允许多选时批量编辑，默认为true
 * @param {Boolean} v
 */
ht.Property.prototype.setBatchEditable = function(v) {};

/** 
 * 设置属性分类名称
 * @param {String} name
 */
ht.Property.prototype.setCategoryName = function(name) {};

/** 
 * 设置属性名文字的颜色
 * @param {color} color
 */
ht.Property.prototype.setColor = function(color) {};

/** 
 * 设置颜色选择器配置，需要引入form插件，设置后将使用颜色选择器作为属性编辑器
 * @param {Object} v 颜色选择器配置，如{background: 'red'}可以指定颜色选择器背景为红色，如果要使用默认配置，使用空对象{}即可
 */
ht.Property.prototype.setColorPicker = function(v) {};

/** 
 * 设置属性是否可编辑
 * @param {Boolean} editable
 */
ht.Property.prototype.setEditable = function(editable) {};

/** 
 * 设置属性是否可为空字符串，可避免输入空字符串，空字符串转换成undefined。默认为false
 * @param {Boolean} emptiable
 */
ht.Property.prototype.setEmptiable = function(emptiable) {};

/** 
 * 设置枚举列表，自动采用下拉列表作为属性编辑器
 * @param {Object|Array} v
 * @example //示例，参数依次表示：值，文字、icon
 * property.setEnum([1,2,3], ['C','C++','JS'], ['c_icon', 'c++_icon', 'js_icon']);
 * //也可以使用对象的方式：
 * property.setEnum({values:[1,2,3], labels:['C','C++','JS'], icons:['c_icon', 'c++_icon', 'js_icon']});
 */
ht.Property.prototype.setEnum = function(v) {};

/** 
 * 设置自定义的属性编辑器
 * @param {Function} editor
 */
ht.Property.prototype.setItemEditor = function(editor) {};

/** 
 * 设置属性是否可为空，默认为true，设置为false可避免输入null或undefined
 * @param {Boolean} nullable 
 */
ht.Property.prototype.setNullable = function(nullable) {};

/** 
 * 设置拉条配置，需要引入form插件，设置后将使用拉条作为属性编辑器
 * @param {Object} v 拉条配置，如{background: 'red'}可以指定拉条背景为红色，如果要使用默认配置，使用空对象{}即可
 */
ht.Property.prototype.setSlider = function(v) {};

/** 
 * 设置值类型，值类型用于提示组件提供合适的renderer渲染，合适的编辑控件，及改变值时必要的类型转换<br>
 * <ul>
 * <li>null：默认类型，显示为文本方式</li>
 * <li>string：字符串类型，显示为文本方式</li>
 * <li>boolean：布尔类型，显示为勾选框</li>
 * <li>color：颜色类型，以填充背景色的方式显示</li>
 * <li>int：整型类型，文本编辑器改变值时自动通过parseInt进行转换</li>
 * <li>number：浮点数类型，文本编辑器改变值时自动通过parseFloat转换</li>
 * </ul>
 * @param {String|null} type
 */
ht.Property.prototype.setValueType = function(type) {};

/** 
 * 根据value查找对应的枚举icon
 * @param {Object} value 枚举值
 * @return {String}
 */
ht.Property.prototype.toEnumIcon = function(value) {};

/** 
 * 根据value查找对应的枚举label文字
 * @param {Object} value 枚举值
 * @return {String}
 */
ht.Property.prototype.toEnumLabel = function(value) {};











/**
 * 工具对象，包含HT默认的配置参数和一些工具函数<br/>
 * 不要直接修改这个对象的属性值，如果需要改变HT的默认配置，需要通过全局的htconfig变量名指定，HT系统只在初始化时读取htconfig的配置信息，
 * 因此htconfig必须在引入ht.js包之前初始化好，运行状态时修改htconfig变量不会再起作用，示例代码如下：
 * @example
 * <script>
 *   htconfig = {
 *       Color: {
 *           label: '#000',
 *           highlight: '#1ABC9C',
 *       },
 *       Default: {
 *           toolTipDelay: 100,
 *           toolTipContinual: true
 *       }
 *   };
 * </script>
 * <script src="ht.js"></script>
 * @namespace
 */
ht.Default = {};

/**
 * 指定组件基准CSS的ZIndex值，改值仅在将HT与其他第三方组件混合使用时根据需要设置"
 * @type Number
 */
ht.Default.baseZIndex = {};

/**
 * 判断是否为触屏可Touch方式交互，HT系统一般会自动判断，对于极少数HT无法正确识别的系统下，可以通过配置强制指定
 * @type boolean
 */
ht.Default.isTouchable = {};

/**
 * 设备像素比，HT系统自动取至window.devicePixelRatio，某些特性情况需要为mobile应用牺牲精度节省内存时可以强制设置为较小值
 * @type Number
 */
ht.Default.devicePixelRatio = {};

/**
 * 组件初次加载时界面宽高值可能会为0，HT会自动尝试等待下次延迟刷新，该参数指定尝试次数，一般无需改动
 * @default 3
 * @type Number
 */
ht.Default.reinvalidateCount = {};

/**
 * 进行框选判断时为了避免内存占用过大，HT会根据最大面积限制进行缩放判断，该参数一般无需改动
 * @default 3000
 * @type Number
 */
ht.Default.hitMaxArea = {};

/**
 * 决定Data元素被选中时，组件是否自动滚动到Data元素可见位置
 * @default true
 * @type boolean
 */
ht.Default.autoMakeVisible = {};

/**
 * 决定组件的滚动条默认是否自动隐藏，true为自动显示和隐藏，false则需要滚动时一直显示不会自动隐藏
 * @default true
 * @type boolean
 */
ht.Default.autoHideScrollBar = {};

/**
 * 组件无效时的透明度
 * @type Number
 */
ht.Default.disabledOpacity = {};

/**
 * 组件无效时的背景色
 * @type color
 */
ht.Default.disabledBackground = {};

/**
 * 组件的ToolTip显示的延迟间隔
 * @default 800
 * @type Number
 */
ht.Default.toolTipDelay = {};

/**
 * 组件的ToolTip显示的情况下，如果鼠标移动到新的位置时，ToolTip是否实时持续跟进
 * @default false
 * @type boolean
 */
ht.Default.toolTipContinual = {};

/**
 * 线条末端线帽的样式，可选值为butt|round|square
 * @default butt
 * @type String
 */
ht.Default.lineCap = {};

/**
 * 当两条线交汇时创建边角的类型，可选参数为：bevel|round|miter
 * @default round
 * @type String
 */
ht.Default.lineJoin = {};

/**
 * 默认图片的渐进色类型
 * @default linear.northeast
 * @type String
 */
ht.Default.imageGradient = {};

/**
 * 连线或多边形等图形的默认虚线样式
 * @type Array
 */
ht.Default.dashPattern = {};

/**
 * 默认动画效果函数
 * @default function (m){return m*m}
 * @type Function
 */
ht.Default.animEasing = {};

/**
 * 默认文字颜色
 * @default #000
 * @type color
 */
ht.Default.labelColor = {};

/**
 * 选中状态下文字颜色
 * @default #fff
 * @type color
 */
ht.Default.labelSelectColor = {};

/**
 * 默认文字字体
 * @default 12px arial, sans-serif
 * @type font
 */
ht.Default.labelFont = {};

/**
 * 默认文字字体
 * @default 12px arial, sans-serif
 * @type font
 */
ht.Default.labelFont = {};

/**
 * 通用组件缩进，例如树组件每一层的缩进
 * @default 20
 * @type Number
 */
ht.Default.widgetIndent = {};

/**
 * 通用组件行高，例如表格每行行高
 * @default 20
 * @type Number
 */
ht.Default.widgetRowHeight = {};

/**
 * 通用组件抬头高度，例如TabView，TableHeader和Toolbar等的头部高度
 * @default 22
 * @type Number
 */
ht.Default.widgetHeaderHeight = {};

/**
 * AccordionView和TabView等组件的Title默认高度
 * @default 24
 * @type Number
 */
ht.Default.widgetTitleHeight = {};

/**
 * 滚动条默认颜色
 * @default rgba(0,0,0,0.35)
 * @type color
 */
ht.Default.scrollBarColor = {};

/**
 * 滚动条默认宽度
 * @default 7
 * @type Number
 */
ht.Default.scrollBarSize = {};

/**
 * 滚动条默认的隐藏间隔毫秒数
 * @default 1000
 * @type Number
 */
ht.Default.scrollBarTimeout = {};

/**
 * 滚动条默认最小长度
 * @default 20
 * @type Number
 */
ht.Default.scrollBarMinLength = {};

/**
 * 滚动条起作用区域默认大小
 * @default 16
 * @type Number
 */
ht.Default.scrollBarInteractiveSize = {};

/**
 * 默认缩放步进
 * @default 1.3
 * @type Number
 */
ht.Default.zoomIncrement = {};

/**
 * 默认滚轮缩放步进
 * @default 1.05
 * @type Number
 */
ht.Default.scrollZoomIncrement = {};

/**
 * 默认双指触屏Touch方式缩放步进
 * @default 1.08
 * @type Number
 */
ht.Default.pinchZoomIncrement = {};

/**
 * 默认最大缩放倍数
 * @default 20
 * @type Number
 */
ht.Default.zoomMax = {};

/**
 * 默认最小缩放倍数
 * @default 0.01
 * @type Number
 */
ht.Default.zoomMin = {};

/**
 * 默认曲线分段微分数
 * @default 12
 * @type Number
 */
ht.Default.segmentResolution = {};

/**
 * 默认模型分段微分数
 * @default 24
 * @type Number
 */
ht.Default.shapeResolution = {};

/**
 * 默认模型边数
 * @default 24
 * @type Number
 */
ht.Default.shapeSide = {};

/**
 * ToolTip的文字颜色
 * @default #000
 * @type color
 */
ht.Default.toolTipLabelColor = {};

/**
 * ToolTip的文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.toolTipLabelFont = {};

/**
 * ToolTip的文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.toolTipLabelFont = {};

/**
 * ToolTip的背景颜色
 * @default #FFFFE0
 * @type color
 */
ht.Default.toolTipBackground = {};

/**
 * ToolTip的阴影颜色
 * @default rgba(0,0,0,0.35)
 * @type color
 */
ht.Default.toolTipShadowColor = {};

/**
 * 矢量组件comp嵌套堆栈，矢量组件comp可嵌套定义，通过改参数能得到当前嵌套层次信息
 * @type Array
 */
ht.Default.compStack = {};

/**
 * 此函数返回连线组的代理连线，edges为ht.List类型的ht.Edge对象数组，默认返回edges.get(0)，可重载自定义规则
 * @type Function
 */
ht.Default.edgeGroupAgentFunc = {};

/**
 * GraphView组件中拖动图元到边缘时会自动滚动，该参数决定开始自动滚动的区域范围，设置为0或负数则代表关闭自动滚动功能
 * @default 16
 * @type Number
 */
ht.Default.graphViewAutoScrollZone = {};

/**
 * 决定GraphView组件按空格键是否允许复位，复位调用了GraphView#reset()函数，该函数默认会调用setZoom(1)和setTranslate(0, 0)
 * @default true
 * @type Boolean
 */
ht.Default.graphViewResettable = {};

/**
 * 决定GraphView组件是否允许手抓图操作
 * @default true
 * @type Boolean
 */
ht.Default.graphViewPannable = {};

/**
 * 决定GraphView组件是否允许按Ctrl键进行框选操作
 * @default true
 * @type Boolean
 */
ht.Default.graphViewRectSelectable = {};

/**
 * 决定GraphView组件是否显示滚动条
 * @default true
 * @type Boolean
 */
ht.Default.graphViewScrollBarVisible = {};

/**
 * GraphView组件框选边框颜色
 * @default #2C3E50
 * @type color
 */
ht.Default.graphViewRectSelectBorderColor = {};

/**
 * GraphView组件框选背景颜色
 * @default rgba(0,0,0,0.35)
 * @type color
 */
ht.Default.graphViewRectSelectBackground = {};

/**
 * GraphView组件编辑点大小
 * @default 7
 * @type Number
 */
ht.Default.graphViewEditPointSize = {};

/**
 * GraphView组件编辑点边框颜色
 * @default #2C3E50
 * @type color
 */
ht.Default.graphViewEditPointBorderColor = {};

/**
 * GraphView组件编辑点背景颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.graphViewEditPointBackground = {};

/**
 * Graph3dView组件初始化WebGL上下文参数，一般无需改动
 * @default null
 * @type Object
 */
ht.Default.graph3dViewAttributes = {};

/**
 * Graph3dView组件是否为第一人称交互方式
 * @default false
 * @type Boolean
 */
ht.Default.graph3dViewFirstPersonMode = {};

/**
 * Graph3dView组件在第一人称交互方式时，鼠标是否能漫游
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewMouseRoamable = {};

/**
 * Graph3dView组件键盘控制移动的步进
 * @default 15
 * @type Number
 */
ht.Default.graph3dViewMoveStep = {};

/**
 * Graph3dView组件键盘控制旋转的步进
 * @default 0.05235987755982988
 * @type Number
 */
ht.Default.graph3dViewRotateStep = {};

/**
 * Graph3dView组件是否允许按Shift键进行手抓图平移
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewPannable = {};

/**
 * Graph3dView组件是否允许进行旋转中心或方位操作
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewRotatable = {};

/**
 * Graph3dView组件是否允许前进后退操作
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewWalkable = {};

/**
 * Graph3dView组件是否允许按空格键复位，复位调用了Graph3dView#reset()函数，该函数会重置Graph3dView的eye|center|up三个参数
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewResettable = {};

/**
 * Graph3dView组件是否允许缩放
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewZoomable = {};

/**
 * Graph3dView组件是否允许框选
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewRectSelectable = {};

/**
 * Graph3dView组件框选背景
 * @default rgba(0,0,0,0.35)
 * @type color
 */
ht.Default.graph3dViewRectSelectBackground = {};

/**
 * Graph3dView组件是否允许显示xz面网格
 * @default false
 * @type Boolean
 */
ht.Default.graph3dViewGridVisible = {};

/**
 * Graph3dView组件显示xz面的网格行列数
 * @default 50
 * @type Number
 */
ht.Default.graph3dViewGridSize = {};

/**
 * Graph3dView组件显示xz面的网格行列间距
 * @default 50
 * @type Number
 */
ht.Default.graph3dViewGridGap = {};

/**
 * Graph3dView组件显示xz面的网格线颜色
 * @default [0.4,0.75,0.85,1]
 * @type color
 */
ht.Default.graph3dViewGridColor = {};

/**
 * Graph3dView组件原点x|y|z三个轴线是否可见
 * @default false
 * @type Boolean
 */
ht.Default.graph3dViewOriginAxisVisible = {};

/**
 * Graph3dView组件屏幕中心点x|y|z三个轴线是否可见
 * @default false
 * @type Boolean
 */
ht.Default.graph3dViewCenterAxisVisible = {};

/**
 * Graph3dView组件显示x轴线颜色
 * @default [1,0,0,1]
 * @type color
 */
ht.Default.graph3dViewAxisXColor = {};

/**
 * Graph3dView组件显示y轴线颜色
 * @default [0,1,0,1]
 * @type color
 */
ht.Default.graph3dViewAxisYColor = {};

/**
 * Graph3dView组件显示z轴线颜色
 * @default [0,0,1,1]
 * @type color
 */
ht.Default.graph3dViewAxisZColor = {};

/**
 * Graph3dView组件在编辑状态图元拉伸标识颜色
 * @default [1,1,0,1]
 * @type color
 */
ht.Default.graph3dViewEditSizeColor = {};

/**
 * Graph3dView组件是否显示为正交投影方式
 * @default false
 * @type Boolean
 */
ht.Default.graph3dViewOrtho = {};

/**
 * Graph3dView组件正交投影方式下屏幕宽度内显示的逻辑宽度值
 * @default 2000
 * @type Number
 */
ht.Default.graph3dViewOrthoWidth = {};

/**
 * Graph3dView组件在透视投影方式下的y轴张角弧度（Field of view）
 * @default 0.7853981633974483
 * @type Number
 */
ht.Default.graph3dViewFovy = {};

/**
 * Graph3dView组件投影呈现内容的最近距离，该值在可接受的范围内尽量设置较大值有利于呈现精度
 * @default 10
 * @type Number
 */
ht.Default.graph3dViewNear = {};

/**
 * Graph3dView组件投影呈现内容的最远距离，该值可根据场景最远范围进行调节设置
 * @default 10000
 * @type Number
 */
ht.Default.graph3dViewFar = {};

/**
 * Graph3dView组件投影呈现时，眼睛观察点所在位置
 * @default [0,300,1000]
 * @type Array
 */
ht.Default.graph3dViewEye = {};

/**
 * Graph3dView组件投影呈现时，眼睛最终锁定的目标中心位置
 * @default [0,0,0]
 * @type Array
 */
ht.Default.graph3dViewCenter = {};

/**
 * Graph3dView组件投影呈现时，摄像镜头垂直朝上方向
 * @default [0,1,-1e-7]
 * @type Array
 */
ht.Default.graph3dViewUp = {};

/**
 * 头灯影响范围，默认为`0`代表可照射到无穷远处，如果设置了值则光照射效果随物体远离光影而衰减
 * @default 0
 * @type Number
 */
ht.Default.graph3dViewHeadlightRange = {};

/**
 * 头灯影响范围，默认为`0`代表可照射到无穷远处，如果设置了值则光照射效果随物体远离光影而衰减
 * @default 0
 * @type Number
 */
ht.Default.graph3dViewHeadlightRange = {};

/**
 * 头灯颜色
 * @default [1,1,1,1]
 * @type Array
 */
ht.Default.graph3dViewHeadlightColor = {};

/**
 * 头灯强度，默认为1，大于1增强，小于1减弱
 * @default 1
 * @type Number
 */
ht.Default.graph3dViewHeadlightIntensity = {};

/**
 * 是否关闭头灯效果
 * @default false
 * @type Boolean
 */
ht.Default.graph3dViewHeadlightDisabled = {};

/**
 * 是否关闭雾化效果
 * @default true
 * @type Boolean
 */
ht.Default.graph3dViewFogDisabled = {};

/**
 * 雾颜色
 * @default white
 * @type color
 */
ht.Default.graph3dViewFogColor = {};

/**
 * 代表从该距离起物体开始受雾效果影响
 * @default 1
 * @type Number
 */
ht.Default.graph3dViewFogNear = {};

/**
 * 代表从该距离之后物体完全看不清
 * @default 2000
 * @type Number
 */
ht.Default.graph3dViewFogFar = {};

/**
 * 折叠组件展开状态图标
 * @type String
 */
ht.Default.accordionViewExpandIcon = {};

/**
 * 折叠组件关闭状态图标
 * @type String
 */
ht.Default.accordionViewCollapseIcon = {};

/**
 * 折叠组件文字颜色
 * @default #FFF
 * @type color
 */
ht.Default.accordionViewLabelColor = {};

/**
 * 折叠组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.accordionViewLabelFont = {};

/**
 * 折叠组件抬头背景
 * @default #2C3E50
 * @type color
 */
ht.Default.accordionViewTitleBackground = {};

/**
 * 折叠组件选中背景
 * @default #1ABC9C
 * @type color
 */
ht.Default.accordionViewSelectBackground = {};

/**
 * 折叠组件选中宽度
 * @default 3
 * @type Number
 */
ht.Default.accordionViewSelectWidth = {};

/**
 * 折叠组件分隔条颜色
 * @type color
 */
ht.Default.accordionViewSeparatorColor = {};

/**
 * 分割组件分隔条宽度
 * @default 1
 * @type Number
 */
ht.Default.splitViewDividerSize = {};

/**
 * 分割组件分隔条背景
 * @default #2C3E50
 * @type color
 */
ht.Default.splitViewDividerBackground = {};

/**
 * 分割组件分隔条拖拽过程透明度
 * @default 0.5
 * @type Number
 */
ht.Default.splitViewDragOpacity = {};

/**
 * 分割组件展开合并图标
 * @type String
 */
ht.Default.splitViewToggleIcon = {};

/**
 * 属性组件文字颜色
 * @default #000
 * @type color
 */
ht.Default.propertyViewLabelColor = {};

/**
 * 属性组件文字选中颜色
 * @default #FFF
 * @type color
 */
ht.Default.propertyViewLabelSelectColor = {};

/**
 * 属性组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.propertyViewLabelFont = {};

/**
 * 属性组件展开图标
 * @type String
 */
ht.Default.propertyViewExpandIcon = {};

/**
 * 属性组件合并图标
 * @type String
 */
ht.Default.propertyViewCollapseIcon = {};

/**
 * 属性组件背景
 * @default #ECF0F1
 * @type color
 */
ht.Default.propertyViewBackground = {};

/**
 * 属性组件行线是否可见
 * @default true
 * @type Boolean
 */
ht.Default.propertyViewRowLineVisible = {};

/**
 * 属性组件列线是否可见
 * @default true
 * @type Boolean
 */
ht.Default.propertyViewColumnLineVisible = {};

/**
 * 属性组件行线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.propertyViewRowLineColor = {};

/**
 * 属性组件列线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.propertyViewColumnLineColor = {};

/**
 * 属性组件选中背景色
 * @default #1ABC9C
 * @type color
 */
ht.Default.propertyViewSelectBackground = {};

/**
 * 列表组件文字颜色
 * @default #000
 * @type color
 */
ht.Default.listViewLabelColor = {};

/**
 * 列表组件文字选中颜色
 * @default #FFF
 * @type color
 */
ht.Default.listViewLabelSelectColor = {};

/**
 * 列表组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.listViewLabelFont = {};

/**
 * 列表组件行线是否可见
 * @default false
 * @type Boolean
 */
ht.Default.listViewRowLineVisible = {};

/**
 * 列表组件行线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.listViewRowLineColor = {};

/**
 * 列表组件选中背景色
 * @default #1ABC9C
 * @type color
 */
ht.Default.listViewSelectBackground = {};

/**
 * 树组件文字颜色
 * @default #000
 * @type color
 */
ht.Default.treeViewLabelColor = {};

/**
 * 树组件文字选中颜色
 * @default #FFF
 * @type color
 */
ht.Default.treeViewLabelSelectColor = {};

/**
 * 树组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.treeViewLabelFont = {};

/**
 * 树组件展开状态图标
 * @type String
 */
ht.Default.treeViewExpandIcon = {};

/**
 * 树组件关闭状态图标
 * @type String
 */
ht.Default.treeViewCollapseIcon = {};

/**
 * 树组件行线是否可见
 * @default false
 * @type Boolean
 */
ht.Default.treeViewRowLineVisible = {};

/**
 * 树组件行线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.treeViewRowLineColor = {};

/**
 * 树组件选中背景色
 * @default #1ABC9C
 * @type color
 */
ht.Default.treeViewSelectBackground = {};

/**
 * 表格组件文字颜色
 * @default #000
 * @type color
 */
ht.Default.tableViewLabelColor = {};

/**
 * 表格组件文字选中颜色
 * @default #FFF
 * @type color
 */
ht.Default.tableViewLabelSelectColor = {};

/**
 * 表格组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.tableViewLabelFont = {};

/**
 * 表格组件行线是否可见
 * @default true
 * @type Boolean
 */
ht.Default.tableViewRowLineVisible = {};

/**
 * 表格组件列线是否可见
 * @default true
 * @type Boolean
 */
ht.Default.tableViewColumnLineVisible = {};

/**
 * 表格组件行线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.tableViewRowLineColor = {};

/**
 * 表格组件列线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.tableViewColumnLineColor = {};

/**
 * 表格组件选中背景色
 * @default #1ABC9C
 * @type color
 */
ht.Default.tableViewSelectBackground = {};

/**
 * 树表组件文字颜色
 * @default #000
 * @type color
 */
ht.Default.treeTableViewLabelColor = {};

/**
 * 树表组件文字选中颜色
 * @default #FFF
 * @type color
 */
ht.Default.treeTableViewLabelSelectColor = {};

/**
 * 树表组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.treeTableViewLabelFont = {};

/**
 * 树表格组件展开状态图标
 * @type String
 */
ht.Default.treeTableViewExpandIcon = {};

/**
 * 树表格组件关闭状态图标
 * @type String
 */
ht.Default.treeTableViewCollapseIcon = {};

/**
 * 树表格组件行线是否可见
 * @default true
 * @type Boolean
 */
ht.Default.treeTableViewRowLineVisible = {};

/**
 * 树表格组件列线是否可见
 * @default true
 * @type Boolean
 */
ht.Default.treeTableViewColumnLineVisible = {};

/**
 * 树表格组件行线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.treeTableViewRowLineColor = {};

/**
 * 树表格组件列线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.treeTableViewColumnLineColor = {};

/**
 * 树表组件选中背景色
 * @default #1ABC9C
 * @type color
 */
ht.Default.treeTableViewSelectBackground = {};

/**
 * 表头组件文字颜色
 * @default #000
 * @type color
 */
ht.Default.tableHeaderLabelColor = {};

/**
 * 表头组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.tableHeaderLabelFont = {};

/**
 * 表头组件列线是否可见
 * @default true
 * @type Boolean
 */
ht.Default.tableHeaderColumnLineVisible = {};

/**
 * 表头组件列线颜色
 * @default #D9D9D9
 * @type color
 */
ht.Default.tableHeaderColumnLineColor = {};

/**
 * 表头组件背景
 * @default #ECF0F1
 * @type color
 */
ht.Default.tableHeaderBackground = {};

/**
 * 表头组件移动状态背景
 * @default rgba(0,0,0,0.35)
 * @type color
 */
ht.Default.tableHeaderMoveBackground = {};

/**
 * 表头组件插入状态颜色
 * @default #1ABC9C
 * @type color
 */
ht.Default.tableHeaderInsertColor = {};

/**
 * 表头组件降序图标
 * @type String
 */
ht.Default.tableHeaderSortDescIcon = {};

/**
 * 表头组件升序图标
 * @type String
 */
ht.Default.tableHeaderSortAscIcon = {};

/**
 * 页签组件间距
 * @default 1
 * @type Number
 */
ht.Default.tabViewTabGap = {};

/**
 * 页签组件文字颜色
 * @default #FFF
 * @type color
 */
ht.Default.tabViewLabelColor = {};

/**
 * 页签组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.tabViewLabelFont = {};

/**
 * 页签组件背景
 * @default #2C3E50
 * @type color
 */
ht.Default.tabViewTabBackground = {};

/**
 * 页签组件选中宽度
 * @default 3
 * @type Number
 */
ht.Default.tabViewSelectWidth = {};

/**
 * 页签组件选中背景
 * @default #1ABC9C
 * @type color
 */
ht.Default.tabViewSelectBackground = {};

/**
 * 页签组件移动状态背景
 * @default rgba(0,0,0,0.35)
 * @type color
 */
ht.Default.tabViewMoveBackground = {};

/**
 * 页签组件插入状态颜色
 * @default #1ABC9C
 * @type color
 */
ht.Default.tabViewInsertColor = {};

/**
 * 工具条组件文字颜色
 * @default #000
 * @type color
 */
ht.Default.toolbarLabelColor = {};

/**
 * 工具条组件文字选中颜色
 * @default #FFF
 * @type color
 */
ht.Default.toolbarLabelSelectColor = {};

/**
 * 工具条组件文字字体
 * @default 12px arial, sans-serif
 * @type String
 */
ht.Default.toolbarLabelFont = {};

/**
 * 工具条组件背景
 * @default #ECF0F1
 * @type color
 */
ht.Default.toolbarBackground = {};

/**
 * 工具条组件选中背景色
 * @default #1ABC9C
 * @type color
 */
ht.Default.toolbarSelectBackground = {};

/**
 * 工具条组件Item的间距
 * @default 8
 * @type Number
 */
ht.Default.toolbarItemGap = {};

/**
 * 工具条组件的分隔条颜色
 * @default #868686
 * @type color
 */
ht.Default.toolbarSeparatorColor = {};


/**
 * 数字类型监听器，该监听器将使得input文本输入框只允许输入数学相关字符
 * @type Function
 * @example
 * numberListener: (function(){
 *      var map = {
 *          46: 1,
 *          8: 1,
 *          9: 1,
 *          27: 1,
 *          13: 1,
 *          109: 1,
 *          110: 1,
 *          189: 1,
 *          190: 1
 *      };
 *      return function(e){
 *          var keyCode = e.keyCode;
 *          if(map[keyCode] || (keyCode === 65 && Default.isCtrlDown(e)) || (keyCode >= 35 && keyCode <= 39)){
 *              return;
 *          }
 *          if ((e.shiftKey || (keyCode < 48 || keyCode > 57)) && (keyCode < 96 || keyCode > 105)) {
 *              e.preventDefault();
 *          }
 *      };
 *  })()
 */
ht.Default.numberListener = {}

/**
 * 无法加载图片资源时会调用该函数，默认访问空，可自定义返回一个默认的图片
 * @type Function
 * @example
 * ht.Default.handleImageLoaded = function(name, url) {
 *
 * }
 */
ht.Default.handleUnfoundImage = {}

/**
 * 图片在加载之后的回调函数
 * @type Function
 * @example
 * ht.Default.handleImageLoaded = function(name, img) {
 *
 * }
 */
ht.Default.handleImageLoaded = {}

/**
 * 默认排序函数
 * @type Function
 * @example
 * ht.Default.sortFunc = function(v1, v2) {
 *
 * }
 */
ht.Default.sortFunc = {}

/**
 * 获得HT的版本号
 * @return {String} 版本号
 */
ht.Default.getVersion = function() {}

/**
 * 注册矢量组件类型
 * @param {String} type 类型名称
 * @param {Function} func 绘制函数，例：function(g, rect, comp, data, view){}
 */
ht.Default.setCompType = function(type, func) {}

/**
 * 获得注册的矢量组件类型
 * @param {String} type 类型名称
 */
ht.Default.getCompType = function(type) {}

/**
 * 阻止事件的默认行为，常用于屏蔽触屏上默认DoubleTap缩放等行为
 * @param {Event} e 事件对象
 */
ht.Default.preventDefault = function(e) {}

/**
 * 获取当前窗口left|top|width|height的参数信息
 *
 * 返回的对象格式如下：
 * @example {
 * 	left: 0,
 * 	top: 0,
 * 	width: 1280
 * 	height: 768
 * }
 */
ht.Default.getWindowInfo = function() {}

/**
 * 判断目前是否处于拖拽状态
 * @return {boolean} 是否处于拖拽状态
 */
ht.Default.isDragging = function() {}

/**
 * 判断是否鼠标左键被按下
 * @param {Event} e 事件对象
 * @return {boolean} 鼠标左键是否被按下
 */
ht.Default.isLeftButton = function(e) {}

/**
 * 获取当前Touch手指个数
 * @param {Event} e 事件对象
 * @return {Number} Touch手指个数
 */
ht.Default.getTouchCount = function(e) {}

/**
 * 判断是否为双击事件
 * @param {Event} e 事件对象
 * @return {boolean} 是否是双击
 */
ht.Default.isDoubleClick = function(e) {}

/**
 * 判断Shift键是否被按下
 * @param {Event} e 事件对象
 * @return {boolean} Shift键是否被按下
 */
ht.Default.isShiftDown = function(e) {}

/**
 * 判断Ctrl键是否被按下
 * @param {Event} e 事件对象
 * @return {boolean} Ctrl键是否被按下
 */
ht.Default.isCtrlDown = function(e) {}

/**
 * 返回client属性坐标
 * @param {Event} e 事件对象
 * @return {Object} client坐标对象
 * @example //返回值示例:
 * {
 *    x: 100,
 *    y: 100
 * }
 */
ht.Default.getClientPoint = function(e) {}

/**
 * 返回page属性坐标
 * @param {Event} e 事件对象
 * @return {Object} page坐标对象
 * @example //返回值示例:
 * {
 *    x: 100,
 *    y: 100
 * }
 */
ht.Default.getPagePoint = function(e) {}

/**
 * 注册图片
 * @param {String} name 图片名
 * @param {Number} [width] 图片宽度
 * @param {Number} [height] 图片高度
 * @param {HTMLImageElement|HTMLCanvasElement|String|Object} img img、canvas对象或图片url或base64字符串或矢量对象
 */
ht.Default.setImage = function(name, width, height, img) {}

/**
 * 获得已注册的图片
 * @param {String} name 图片名
 * @param {color} [color] 染色
 * @return {HTMLImageElement|HTMLCanvasElement|Object} 返回已经注册的图片
 */
ht.Default.getImage = function(name, color) {}

/**
 * 获取全局下一个id编号
 * @return {Number} id
 */
ht.Default.getId = function() {}

/**
 * 获取全局下一个id编号
 * @param {Function} func 回调函数
 * @param {Object} scope 函数域
 * @param {Array} args 函数参数列表
 * @param {Number} delay 延迟时间(毫秒)
 */
ht.Default.callLater = function(func, scope, args, delay) {}

/**
 * 传入一个对象参数，以浅拷贝的方式返回一个新的复制对象
 * @param {Object} obj 要复制的对象
 * @return {Object} 新复制的对象
 */
ht.Default.clone = function(obj) {}

/**
 * 返回所有HT预定义类的json结构信息，key为类全路径名，value为类声明(构造函数)
 * @return {Object} 类结构信息
 */
ht.Default.getClassMap = function() {}

/**
 * 传入全路径类字符串名称，返回类定义(构造函数)
 * @param {String} name 类名
 * @return {Function} 类定义(构造函数)
 */
ht.Default.getClass = function(name) {}

/**
 * 定义类
 * @param {String|Object} className 类名，如果为字符串，自动注册到HT的classMap中，一般使用函数(构造函数)即可
 * @param {Object} superClass 要继承的父类
 * @param {Object} methods 方法和变量声明
 * @example
 * function MyData() {
 * 	MyData.superClass.constructor.call(this);
 * }
 * ht.Default.def(MyData, ht.Data, {
 * 	sayHello: function() {
 * 		console.log('hello');
 * 	}
 * });
 */
ht.Default.def = function(className, superClass, methods) {}

/**
 * 启动动画
 * @param {Object} paramObj 动画配置对象，请参考入门手册中的动画属性
 * @example
 * ht.Default.startAnim({
 * 	frames: 60,
 * 	interval: 16,
 * 	finishFunc: function() {
 * 		console.log('finish');
 * 	},
 * 	action: function(t) {
 * 		console.log(t);
 * 	}
 * });
 */
ht.Default.startAnim = function(paramObj) {}

/**
 * 计算文字的尺寸
 * @param {String} font 文字字体，如:12px Arial
 * @param {String} text 文字内容
 * @return {Object} 文字尺寸
 * @example //返回值示例:
 * {
 * 	width: 100,
 * 	height: 100
 * }
 *
 */
ht.Default.getTextSize = function(font, text) {}

/**
 * 绘制文字
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} value 文字内容
 * @param {String} font 文字字体
 * @param {color} color 文字颜色
 * @param {Number} x 绘制开始的x坐标
 * @param {Number} y 绘制开始的y坐标
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @param {String} align 文字水平对齐方式，可选值为left|center|right
 * @param {String} vAlign 文字垂直对齐方式，可选值为top|middle|bottom
 * @example ht.Default.drawText(g, 'Hello, HT', '12px Arial', 0, 0, 200, 100, 'center', 'middle');
 */
ht.Default.drawText = function(g, value, font, color, x, y, width, height, align, vAlign) {}

/**
 * 获取两点之间距离，或向量长度
 * @param {Object|Array} p1 第一个点的坐标(格式：{x: x, y: y})或第一个向量(格式：[x, y, z])
 * @param {Object|Array} p2 第二个点的坐标(格式：{x: x, y: y})或第二个向量(格式：[x, y, z])
 * @return {Number} 距离
 * @example //二维两点距离
 * var distance = ht.Default.getDistance({x: 0, y: 0}, {x: 10, y: 0});// distance equals 10
 * //三维两点距离
 * var distance3d = ht.Default.getDistance([0, 0, 0], [0, 10, 0]);// distance3d equals 10
 */
ht.Default.getDistance = function(p1, p2) {}

/**
 * 返回比color更亮的颜色
 * @param {color} color 原始颜色
 * @param {Number} factor 变化因子，默认为40，允许值0~100
 * @example
 * var newColor = ht.Default.brighter('#f00');
 * @return {color} 新的颜色
 */
ht.Default.brighter = function(color, factor) {}

/**
 * 返回比color更暗的颜色
 * @param {color} color 原始颜色
 * @param {Number} factor 变化因子，默认为40，允许值0~100
 * @return {color} 新的颜色
 * @example
 * var newColor = ht.Default.darker('#f00');
 */
ht.Default.darker = function(color, factor) {}

/**
 * 将点组合成矩形
 * @param {Object} p1 第一个点或点数组
 * @param {Object} p2 第二个点
 * @return {Object} 组合的矩形
 * @example //组合两点：
 * var rect = ht.Default.unionPoint({x: 0, y: 0}, {x: 100, y: 100});
 * //rect结果：
 * {
 * 	x: 0,
 * 	y: 0,
 * 	width: 100,
 * 	height: 100
 * }
 * 组合多点：
 * var rect = ht.Default.unionPoint([{x: 0, y: 0}, {x: 50, y: 50}, {x: 100, y: 100}]);
 * //rect结果：
 * {
 * 	x: 0,
 * 	y: 0,
 * 	width: 100,
 * 	height: 100
 * }
 */
ht.Default.unionPoint = function(p1, p2) {}

/**
 * 将两个矩形区域union融合成新的矩形区域
 * @param {Object} rect1 第一个矩形区域
 * @param {Object} rect2 第二个矩形区域
 * @return {Object} 新的矩形区域
 * @example var rect = ht.Default.unionRect(
 * {x: 0, y: 0, width: 100, height: 100},
 * {x: 0, y: 0, width: 200, height: 200});
 * //rect结果：
 * {
 * 	x: 0,
 * 	y: 0,
 * 	width: 200,
 * 	height: 200
 * }
 */
ht.Default.unionRect = function(rect1, rect2) {}

/**
 * 判断point是否包含在rect的矩形区域里
 * @param {Object} rect 矩形
 * @param {Object} point 点
 * @return {Boolean} 矩形是否包含点
 * @example ht.Default.containsPoint({x: 0, y: 0, width: 100, height: 100}, {x: 50, y: 50})//true
 */
ht.Default.containsPoint = function(rect, point) {}

/**
 * 判断矩形区域rect1是否包含矩形区域rect2
 * @param {Object} rect1 矩形1
 * @param {Object} rect2 矩形2
 * @return {Boolean} 矩形1是否包含矩形2
 * @example ht.Default.containsRect({x: 0, y: 0, width: 100, height: 100}, {x: 0, y: 0, width: 10, height: 10})//true
 */
ht.Default.containsRect = function(rect1, rect2) {}

/**
 * 判断矩形区域rect1和矩形区域rect2是否相交
 * @param {Object} rect1 矩形1
 * @param {Object} rect2 矩形2
 * @return {Boolean} 两个矩形是否相交
 * @example ht.Default.intersectsRect({x: 0, y: 0, width: 100, height: 100}, {x: 0, y: 0, width: 200, height: 200})//true
 */
ht.Default.intersectsRect = function(rect1, rect2) {}

/**
 * 获得两个矩形的相交区域
 * @param {Object} rect1 矩形1
 * @param {Object} rect2 矩形2
 * @return {Object} 相交的矩形区域，如果没有相交，返回null
 * @example var rect = ht.Default.intersection({x: 0, y: 0, width: 100, height: 100}, {x: 50, y: 50, width: 200, height: 200})
 * //rect结果：
 * {
 * 	x: 50,
 * 	y: 50,
 * 	width: 50,
 * 	height: 50
 * }
 */
ht.Default.intersection = function(rect1, rect2) {}

/**
 * 改变rect大小，上下左右分别扩展extend的大小
 * @param {Object} rect 原始矩形
 * @param {Number} extend 扩展大小
 * @example var rect = {x: 0, y: 0, width: 100, height: 100};
 * ht.Default.grow(rect, 2)
 * //rect结果：
 * {
 * 	x: -2,
 * 	y: -2,
 * 	width: 104,
 * 	height: 104
 * }
 */
ht.Default.grow = function(rect, extend) {}

/**
 * 获取交互点的逻辑坐标，使用视图对象上的此方法更为便捷
 * @param {Event} e 事件对象
 * @param {Object} view 视图对象
 * @param {Number} translateX 水平偏移
 * @param {Number} translateY 垂直偏移
 * @param {Number} zoomX 水平缩放
 * @param {Number} zoomY 垂直缩放
 * @return {Object} 逻辑点坐标
 */
ht.Default.getLogicalPoint = function(e, view, translateX, translateY, zoomX, zoomY) {}

/**
 * 删除指定的DOM对象
 * @param {Element} domElement DOM对象
 * @return {Boolean} 操作是否成功
 */
ht.Default.removeHTML = function(domElement) {}

/**
 * 返回ToolTip的相应div对象，可获取进行风格自定义
 * @return {Element} ToolTip相应的div对象
 */
ht.Default.getToolTipDiv = function() {}

/**
 * 判断ToolTip是否正在显示状态
 * @return {Boolean} ToolTip是否显示
 */
ht.Default.isToolTipShowing = function() {}

/**
 * 隐藏正在显示的ToolTip
 */
ht.Default.hideToolTip = function() {}

/**
 * 显示ToolTip
 * @param {Event|Object} eventOrPoint 鼠标事件对象或点坐标
 * @param {String} innerHTML ToolTip的内容
 */
ht.Default.showToolTip = function(eventOrPoint, innerHTML) {}

/**
 * 启动拖拽，自定义交互时可能用到
 * @param {Object} interactor 交互器
 * @param {Event} e 事件对象
 */
ht.Default.startDragging = function(interactor, e) {}

/**
 * 获得所有注册图片的信息对象
 * @return {Object} 已注册图片的映射表
 */
ht.Default.getImageMap = function() {}

/**
 * 将不连续曲线转化成Graph3dView#setBoundaries(bs)需要的参数格式
 * @param {Array} points 曲线上的点坐标数组
 * @param {Array} segmets 曲线上的线段类型数组
 * @param {Number} resolution 曲线微分数
 * @return {Array} 适合Graph3dView#setBoundaries(bs)需要的参数格式
 */
ht.Default.toBoundaries = function(points, segments, resolution) {}

/**
 * 返回当前键盘按键信息，key为键的keyCode，如果按下则值为true
 * @return {Object} 键盘按键信息
 */
ht.Default.getCurrentKeyCodeMap = function() {}

/**
 * 以x,y为中心绘制img图片
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {HTMLImageElement|HTMLCanvasElement|Object} img 要绘制的图片(img对象、canvas对象或矢量对象)
 * @param {Number} x 中心点x坐标
 * @param {Number} y 中心点y坐标
 * @param {ht.Data} data 要绑定的Data对象
 * @param {Object} view 要绑定的视图对象
 * @param {color} color 染色
 */
ht.Default.drawCenterImage = function(g, img, x, y, data, view, color) {}

/**
 * 在矩形位置内绘制图片
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {HTMLImageElement|HTMLCanvasElement|Object} img 要绘制的图片(img对象、canvas对象或矢量对象)
 * @param {String} stretch 拉伸类型(uniform/centerUniform/fill)
 * @param {Number} x 矩形左上角x坐标
 * @param {Number} y 矩形左上角y坐标
 * @param {Number} w 矩形宽度
 * @param {Number} h 矩形高度
 * @param {ht.Data} data 要绑定的Data对象
 * @param {Object} view 要绑定的视图对象
 * @param {color} color 染色
 */
ht.Default.drawStretchImage = function(g, img, stretch, x, y, w, h, data, view, color) {}

/**
 * 将图片转换成Canvas对象
 * @param {HTMLImageElement|Object} image 要转换的图片(img对象或矢量对象)
 * @param {Number} width 新canvas的宽度
 * @param {Number} height 新canvas的高度
 * @param {String} stretch 拉伸类型(uniform/centerUniform/fill)
 * @param {ht.Data} data 要绑定的Data对象
 * @param {Object} view 要绑定的视图对象
 * @param {color} color 染色
 * @return {HTMLCanvasElement} canvas对象
 */
ht.Default.toCanvas = function(image, width, height, stretch, data, view, color) {}

/**
 * 创建DOM对象
 * @param {String} tagName DOM类型(如div、a、span等)
 * @param {String} borderColor 边框颜色
 * @param {String} font 字体
 * @param {String} value 内容
 * @return {Element} DOM对象
 */
ht.Default.createElement = function(tagName, borderColor, font, value) {}

/**
 * 判断交互事件所处位置是否在View组件之上，一般用于Drog And Drop的拖拽操作判断
 * @param {Event} event 事件对象
 * @param {Object} view 视图对象
 * @return {Boolean}
 */
ht.Default.containedInView = function(event, view) {}

/**
 * 判断目前系统是否处于隔离状态，处于隔离状态时host吸附和Group组等图元间的联动关系将会被停止
 * @return {Boolean} 是否处于隔离状态
 */
ht.Default.isIsolating = function() {}

/**
 * 设置系统的隔离状态，处于隔离状态时host吸附和Group组等图元间的联动关系将会被停止
 * @param {Boolean} isolating 新的状态
 */
ht.Default.setIsolating = function(isolating) {}

/**
 * 将颜色转换为rgba格式
 * @param {color} color 旧格式的颜色
 * @return {Array} rgba格式的颜色
 */
ht.Default.toColorData = function(color) {}

/**
 * 绘制图片
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {HTMLImageElement|HTMLCanvasElement|Object} image 要绘制的图片(img对象、canvas对象或矢量对象)
 * @param {Number} x 绘制范围左上角x坐标
 * @param {Number} y 绘制范围左上角y坐标
 * @param {Number} width 绘制范围宽度
 * @param {Number} height 绘制范围高度
 * @param {ht.Data} data 要绑定的Data对象
 * @param {Object} view 要绑定的视图对象
 * @param {color} blendColor 染色
 */
ht.Default.drawImage = function(g, image, x, y, width, height, data, view, blendColor) {}

/**
 * 返回当前矢量组件comp，即ht.Default.compStack[0]，一般用于矢量值绑定func动态调用时使用
 * @return {Object} 矢量组件comp
 */
ht.Default.getCurrentComp = function() {}

/**
 * 返回当前矢量组件上一层comp，即ht.Default.compStack[1]，一般用于矢量值绑定func动态调用时使用
 * @return {Object} 矢量组件comp
 */
ht.Default.getParentComp = function() {}

/**
 * 注册连线类型
 * @param {String} type 连线类型名
 * @param {Function} func 决定连线走向的函数
 * @example ht.Default.setEdgeType('customEdge', function(edge, gap, graphView) {
 *          return {
 *          	points: points;
 *          	segments: segments;
 *          }
 * })
 */
ht.Default.setEdgeType = function(type, func) {}

/**
 * 获取连线类型函数
 * @param {String} type 连线类型名
 * @return {Function} 连线类型函数
 */
ht.Default.getEdgeType = function(type) {}

/**
 * 注册3D模型，请参考modeling建模手册
 * @param {String} name 模型名
 * @param {Object} model 模型内容
 */
ht.Default.setShape3dModel = function(name, model) {}

/**
 * 返回所注册的3D模型
 * @param {String} name 模型名
 * @return {Object} 模型
 */
ht.Default.getShape3dModel = function(name) {}

/**
 * 将一组JSON描述的缩放、移动和旋转等操作转换成对应的变化矩阵
 */
ht.Default.createMatrix = function(array, matrix) {}

/**
 * 将指定矢量或顶点，通过矩阵转换运算出变化后的新矢量或顶点位置
 */
ht.Default.transformVec = function(vec, matrix) {}

/**
 * 构建六面体模型，该模型的六个面显示的颜色和贴图都将一样
 */
ht.Default.createBoxModel = function() {}

/**
 * 构建圆角矩形体模型
 */
ht.Default.createRoundRectModel = function(top, bottom) {}

/**
 * 构建星形体模型
 */
ht.Default.createStarModel = function(top, bottom) {}

/**
 * 构建矩形体模型
 */
ht.Default.createRectModel = function(top, bottom) {}

/**
 * 构建三角形体模型
 */
ht.Default.createTriangleModel = function(top, bottom) {}

/**
 * 构建直角三角形体模型
 */
ht.Default.createRightTriangleModel = function(top, bottom) {}

/**
 * 构建平行四边形体模型
 */
ht.Default.createParallelogramModel = function(top, bottom) {}

/**
 * 构建梯形体模型
 */
ht.Default.createTrapezoidModel = function(top, bottom) {}

/**
 * 构建光滑球体模型
 */
ht.Default.createSmoothSphereModel = function(hResolution, vResolution, hStart, hArc, vStart, vArc, radius) {}

/**
 * 构建球体模型
 */
ht.Default.createSphereModel = function(side, sideFrom, sideTo, from, to, resolution) {}

/**
 * 构建光滑圆锥体模型
 */
ht.Default.createSmoothConeModel = function(bottom, resolution, start, arc, radius) {}

/**
 * 构建圆锥体模型
 */
ht.Default.createConeModel = function(side, sideFrom, sideTo, from, to, bottom) {}

/**
 * 构建光滑圆柱体模型
 */
ht.Default.createSmoothCylinderModel = function(resolution, top, bottom, topRadius, bottomRadius, start, arc, height) {}

/**
 * 构建圆柱体模型
 */
ht.Default.createCylinderModel = function(side, sideFrom, sideTo, from, to, top, bottom) {}

/**
 * 构建光滑圆环体模型
 */
ht.Default.createSmoothTorusModel = function(radius, tubeRadius, hResolution, vResolution, start, arc) {}

/**
 * 构建圆环体模型
 */
ht.Default.createTorusModel = function(side, sideFrom, sideTo, from, to, radius, resolution) {}

/**
 * 根据xz平面多边形，挤压形成3D模型
 */
ht.Default.createExtrusionModel = function(array, segments, top, bottom, resolution, repeatUVLength, tall, elevation) {}

/**
 * 根据xy平面的曲线，环绕一周形成光滑3D模型
 */
ht.Default.createSmoothRingModel = function(array, segments, vResolution, start, arc, hResolution) {}

/**
 * 根据xy平面的曲线，环绕一周形成3D模型
 */
ht.Default.createRingModel = function(array, segments, resolution, top, bottom, side, sideFrom, sideTo, from, to) {}

/**
 * 注册3d图元的批量信息，用于优化大数据量图元绘制性能，详细用法请参考批量手册
 * @param {String} name 批量名
 * @param {Object} batchInfo 批量信息
 */
ht.Default.setBatchInfo = function(name, batchInfo) {}

/**
 * 获取已注册的批量信息
 * @param {String} name 批量名
 * @return {Oject} 批量信息
 */
ht.Default.getBatchInfo = function(name) {}



/**
 * 拓扑图形组件ht.graph.GraphView是HT框架中2D功能最丰富的组件，其相关类库都在ht.graph包下。<br>
 * GraphView具有基本图形的呈现和编辑、拓扑节点连线及自动布局功能；
 * 封装了电力和电信等行业预定义对象，具有动画渲染等特效， 因此其应用面很广泛，可作为监控领域的绘图工具和人机界面，或作为一般性的图形化编辑工具，或扩展成工作流和组织图等企业应用。
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 */
ht.graph.GraphView = function(dataModel) {};

/**
 * 增加底层Painter<br>
 * 拓扑组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在拓扑最下面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyBottomPainter() {
 * }
 * ht.Default.def(MyBottomPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * graphView.addBottomPainter(MyBottomPainter);
 */
ht.graph.GraphView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加交互事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph.GraphView#mi mi}
 * @example //示例：
 * graphView.addInteractorListener(function(event) {
 * 		//event格式：
 * 		{
 * 			//clickData, doubleClickData, clickBackground, doubleClickBackground, 
 * 			//beginRectSelect, betweenRectSelect, endRectSelect, beginMove, betweenMove, endMove,
 * 			//beginPan, betweenPan, endPan, beginEditRect, betweenEditRect, endEditRect, beginEditPoint, betweenEditPoint, endEditPoint
 * 			//beginEditRotation, betweenEditRotation, endEditRotation, moveLeft, moveRight, moveUp, moveDown, toggleNote, toggleNote2
 * 			kind: 'clickData',//事件类型
 * 			data: data,//事件相关的数据元素
 * 			part: "part",//事件的区域,icon、label等
 * 			event: e//html原生事件
 * 		}
 * });
 */
ht.graph.GraphView.prototype.addInteractorListener = function(listener, scope, ahead) {}

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph.GraphView#mp mp}
 */
ht.graph.GraphView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 增加顶层Painter<br>
 * 拓扑组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在拓扑最上面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyTopPainter() {
 * }
 * ht.Default.def(MyTopPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * graphView.addTopPainter(MyTopPainter);
 */
ht.graph.GraphView.prototype.addTopPainter = function (painter){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.graph.GraphView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
 * @param {Number} value 原始水平平移值
 * @return {Number} 新的水平平移值
 */
ht.graph.GraphView.prototype.adjustTranslateX = function (value){};

/**
 * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
 * @param {Number} value 原始垂直平移值
 * @return {Number} 新的垂直平移值
 */
ht.graph.GraphView.prototype.adjustTranslateY = function (value){};

/**
 * 传入即将修改的缩放值，返回最终运行设置的缩放值，可重载进行自定义
 * @param {Number} value 原始缩放值
 * @return {Number} 最终缩放值
 */
ht.graph.GraphView.prototype.adjustZoom = function (value){};

/**
 * 关闭ToolTip功能
 */
ht.graph.GraphView.prototype.disableToolTip = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.graph.GraphView#getDataModel getDataModel}，有参数时相当于{@link ht.graph.GraphView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.graph.GraphView.prototype.dm = function (dataModel){};

/**
 * 提供一个回调函数遍历此拓扑中的图元，与DataModel上的each方法不同，此方法还考虑了拓扑中的Layer，从低Layer向高Layer遍历
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example graphView.each(function(data) {
 *   console.log(data);
 * });
 */
ht.graph.GraphView.prototype.each = function (func, scope){};

/**
 * 启用ToolTip
 */
ht.graph.GraphView.prototype.enableToolTip = function (){};

/**
 * 缩放平移整个拓扑以展示所有的图元
 * @param {Boolean} [anim] 是否使用动画
 * @param {Number} [padding] 缩放后图元区域与拓扑边缘的距离，默认为20
 * @param {Boolean} [notZoomIn] 是否将最小缩放值限定为1
 */
ht.graph.GraphView.prototype.fitContent = function (anim, padding, notZoomIn){};

/**
 * 缩放平移整个拓扑以展示参数Data
 * @param {ht.Data} data 要显示的data
 * @param {Boolean} [anim] 是否使用动画
 * @param {Number} [padding] 缩放后图元区域与拓扑边缘的距离，默认为20
 * @param {Boolean} [notZoomIn] 是否将最小缩放值限定为1
 * @param {Boolean} [retry] 当拓扑状态异常时，是否延时重试fitData，默认为true
 */
ht.graph.GraphView.prototype.fitData = function (data, anim, padding, notZoomIn, retry){};

/**
 * 缩放平移整个拓扑以展示矩形范围内的图元
 * @param {Object} rect 矩形范围
 * @param {Boolean} [anim] 是否使用动画
 * @param {Boolean} [notZoomIn] 是否将最小缩放值限定为1
 */
ht.graph.GraphView.prototype.fitRect = function (rect, anim, notZoomIn){};

/**
 * 获取自动滚动区域，当鼠标距离拓扑边缘小于这个值时，拓扑自动滚动(调整translateX或translateY)
 * @return {Number} 自动滚动区域
 */
ht.graph.GraphView.prototype.getAutoScrollZone = function (){};

/**
 * 获取图元body的染色，可重载此方法返回自定义的颜色
 * @param {ht.Data} data 要染色的图元
 * @return {color} 最终颜色，默认为data.s('body.color')
 */
ht.graph.GraphView.prototype.getBodyColor = function (data){};

/**
 * 获取图元边框颜色，可重载此方法返回自定义的颜色
 * @param {ht.Data} data 要染色的图元
 * @return {color} 最终颜色，默认为data.s('border.color')
 */
ht.graph.GraphView.prototype.getBorderColor = function (data){};

/**
 * 获取Group内child的尺寸范围，这个尺寸参与计算Group的大小
 * @param {ht.Data} child 子节点
 * @return {Object} 子节点的尺寸范围
 */
ht.graph.GraphView.prototype.getBoundsForGroup = function (child){};

/**
 * 获取拓扑的画布
 * @return {HTMLCanvasElement} 画布
 */
ht.graph.GraphView.prototype.getCanvas = function (){};

/**
 * 获取拓扑中所有图元占用的矩形区域
 * @return {Object} 内容区域
 */
ht.graph.GraphView.prototype.getContentRect = function (){};

/**
 * 获取当前子网
 * @return {ht.SubGraph} 子网对象
 */
ht.graph.GraphView.prototype.getCurrentSubGraph = function (){};

/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元，filter可进行过滤
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @param {Functoin} [filter] 过滤器函数，传入data,自定义逻辑返回true或false判断此data是否可被getDataAt返回
 * @param {Number} [range] 扩大点范围
 * @return {ht.Data} 点下的图元
 */
ht.graph.GraphView.prototype.getDataAt = function (pointOrEvent, filter, range){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.graph.GraphView.prototype.getDataModel = function (){};

/**
 * 获取逻辑坐标区域内的图元
 * @param {rect} rect 逻辑坐标区域
 * @param {Boolean} [intersects] 指定相交选中还是包含选中，true表示相交，false表示包含。
 * @param {Boolean} [selectable] 是否只返回可被选中的图元，可否被选中通过isSelectable判断
 * @return {ht.List}
 */
ht.graph.GraphView.prototype.getDatasInRect = function (rect, intersects, selectable){};

/**
 * 获取图元的UI类
 * @param {ht.Data} data 图元
 * @return {Object}
 */
ht.graph.GraphView.prototype.getDataUI = function (data){};

/**
 * 获取图元UI的绘制范围
 * @param {ht.Data} data 图元
 * @return {Object}
 */
ht.graph.GraphView.prototype.getDataUIBounds = function (data){};

/**
 * 获取编辑过滤器函数
 * @return {Function}
 */
ht.graph.GraphView.prototype.getEditableFunc = function (){};

/**
 * 获取编辑交互器
 * @return {ht.graph.EditInteractor|ht.graph.XEditInteractor}
 */
ht.graph.GraphView.prototype.getEditInteractor = function (){};

/**
 * 获取编辑交互器中编辑点的背景色
 * @return {color}
 */
ht.graph.GraphView.prototype.getEditPointBackground = function (){};

/**
 * 获取编辑交互器中编辑点的边框颜色
 * @return {color}
 */
ht.graph.GraphView.prototype.getEditPointBorderColor = function (){};

/**
 * 获取编辑交互器中编辑点的尺寸
 * @return {Object}
 */
ht.graph.GraphView.prototype.getEditPointSize = function (){};

/**
 * 获取拓扑组件的布局高度
 * @return {Number}
 */
ht.graph.GraphView.prototype.getHeight = function (){};

/**
 * 传入逻辑坐标点或者交互event事件参数、图元对象，判断当前点下的icon信息
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @example //返回值示例：
 * {
 * 	data: data,//相关数据元素 
 * 	key: 'key',//styleIcon名
 * 	index: 0,//styleIcon中第几个icon
 * 	name: 'name'//styleIcon中相应icon的名字
 * }
 * 
 * @return {Object}
 */
ht.graph.GraphView.prototype.getIconInfoAt = function (pointOrEvent, data){};

/**
 * 获取交互器
 * @return {ht.List}
 */
ht.graph.GraphView.prototype.getInteractors = function (){};

/**
 * 获取图元的label，用于在拓扑上显示文字信息，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元label文字，默认返回data.s('label')||data.getName();
 */
ht.graph.GraphView.prototype.getLabel = function (data){};

/**
 * 获取图元的第二个label，用于在拓扑上显示文字，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元第二个label的文字，默认返回data.s('label2')
 */
ht.graph.GraphView.prototype.getLabel2 = function (data){};

/**
 * 获取图元的第二个label的背景色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元第二个label的背景色，默认返回data.s('label2.background')
 */
ht.graph.GraphView.prototype.getLabel2Background = function (data){};

/**
 * 获取图元的第二个label的文字颜色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元第二个label的文字颜色，默认返回data.s('label2.color')
 */
ht.graph.GraphView.prototype.getLabel2Color = function (data){};

/**
 * 获取图元label的背景色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元label的背景色，默认返回data.s('label.background')
 */
ht.graph.GraphView.prototype.getLabelBackground = function (data){};

/**
 * 获取图元label的文字颜色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元label的文字颜色，默认返回data.s('label.color')
 */
ht.graph.GraphView.prototype.getLabelColor = function (data){};

/**
 * 获取拓扑中已定义的层
 * @return {Array}
 */
ht.graph.GraphView.prototype.getLayers = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为拓扑中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.graph.GraphView#lp lp}
 */
ht.graph.GraphView.prototype.getLogicalPoint = function (event){};

/**
 * 获取移动过滤器函数
 * @return {Function}
 */
ht.graph.GraphView.prototype.getMovableFunc = function (){};

/**
 * 获取图元的note，用于在拓扑上显示标注信息，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元note文字，默认返回data.s('note')
 */
ht.graph.GraphView.prototype.getNote = function (){data};

/**
 * 获取图元的第二个note，用于在拓扑上显示标注信息，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元第二个note文字，默认返回data.s('note2')
 */
ht.graph.GraphView.prototype.getNote2 = function (){data};

/**
 * 获取图元的第二个note的背景色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元第二个note的背景色，默认返回data.s('note2.background')
 */
ht.graph.GraphView.prototype.getNote2Background = function (){data};

/**
 * 获取图元note的文字颜色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元note的文字颜色，默认返回data.s('note.background')
 */
ht.graph.GraphView.prototype.getNoteBackground = function (data){};

/**
 * 获取图元的透明度，可重载返回自定义透明度
 * @param {ht.Data} data 图元
 * @return {Number} 图元透明度，默认返回data.s('opacity')
 */
ht.graph.GraphView.prototype.getOpacity = function (data){};

/**
 * 获取点编辑(Shape、Edge等)过滤器函数
 * @return {Function}
 */
ht.graph.GraphView.prototype.getPointEditableFunc = function (){};

/**
 * 获取大小编辑过滤器函数
 * @return {Function}
 */
ht.graph.GraphView.prototype.getRectEditableFunc = function (){};

/**
 * 获取框选选择框的背景色
 * @return {color}
 */
ht.graph.GraphView.prototype.getRectSelectBackground = function (){};

/**
 * 获取框选选择框的边框颜色
 * @return {color}
 */
ht.graph.GraphView.prototype.getRectSelectBorderColor = function (){};

/**
 * 获取旋转编辑过滤器函数
 * @return {Function}
 */
ht.graph.GraphView.prototype.getRotationEditableFunc = function (){};

/**
 * 获取图元编辑时的旋转控制点坐标
 * @param {ht.Data} data 图元
 * @return {Object} 旋转控制点坐标
 */
ht.graph.GraphView.prototype.getRotationPoint = function (data){};

/**
 * 获取滚动条颜色
 * @return {color}
 */
ht.graph.GraphView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条宽度
 * @return {Number}
 */
ht.graph.GraphView.prototype.getScrollBarSize = function (){};

/**
 * 获取拓扑的滚动区域，即contentRect + viewRect
 * @return {Object} 矩形区域
 */
ht.graph.GraphView.prototype.getScrollRect = function (){};

/**
 * 获取选择过滤器函数
 * @return {Function}
 */
ht.graph.GraphView.prototype.getSelectableFunc = function (){};

/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下已选中的图元
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data}
 */
ht.graph.GraphView.prototype.getSelectedDataAt = function (pointOrEvent){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.graph.GraphView#sm sm}
 */
ht.graph.GraphView.prototype.getSelectionModel = function (){};

/**
 * 获取ToolTip文字，可重载返回自定义的toolTip文字
 * @param {Event} e 鼠标或Touch事件对象
 * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
 */
ht.graph.GraphView.prototype.getToolTip = function (e){};

/**
 * 获取水平平移值
 * @return {Number} 水平平移值
 * @see {@link ht.graph.GraphView#tx tx}
 */
ht.graph.GraphView.prototype.getTranslateX = function (){};

/**
 * 获取垂直平移值
 * @return {Number} 垂直平移值
 * @see {@link ht.graph.GraphView#ty ty}
 */
ht.graph.GraphView.prototype.getTranslateY = function (){};

/**
 * 获取拓扑组件的根层div
 * @return {HTMLDivElement}
 */
ht.graph.GraphView.prototype.getView = function (){};

/**
 * 获取拓扑组件中可见区域的逻辑尺寸
 * @return {Object}
 */
ht.graph.GraphView.prototype.getViewRect = function (){};

/**
 * 获取可见过滤器函数
 * @return {Function}
 */
ht.graph.GraphView.prototype.getVisibleFunc = function (){};

/**
 * 获取拓扑组件的布局宽度
 * @return {Number}
 */
ht.graph.GraphView.prototype.getWidth = function (){};

/**
 * 获取拓扑整体缩放值
 * @return {Number}
 */
ht.graph.GraphView.prototype.getZoom = function (){};

/**
 * 无效拓扑，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.graph.GraphView#iv iv}
 */
ht.graph.GraphView.prototype.invalidate = function (delay){};

/**
 * 无效拓扑中的所有图元
 */
ht.graph.GraphView.prototype.invalidateAll = function (){};

/**
 * 无效拓扑中的图元
 * @param {ht.Data} data 要无效的图元
 */
ht.graph.GraphView.prototype.invalidateData = function (data){};

/**
 * 无效选中模型中的图元
 */
ht.graph.GraphView.prototype.invalidateSelection = function (){};

/**
 * 是否自动隐藏滚动条
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isAutoHideScrollBar = function (){};

/**
 * 选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
 * @return {Boolean}
 */
ht.graph.GraphView.prototype.isAutoMakeVisible = function (){};


/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isDisabled = function (){};

/**
 * 判断图元是否可被编辑
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isEditable = function (data){};

/**
 * 图元编辑点是否可见，默认当拓扑缩放值大于0.15时可见
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isEditVisible = function (data){};

/**
 * 判断图元label是否可见，默认当拓扑缩放值大于0.15时可见
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isLabelVisible = function (data){};

/**
 * 判断图元是否可移动
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isMovable = function (data){};

/**
 * 判断图元note是否可见，默认当拓扑缩放值大于0.15时可见
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isNoteVisible = function (data){};

/**
 * 拓扑是否可以通过鼠标拖拽进行平移操作
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isPannable = function (){};

/**
 * 判断图元(Shape、Edge等)的点是否可编辑
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isPointEditable = function (data){};

/**
 * 判断图元大小是否可编辑
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isRectEditable = function (data){};

/**
 * 判断拓扑上是否允许框选操作
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isRectSelectable = function (){};

/**
 * 判断拓扑上是否允许通过空格将拓扑的缩放和平移值复位
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isResettable = function (){};

/**
 * 判断图元是否可编辑旋转
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isRotationEditable = function (data){};

/**
 * 判断拓扑滚动条是否可见
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isScrollBarVisible = function (){};

/**
 * 判断图元是否可被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isSelectable = function (data){};

/**
 * 判断图元是否被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isSelected = function (data){};

/**
 * 根据id判断图元是否被选中
 * @param {String|Number} id 图元id
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isSelectedById = function (id){};

/**
 * 当前拓扑是否共享选中模型
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isSelectionModelShared = function (){};

/**
 * 拓扑中的图元的选中边框是否可见，默认当拓扑缩放值大于0.15时可见
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isSelectVisible = function (data){};

/**
 * 判断图元是否可见
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.isVisible = function (data){};

/**
 * 无效拓扑，并调用延时刷新，{@link ht.graph.GraphView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.graph.GraphView#invalidate invalidate}
 */
ht.graph.GraphView.prototype.iv = function (delay){};

/**
 * 传入HTML事件对象，将事件坐标转换为拓扑中的逻辑坐标，{@link ht.graph.GraphView#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.graph.GraphView#getLogicalPoint getLogicalPoint}
 */
ht.graph.GraphView.prototype.lp = function (event){};

/**
 * 平移拓扑以确保该图元在可见区域内
 * @param {ht.Data} data 图元
 */
ht.graph.GraphView.prototype.makeVisible = function (data){};

/**
 * 增加交互事件监听器，{@link ht.graph.GraphView#addInteractorListener addInteractorListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph.GraphView#addInteractorListener addInteractorListener}
 * @example //示例：
 * graphView.mi(function(event) {
 * 		//event格式：
 * 		{
 * 			//clickData, doubleClickData, clickBackground, doubleClickBackground, 
 * 			//beginRectSelect, betweenRectSelect, endRectSelect, beginMove, betweenMove, endMove,
 * 			//beginPan, betweenPan, endPan, beginEditRect, betweenEditRect, endEditRect, beginEditPoint, betweenEditPoint, endEditPoint
 * 			//beginEditRotation, betweenEditRotation, endEditRotation, moveLeft, moveRight, moveUp, moveDown, toggleNote, toggleNote2
 * 			kind: 'clickData',//事件类型
 * 			data: data,//事件相关的数据元素
 * 			part: "part",//事件的区域,icon、label等
 * 			event: e//html原生事件
 * 		}
 * });
 */
ht.graph.GraphView.prototype.mi = function (listener, scope, ahead){};

/**
 * 移动选中模型中图元的位置
 * @param {Number} offsetX 水平移动值
 * @param {Number} offsetY 垂直移动值
 */
ht.graph.GraphView.prototype.moveSelection = function (offsetX, offsetY){};

/**
 * 增加自身属性变化事件监听器，{@link ht.graph.GraphView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph.GraphView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.graph.GraphView.prototype.mp = function (listener, scope, ahead){};

/**
 * 自动布局动画结束后时回调，可重载做后续处理
 */
ht.graph.GraphView.prototype.onAutoLayoutEnded = function (){};

/**
 * 单击拓扑背景时回调，可重载做后续处理
 * @param {Event} event 事件对象
 */
ht.graph.GraphView.prototype.onBackgroundClicked = function (event){};

/**
 * 双击拓扑背景时回调，默认调用upSubGraph()进入上一层子网，可重载改变默认逻辑或做后续处理
 * @param {Event} event 事件对象
 */
ht.graph.GraphView.prototype.onBackgroundDoubleClicked = function (event){};

/**
 * 当前子网变化时回调，默认实现调用reset()恢复默认缩放和平移值，可重载改变默认逻辑或做后续处理
 * @param {Event} event 事件对象
 */
ht.graph.GraphView.prototype.onCurrentSubGraphChanged = function (event){};

/**
 * 图元被点击时回调，可重载做后续处理
 * @param {ht.Data} data 被点击的图元
 * @param {Event} e 事件对象
 */
ht.graph.GraphView.prototype.onDataClicked = function (data, e){};

/**
 * 图元被双击时回调，可重载做后续处理
 * @param {ht.Data} data 双击的图元
 * @param {Event} e 事件对象
 */
ht.graph.GraphView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 连线图元被双击时回调，默认调用edge.toggle()，可重载改变默认逻辑或做后续处理
 * @param {ht.Edge} edge 连线
 * @param {Event} e 事件对象
 */
ht.graph.GraphView.prototype.onEdgeDoubleClicked = function (edge, e){};

/**
 * 组类型图元被双击时回调，默认实现调用group.toggle()，可重载改变默认逻辑或做后续处理
 * @param {ht.Group} group Group对象
 * @param {Event} e 事件对象
 */
ht.graph.GraphView.prototype.onGroupDoubleClicked = function (group, e){};

/**
 * 移动图元位置结束时回调，可重载做后续处理
 */
ht.graph.GraphView.prototype.onMoveEnded = function (){};

/**
 * 手抓图平移拓扑图结束时回调，可重载做后续处理
 */
ht.graph.GraphView.prototype.onPanEnded = function (){};

/**
 * 触屏进行双指缩放结束时回调，可重载做后续处理
 */
ht.graph.GraphView.prototype.onPinchEnded = function (){};

/**
 * 框选结束时回调，可重载做后续处理
 */
ht.graph.GraphView.prototype.onRectSelectEnded = function (){};

/**
 * 选中变化时回调，默认实现会使得该选中图元出现在拓扑图上的可见范围
 * @param {Event} event 选中变化事件对象
 */
ht.graph.GraphView.prototype.onSelectionChanged = function (event){};

/**
 * 子网图元被双击时回调，默认实现进入子网
 * @param {ht.SubGraph} subGraph 子网对象
 * @param {Event} event 事件对象
 */
ht.graph.GraphView.prototype.onSubGraphDoubleClicked = function (subGraph, event){};

/**
 * 平移动画结束时回调，可重载做后续处理
 */
ht.graph.GraphView.prototype.onTranslateEnded = function (){};

/**
 * 图元可见状态发生变化时回调，可重载做后续处理
 * @param {ht.Data} data 图元
 * @param {Boolean} newVisible 新的可见状态
 */
ht.graph.GraphView.prototype.onVisibleChanged = function (data, newVisible){};

/**
 * 缩放动画结束时回调
 */
ht.graph.GraphView.prototype.onZoomEnded = function (){};

/**
 * 判断图元是否在矩形范围内
 * @param {ht.Data} data 图元
 * @param {Object} rect 矩形
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.rectContains = function (data, rect){};

/**
 * 判断图元与矩形范围是否相交
 * @param {ht.Data} data 图元
 * @param {Object} rect 矩形
 * @return {Boolean} 
 */
ht.graph.GraphView.prototype.rectIntersects = function (data, rect){};

/**
 * 重绘拓扑，rect参数为空时重绘拓扑中的所有图元，否则重绘矩形范围内的图元
 * @param {Object} [rect] 矩形范围
 */
ht.graph.GraphView.prototype.redraw = function (rect){};

/**
 * 删除底层Painter
 * @param {Object} painter Painter类
 */
ht.graph.GraphView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除交互事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.graph.GraphView#umi umi}
 */
ht.graph.GraphView.prototype.removeInteractorListener = function (listener, scope){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.graph.GraphView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除所有选中的图元
 */
ht.graph.GraphView.prototype.removeSelection = function (){};

/**
 * 删除顶层Painter
 * @param {Object} painter Painter类
 */
ht.graph.GraphView.prototype.removeTopPainter = function (painter){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.graph.GraphView.prototype.removeViewListener = function (listener, scope){};

/**
 * 重置拓扑状态，将zoom设为1，translate设为0
 */
ht.graph.GraphView.prototype.reset = function (){};

/**
 * 提供一个回调函数倒序遍历此拓扑中的图元，与DataModel上的each方法不同，此方法还考虑了拓扑中的Layer，从高Layer向低Layer遍历
 * @param {Function} func 遍历函数
 * @param {Object} [scope] 函数域
 * @example graphView.reverseEach(function(data) {
 *   console.log(data);
 * });
 */
ht.graph.GraphView.prototype.reverseEach = function (func, scope){};

/**
 * 选中拓扑中所有图元
 */
ht.graph.GraphView.prototype.selectAll = function (){};

/**
 * 设置是否自动隐藏滚动条
 * @param {Boolean} v
 */
ht.graph.GraphView.prototype.setAutoHideScrollBar = function (v){};


/**
 * 设置当选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
 * @param {Boolean} v
 */
ht.graph.GraphView.prototype.setAutoMakeVisible = function (v){};


/**
 * 设置自动滚动区域大小，当鼠标距离拓扑边缘小于这个值时，拓扑自动滚动(调整translateX或translateY)
 * @param {Boolean} v
 */
ht.graph.GraphView.prototype.setAutoScrollZone = function (v){};

/**
 * 设置当前子网
 * @param {ht.SubGraph} subGraph 子网对象
 */
ht.graph.GraphView.prototype.setCurrentSubGraph = function (subGraph){};

/**
 * 设置绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.graph.GraphView.prototype.setDataModel = function (dataModel){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.graph.GraphView.prototype.setDisabled = function (value, iconUrl){};
/**
 * 设置拓扑中的图元是否可编辑
 * @param {Boolean} editable
 */
ht.graph.GraphView.prototype.setEditable = function (editable){};

/**
 * 设置编辑过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph.GraphView.prototype.setEditableFunc = function (func){};

/**
 * 设置编辑交互器中编辑点的背景色
 * @param {color} color 颜色值
 */
ht.graph.GraphView.prototype.setEditPointBackground = function (color){};

/**
 * 设置编辑交互器中编辑点的边框颜色
 * @param {color} color 颜色值
 */
ht.graph.GraphView.prototype.setEditPointBorderColor = function (color){};

/**
 * 设置编辑交互器中编辑点的尺寸
 * @param {Number} size 编辑点尺寸
 */
ht.graph.GraphView.prototype.setEditPointSize = function (size){};

/**
 * 设置布局高度
 * @param {Number} height 高度值
 */
ht.graph.GraphView.prototype.setHeight = function (height){};

/**
 * 设置交互器
 * @param {ht.List} interactors 交互器对象集合
 */
ht.graph.GraphView.prototype.setInteractors = function (interactors){};

/**
 * 定义拓扑中的层，参数为数组，数组中每个元素代表一个层，层在数组中的索引越大，在拓扑中就越靠上显示<br>
 * 注意，图元的默认layer是0，因此如果定义的层中不包含0，所有的图元默认将不可见
 * @param {Array} layers 层数组
 * @example
 * graphView.setLayers([0, 1, 'Layer2']);
 * node.setLayer(1);
 * node2.setLayer('Layer2');
 */
ht.graph.GraphView.prototype.setLayers = function (layers){};

/**
 * 设置移动过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph.GraphView.prototype.setMovableFunc = function (func){};

/**
 * 设置是否可以通过鼠标拖拽进行平移操作
 * @param {Boolean} v 是否可平移
 */
ht.graph.GraphView.prototype.setPannable = function (v){};

/**
 * 设置点编辑(Shape、Edge等)过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph.GraphView.prototype.setPointEditableFunc = function (func){};

/**
 * 设置大小编辑过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph.GraphView.prototype.setRectEditableFunc = function (func){};

/**
 * 设置拓扑上是否允许框选操作
 * @param {Boolean} v
 */
ht.graph.GraphView.prototype.setRectSelectable = function (v){};

/**
 * 设置框选选择框的背景色
 * @param {color} color 颜色值
 */
ht.graph.GraphView.prototype.setRectSelectBackground = function (color){};

/**
 * 设置框选选择框的边框颜色
 * @param {color} color 颜色值
 */
ht.graph.GraphView.prototype.setRectSelectBorder = function (color){};

/**
 * 设置拓扑上是否允许通过空格将拓扑的缩放和平移值复位
 * @param {Boolean} v
 */
ht.graph.GraphView.prototype.setResettable = function (v){};

/**
 * 设置旋转编辑过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph.GraphView.prototype.setRotationEditableFunc = function (func){};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.graph.GraphView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条宽度
 * @param {Number} size 宽度值
 */
ht.graph.GraphView.prototype.setScrollBarSize = function (size){};

/**
 * 设置滚动条是否可见
 * @param {Boolean} visible
 */
ht.graph.GraphView.prototype.setScrollBarVisible = function (visible){};

/**
 * 设置选择过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph.GraphView.prototype.setSelectableFunc = function (func){};

/**
 * 设置拓扑是否共享选中模型
 * @param {Boolean} v
 */
ht.graph.GraphView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置拓扑水平和垂直平移值
 * @param {Number} x 水平平移值
 * @param {Number} y 垂直平移值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.graph.GraphView.prototype.setTranslate = function (x, y, anim){};

/**
 * 设置拓扑水平平移值
 * @param {Number} x 水平平移值
 */
ht.graph.GraphView.prototype.setTranslateX = function (x){};

/**
 * 设置拓扑垂直平移值
 * @param {Number} y 垂直平移值
 */
ht.graph.GraphView.prototype.setTranslateY = function (y){};

/**
 * 设置可见过滤器
 * @param {Function} func 过滤器函数
 */
ht.graph.GraphView.prototype.setVisibleFunc = function (func){};

/**
 * 设置布局宽度
 * @param {Number} width 宽度值
 */
ht.graph.GraphView.prototype.setWidth = function (width){};

/**
 * 设置拓扑缩放值
 * @param {Number} value 缩放值
 * @param {Boolean} [anim] 是否使用动画
 * @param {Object} [point] 缩放中心点的坐标
 */
ht.graph.GraphView.prototype.setZoom = function (value, anim, point){};

/**
 * 显示滚动条
 */
ht.graph.GraphView.prototype.showScrollBar = function (){};

/**
 * 获取选中模型，{@link ht.graph.GraphView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.graph.GraphView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.graph.GraphView.prototype.sm = function (){};

/**
 * 将拓扑导出为canvas
 * @param {color} background 背景色 
 * @return {HTMLCanvasElement}
 */
ht.graph.GraphView.prototype.toCanvas = function (background){};

/**
 * 将拓扑导出为base64格式字符串
 * @param {color} background 背景色 
 * @return {String}
 */
ht.graph.GraphView.prototype.toDataURL = function (background){};

/**
 * 在当前值基础上增加水平和垂直平移值
 * @param {Number} x 新增的水平平移值 
 * @param {Number} y 新增的垂直平移值 
 * @param {Boolean} [anim] 是否使用动画
 */
ht.graph.GraphView.prototype.translate = function (x, y, anim){};

/**
 * 获取或设置水平平移值，没有参数时相当于{@link ht.graph.GraphView#getTranslateX getTranslateX}，有参数时相当于{@link ht.graph.GraphView#setTranslateX setTranslateX}
 * @param {Number} value 平移值 
 */
ht.graph.GraphView.prototype.tx = function (value){};

/**
 * 获取或设置垂直平移值，没有参数时相当于{@link ht.graph.GraphView#getTranslateY getTranslateY}，有参数时相当于{@link ht.graph.GraphView#setTranslateY setTranslateY}
 * @param {Number} value 平移值 
 */
ht.graph.GraphView.prototype.ty = function (value){};

/**
 * 删除交互事件监听器，{@link ht.graph.GraphView#removeInteractorListener removeInteractorListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.graph.GraphView#removeInteractorListener removeInteractorListener}
 */
ht.graph.GraphView.prototype.umi = function (listener, scope){};

/**
 * 删除自身属性变化事件监听器，{@link ht.graph.GraphView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.graph.GraphView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.graph.GraphView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新拓扑
 */
ht.graph.GraphView.prototype.validate = function (){};

/**
 * 放大拓扑
 * @param {Boolean} [anim] 是否使用动画
 * @param {Object} [point] 缩放中心点的坐标
 */
ht.graph.GraphView.prototype.zoomIn = function (anim, point){};

/**
 * 缩小拓扑
 * @param {Boolean} [anim] 是否使用动画
 * @param {Object} [point] 缩放中心点的坐标
 */
ht.graph.GraphView.prototype.zoomOut = function (anim, point){};

/**
 * 将拓扑缩放值改为1
 * @param {Boolean} [anim] 是否使用动画
 * @param {Object} [point] 缩放中心点的坐标
 */
ht.graph.GraphView.prototype.zoomReset = function (anim, point){};









/**
 * 拓扑组件上交互器基类，封装了交互的基础功能
 * @param {ht.graph.GraphView} graphView 绑定拓扑组件
 * @constructor
 */
ht.graph.Interactor = function(graphView) {};






/**
 * 实现GraphView手抓图、Group双击展开合并、进出SubGraph、EdgeGroup展开合并等基本交互功能
 * @param {ht.graph.GraphView} graphView 绑定拓扑组件
 * @constructor
 * @extends {ht.graph.Interactor}
 */
ht.graph.DefaultInteractor = function(graphView) {};






/**
 * 实现拖拽移动图元的交互功能
 * @param {ht.graph.GraphView} graphView 绑定拓扑组件
 * @constructor
 * @extends {ht.graph.Interactor}
 */
ht.graph.MoveInteractor = function(graphView) {};






/**
 * 实现单击选择和拖拽框选功能
 * @param {ht.graph.GraphView} graphView 绑定拓扑组件
 * @constructor
 * @extends {ht.graph.Interactor}
 */
ht.graph.SelectInteractor = function(graphView) {};




/**
 * 实现对图元的大小、旋转以及多边形编辑功能
 * @param {ht.graph.GraphView} graphView 绑定拓扑组件
 * @constructor
 * @extends {ht.graph.Interactor}
 */
ht.graph.EditInteractor = function(graphView) {};
/**
 * 实现触摸屏上Touch交互
 * @param {ht.graph.GraphView} graphView 绑定拓扑组件
 * @param {Object} params 交互参数
 * @constructor
 * @extends {ht.graph.Interactor}
 * @example //params参数格式：
 * {
 * 	selectable: true|false,//是否启用选择功能
 * 	movable: true|false,//是否启用移动功能
 * 	pannable: true|false,//是否启用pan功能
 * 	pinchable: true|false,//是否启用双指pinch缩放
 * 	editable: true|false,//是否启用编辑功能
 * }
 * 
 */
ht.graph.TouchInteractor = function(graphView, params) {};
/**
 * 折叠组件，用于多组件的折叠展开效果，提供水平和垂直两种布局方式
 * @constructor
 */
ht.widget.AccordionView = function() {};

/**
 * 添加组件
 * @param {String} title 组件的标题文字信息，不同组件不得相同
 * @param {Object|HTMLElement} content 组件内容，可为HT框架提供的组件对象，也可为原生HTML元素
 * @param {Boolean} expand 组件是否展开，默认为false
 * @param {String} icon 组件标题中显示的图标
 */
ht.widget.AccordionView.prototype.add = function (title, content, expand, icon){};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.AccordionView#mp mp}
 */
ht.widget.AccordionView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.AccordionView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 清除所有组件
 */
ht.widget.AccordionView.prototype.clear = function (){};

/**
 * 合并当前展开的组件
 */
ht.widget.AccordionView.prototype.collapse = function (){};

/**
 * 根据标题找到组件并展开
 * @param {String} title 标题文字
 */
ht.widget.AccordionView.prototype.expand = function (title){};

/**
 * 获取合并图标
 * @return {String}
 */
ht.widget.AccordionView.prototype.getCollapseIcon = function (){};

/**
 * 获取当前展开组件的标题
 * @return {String}
 */
ht.widget.AccordionView.prototype.getCurrentTitle = function (){};

/**
 * 获取展开图标
 * @return {String}
 */
ht.widget.AccordionView.prototype.getExpandIcon = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.AccordionView.prototype.getHeight = function (){};

/**
 * 获取标题文字颜色
 * @return {color}
 */
ht.widget.AccordionView.prototype.getLabelColor = function (){};

/**
 * 获取标题文字字体
 * @return {String}
 */
ht.widget.AccordionView.prototype.getLabelFont = function (){};

/**
 * 获取布局方式，默认为vertical或v，可设置为horizontal或h
 * @return {String}
 */
ht.widget.AccordionView.prototype.getOrientation = function (){};

/**
 * 获取标题选中背景色
 * @return {color}
 */
ht.widget.AccordionView.prototype.getSelectBackground = function (){};

/**
 * 获取标题选中边框宽度
 * @return {Number}
 */
ht.widget.AccordionView.prototype.getSelectWidth = function (){};

/**
 * 获取分割线的颜色
 * @return {color}
 */
ht.widget.AccordionView.prototype.getSeparatorColor = function (){};

/**
 * 获取标题背景色
 * @return {color}
 */
ht.widget.AccordionView.prototype.getTitleBackground = function (){};

/**
 * 获取标题高度
 * @return {Number}
 */
ht.widget.AccordionView.prototype.getTitleHeight = function (){};

/**
 * 获取所有标题
 * @return {ht.List}
 */
ht.widget.AccordionView.prototype.getTitles = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.AccordionView.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.AccordionView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.AccordionView#iv iv}
 */

ht.widget.AccordionView.prototype.invalidate = function (delay){};


/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.AccordionView.prototype.isDisabled = function (){};

/**
 * 判断指定的title是否处于展开状态
 * @param {String} title 标题文字
 * @return {Boolean} 
 */
ht.widget.AccordionView.prototype.isExpanded = function (title){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.AccordionView#invalidate invalidate}
 */

ht.widget.AccordionView.prototype.iv = function (delay){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.AccordionView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.AccordionView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.AccordionView.prototype.mp = function (listener, scope, ahead){};

/**
 * 合并标题时调用，可重载做后续处理
 * @param {String} title 标题
 */
ht.widget.AccordionView.prototype.onCollapsed = function (title){};

/**
 * 展开标题时调用，可重载做后续处理
 * @param {String} title 标题
 */
ht.widget.AccordionView.prototype.onExpanded = function (title){};

/**
 * 根据标题找到组件并删除
 * @param {String} title 标题
 */
ht.widget.AccordionView.prototype.remove = function (title){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.AccordionView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.AccordionView.prototype.removeViewListener = function (listener, scope){};

/**
 * 设置合并图标
 * @param {String} icon 图标
 */
ht.widget.AccordionView.prototype.setCollapseIcon = function (icon){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.AccordionView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置展开图标
 * @param {String} icon 图标
 */
ht.widget.AccordionView.prototype.setExpandIcon = function (icon){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.AccordionView.prototype.setHeight = function (v){};

/**
 * 设置标题文字颜色
 * @param {color} color 颜色值
 */
ht.widget.AccordionView.prototype.setLabelColor = function (color){};

/**
 * 设置标题文字字体
 * @param {String} font 字体
 */
ht.widget.AccordionView.prototype.setLabelFont = function (font){};

/**
 * 设置布局方式，默认为vertical或v，可设置为horizontal或h
 * @param {String} v 布局方式
 */
ht.widget.AccordionView.prototype.setOrientation = function (v){};

/**
 * 设置标题选中背景色
 * @param {color} color 颜色值
 */
ht.widget.AccordionView.prototype.setSelectBackground = function (color){};

/**
 * 设置标题选中边框宽度
 * @param {Number} v
 */
ht.widget.AccordionView.prototype.setSelectWidth = function (v){};

/**
 * 设置分割线颜色
 * @param {color} color 颜色值
 */
ht.widget.AccordionView.prototype.setSeparatorColor = function (color){};

/**
 * 设置标题背景色
 * @param {color} color 颜色值
 */
ht.widget.AccordionView.prototype.setTitleBackground = function (color){};

/**
 * 设置标题高度
 * @param {Number} v 高度值
 */
ht.widget.AccordionView.prototype.setTitleHeight = function (v){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.AccordionView.prototype.setWidth = function (v){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.AccordionView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.AccordionView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.AccordionView.prototype.ump = function (listener, scope){};

/**
 * 刷新组件
 */
ht.widget.AccordionView.prototype.validate = function (){};







/**
 * 边框面板是一种组件布局容器，可在上、下、左、右、中的五个区域位置摆放子组件， 
 * 子组件可为HT框架提供的组件，也可为HTML元素，子组件以position为absolute方式进行绝对定位。
 * @constructor
 */
ht.widget.BorderPane = function() {};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.BorderPane#mp mp}
 */
ht.widget.BorderPane.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.BorderPane.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 获取底部组件高度
 * @return {Number}
 */
ht.widget.BorderPane.prototype.getBottomHeight = function (){};

/**
 * 获取底部组件
 * @return {Object|HTMLElement}
 */
ht.widget.BorderPane.prototype.getBottomView = function (){};

/**
 * 获取中间组件
 * @return {Object|HTMLElement}
 */
ht.widget.BorderPane.prototype.getCenterView = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.BorderPane.prototype.getHeight = function (){};

/**
 * 获取左侧组件
 * @return {Object|HTMLElement}
 */
ht.widget.BorderPane.prototype.getLeftView = function (){};

/**
 * 获取左侧组件宽度
 * @return {Number}
 */
ht.widget.BorderPane.prototype.getLeftWidth = function (){};

/**
 * 获取右侧组件
 * @return {Object|HTMLElement}
 */
ht.widget.BorderPane.prototype.getRightView = function (){};

/**
 * 获取右侧组件宽度
 * @return {Number}
 */
ht.widget.BorderPane.prototype.getRightWidth = function (){};

/**
 * 获取顶部组件高度
 * @return {Number}
 */
ht.widget.BorderPane.prototype.getTopHeight = function (){};

/**
 * 获取顶部组件
 * @return {Object|HTMLElement}
 */
ht.widget.BorderPane.prototype.getTopView = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.BorderPane.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.BorderPane.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.BorderPane#iv iv}
 */
ht.widget.BorderPane.prototype.invalidate = function (delay){};


/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.BorderPane.prototype.isDisabled = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.BorderPane#invalidate invalidate}
 */
ht.widget.BorderPane.prototype.iv = function (delay){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.BorderPane#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.BorderPane#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.BorderPane.prototype.mp = function (listener, scope, ahead){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.BorderPane.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.BorderPane.prototype.removeViewListener = function (listener, scope){};

/**
 * 设置底部组件高度
 * @param {Number} v
 */
ht.widget.BorderPane.prototype.setBottomHeight = function (v){};

/**
 * 设置底部组件
 * @param {Object|HTMLElement} v
 */
ht.widget.BorderPane.prototype.setBottomView = function (v){};

/**
 * 设置中间组件
 * @param {Object|HTMLElement} v
 */
ht.widget.BorderPane.prototype.setCenterView = function (v){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.BorderPane.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置布局高度
 * @param {Number} v
 */
ht.widget.BorderPane.prototype.setHeight = function (v){};

/**
 * 设置左侧组件
 * @param {Object|HTMLElement} v
 */
ht.widget.BorderPane.prototype.setLeftView = function (v){};

/**
 * 设置左侧组件宽度
 * @param {Number} v
 */
ht.widget.BorderPane.prototype.setleftWidth = function (v){};

/**
 * 设置右侧组件
 * @param {Object|HTMLElement} v
 */
ht.widget.BorderPane.prototype.setRightView = function (v){};

/**
 * 设置右侧组件宽度
 * @param {Number} v
 */
ht.widget.BorderPane.prototype.setRightWidth = function (v){};

/**
 * 设置顶部组件高度
 * @param {Number} v
 */
ht.widget.BorderPane.prototype.setTopHeight = function (v){};

/**
 * 设置顶部组件
 * @param {Object|HTMLElement} v
 */
ht.widget.BorderPane.prototype.setTopView = function (v){};

/**
 * 设置布局宽度
 * @param {Number} v
 */
ht.widget.BorderPane.prototype.setWidth = function (v){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.BorderPane#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.BorderPane#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.BorderPane.prototype.ump = function (listener, scope){};

/**
 * 刷新组件
 */
ht.widget.BorderPane.prototype.validate = function (){};









/**
 * 列表组件类，用列表的方式呈现DataModel中的数据
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 */
ht.widget.ListView = function(dataModel) {};

/**
 * 增加底层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyBottomPainter() {
 * }
 * ht.Default.def(MyBottomPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * listView.addBottomPainter(MyBottomPainter);
 */
ht.widget.ListView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.ListView#mp mp}
 */
ht.widget.ListView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};


/**
 * 增加顶层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyTopPainter() {
 * }
 * ht.Default.def(MyTopPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * listView.addTopPainter(MyTopPainter);
 */
ht.widget.ListView.prototype.addTopPainter = function (painter){};


/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.ListView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 关闭ToolTip功能
 */
ht.widget.ListView.prototype.disableToolTip = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.widget.ListView#getDataModel getDataModel}，有参数时相当于{@link ht.widget.ListView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.widget.ListView.prototype.dm = function (dataModel){};

/**
 * 绘制图标，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.ListView.prototype.drawIcon = function (g, data, x, y, width, height){};

/**
 * 绘制文本，可重载自定义，label一般绘制在最后因此没有width参数限制
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} height 绘制的高度
 */
ht.widget.ListView.prototype.drawLabel = function (g, data, x, y, height){};

/**
 * 绘制行内容，可重载自定义，默认调用drawIcon和drawLabel，如果返回值为HTML元素，则使用HTML元素当作Renderer
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @return {HTMLElement}
 */
ht.widget.ListView.prototype.drawRow = function (g, data, selected, x, y, width, height){};

/**
 * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.ListView.prototype.drawRowBackground = function (g, data, selected, x, y, width, height){};

/**
 * 启用ToolTip
 */
ht.widget.ListView.prototype.enableToolTip = function (){};

/**
 * 获取数据元素icon的背景色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回data.s('body.color')
 */
ht.widget.ListView.prototype.getBodyColor = function (data){};

/**
 * 获取数据元素icon的边框色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回data.s('border.color')
 */
ht.widget.ListView.prototype.getBorderColor = function (data){};

/**
 * 返回数据元素对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.ListView.prototype.getCheckIcon = function (data){};


/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 点下的数据元素
 */
ht.widget.ListView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.widget.ListView.prototype.getDataModel = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number}
 */
ht.widget.ListView.prototype.getEndRowIndex = function (){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法获取focus数据元素
 * @return {ht.Data}
 */
ht.widget.ListView.prototype.getFocusData = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.ListView.prototype.getHeight = function (){};

/**
 * 获取data对象对应的icon图标，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.ListView.prototype.getIcon = function (data){};

/**
 * 返回data对象对应的图标宽度，默认如果有图标则以indent值为宽度，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.ListView.prototype.getIconWidth = function (data){};

/**
 * 获取indent缩进，该值一般当作图标的宽度
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.ListView.prototype.getIndent = function (data){};

/**
 * 获取data对象显示的文字，默认返回data.toLabel()，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.ListView.prototype.getLabel = function (data){};

/**
 * 获取data对象的文本颜色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color}
 */
ht.widget.ListView.prototype.getLabelColor = function (data){};

/**
 * 获取data对象的文本字体，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.ListView.prototype.getLabelFont = function (data){};

/**
 * 获取选中文本的颜色
 * @return {color}
 */
ht.widget.ListView.prototype.getLabelSelectColor = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.ListView#lp lp}
 */
ht.widget.ListView.prototype.getLogicalPoint = function (event){};

/**
 * 获取当前显示的Data对象集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.widget.ListView.prototype.getRowDatas = function (){};

/**
 * 获取行高
 * @return {Number}
 */
ht.widget.ListView.prototype.getRowHeight = function (){};

/**
 * 获取data对象所在的行索引
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.ListView.prototype.getRowIndex = function (data){};

/**
 * 获取行线颜色
 * @return {color}
 */
ht.widget.ListView.prototype.getRowLineColor = function (){};

/**
 * 返回当前可见行总行数
 * @return {Number}
 */
ht.widget.ListView.prototype.getRowSize = function (){};

/**
 * 获取滚动条颜色
 * @return {color}
 */
ht.widget.ListView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条宽度
 * @return {Number}
 */
ht.widget.ListView.prototype.getScrollBarSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {Function}
 */
ht.widget.ListView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景颜色
 * @return {color}
 */
ht.widget.ListView.prototype.getSelectBackground = function (){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.widget.ListView#sm sm}
 */
ht.widget.ListView.prototype.getSelectionModel = function (){};

/**
 * 获取排序函数
 * @return {Function}
 */
ht.widget.ListView.prototype.getSortFunc = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number}
 */
ht.widget.ListView.prototype.getStartRowIndex = function (){};

/**
 * 获取ToolTip文字，可重载返回自定义的toolTip文字
 * @param {Event} e 鼠标或Touch事件对象
 * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
 */
ht.widget.ListView.prototype.getToolTip = function (e){};

/**
 * 获取垂直平移值
 * @return {Number} 垂直平移值
 * @see {@link ht.widget.ListView#ty ty}
 */
ht.widget.ListView.prototype.getTranslateY = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.ListView.prototype.getView = function (){};

/**
 * 获取组件中可见区域的逻辑尺寸
 * @return {Object}
 */
ht.widget.ListView.prototype.getViewRect = function (){};

/**
 * 获取可见过滤器函数
 * @return {Function}
 */
ht.widget.ListView.prototype.getVisibleFunc = function (){};

/**
 * 获取布局宽度
 * @return {Function}
 */
ht.widget.ListView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.ListView#iv iv}
 */
ht.widget.ListView.prototype.invalidate = function (delay){};

/**
 * 无效数据元素
 * @param {ht.Data} data 要无效的数据元素
 */
ht.widget.ListView.prototype.invalidateData = function (data){};

/**
 * 无效模型，最彻底的刷新方式
 * @see {@link ht.widget.ListView#ivm ivm}
 */
ht.widget.ListView.prototype.invalidateModel = function (){};

/**
 * 是否自动隐藏滚动条
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isAutoHideScrollBar = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.widget.ListView.prototype.isAutoMakeVisible = function (){};

/**
 * 是否是check模式
 * @return {Boolean}
 */
ht.widget.ListView.prototype.isCheckMode = function (){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isDisabled = function (){};

/**
 * 获取行线是否可见，默认为true
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isRowLineVisible = function (){};

/**
 * 判断data对象是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isSelectable = function (data){};

/**
 * 判断data对象是否被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isSelected = function (data){};

/**
 * 根据id判断data对象是否被选中
 * @param {String|Number} id 数据元素id
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isSelectedById = function (id){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可见
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.ListView.prototype.isVisible = function (data){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.ListView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.ListView#invalidate invalidate}
 */
ht.widget.ListView.prototype.iv = function (delay){};

/**
 * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，{@link ht.widget.ListView#invalidateModel invalidateModel}的缩写
 * @see {@link ht.widget.ListView#invalidateModel invalidateModel}
 */
ht.widget.ListView.prototype.ivm = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.ListView#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.ListView#getLogicalPoint getLogicalPoint}
 */
ht.widget.ListView.prototype.lp = function (event){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.widget.ListView.prototype.makeVisible = function (data){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.ListView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.ListView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.ListView.prototype.mp = function (listener, scope, ahead){};

/**
 * 数据元素被点击时回调，可重载做后续处理
 * @param {ht.Data} data 被点击的数据元素
 * @param {Event} e 事件对象
 */
ht.widget.ListView.prototype.onDataClicked = function (data, e){};

/**
 * 数据元素被双击时回调，可重载做后续处理
 * @param {ht.Data} data 双击的数据元素
 * @param {Event} e 事件对象
 */
ht.widget.ListView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 平移动画结束时回调，可重载做后续处理
 */
ht.widget.ListView.prototype.onTranslateEnded = function (){};

/**
 * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
 */
ht.widget.ListView.prototype.redraw = function (){};

/**
 * 删除底层Painter
 * @param {Object} painter Painter类
 */
ht.widget.ListView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.ListView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除所有选中的图元
 */
ht.widget.ListView.prototype.removeSelection = function (){};

/**
 * 删除顶层Painter
 * @param {Object} painter Painter类
 */
ht.widget.ListView.prototype.removeTopPainter = function (painter){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.ListView.prototype.removeViewListener = function (listener, scope){};

/**
 * 平移(滚动)组件至指定的行号
 * @param {Number} index 行号
 */
ht.widget.ListView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.widget.ListView.prototype.selectAll = function (){};

/**
 * 设置是否自动隐藏滚动条
 * @param {Boolean} v
 */
ht.widget.ListView.prototype.setAutoHideScrollBar = function (v){};

/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v
 */
ht.widget.ListView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置check模式
 * @param {Boolean} v
 */
ht.widget.ListView.prototype.setCheckMode = function (v){};

/**
 * 设置绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.widget.ListView.prototype.setDataModel = function (dataModel){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.ListView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {ht.Data} data 数据元素
 */
ht.widget.ListView.prototype.setFocusData = function (data){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.widget.ListView.prototype.setFocusDataById = function (id){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.ListView.prototype.setHeight = function (v){};

/**
 * 设置indent缩进，该值一般当作图标的宽度
 * @param {Number} v
 */
ht.widget.ListView.prototype.setIndent = function (v){};

/**
 * 设置行label文字颜色
 * @param {color} v
 */
ht.widget.ListView.prototype.setLabelColor = function (v){};

/**
 * 设置行label文字字体
 * @param {String} v
 */
ht.widget.ListView.prototype.setLabelFont = function (v){};

/**
 * 设置行label文字选中颜色
 * @param {color} v
 */
ht.widget.ListView.prototype.setLabelSelectColor = function (v){};

/**
 * 设置行高
 * @param {Number} v
 */
ht.widget.ListView.prototype.setRowHeight = function (v){};

/**
 * 设置行线颜色
 * @param {color} color
 */
ht.widget.ListView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} v
 */
ht.widget.ListView.prototype.setRowLineVisible = function (v){};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.widget.ListView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条宽度
 * @param {Number} size 宽度值
 */
ht.widget.ListView.prototype.setScrollBarSize = function (size){};

/**
 * 设置选择过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.widget.ListView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景颜色
 * @param {color} color
 */
ht.widget.ListView.prototype.setSelectBackground = function (color){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v
 */
ht.widget.ListView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序函数
 * @param {Function} func
 */
ht.widget.ListView.prototype.setSortFunc = function (func){};

/**
 * 设置垂直平移值(水平平移值无效)
 * @param {Number} x 水平平移值，此参数无效
 * @param {Number} y 垂直平移值
 * @param {Boolean} anim 是否使用动画
 */
ht.widget.ListView.prototype.setTranslate = function (x, y, anim){};

/**
 * 设置垂直平移值
 * @param {Number} v 垂直平移值
 */
ht.widget.ListView.prototype.setTranslateY = function (v){};

/**
 * 设置可见过滤器
 * @param {Function} func 过滤器函数
 */
ht.widget.ListView.prototype.setVisibleFunc = function (func){};

/**
 * 设置布局宽度
 * @param {Function} func 过滤器函数
 */
ht.widget.ListView.prototype.setWidth = function (v){};

/**
 * 显示垂直滚动条
 */
ht.widget.ListView.prototype.showVBar = function (){};

/**
 * 获取选中模型，{@link ht.widget.ListView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.widget.ListView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.widget.ListView.prototype.sm = function (){};

/**
 * 在当前值基础上增加垂直平移值(水平无效)
 * @param {Number} x 新增的水平平移值，此参数无效
 * @param {Number} y 新增的垂直平移值 
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.ListView.prototype.translate = function (x, y, anim){};

/**
 * 获取或设置垂直平移值，没有参数时相当于{@link ht.widget.ListView#getTranslateY getTranslateY}，有参数时相当于{@link ht.widget.ListView#setTranslateY setTranslateY}
 * @param {Number} value 平移值 
 */
ht.widget.ListView.prototype.ty = function (value){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.ListView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.ListView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.ListView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.ListView.prototype.validate = function (){};




















/**
 * 树形组件，以树形的方式呈现DataModel中Data数据的父子关系
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 */
ht.widget.TreeView = function(dataModel) {};

/**
 * 增加底层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyBottomPainter() {
 * }
 * ht.Default.def(MyBottomPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * treeView.addBottomPainter(MyBottomPainter);
 */
ht.widget.TreeView.prototype.addBottomPainter = function(painter) {}

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TreeView#mp mp}
 */
ht.widget.TreeView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};


/**
 * 增加顶层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyTopPainter() {
 * }
 * ht.Default.def(MyTopPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * treeView.addTopPainter(MyTopPainter);
 */
ht.widget.TreeView.prototype.addTopPainter = function (painter){};


/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.TreeView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 合并data对象
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeView.prototype.collapse = function (data){};

/**
 * 合并所有对象
 */
ht.widget.TreeView.prototype.collapseAll = function (){};

/**
 * 关闭ToolTip功能
 */
ht.widget.TreeView.prototype.disableToolTip = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.widget.TreeView#getDataModel getDataModel}，有参数时相当于{@link ht.widget.TreeView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.widget.TreeView.prototype.dm = function (dataModel){};

/**
 * 绘制图标，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.TreeView.prototype.drawIcon = function (g, data, x, y, width, height){};

/**
 * 绘制文本，可重载自定义，label一般绘制在最后因此没有width参数限制
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} height 绘制的高度
 */
ht.widget.TreeView.prototype.drawLabel = function (g, data, x, y, height){};

/**
 * 绘制行内容，可重载自定义，默认调用drawIcon和drawLabel，如果返回值为HTML元素，则使用HTML元素当作Renderer
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @return {HTMLElement}
 */
ht.widget.TreeView.prototype.drawRow = function (g, data, selected, x, y, width, height){};

/**
 * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.TreeView.prototype.drawRowBackground = function (g, data, selected, x, y, width, height){};

/**
 * 启用ToolTip
 */
ht.widget.TreeView.prototype.enableToolTip = function (){};

/**
 * 展开data对象
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeView.prototype.expand = function (data){};

/**
 * 展开所有对象
 */
ht.widget.TreeView.prototype.expandAll = function (){};

/**
 * 获取数据元素icon的背景色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回data.s('body.color')
 */
ht.widget.TreeView.prototype.getBodyColor = function (data){};

/**
 * 获取数据元素icon的边框色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回data.s('border.color')
 */
ht.widget.TreeView.prototype.getBorderColor = function (data){};

/**
 * 返回数据元素对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeView.prototype.getCheckIcon = function (data){};

/**
 * 获取check模式
 * <ul>
 * <li>null：默认值，不启用check选择模式</li>
 * <li>default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象</li>
 * <li>children：该check模式将同时影响点击中的data对象，以及其孩子对象</li>
 * <li>descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象</li>
 * <li>all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象</li>
 * </ul>
 * @return {String}
 */
ht.widget.TreeView.prototype.getCheckMode = function (){};

/**
 * 获取toggle的关闭图标
 * @return {String}
 */
ht.widget.TreeView.prototype.getCollapseIcon = function (){};

/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 点下的数据元素
 */
ht.widget.TreeView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.widget.TreeView.prototype.getDataModel = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number}
 */
ht.widget.TreeView.prototype.getEndRowIndex = function (){};

/**
 * 获取toggle的展开图标
 * @return {String}
 */
ht.widget.TreeView.prototype.getExpandIcon = function (){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法获取focus数据元素
 * @return {ht.Data}
 */
ht.widget.TreeView.prototype.getFocusData = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.TreeView.prototype.getHeight = function (){};

/**
 * 获取data对象对应的icon图标，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeView.prototype.getIcon = function (data){};

/**
 * 返回data对象对应的图标宽度，默认如果有图标则以indent值为宽度，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeView.prototype.getIconWidth = function (data){};

/**
 * 获取indent缩进，该值一般当作图标的宽度
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeView.prototype.getIndent = function (data){};

/**
 * 获取data对象显示的文字，默认返回data.toLabel()，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeView.prototype.getLabel = function (data){};

/**
 * 获取data对象的文本颜色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color}
 */
ht.widget.TreeView.prototype.getLabelColor = function (data){};

/**
 * 获取data对象的文本字体，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeView.prototype.getLabelFont = function (data){};

/**
 * 获取选中文本的颜色
 * @return {color}
 */
ht.widget.TreeView.prototype.getLabelSelectColor = function (){};

/**
 * 获取当前data的缩减层次，一般结合indent参数用于绘制
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeView.prototype.getLevel = function (data){};

/**
 * 获取延迟加载器
 * @return {Object}
 */
ht.widget.TreeView.prototype.getLoader = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TreeView#lp lp}
 */
ht.widget.TreeView.prototype.getLogicalPoint = function (event){};

/**
 * 获取根节点，默认为空，从DataModel#getRoots()的对象开始展示
 * @return {ht.Data}
 */
ht.widget.TreeView.prototype.getRootData = function (){};

/**
 * 获取当前显示的Data对象集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.widget.TreeView.prototype.getRowDatas = function (){};

/**
 * 获取行高
 * @return {Number}
 */
ht.widget.TreeView.prototype.getRowHeight = function (){};

/**
 * 获取data对象所在的行索引
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeView.prototype.getRowIndex = function (data){};

/**
 * 获取行线颜色
 * @return {color}
 */
ht.widget.TreeView.prototype.getRowLineColor = function (){};

/**
 * 返回当前可见行总行数
 * @return {Number}
 */
ht.widget.TreeView.prototype.getRowSize = function (){};

/**
 * 获取滚动条颜色
 * @return {color}
 */
ht.widget.TreeView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条宽度
 * @return {Number}
 */
ht.widget.TreeView.prototype.getScrollBarSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {Function}
 */
ht.widget.TreeView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景颜色
 * @return {color}
 */
ht.widget.TreeView.prototype.getSelectBackground = function (){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.widget.TreeView#sm sm}
 */
ht.widget.TreeView.prototype.getSelectionModel = function (){};

/**
 * 获取排序函数
 * @return {Function}
 */
ht.widget.TreeView.prototype.getSortFunc = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number}
 */
ht.widget.TreeView.prototype.getStartRowIndex = function (){};

/**
 * 返回当前data对象对应的展开或合并图标，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeView.prototype.getToggleIcon = function (data){};

/**
 * 获取ToolTip文字，可重载返回自定义的toolTip文字
 * @param {Event} e 鼠标或Touch事件对象
 * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
 */
ht.widget.TreeView.prototype.getToolTip = function (e){};

/**
 * 获取垂直平移值
 * @return {Number} 垂直平移值
 * @see {@link ht.widget.TreeView#ty ty}
 */
ht.widget.TreeView.prototype.getTranslateY = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.TreeView.prototype.getView = function (){};

/**
 * 获取组件中可见区域的逻辑尺寸
 * @return {Object}
 */
ht.widget.TreeView.prototype.getViewRect = function (){};

/**
 * 获取可见过滤器函数
 * @return {Function}
 */
ht.widget.TreeView.prototype.getVisibleFunc = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.TreeView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TreeView#iv iv}
 */
ht.widget.TreeView.prototype.invalidate = function (delay){};

/**
 * 无效数据元素
 * @param {ht.Data} data 要无效的数据元素
 */
ht.widget.TreeView.prototype.invalidateData = function (data){};

/**
 * 无效模型，最彻底的刷新方式
 * @see {@link ht.widget.TreeView#ivm ivm}
 */
ht.widget.TreeView.prototype.invalidateModel = function (){};

/**
 * 是否自动隐藏滚动条
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isAutoHideScrollBar = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.widget.TreeView.prototype.isAutoMakeVisible = function (){};

/**
 * 是否是check模式
 * @return {Boolean}
 */
ht.widget.TreeView.prototype.isCheckMode = function (){};

/**
 * 判断是否允许对parent对象的孩子排序，默认返回true，可重载屏蔽孩子排序
 * @param {ht.Data} parent 父元素
 * @return {Boolean}
 */
ht.widget.TreeView.prototype.isChildrenSortable = function (parent){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isDisabled = function (){};

/**
 * 判断data对象是否展开
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isExpanded = function (data){};

/**
 * 判断rootData节点是否可见
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isRootVisible = function (){};

/**
 * 获取行线是否可见，默认为true
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isRowLineVisible = function (){};

/**
 * 判断data对象是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isSelectable = function (data){};

/**
 * 判断data对象是否被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isSelected = function (data){};

/**
 * 根据id判断data对象是否被选中
 * @param {String|Number} id 数据元素id
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isSelectedById = function (id){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可见
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TreeView.prototype.isVisible = function (data){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.TreeView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TreeView#invalidate invalidate}
 */
ht.widget.TreeView.prototype.iv = function (delay){};

/**
 * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，{@link ht.widget.TreeView#invalidateModel invalidateModel}的缩写
 * @see {@link ht.widget.TreeView#invalidateModel invalidateModel}
 */
ht.widget.TreeView.prototype.ivm = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.TreeView#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TreeView#getLogicalPoint getLogicalPoint}
 */
ht.widget.TreeView.prototype.lp = function (event){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeView.prototype.makeVisible = function (data){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.TreeView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TreeView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.TreeView.prototype.mp = function (listener, scope, ahead){};

/**
 * 合并data对象时调用，可重载做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeView.prototype.onCollapsed = function (data){};

/**
 * 数据元素被点击时回调，可重载做后续处理
 * @param {ht.Data} data 被点击的数据元素
 * @param {Event} e 事件对象
 */
ht.widget.TreeView.prototype.onDataClicked = function (data, e){};

/**
 * 数据元素被双击时回调，可重载做后续处理
 * @param {ht.Data} data 双击的数据元素
 * @param {Event} e 事件对象
 */
ht.widget.TreeView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 展开data对象时调用，可重载做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeView.prototype.onExpanded = function (data){};

/**
 * 平移动画结束时回调，可重载做后续处理
 */
ht.widget.TreeView.prototype.onTranslateEnded = function (){};

/**
 * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
 */
ht.widget.TreeView.prototype.redraw = function (){};

/**
 * 删除底层Painter
 * @param {Object} painter Painter类
 */
ht.widget.TreeView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TreeView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除所有选中的图元
 */
ht.widget.TreeView.prototype.removeSelection = function (){};

/**
 * 删除顶层Painter
 * @param {Object} painter Painter类
 */
ht.widget.TreeView.prototype.removeTopPainter = function (painter){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TreeView.prototype.removeViewListener = function (listener, scope){};

/**
 * 平移(滚动)组件至指定的行号
 * @param {Number} index 行号
 */
ht.widget.TreeView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.widget.TreeView.prototype.selectAll = function (){};

/**
 * 设置是否自动隐藏滚动条
 * @param {Boolean} v
 */
ht.widget.TreeView.prototype.setAutoHideScrollBar = function (v){};

/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v
 */
ht.widget.TreeView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置check模式
 * @param {String} v
 * <ul>
 * <li>null：默认值，不启用check选择模式</li>
 * <li>default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象</li>
 * <li>children：该check模式将同时影响点击中的data对象，以及其孩子对象</li>
 * <li>descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象</li>
 * <li>all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象</li>
 * </ul>
 */
ht.widget.TreeView.prototype.setCheckMode = function (v){};

/**
 * 设置toggle的关闭图标
 * @param {String} v icon
 */
ht.widget.TreeView.prototype.setCollapseIcon = function (v){};

/**
 * 设置绑定的数据模型
 * @param {ht.DataModel} dataModel 数据模型
 */
ht.widget.TreeView.prototype.setDataModel = function (dataModel){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.TreeView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置toggle的展开图标
 * @param {String} v icon
 */
ht.widget.TreeView.prototype.setExpandIcon = function (v){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeView.prototype.setFocusData = function (data){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.widget.TreeView.prototype.setFocusDataById = function (id){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.TreeView.prototype.setHeight = function (v){};

/**
 * 设置indent缩进，该值一般当作图标的宽度
 * @param {Number} v
 */
ht.widget.TreeView.prototype.setIndent = function (v){};

/**
 * 设置行label文字颜色
 * @param {color} v
 */
ht.widget.TreeView.prototype.setLabelColor = function (v){};

/**
 * 设置行label文字字体
 * @param {String} v
 */
ht.widget.TreeView.prototype.setLabelFont = function (v){};

/**
 * 设置行label文字选中颜色
 * @param {color} v
 */
ht.widget.TreeView.prototype.setLabelSelectColor = function (v){};

/**
 * 设置延迟加载器
 * @param {Object} v
 * @example //示例：
 * treeView.setLoader({
 * 	load: function(data) {
 * 		//展开此data时回调，可用于加载子节点
 * 	},
 * 	isLoaded: function(data) {
 * 		//返回此data的子结点是否已加载
 * 	}
 * });
 * 
 */
ht.widget.TreeView.prototype.setLoader = function (v){};

/**
 * 指定根节点，默认为空，从DataModel#getRoots()的对象开始展示
 * @param {ht.Data} v
 */
ht.widget.TreeView.prototype.setRootData = function (v){};

/**
 * 设置根节点是否可见
 * @param {Boolean} v
 */
ht.widget.TreeView.prototype.setRootVisible = function (v){};

/**
 * 设置行高
 * @param {Number} v
 */
ht.widget.TreeView.prototype.setRowHeight = function (v){};

/**
 * 设置行线颜色
 * @param {color} color
 */
ht.widget.TreeView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} v
 */
ht.widget.TreeView.prototype.setRowLineVisible = function (v){};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.widget.TreeView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条宽度
 * @param {Number} size 宽度值
 */
ht.widget.TreeView.prototype.setScrollBarSize = function (size){};

/**
 * 设置选择过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.widget.TreeView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景颜色
 * @param {color} color
 */
ht.widget.TreeView.prototype.setSelectBackground = function (color){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v
 */
ht.widget.TreeView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序函数
 * @param {Function} func
 */
ht.widget.TreeView.prototype.setSortFunc = function (func){};

/**
 * 设置垂直平移值(水平平移值无效)
 * @param {Number} x 水平平移值，此参数无效
 * @param {Number} y 垂直平移值
 * @param {Boolean} anim 是否使用动画
 */
ht.widget.TreeView.prototype.setTranslate = function (x, y, anim){};

/**
 * 设置垂直平移值
 * @param {Number} v 垂直平移值
 */
ht.widget.TreeView.prototype.setTranslateY = function (v){};

/**
 * 设置可见过滤器
 * @param {Function} func 过滤器函数
 */
ht.widget.TreeView.prototype.setVisibleFunc = function (func){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.TreeView.prototype.setWidth = function (v){};

/**
 * 显示垂直滚动条
 */
ht.widget.TreeView.prototype.showVBar = function (){};

/**
 * 获取选中模型，{@link ht.widget.TreeView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.widget.TreeView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.widget.TreeView.prototype.sm = function (){};

/**
 * 展开或合并data对象
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeView.prototype.toggle = function (data){};

/**
 * 在当前值基础上增加垂直平移值(水平无效)
 * @param {Number} x 新增的水平平移值，此参数无效
 * @param {Number} y 新增的垂直平移值 
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.TreeView.prototype.translate = function (x, y, anim){};

/**
 * 获取或设置垂直平移值，没有参数时相当于{@link ht.widget.TreeView#getTranslateY getTranslateY}，有参数时相当于{@link ht.widget.TreeView#setTranslateY setTranslateY}
 * @param {Number} value 平移值 
 */
ht.widget.TreeView.prototype.ty = function (value){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.TreeView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.TreeView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.TreeView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.TreeView.prototype.validate = function (){};




















/**
 * 分割组件，用于左右或上下分割两个组件
 * @param {Object|HTMLElement} leftView 左侧或顶部组件
 * @param {Object|HTMLElement} rightView 右侧或底部组件
 * @param {Boolean} orientation 布局方式，v上下布局，h左右布局
 * @param {Number} position 分割条位置，0-1之间表示百分比，大于1表示绝对尺寸，正数指定左侧或顶部组件的尺寸，负数指定右侧或底部组件的尺寸
 * @constructor
 */
ht.widget.SplitView = function(leftView, rightView, orientation, position) {};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.SplitView#mp mp}
 */
ht.widget.SplitView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.SplitView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 获取分割条背景色
 * @return {color}
 */
ht.widget.SplitView.prototype.getDividerBackground = function (){};

/**
 * 获取分割条DIV
 * @return {HTMLDivElement}
 */
ht.widget.SplitView.prototype.getDividerDiv = function (){};

/**
 * 获取分割条宽度
 * @return {Number}
 */
ht.widget.SplitView.prototype.getDividerSize = function (){};

/**
 * 获取分割条拖拽时的透明度，默认为0.5
 * @return {Number}
 */
ht.widget.SplitView.prototype.getDragOpacity = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.SplitView.prototype.getHeight = function (){};

/**
 * 获取左侧组件
 * @return {Object|HTMLElement}
 */
ht.widget.SplitView.prototype.getLeftView = function (){};

/**
 * 获取布局方式，v上下布局，h左右布局
 * @return {String}
 */
ht.widget.SplitView.prototype.getOrientation = function (){};

/**
 * 获取分割条位置，0-1之间表示百分比，大于1表示绝对尺寸，正数指定左侧或顶部组件的尺寸，负数指定右侧或底部组件的尺寸
 * @return {Number}
 */
ht.widget.SplitView.prototype.getPosition = function (){};

/**
 * 获取右侧组件
 * @return {Object|HTMLElement}
 */
ht.widget.SplitView.prototype.getRightView = function (){};

/**
 * 获取toggle状态
 * @return {String} 
 * <ul>
 * <li>normal代表中间分割状态</li>
 * <li>cl代表collapse left关闭左侧或顶部组件</li>
 * <li>cr代表collapse right关闭右侧或底部组件</li>
 * </ul>
 */
ht.widget.SplitView.prototype.getStatus = function (){};

/**
 * 获取分割条上的toggle图标
 * @return {String} 
 */
ht.widget.SplitView.prototype.getToggleIcon = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.SplitView.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.SplitView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.SplitView#iv iv}
 */
ht.widget.SplitView.prototype.invalidate = function (delay){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.SplitView.prototype.isDisabled = function (){};

/**
 * 获取是否允许拖拽分割条，默认为true
 * @return {Boolean} 
 */
ht.widget.SplitView.prototype.isDraggable = function (){};

/**
 * 获取分割点是否可通过点击直接展开和关闭，默认为true
 * @return {Boolean} 
 */
ht.widget.SplitView.prototype.isTogglable = function (){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.SplitView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.SplitView#invalidate invalidate}
 */
ht.widget.SplitView.prototype.iv = function (delay){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.SplitView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.SplitView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.SplitView.prototype.mp = function (listener, scope, ahead){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.SplitView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.SplitView.prototype.removeViewListener = function (listener, scope){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.SplitView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置分割条背景色
 * @param {color} background
 */
ht.widget.SplitView.prototype.setDividerBackground = function (background){};

/**
 * 设置分割条宽度
 * @param {Number} size
 */
ht.widget.SplitView.prototype.setDividerSize = function (size){};

/**
 * 设置是否允许拖拽分割条，默认为true
 * @param {Boolean} draggable
 */
ht.widget.SplitView.prototype.setDraggable = function (draggable){};

/**
 * 设置分割条拖拽时的透明度，默认为0.5
 * @param {Number} opacity
 */
ht.widget.SplitView.prototype.setDragOpacity = function (opacity){};

/**
 * 设置布局高度
 * @param {Number} height
 */
ht.widget.SplitView.prototype.setHeight = function (height){};

/**
 * 设置左侧组件
 * @param {Object|HTMLElement} left
 */
ht.widget.SplitView.prototype.setLeftView = function (left){};

/**
 * 设置布局方式，v上下布局，h左右布局
 * @param {String} orientation 
 */
ht.widget.SplitView.prototype.setOrientation = function (orientation){};

/**
 * 设置分割条位置，0-1之间表示百分比，大于1表示绝对尺寸，正数指定左侧或顶部组件的尺寸，负数指定右侧或底部组件的尺寸
 * @param {Number} position 
 */
ht.widget.SplitView.prototype.setPosition = function (position){};

/**
 * 设置右侧组件
 * @param {Object|HTMLElement} right
 */
ht.widget.SplitView.prototype.setRightView = function (right){};

/**
 * 设置toggle状态
 * @param {String} status
 * <ul>
 * <li>normal代表中间分割状态</li>
 * <li>cl代表collapse left关闭左侧或顶部组件</li>
 * <li>cr代表collapse right关闭右侧或底部组件</li>
 * </ul>
 */
ht.widget.SplitView.prototype.setStatus = function (status){};

/**
 * 设置分割点是否可通过点击直接展开和关闭，默认为true
 * @param {Boolean} togglable
 */
ht.widget.SplitView.prototype.setTogglable = function (togglable){};

/**
 * 设置分割条上的toggle图标
 * @param {String} icon 
 */
ht.widget.SplitView.prototype.setToggleIcon = function (icon){};

/**
 * 设置布局宽度
 * @param {Number} width 
 */
ht.widget.SplitView.prototype.setWidth = function (width){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.SplitView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.SplitView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.SplitView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.SplitView.prototype.validate = function (){};












/**
 * 页签组件，以页签的方式呈现多组件，页签支持拖拽和关闭等功能
 * @constructor
 */
ht.widget.TabView = function() {};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TabView#mp mp}
 */
ht.widget.TabView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.TabView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 获取指定的Tab对象，参数可为Tab的标签文字或索引
 * @param {String|Number} nameOrIndex 标签文字或索引
 */
ht.widget.TabView.prototype.get = function (nameOrIndex){};

/**
 * 获取组件的内容区域Div
 * @return {HTMLDivElement}
 */
ht.widget.TabView.prototype.getContentDiv = function (){};

/**
 * 获取当前选中的Tab对象
 * @return {ht.Tab}
 */
ht.widget.TabView.prototype.getCurrentTab = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.TabView.prototype.getHeight = function (){};

/**
 * 获取提示插入位置颜色
 * @return {color}
 */
ht.widget.TabView.prototype.getInsertColor = function (){};

/**
 * 获取tab对象显示的文字，默认返回tab.toLabel()，可重载自定义
 * @param {ht.Tab} tab
 * @return {String}
 */
ht.widget.TabView.prototype.getLabel = function (tab){};

/**
 * 获取页签文字颜色，可重载自定义
 * @return {color}
 */
ht.widget.TabView.prototype.getLabelColor = function (){};

/**
 * 获取页签文字字体，可重载自定义
 * @return {String}
 */
ht.widget.TabView.prototype.getLabelFont = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TabView#lp lp}
 */
ht.widget.TabView.prototype.getLogicalPoint = function (event){};

/**
 * 获取移动时的页签背景色
 * @return {color}
 */
ht.widget.TabView.prototype.getMoveBackground = function (){};

/**
 * 获取页签选中线条背景色
 * @return {color}
 */
ht.widget.TabView.prototype.getSelectBackground = function (){};

/**
 * 获取页签选中的线条宽度，默认值为3
 * @return {Number}
 */
ht.widget.TabView.prototype.getSelectWidth = function (){};

/**
 * 获取页签背景色
 * @return {color}
 */
ht.widget.TabView.prototype.getTabBackground = function (){};

/**
 * 获取页签间隔，默认值为1
 * @return {Number}
 */
ht.widget.TabView.prototype.getTabGap = function (){};

/**
 * 获取页签高度
 * @return {Number}
 */
ht.widget.TabView.prototype.getTabHeight = function (){};

/**
 * 获取页签模型容器，用于增删Tab页签
 * @return {ht.DataModel}
 */
ht.widget.TabView.prototype.getTabModel = function (){};

/**
 * 获取页签位置，可用值有：top|bottom|left|right|left-vertical|right-vertical，默认值为top
 * @return {String}
 */
ht.widget.TabView.prototype.getTabPosition = function (){};

/**
 * 获取页签宽度，可重载自定义 
 * @param {ht.Tab} tab 页签
 * @return {Number}
 */
ht.widget.TabView.prototype.getTabWidth = function (tab){};

/**
 * 获取页签的div容器
 * @return {HTMLDivElement}
 */
ht.widget.TabView.prototype.getTitleDiv = function (){};

/**
 * 获取水平平移(滚动)值
 * @return {Number}
 */
ht.widget.TabView.prototype.getTranslateX = function (){};

/**
 * 获取垂直平移(滚动)值
 * @return {Number}
 */
ht.widget.TabView.prototype.getTranslateY = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.TabView.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.TabView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TabView#iv iv}
 */
ht.widget.TabView.prototype.invalidate = function (delay){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.TabView.prototype.isDisabled = function (){};

/**
 * 获取页签是否可拖拽移动改变显示顺序，默认值为true
 * @return {Boolean} 
 */
ht.widget.TabView.prototype.isMovable = function (){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.TabView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TabView#invalidate invalidate}
 */
ht.widget.TabView.prototype.iv = function (delay){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.TabView#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TabView#getLogicalPoint getLogicalPoint}
 */
ht.widget.TabView.prototype.lp = function (event){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.TabView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TabView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.TabView.prototype.mp = function (listener, scope, ahead){};

/**
 * 当前选中Tab对象变化时回调，可重载做后续处理
 * @param {ht.Tab} oldTab 旧页签
 * @param {ht.Tab} newTab 新选中的页签
 */
ht.widget.TabView.prototype.onTabChanged = function (oldTab, newTab){};

/**
 * 关闭Tab页签回调函数，可重载做后续处理
 * @param {ht.Tab} tab 被关闭的页签
 * @param {Number} index 索引
 */
ht.widget.TabView.prototype.onTabClosed = function (tab, index){};

/**
 * 删除指定的Tab
 * @param {ht.Tab|Number|String} tab Tab对象，或整数类型的索引，或页签文字
 */
ht.widget.TabView.prototype.remove = function (tab){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TabView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TabView.prototype.removeViewListener = function (listener, scope){};

/**
 * 选中指定的Tab
 * @param {ht.Tab|Number|String} tab Tab对象，或整数类型的索引，或页签文字
 */
ht.widget.TabView.prototype.select = function (tab){};


/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.TabView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置布局高度
 * @param {Number} height 高度值
 */
ht.widget.TabView.prototype.setHeight = function (height){};

/**
 * 设置提示插入位置颜色
 * @param {color} color
 */
ht.widget.TabView.prototype.setInsertColor = function (color){};

/**
 * 设置页签文字颜色
 * @param {color} color
 */
ht.widget.TabView.prototype.setLabelColor = function (color){};

/**
 * 设置页签文字字体
 * @param {String} font
 */
ht.widget.TabView.prototype.setLabelFont = function (font){};

/**
 * 设置页签是否可拖拽移动改变显示顺序，默认值为true
 * @param {Boolean} v
 */
ht.widget.TabView.prototype.setMovable = function (v){};

/**
 * 设置移动时的页签背景色
 * @param {color} color
 */
ht.widget.TabView.prototype.setMoveBackground = function (color){};

/**
 * 设置页签选中线条背景色
 * @param {color} color
 */
ht.widget.TabView.prototype.setSelectBackground = function (color){};

/**
 * 设置页签选中的线条宽度，默认值为3
 * @param {Number} width
 */
ht.widget.TabView.prototype.setSelectWidth = function (width){};

/**
 * 设置页签背景色
 * @param {color} color
 */
ht.widget.TabView.prototype.setTabBackground = function (color){};

/**
 * 设置页签间隔，默认值为1
 * @param {Number} v
 */
ht.widget.TabView.prototype.setTabGap = function (v){};

/**
 * 设置页签高度
 * @param {Number} v
 */
ht.widget.TabView.prototype.setTabHeight = function (v){};

/**
 * 设置页签位置，可用值有：top|bottom|left|right|left-vertical|right-vertical，默认值为top
 * @param {String} v
 */
ht.widget.TabView.prototype.setTabPosition = function (v){};

/**
 * 设置组件水平平移(滚动)值
 * @param {Number} x 水平平移(滚动)值
 */
ht.widget.TabView.prototype.setTranslateX = function (x){};

/**
 * 设置组件垂直平移(滚动)值
 * @param {Number} y 垂直平移(滚动)值
 */
ht.widget.TabView.prototype.setTranslateY = function (y){};

/**
 * 设置布局宽度
 * @param {Number} width
 */
ht.widget.TabView.prototype.setWidth = function (width){};

/**
 * 获取或设置水平平移(滚动)值，没有参数时相当于{@link ht.widget.TabView#getTranslateX getTranslateX}，有参数时相当于{@link ht.widget.TabView#setTranslateX setTranslateX}
 * @param {Number} value 平移(滚动)值 
 */
ht.widget.TabView.prototype.tx = function (value){};

/**
 * 获取或设置垂直平移(滚动)值，没有参数时相当于{@link ht.widget.TabView#getTranslateY getTranslateY}，有参数时相当于{@link ht.widget.TabView#setTranslateY setTranslateY}
 * @param {Number} value 平移(滚动)值 
 */
ht.widget.TabView.prototype.ty = function (value){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.TabView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.TabView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.TabView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.TabView.prototype.validate = function (){};














/**
 * 工具条组件，提供按钮等组件的水平摆放功能
 * @param {Array} items 配置json，详细内容可以参考Toolbar手册
 * @constructor
 */
ht.widget.Toolbar = function(items) {};

/**
 * 在指定index位置插入新元素，index为空代表插入到最后
 * @param {Object} item 监听器函数
 * @param {Number} [index] 监听器函数域
 */
ht.widget.Toolbar.prototype.addItem = function (item, index){};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.Toolbar#mp mp}
 */
ht.widget.Toolbar.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.Toolbar.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 关闭ToolTip功能
 */
ht.widget.Toolbar.prototype.disableToolTip = function (){};

/**
 * 绘制元素，并返回该元素所占的宽度值
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {Object} item 元素
 * @param {Number} x x坐标
 * @param {Number} height 绘制的高度
 * @return {Number} 宽度值
 */
ht.widget.Toolbar.prototype.drawItem = function (g, item, x, height){};

/**
 * 启用ToolTip
 */
ht.widget.Toolbar.prototype.enableToolTip = function (){};

/**
 * 获取布局高度
 * @return {Number} 
 */
ht.widget.Toolbar.prototype.getHeight = function (){};

/**
 * 获取指定id对应的元素，id值为item元素上的id属性定义
 * @param {Object} id 
 * @return {Object} 
 */
ht.widget.Toolbar.prototype.getItemById = function (id){};

/**
 * 获取元素之间的间距
 * @return {Number} 
 */
ht.widget.Toolbar.prototype.getItemGap = function (){};

/**
 * 获取工具条元素数组
 * @return {Array} 
 */
ht.widget.Toolbar.prototype.getItems = function (){};

/**
 * 获取文本颜色，可重载自定义
 * @param {Object} item
 * @return {color} 
 */
ht.widget.Toolbar.prototype.getLabelColor = function (item){};

/**
 * 获取文本字体，可重载自定义
 * @return {String} 
 */
ht.widget.Toolbar.prototype.getLabelFont = function (){};

/**
 * 获取文本选中颜色
 * @return {color} 
 */
ht.widget.Toolbar.prototype.getLabelSelectColor = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.Toolbar#lp lp}
 */
ht.widget.Toolbar.prototype.getLogicalPoint = function (e){};

/**
 * 获取选中元素的背景色，可重载自定义
 * @return {color}
 */
ht.widget.Toolbar.prototype.getSelectBackground = function (){};

/**
 * 获取分割条颜色
 * @return {color}
 */
ht.widget.Toolbar.prototype.getSeparatorColor = function (){};

/**
 * 获取ToolTip文字，可重载返回自定义的toolTip文字
 * @param {Event} e 鼠标或Touch事件对象
 * @return {String} toolTip文字，默认取出鼠标下的元素，然后返回其toolTip
 */
ht.widget.Toolbar.prototype.getToolTip = function (e){};

/**
 * 获取水平平移(滚动)值
 * @return {Number}
 */
ht.widget.Toolbar.prototype.getTranslateX = function (){};

/**
 * 根据id获取对应item元素值，比如input的值
 * @param {Object} id 元素id
 * @return {Object}
 * @see {@link ht.widget.Toolbar#v v}
 */
ht.widget.Toolbar.prototype.getValue = function (id){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.Toolbar.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.Toolbar.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.Toolbar#iv iv}
 */
ht.widget.Toolbar.prototype.invalidate = function (delay){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.Toolbar.prototype.isDisabled = function (){};

/**
 * 获取是否向右对齐排布，默认为false
 * @return {Boolean} 
 */
ht.widget.Toolbar.prototype.isStickToRight = function (){};


/**
 * 无效组件，并调用延时刷新，{@link ht.widget.Toolbar#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.Toolbar#invalidate invalidate}
 */
ht.widget.Toolbar.prototype.iv = function (delay){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.Toolbar#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.Toolbar#getLogicalPoint getLogicalPoint}
 */
ht.widget.Toolbar.prototype.lp = function (event){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.Toolbar#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.Toolbar#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.Toolbar.prototype.mp = function (listener, scope, ahead){};

/**
 * 重绘组件
 */
ht.widget.Toolbar.prototype.redraw = function (){};

/**
 * 删除指定元素
 * @param {Object} item
 */
ht.widget.Toolbar.prototype.removeItem = function (item){};

/**
 * 根据id删除指定元素
 * @param {Object} id
 */
ht.widget.Toolbar.prototype.removeItemById = function (id){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.Toolbar.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.Toolbar.prototype.removeViewListener = function (listener, scope){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.Toolbar.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置布局高度
 * @param {Number} height 高度值
 */
ht.widget.Toolbar.prototype.setHeight = function (height){};

/**
 * 设置元素之间的间距
 * @param {Number} gap
 */
ht.widget.Toolbar.prototype.setItemGap = function (gap){};

/**
 * 设置工具条元素数组
 * @param {Array} items
 */
ht.widget.Toolbar.prototype.setItems = function (items){};

/**
 * 设置文本颜色
 * @param {color} v
 */
ht.widget.Toolbar.prototype.setLabelColor = function (v){};

/**
 * 设置文本字体
 * @param {String} v
 */
ht.widget.Toolbar.prototype.setLabelFont = function (v){};

/**
 * 设置文本选中颜色
 * @param {color} v
 */
ht.widget.Toolbar.prototype.setLabelSelectColor = function (v){};

/**
 * 设置选中元素的背景色，可重载自定义
 * @param {color} v
 */
ht.widget.Toolbar.prototype.setSelectBackground = function (v){};

/**
 * 设置分割条颜色
 * @param {color} v
 */
ht.widget.Toolbar.prototype.setSeparatorColor = function (v){};

/**
 * 设置是否向右对齐排布，默认为false
 * @param {Boolean} v
 */
ht.widget.Toolbar.prototype.setStickToRight = function (v){};

/**
 * 设置拓扑水平平移(滚动)值
 * @param {Number} x 水平平移(滚动)值
 */
ht.widget.Toolbar.prototype.setTranslateX = function (x){};

/**
 * 根据id设置对应item元素值，比如input的值
 * @param {Object} id 元素id
 * @param {Object} value 值
 * @see {@link ht.widget.Toolbar#v v}
 */
ht.widget.Toolbar.prototype.setValue = function (id, value){};

/**
 * 设置布局宽度
 * @param {Number} width 宽度
 */
ht.widget.Toolbar.prototype.setWidth = function (width){};

/**
 * 获取或设置水平平移(滚动)值，没有参数时相当于{@link ht.widget.Toolbar#getTranslateX getTranslateX}，有参数时相当于{@link ht.widget.Toolbar#setTranslateX setTranslateX}
 * @param {Number} value 平移(滚动)值 
 */
ht.widget.Toolbar.prototype.tx = function (value){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.Toolbar#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.Toolbar#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.Toolbar.prototype.ump = function (listener, scope){};

/**
 * 根据id获取或设置对应item元素值，比如input的值；没有参数时相当于{@link ht.widget.Toolbar#getValue getValue}，有参数时相当于{@link ht.widget.Toolbar#setValue setValue}
 * @param {Object} [id] 元素id
 * @param {Object} [value] 值
 * @return {Object}
 */
ht.widget.Toolbar.prototype.v = function (id, value){};

/**
 * 立刻刷新组件
 */
ht.widget.Toolbar.prototype.validate = function (){};





















/**
 * 表格组件，以表格的方式呈现DataModel中Data的属性
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 */
ht.widget.TableView = function(dataModel) {};

/**
 * 增加底层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyBottomPainter() {
 * }
 * ht.Default.def(MyBottomPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * tableView.addBottomPainter(MyBottomPainter);
 */
ht.widget.TableView.prototype.addBottomPainter = function(painter) {}

/**
 * 以json的方式配置表格中的列(新增)
 * @param {Array} columns json列
 * @example //示例：
 * tableView.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TableView.prototype.addColumns = function(columns) {}


/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TableView#mp mp}
 */
ht.widget.TableView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};


/**
 * 增加顶层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyTopPainter() {
 * }
 * ht.Default.def(MyTopPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * tableView.addTopPainter(MyTopPainter);
 */
ht.widget.TableView.prototype.addTopPainter = function (painter){};


/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.TableView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
 * @param {Number} value 原始水平平移值
 * @return {Number} 新的水平平移值
 */
ht.widget.TableView.prototype.adjustTranslateX = function (value){};

/**
 * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
 * @param {Number} value 原始垂直平移值
 * @return {Number} 新的垂直平移值
 */
ht.widget.TableView.prototype.adjustTranslateY = function (value){};

/**
 * 关闭ToolTip功能
 */
ht.widget.TableView.prototype.disableToolTip = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.widget.TableView#getDataModel getDataModel}，有参数时相当于{@link ht.widget.TableView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.widget.TableView.prototype.dm = function (dataModel){};

/**
 * 绘制单元格，可重载自定义单元格渲染，如果返回值为HTML元素，则使用HTML元素当作Renderer
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {ht.Column} column 列信息
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @return {HTMLElement}
 */
ht.widget.TableView.prototype.drawCell = function (g, data, selected, column, x, y, width, height){};

/**
 * 绘制check列单元格，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {ht.Column} column 列信息
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @param {Object} view 当前的表格组件
 */
ht.widget.TableView.prototype.drawCheckColumnCell = function (g, data, selected, column, x, y, width, height, view){};

/**
 * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.TableView.prototype.drawRowBackground = function (g, data, selected, x, y, width, height){};

/**
 * 启用ToolTip
 */
ht.widget.TableView.prototype.enableToolTip = function (){};

/**
 * 返回data对象对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
 * @param {ht.Data} data 数据元素
 * @return {String} 
 */
ht.widget.TableView.prototype.getCheckIcon = function (data){};

/**
 * 获取鼠标下的列
 * @param {Event} e 鼠标或Touch事件
 * @return {ht.Column} 
 */
ht.widget.TableView.prototype.getColumnAt = function (e){};

/**
 * 获取列线颜色
 * @return {color}
 */
ht.widget.TableView.prototype.getColumnLineColor = function (){};

/**
 * 获取列模型， 列模型用于存储Column列对象信息
 * @return {ht.DataModel}
 */
ht.widget.TableView.prototype.getColumnModel = function (){};

/**
 * 默认返回sortFunc函数，当sortColumn不为空时将返回其对应的排序函数
 * @return {Function}
 */
ht.widget.TableView.prototype.getCurrentSortFunc = function (){};

/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 点下的数据元素
 */
ht.widget.TableView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.widget.TableView.prototype.getDataModel = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number}
 */
ht.widget.TableView.prototype.getEndRowIndex = function (){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法获取focus数据元素
 * @return {ht.Data}
 */
ht.widget.TableView.prototype.getFocusData = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.TableView.prototype.getHeight = function (){};

/**
 * 获取对应的单元格文本颜色，可重载自定义
 * @param {ht.Data} data 数据元素 
 * @param {ht.Column} column 列
 * @param {Object} value 值
 * @return {color}
 */
ht.widget.TableView.prototype.getLabelColor = function (data, column, value){};

/**
 * 获取对应的单元格文本字体，可重载自定义
 * @param {ht.Data} data 数据元素 
 * @param {ht.Column} column 列
 * @param {Object} value 值
 * @return {String}
 */
ht.widget.TableView.prototype.getLabelFont = function (data, column, value){};

/**
 * 获取文本选中颜色
 * @return {color}
 */
ht.widget.TableView.prototype.getLableSelectColor = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TableView#lp lp}
 */
ht.widget.TableView.prototype.getLogicalPoint = function (event){};

/**
 * 获取当前显示的Data对象集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.widget.TableView.prototype.getRowDatas = function (){};

/**
 * 获取行高
 * @return {Number}
 */
ht.widget.TableView.prototype.getRowHeight = function (){};

/**
 * 获取data对象所在的行索引
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TableView.prototype.getRowIndex = function (data){};

/**
 * 获取行线颜色
 * @return {color}
 */
ht.widget.TableView.prototype.getRowLineColor = function (){};

/**
 * 返回当前可见行总行数
 * @return {Number}
 */
ht.widget.TableView.prototype.getRowSize = function (){};

/**
 * 获取滚动条颜色
 * @return {color}
 */
ht.widget.TableView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条宽度
 * @return {Number}
 */
ht.widget.TableView.prototype.getScrollBarSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {Function}
 */
ht.widget.TableView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景颜色
 * @return {color}
 */
ht.widget.TableView.prototype.getSelectBackground = function (){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.widget.TableView#sm sm}
 */
ht.widget.TableView.prototype.getSelectionModel = function (){};

/**
 * 获取当前排序列
 * @return {ht.Column}
 */
ht.widget.TableView.prototype.getSortColumn = function (){};

/**
 * 获取排序函数
 * @return {Function}
 */
ht.widget.TableView.prototype.getSortFunc = function (){};

/**
 * 获取排序方式
 * <ul>
 * <li>none:不允许排序</li>
 * <li>bistate:点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate:点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 * @return {String}
 */
ht.widget.TableView.prototype.getSortMode = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number}
 */
ht.widget.TableView.prototype.getStartRowIndex = function (){};

/**
 * 获取ToolTip文字，可重载返回自定义的toolTip文字
 * @param {Event} e 鼠标或Touch事件对象
 * @return {String} toolTip文字，默认取出鼠标下的data和column，然后返回column.getToolTip(data);
 */
ht.widget.TableView.prototype.getToolTip = function (e){};

/**
 * 获取水平平移值
 * @return {Number} 水平平移值
 * @see {@link ht.widget.TableView#tx tx}
 */
ht.widget.TableView.prototype.getTranslateX = function (){};

/**
 * 获取垂直平移值
 * @return {Number} 垂直平移值
 * @see {@link ht.widget.TableView#ty ty}
 */
ht.widget.TableView.prototype.getTranslateY = function (){};

/**
 * 获取单元格中要显示的内容
 * @param {ht.Data} data 数据元素
 * @param {ht.Column} column 列
 * @return {Object}
 */
ht.widget.TableView.prototype.getValue = function (data, column){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.TableView.prototype.getView = function (){};

/**
 * 获取组件中可见区域的逻辑尺寸
 * @return {Object}
 */
ht.widget.TableView.prototype.getViewRect = function (){};

/**
 * 获取可见过滤器函数
 * @return {Function}
 */
ht.widget.TableView.prototype.getVisibleFunc = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.TableView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TableView#iv iv}
 */
ht.widget.TableView.prototype.invalidate = function (delay){};

/**
 * 无效数据元素
 * @param {ht.Data} data 要无效的数据元素
 */
ht.widget.TableView.prototype.invalidateData = function (data){};

/**
 * 无效模型，最彻底的刷新方式
 * @see {@link ht.widget.TableView#ivm ivm}
 */
ht.widget.TableView.prototype.invalidateModel = function (){};

/**
 * 是否自动隐藏滚动条
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isAutoHideScrollBar = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.widget.TableView.prototype.isAutoMakeVisible = function (){};

/**
 * 是否启用批量编辑
 * @return {Boolean}
 */
ht.widget.TableView.prototype.isBatchEditable = function (){};

/**
 * 判断单元格是否可编辑
 * @param {ht.Data} data 数据元素
 * @param {ht.Column} column 列
 * @return {Boolean}
 */
ht.widget.TableView.prototype.isCellEditable = function (data, column){};

/**
 * 是否是check模式，默认为false，为true时自动插入checkColumn列
 * @return {Boolean}
 */
ht.widget.TableView.prototype.isCheckMode = function (){};

/**
 * 获取列线是否可见，默认为true
 * @return {Boolean}
 */
ht.widget.TableView.prototype.isColumnLineVisible = function (){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isDisabled = function (){};

/**
 * 返回可否编辑的总开关，默认为false，每个Column列对象可再控制
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isEditable = function (){};

/**
 * 获取行线是否可见，默认为true
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isRowLineVisible = function (){};
 
/**
 * 判断data对象是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isSelectable = function (data){};

/**
 * 判断data对象是否被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isSelected = function (data){};
 
/**
 * 根据id判断data对象是否被选中
 * @param {String|Number} id 数据元素id
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isSelectedById = function (id){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可见
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TableView.prototype.isVisible = function (data){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.TableView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TableView#invalidate invalidate}
 */
ht.widget.TableView.prototype.iv = function (delay){};

/**
 * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，{@link ht.widget.TableView#invalidateModel invalidateModel}的缩写
 * @see {@link ht.widget.TableView#invalidateModel invalidateModel}
 */
ht.widget.TableView.prototype.ivm = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.TableView#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TableView#getLogicalPoint getLogicalPoint}
 */
ht.widget.TableView.prototype.lp = function (event){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.widget.TableView.prototype.makeVisible = function (data){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.TableView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TableView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.TableView.prototype.mp = function (listener, scope, ahead){};

/**
 * 列头被点击时调用，可重载做后续处理，如远程排序功能
 * @param {ht.Column} column 列
 */
ht.widget.TableView.prototype.onColumnClicked = function (column){};

/**
 * 当data所在行被单击时回调，可重载对单击事件做响应
 * @param {ht.Data} data 数据元素 
 * @param {Event} e 事件对象
 */
ht.widget.TableView.prototype.onDataClicked = function (data, e){};

/**
 * 当data所在行被双击时回调，可重载对双击事件做响应
 * @param {ht.Data} data 数据元素 
 * @param {Event} e 事件对象
 */
ht.widget.TableView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 平移动画结束时回调，可重载做后续处理
 */
ht.widget.TableView.prototype.onTranslateEnded = function (){};

/**
 * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
 */
ht.widget.TableView.prototype.redraw = function (){};

/**
 * 删除底层Painter
 * @param {Object} painter Painter类
 */
ht.widget.TableView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TableView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除所有选中的图元
 */
ht.widget.TableView.prototype.removeSelection = function (){};

/**
 * 删除顶层Painter
 * @param {Object} painter Painter类
 */
ht.widget.TableView.prototype.removeTopPainter = function (painter){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TableView.prototype.removeViewListener = function (listener, scope){};

/**
 * 平移(滚动)组件至指定的行号
 * @param {Number} index 行号
 */
ht.widget.TableView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.widget.TableView.prototype.selectAll = function (){};

/**
 * 设置是否自动隐藏滚动条
 * @param {Boolean} v
 */
ht.widget.TableView.prototype.setAutoHideScrollBar = function (v){};

/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v
 */
ht.widget.TableView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置是否启用批量编辑
 * @param {Boolean} v
 */
ht.widget.TableView.prototype.setBatchEditable = function (v){};

/**
 * 设置是否为check模式，默认为false，为true时自动插入checkColumn列
 * @param {Boolean} v
 */
ht.widget.TableView.prototype.setCheckMode = function (v){};

/**
 * 设置列线颜色
 * @param {color} color
 */
ht.widget.TableView.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} v
 */
ht.widget.TableView.prototype.setColumnLineVisible = function (v){};

/**
 * 以json的方式配置表格中的列(设置)
 * @param {Array} columns json列
 * @example //示例：
 * tableView.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TableView.prototype.setColumns = function (v){};

/**
 * 设置绑定的数据模型
 * @param {ht.DataModel} dataModel 数据模型
 */
ht.widget.TableView.prototype.setDataModel = function (dataModel){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.TableView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置可否编辑的总开关，默认为false，每个Column列对象可再控制
 * @param {Boolean} editable
 */
ht.widget.TableView.prototype.setEditable = function (editable){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {ht.Data} data 数据元素
 */
ht.widget.TableView.prototype.setFocusData = function (data){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.widget.TableView.prototype.setFocusDataById = function (id){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.TableView.prototype.setHeight = function (v){};

/**
 * 设置文本颜色
 * @param {color} color
 */
ht.widget.TableView.prototype.setLabelColor = function (color){};

/**
 * 设置文本字体
 * @param {String} font
 */
ht.widget.TableView.prototype.setLabelFont = function (font){};

/**
 * 设置选中文本颜色
 * @param {color} color
 */
ht.widget.TableView.prototype.setLabelSelectColor = function (color){};

/**
 * 设置行高
 * @param {Number} v
 */
ht.widget.TableView.prototype.setRowHeight = function (v){};

/**
 * 设置行线颜色
 * @param {color} color
 */
ht.widget.TableView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} v
 */
ht.widget.TableView.prototype.setRowLineVisible = function (v){};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.widget.TableView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条宽度
 * @param {Number} size 宽度值
 */
ht.widget.TableView.prototype.setScrollBarSize = function (size){};

/**
 * 设置选择过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.widget.TableView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景颜色
 * @param {color} color
 */
ht.widget.TableView.prototype.setSelectBackground = function (color){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v
 */
ht.widget.TableView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序列
 * @param {ht.Column} column
 */
ht.widget.TableView.prototype.setSortColumn = function (column){};

/**
 * 设置排序函数
 * @param {Function} func
 */
ht.widget.TableView.prototype.setSortFunc = function (func){};

/**
 * 设置排序方式
 * @param {String} mode
 * <ul>
 * <li>none:不允许排序</li>
 * <li>bistate:点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate:点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 */
ht.widget.TableView.prototype.setSortMode = function (mode){};

/**
 * 设置水平和垂直平移值
 * @param {Number} x 水平平移值
 * @param {Number} y 垂直平移值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.TableView.prototype.setTranslate = function (x, y, anim){};

/**
 * 设置水平平移值
 * @param {Number} x 水平平移值
 */
ht.widget.TableView.prototype.setTranslateX = function (x){};

/**
 * 设置垂直平移值
 * @param {Number} y 垂直平移值
 */
ht.widget.TableView.prototype.setTranslateY = function (y){};

/**
 * 设置可见过滤器
 * @param {Function} func 过滤器函数
 */
ht.widget.TableView.prototype.setVisibleFunc = function (func){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.TableView.prototype.setWidth = function (v){};

/**
 * 显示水平滚动条
 */
ht.widget.TableView.prototype.showHBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.widget.TableView.prototype.showVBar = function (){};

/**
 * 获取选中模型，{@link ht.widget.TableView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.widget.TableView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.widget.TableView.prototype.sm = function (){};

/**
 * 在当前值基础上增加水平和垂直平移值
 * @param {Number} x 新增的水平平移值 
 * @param {Number} y 新增的垂直平移值 
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.TableView.prototype.translate = function (x, y, anim){};

/**
 * 获取或设置水平平移值，没有参数时相当于{@link ht.widget.TableView#getTranslateX getTranslateX}，有参数时相当于{@link ht.widget.TableView#setTranslateX setTranslateX}
 * @param {Number} value 平移值 
 */
ht.widget.TableView.prototype.tx = function (value){};

/**
 * 获取或设置垂直平移值，没有参数时相当于{@link ht.widget.TableView#getTranslateY getTranslateY}，有参数时相当于{@link ht.widget.TableView#setTranslateY setTranslateY}
 * @param {Number} value 平移值 
 */
ht.widget.TableView.prototype.ty = function (value){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.TableView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.TableView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.TableView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.TableView.prototype.validate = function (){};









/**
 * 表头组件，常与TableView和TreeTableView结合呈现Column信息，并提供Column的排序、大小和位置变化等交互操作功能
 * @param {ht.widget.TableView|ht.widget.TreeTableView} tableView 表格组件
 * @constructor
 */
ht.widget.TableHeader = function(tableView) {};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TableHeader#mp mp}
 */
ht.widget.TableHeader.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.TableHeader.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 绘制列头，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Column} column 列信息
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.TableHeader.prototype.drawColumn = function (g, column, x, y, width, height){};


/**
 * 返回check图标
 * @return {String} 
 */
ht.widget.TableHeader.prototype.getCheckIcon = function (){};

/**
 * 获取列线颜色
 * @return {color}
 */
ht.widget.TableHeader.prototype.getColumnLineColor = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.TableHeader.prototype.getHeight = function (){};

/**
 * 获取缩进，一般当作列头图标的宽度
 * @return {Number}
 */
ht.widget.TableHeader.prototype.getIndent = function (){};

/**
 * 获取移动列时可插入位置的提示颜色
 * @return {color}
 */
ht.widget.TableHeader.prototype.getInsertColor = function (){};

/**
 * 获取列头文字信息，默认返回column.toLabel()，可重载自定义
 * @param {ht.Column} column
 * @return {String}
 */
ht.widget.TableHeader.prototype.getLabel = function (column){};

/**
 * 获取列头文字水平对齐方式，默认会考虑column.getAlign()值，可重载自定义
 * @return {String}
 */
ht.widget.TableHeader.prototype.getLabelAlign = function (column){};

/**
 * 获取列头文字颜色，默认会返回column.getColor()||tableHeader.getLabelColor();
 * @param {ht.Column} column 列
 * @return {color}
 */
ht.widget.TableHeader.prototype.getLabelColor = function (column){};

/**
 * 获取列头文字字体，可重载自定义
 * @param {ht.Column} column 列
 * @return {String}
 */
ht.widget.TableHeader.prototype.getLabelFont = function (column){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TableHeader#lp lp}
 */
ht.widget.TableHeader.prototype.getLogicalPoint = function (event){};

/**
 * 获取移动列时的列头背景色
 * @return {color}
 */
ht.widget.TableHeader.prototype.getMoveBackground = function (){};

/**
 * 获取表头列升序图标
 * @return {String}
 */
ht.widget.TableHeader.prototype.getSortAscIcon = function (){};

/**
 * 获取表头列降序图标
 * @return {String}
 */
ht.widget.TableHeader.prototype.getSortDescIcon = function (){};

/**
 * 获取绑定的表格组件
 * @return {ht.widget.TableView|ht.widget.TreeTableView}
 */
ht.widget.TableHeader.prototype.getTableView = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.TableHeader.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.TableHeader.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TableHeader#iv iv}
 */
ht.widget.TableHeader.prototype.invalidate = function (delay){};

/**
 * 获取列线是否可见，默认为true
 * @return {Boolean}
 */
ht.widget.TableHeader.prototype.isColumnLineVisible = function (){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.TableHeader.prototype.isDisabled = function (){};

/**
 * 获取列顺序是否允许移动改变，默认为true
 * @return {Boolean} 
 */
ht.widget.TableHeader.prototype.isMovable = function (){};

/**
 * 获取列宽是否允许改变，默认为true
 * @return {Boolean} 
 */
ht.widget.TableHeader.prototype.isResizable = function (){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.TableHeader#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TableHeader#invalidate invalidate}
 */
ht.widget.TableHeader.prototype.iv = function (delay){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.TableHeader#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TableHeader#getLogicalPoint getLogicalPoint}
 */
ht.widget.TableHeader.prototype.lp = function (event){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.TableHeader#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TableHeader#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.TableHeader.prototype.mp = function (listener, scope, ahead){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TableHeader.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TableHeader.prototype.removeViewListener = function (listener, scope){};

/**
 * 设置check图标
 * @param {String} icon
 */
ht.widget.TableHeader.prototype.setCheckIcon = function (icon){};

/**
 * 设置列线颜色
 * @param {color} color
 */
ht.widget.TableHeader.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} v
 */
ht.widget.TableHeader.prototype.setColumnLineVisible = function (v){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.TableHeader.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.TableHeader.prototype.setHeight = function (v){};

/**
 * 设置缩进，一般当作列头图标的宽度
 * @param {Number} v 
 */
ht.widget.TableHeader.prototype.setIndent = function (v){};

/**
 * 设置移动列时可插入位置的提示颜色
 * @param {color} color
 */
ht.widget.TableHeader.prototype.setInsertColor = function (color){};

/**
 * 设置列头文本颜色
 * @param {color} color
 */
ht.widget.TableHeader.prototype.setLabelColor = function (color){};

/**
 * 设置列头文本字体
 * @param {String} font
 */
ht.widget.TableHeader.prototype.setLabelFont = function (font){};

/**
 * 设置列顺序是否允许移动改变，默认为true
 * @param {Boolean} movable
 */
ht.widget.TableHeader.prototype.setMovable = function (movable){};

/**
 * 设置移动列时的列头背景色
 * @param {color} color
 * @return {color}
 */
ht.widget.TableHeader.prototype.setMoveBackground = function (color){};

/**
 * 设置列宽是否允许改变，默认为true
 * @param {Boolean} v
 */
ht.widget.TableHeader.prototype.setResizable = function (v){};

/**
 * 设置表头列升序图标
 * @param {String} icon
 */
ht.widget.TableHeader.prototype.setSortAscIcon = function (icon){};

/**
 * 设置表头列降序图标
 * @param {String} icon
 */
ht.widget.TableHeader.prototype.setSortDescIcon = function (icon){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.TableHeader.prototype.setWidth = function (v){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.TableHeader#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.TableHeader#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.TableHeader.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.TableHeader.prototype.validate = function (){};









/**
 * 表格面板，组合了TableHeader和TableView两个子组件
 * @param {ht.widget.TableView} tableView 绑定的表格组件
 * @constructor
 */
ht.widget.TablePane = function(tableView) {};

/**
 * 以json的方式配置表格中的列(新增)，内部调用tableView的addColumns方法
 * @param {Array} columns json列
 * @example //示例：
 * tablePane.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TablePane.prototype.addColumns = function(columns) {}

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.TablePane.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 获取列模型， 列模型用于存储Column列对象信息，内部调用tableView的getColumnModel方法
 * @return {ht.DataModel}
 */
ht.widget.TablePane.prototype.getColumnModel = function (){};

/**
 * 获取绑定的数据模型，内部调用tableView的getDataModel方法
 * @return {ht.DataModel} 数据模型
 */
ht.widget.TablePane.prototype.getDataModel = function (){};

/**
 * 获取布局高度
 * @return {Number} 
 */
ht.widget.TablePane.prototype.getHeight = function (){};

/**
 * 获取表头组件
 * @return {ht.widget.TableHeader}
 */
ht.widget.TablePane.prototype.getTableHeader = function (){};

/**
 * 获取表格组件
 * @return {ht.widget.TableView}
 */
ht.widget.TablePane.prototype.getTableView = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.TablePane.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.TablePane.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TablePane#iv iv}
 */
ht.widget.TablePane.prototype.invalidate = function (delay){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.TablePane.prototype.isDisabled = function (){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.TablePane#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TablePane#invalidate invalidate}
 */
ht.widget.TablePane.prototype.iv = function (delay){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TablePane.prototype.removeViewListener = function (listener, scope){};

/**
 * 以json的方式配置表格中的列(设置)，内部调用tableView的setColumns方法
 * @param {Array} columns json列
 * @example //示例：
 * tablePane.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TablePane.prototype.setColumns = function (v){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.TablePane.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.TablePane.prototype.setHeight = function (v){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.TablePane.prototype.setWidth = function (v){};

/**
 * 立刻刷新组件
 */
ht.widget.TablePane.prototype.validate = function (){};






/**
 * 树表组件，以树形和表格的方式组合呈现DataModel中Data的父子及属性信息
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 */
ht.widget.TreeTableView = function(dataModel) {};

/**
 * 增加底层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyBottomPainter() {
 * }
 * ht.Default.def(MyBottomPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * treeTableView.addBottomPainter(MyBottomPainter);
 */
ht.widget.TreeTableView.prototype.addBottomPainter = function(painter) {}

/**
 * 以json的方式配置表格中的列(新增)
 * @param {Array} columns json列
 * @example //示例：
 * treeTableView.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TreeTableView.prototype.addColumns = function(columns) {}


/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TreeTableView#mp mp}
 */
ht.widget.TreeTableView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};


/**
 * 增加顶层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyTopPainter() {
 * }
 * ht.Default.def(MyTopPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * treeTableView.addTopPainter(MyTopPainter);
 */
ht.widget.TreeTableView.prototype.addTopPainter = function (painter){};


/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.TreeTableView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 传入即将设置的水平平移值，返回最终设置值，可重载限制水平平移范围
 * @param {Number} value 原始水平平移值
 * @return {Number} 新的水平平移值
 */
ht.widget.TreeTableView.prototype.adjustTranslateX = function (value){};

/**
 * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
 * @param {Number} value 原始垂直平移值
 * @return {Number} 新的垂直平移值
 */
ht.widget.TreeTableView.prototype.adjustTranslateY = function (value){};

/**
 * 合并data对象
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeTableView.prototype.collapse = function (data){};

/**
 * 合并所有对象
 */
ht.widget.TreeTableView.prototype.collapseAll = function (){};

/**
 * 关闭ToolTip功能
 */
ht.widget.TreeTableView.prototype.disableToolTip = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.widget.TreeTableView#getDataModel getDataModel}，有参数时相当于{@link ht.widget.TreeTableView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.widget.TreeTableView.prototype.dm = function (dataModel){};

/**
 * 绘制单元格，可重载自定义单元格渲染，如果返回值为HTML元素，则使用HTML元素当作Renderer
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {ht.Column} column 列信息
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 * @return {HTMLElement}
 */
ht.widget.TreeTableView.prototype.drawCell = function (g, data, selected, column, x, y, width, height){};

/**
 * 绘制图标，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.TreeTableView.prototype.drawIcon = function (g, data, x, y, width, height){};

/**
 * 绘制文本，可重载自定义，label一般绘制在最后因此没有width参数限制
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} height 绘制的高度
 */
ht.widget.TreeTableView.prototype.drawLabel = function (g, data, x, y, height){};

/**
 * 绘制行背景色，默认仅在选中该行时填充选中背景色，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Data} data 数据元素
 * @param {Boolean} selected 数据元素是否选中
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} width 绘制的宽度
 * @param {Number} height 绘制的高度
 */
ht.widget.TreeTableView.prototype.drawRowBackground = function (g, data, selected, x, y, width, height){};

/**
 * 启用ToolTip
 */
ht.widget.TreeTableView.prototype.enableToolTip = function (){};

/**
 * 展开data对象
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeTableView.prototype.expand = function (data){};

/**
 * 展开所有对象
 */
ht.widget.TreeTableView.prototype.expandAll = function (){};

/**
 * 获取数据元素icon的背景色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回data.s('body.color')
 */
ht.widget.TreeTableView.prototype.getBodyColor = function (data){};

/**
 * 获取数据元素icon的边框色，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {color} 颜色值，默认返回data.s('border.color')
 */
ht.widget.TreeTableView.prototype.getBorderColor = function (data){};

/**
 * 返回data对象对应的check图标，可重载自定义check图标，该函数在checkMode模式下有效
 * @param {ht.Data} data 数据元素
 * @return {String} 
 */
ht.widget.TreeTableView.prototype.getCheckIcon = function (data){};

/**
 * 获取check模式
 * <ul>
 * <li>null：默认值，不启用check选择模式</li>
 * <li>default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象</li>
 * <li>children：该check模式将同时影响点击中的data对象，以及其孩子对象</li>
 * <li>descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象</li>
 * <li>all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象</li>
 * </ul>
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getCheckMode = function (){};

/**
 * 获取toggle的关闭图标
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getCollapseIcon = function (){};

/**
 * 获取鼠标下的列
 * @param {Event} e 鼠标或Touch事件
 * @return {ht.Column} 
 */
ht.widget.TreeTableView.prototype.getColumnAt = function (e){};

/**
 * 获取列线颜色
 * @return {color}
 */
ht.widget.TreeTableView.prototype.getColumnLineColor = function (){};

/**
 * 获取列模型， 列模型用于存储Column列对象信息
 * @return {ht.DataModel}
 */
ht.widget.TreeTableView.prototype.getColumnModel = function (){};

/**
 * 默认返回sortFunc函数，当sortColumn不为空时将返回其对应的排序函数
 * @return {Function}
 */
ht.widget.TreeTableView.prototype.getCurrentSortFunc = function (){};

/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下的数据元素
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 点下的数据元素
 */
ht.widget.TreeTableView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.widget.TreeTableView.prototype.getDataModel = function (){};

/**
 * 获取当前可见区域的结束行索引
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getEndRowIndex = function (){};

/**
 * 获取toggle的展开图标
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getExpandIcon = function (){};


/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法获取focus数据元素
 * @return {ht.Data}
 */
ht.widget.TreeTableView.prototype.getFocusData = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getHeight = function (){};

/**
 * 获取data对象对应的icon图标，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getIcon = function (data){};

/**
 * 返回data对象对应的图标宽度，默认如果有图标则以indent值为宽度，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getIconWidth = function (data){};

/**
 * 获取indent缩进，该值一般当作图标的宽度
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getIndent = function (data){};

/**
 * 获取data对象显示在treeColumn中的文字，默认返回data.toLabel()，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getLabel = function (data){};


/**
 * 获取对应的单元格文本颜色，可重载自定义
 * @param {ht.Data} data 数据元素 
 * @param {ht.Column} column 列
 * @param {Object} value 值
 * @return {color}
 */
ht.widget.TreeTableView.prototype.getLabelColor = function (data, column, value){};

/**
 * 获取对应的单元格文本字体，可重载自定义
 * @param {ht.Data} data 数据元素 
 * @param {ht.Column} column 列
 * @param {Object} value 值
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getLabelFont = function (data, column, value){};

/**
 * 获取文本选中颜色
 * @return {color}
 */
ht.widget.TreeTableView.prototype.getLableSelectColor = function (){};

/**
 * 获取当前data的缩减层次，一般结合indent参数用于绘制
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getLevel = function (data){};

/**
 * 获取延迟加载器
 * @return {Object}
 */
ht.widget.TreeTableView.prototype.getLoader = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TreeTableView#lp lp}
 */
ht.widget.TreeTableView.prototype.getLogicalPoint = function (event){};

/**
 * 获取根节点，默认为空，从DataModel#getRoots()的对象开始展示
 * @return {ht.Data}
 */
ht.widget.TreeTableView.prototype.getRootData = function (){};

/**
 * 获取当前显示的Data对象集合，该集合已被排序和过滤
 * @return {ht.List}
 */
ht.widget.TreeTableView.prototype.getRowDatas = function (){};

/**
 * 获取行高
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getRowHeight = function (){};

/**
 * 获取data对象所在的行索引
 * @param {ht.Data} data 数据元素
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getRowIndex = function (data){};

/**
 * 获取行线颜色
 * @return {color}
 */
ht.widget.TreeTableView.prototype.getRowLineColor = function (){};

/**
 * 返回当前可见行总行数
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getRowSize = function (){};

/**
 * 获取滚动条颜色
 * @return {color}
 */
ht.widget.TreeTableView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条宽度
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getScrollBarSize = function (){};

/**
 * 获取选择过滤器函数
 * @return {Function}
 */
ht.widget.TreeTableView.prototype.getSelectableFunc = function (){};

/**
 * 获取行选中背景颜色
 * @return {color}
 */
ht.widget.TreeTableView.prototype.getSelectBackground = function (){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.widget.TreeTableView#sm sm}
 */
ht.widget.TreeTableView.prototype.getSelectionModel = function (){};

/**
 * 获取当前排序列
 * @return {ht.Column}
 */
ht.widget.TreeTableView.prototype.getSortColumn = function (){};

/**
 * 获取排序函数
 * @return {Function}
 */
ht.widget.TreeTableView.prototype.getSortFunc = function (){};

/**
 * 获取排序方式
 * <ul>
 * <li>none:不允许排序</li>
 * <li>bistate:点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate:点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getSortMode = function (){};

/**
 * 获取当前可见区域的起始行索引
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getStartRowIndex = function (){};

/**
 * 返回当前data对象对应的展开或合并图标，可重载自定义
 * @param {ht.Data} data 数据元素
 * @return {String}
 */
ht.widget.TreeTableView.prototype.getToggleIcon = function (data){};

/**
 * 获取ToolTip文字，可重载返回自定义的toolTip文字
 * @param {Event} e 鼠标或Touch事件对象
 * @return {String} toolTip文字，默认取出鼠标下的data和column，然后返回column.getToolTip(data);
 */
ht.widget.TreeTableView.prototype.getToolTip = function (e){};

/**
 * 获取水平平移值
 * @return {Number} 水平平移值
 * @see {@link ht.widget.TreeTableView#tx tx}
 */
ht.widget.TreeTableView.prototype.getTranslateX = function (){};

/**
 * 获取垂直平移值
 * @return {Number} 垂直平移值
 * @see {@link ht.widget.TreeTableView#ty ty}
 */
ht.widget.TreeTableView.prototype.getTranslateY = function (){};

/**
 * 返回树表组件默认插入的树表列，该列显示父子关系的树层次结构
 * @return {ht.Column}
 */
ht.widget.TreeTableView.prototype.getTreeColumn = function (){};

/**
 * 获取单元格中要显示的内容
 * @param {ht.Data} data 数据元素
 * @param {ht.Column} column 列
 * @return {Object}
 */
ht.widget.TreeTableView.prototype.getValue = function (data, column){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.TreeTableView.prototype.getView = function (){};

/**
 * 获取组件中可见区域的逻辑尺寸
 * @return {Object}
 */
ht.widget.TreeTableView.prototype.getViewRect = function (){};

/**
 * 获取可见过滤器函数
 * @return {Function}
 */
ht.widget.TreeTableView.prototype.getVisibleFunc = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.TreeTableView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TreeTableView#iv iv}
 */
ht.widget.TreeTableView.prototype.invalidate = function (delay){};

/**
 * 无效数据元素
 * @param {ht.Data} data 要无效的数据元素
 */
ht.widget.TreeTableView.prototype.invalidateData = function (data){};

/**
 * 无效模型，最彻底的刷新方式
 * @see {@link ht.widget.TreeTableView#ivm ivm}
 */
ht.widget.TreeTableView.prototype.invalidateModel = function (){};

/**
 * 是否自动隐藏滚动条
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isAutoHideScrollBar = function (){};

/**
 * 选中数据元素时，是否自动平移组件以确保该元素出现在可见区域内
 * @return {Boolean}
 */
ht.widget.TreeTableView.prototype.isAutoMakeVisible = function (){};

/**
 * 是否启用批量编辑
 * @return {Boolean}
 */
ht.widget.TreeTableView.prototype.isBatchEditable = function (){};

/**
 * 判断单元格是否可编辑
 * @param {ht.Data} data 数据元素
 * @param {ht.Column} column 列
 * @return {Boolean}
 */
ht.widget.TreeTableView.prototype.isCellEditable = function (data, column){};

/**
 * 是否是check模式，默认为false，为true时自动插入checkColumn列
 * @return {Boolean}
 */
ht.widget.TreeTableView.prototype.isCheckMode = function (){};

/**
 * 判断是否允许对parent对象的孩子排序，默认返回true，可重载屏蔽孩子排序
 * @param {ht.Data} parent 父元素
 * @return {Boolean}
 */
ht.widget.TreeTableView.prototype.isChildrenSortable = function (parent){};

/**
 * 获取列线是否可见，默认为true
 * @return {Boolean}
 */
ht.widget.TreeTableView.prototype.isColumnLineVisible = function (){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isDisabled = function (){};

/**
 * 返回可否编辑的总开关，默认为false，每个Column列对象可再控制
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isEditable = function (){};

/**
 * 判断data对象是否展开
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isExpanded = function (data){};

/**
 * 判断rootData节点是否可见
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isRootVisible = function (){};

/**
 * 获取行线是否可见，默认为true
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isRowLineVisible = function (){};
 
/**
 * 判断data对象是否可被选中
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isSelectable = function (data){};

/**
 * 判断data对象是否被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isSelected = function (data){};
 
/**
 * 根据id判断data对象是否被选中
 * @param {String|Number} id 数据元素id
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isSelectedById = function (id){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isSelectionModelShared = function (){};

/**
 * 判断数据元素是否可见
 * @param {ht.Data} data 数据元素
 * @return {Boolean} 
 */
ht.widget.TreeTableView.prototype.isVisible = function (data){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.TreeTableView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TreeTableView#invalidate invalidate}
 */
ht.widget.TreeTableView.prototype.iv = function (delay){};

/**
 * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，{@link ht.widget.TreeTableView#invalidateModel invalidateModel}的缩写
 * @see {@link ht.widget.TreeTableView#invalidateModel invalidateModel}
 */
ht.widget.TreeTableView.prototype.ivm = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.TreeTableView#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.TreeTableView#getLogicalPoint getLogicalPoint}
 */
ht.widget.TreeTableView.prototype.lp = function (event){};

/**
 * 平移组件以确保数据元素在可见区域内
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeTableView.prototype.makeVisible = function (data){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.TreeTableView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.TreeTableView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.TreeTableView.prototype.mp = function (listener, scope, ahead){};


/**
 * 合并data对象时调用，可重载做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeTableView.prototype.onCollapsed = function (data){};

/**
 * 列头被点击时调用，可重载做后续处理，如远程排序功能
 * @param {ht.Column} column 列
 */
ht.widget.TreeTableView.prototype.onColumnClicked = function (column){};

/**
 * 当data所在行被单击时回调，可重载对单击事件做响应
 * @param {ht.Data} data 数据元素 
 * @param {Event} e 事件对象
 */
ht.widget.TreeTableView.prototype.onDataClicked = function (data, e){};

/**
 * 当data所在行被双击时回调，可重载对双击事件做响应
 * @param {ht.Data} data 数据元素 
 * @param {Event} e 事件对象
 */
ht.widget.TreeTableView.prototype.onDataDoubleClicked = function (data, e){};

/**
 * 展开data对象时调用，可重载做后续处理
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeTableView.prototype.onExpanded = function (data){};

/**
 * 平移动画结束时回调，可重载做后续处理
 */
ht.widget.TreeTableView.prototype.onTranslateEnded = function (){};

/**
 * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
 */
ht.widget.TreeTableView.prototype.redraw = function (){};

/**
 * 删除底层Painter
 * @param {Object} painter Painter类
 */
ht.widget.TreeTableView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TreeTableView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除所有选中的图元
 */
ht.widget.TreeTableView.prototype.removeSelection = function (){};

/**
 * 删除顶层Painter
 * @param {Object} painter Painter类
 */
ht.widget.TreeTableView.prototype.removeTopPainter = function (painter){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TreeTableView.prototype.removeViewListener = function (listener, scope){};

/**
 * 平移(滚动)组件至指定的行号
 * @param {Number} index 行号
 */
ht.widget.TreeTableView.prototype.scrollToIndex = function (index){};

/**
 * 选中所有数据元素
 */
ht.widget.TreeTableView.prototype.selectAll = function (){};

/**
 * 设置是否自动隐藏滚动条
 * @param {Boolean} v
 */
ht.widget.TreeTableView.prototype.setAutoHideScrollBar = function (v){};

/**
 * 设置当选中数据元素，是否自动平移(滚动)组件以确保该数据元素出现在可见区域内
 * @param {Boolean} v
 */
ht.widget.TreeTableView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置是否启用批量编辑
 * @param {Boolean} v
 */
ht.widget.TreeTableView.prototype.setBatchEditable = function (v){};

/**
 * 设置check模式
 * @param {String} v
 * <ul>
 * <li>null：默认值，不启用check选择模式</li>
 * <li>default：check模式的默认选择方式，即单击选中或取消选中，只影响当前点击中的data对象</li>
 * <li>children：该check模式将同时影响点击中的data对象，以及其孩子对象</li>
 * <li>descendant：该check模式将同时影响点击中的data对象，以及其所有子孙对象</li>
 * <li>all：该check模式将同时影响点击中的data对象，以及其所有父辈和子孙对象</li>
 * </ul>
 */
ht.widget.TreeTableView.prototype.setCheckMode = function (v){};

/**
 * 设置toggle的关闭图标
 * @param {String} v icon
 */
ht.widget.TreeTableView.prototype.setCollapseIcon = function (v){};

/**
 * 设置列线颜色
 * @param {color} color
 */
ht.widget.TreeTableView.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} v
 */
ht.widget.TreeTableView.prototype.setColumnLineVisible = function (v){};

/**
 * 以json的方式配置表格中的列(设置)
 * @param {Array} columns json列
 * @example //示例：
 * treeTableView.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TreeTableView.prototype.setColumns = function (v){};

/**
 * 设置绑定的数据模型
 * @param {ht.DataModel} dataModel 数据模型
 */
ht.widget.TreeTableView.prototype.setDataModel = function (dataModel){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.TreeTableView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置可否编辑的总开关，默认为false，每个Column列对象可再控制
 * @param {Boolean} editable
 */
ht.widget.TreeTableView.prototype.setEditable = function (editable){};

/**
 * 设置toggle的展开图标
 * @param {String} v icon
 */
ht.widget.TreeTableView.prototype.setExpandIcon = function (v){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeTableView.prototype.setFocusData = function (data){};

/**
 * 在checkMode模式下数据除了被选中有check状态外，还可以有被点击行的focus状态<br>
 * 此方法设置focus的数据元素
 * @param {String|Number} id 数据元素的id
 */
ht.widget.TreeTableView.prototype.setFocusDataById = function (id){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.TreeTableView.prototype.setHeight = function (v){};

/**
 * 设置indent缩进，该值一般当作图标的宽度
 * @param {Number} v
 */
ht.widget.TreeTableView.prototype.setIndent = function (v){};

/**
 * 设置文本颜色
 * @param {color} color
 */
ht.widget.TreeTableView.prototype.setLabelColor = function (color){};

/**
 * 设置文本字体
 * @param {String} font
 */
ht.widget.TreeTableView.prototype.setLabelFont = function (font){};

/**
 * 设置选中文本颜色
 * @param {color} color
 */
ht.widget.TreeTableView.prototype.setLabelSelectColor = function (color){};

/**
 * 设置延迟加载器
 * @param {Object} v
 * @example //示例：
 * treeTableView.setLoader({
 * 	load: function(data) {
 * 		//展开此data时回调，可用于加载子节点
 * 	},
 * 	isLoaded: function(data) {
 * 		//返回此data的子结点是否已加载
 * 	}
 * });
 * 
 */
ht.widget.TreeTableView.prototype.setLoader = function (v){};

/**
 * 指定根节点，默认为空，从DataModel#getRoots()的对象开始展示
 * @param {ht.Data} v
 */
ht.widget.TreeTableView.prototype.setRootData = function (v){};

/**
 * 设置根节点是否可见
 * @param {Boolean} v
 */
ht.widget.TreeTableView.prototype.setRootVisible = function (v){};

/**
 * 设置行高
 * @param {Number} v
 */
ht.widget.TreeTableView.prototype.setRowHeight = function (v){};

/**
 * 设置行线颜色
 * @param {color} color
 */
ht.widget.TreeTableView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} v
 */
ht.widget.TreeTableView.prototype.setRowLineVisible = function (v){};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.widget.TreeTableView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条宽度
 * @param {Number} size 宽度值
 */
ht.widget.TreeTableView.prototype.setScrollBarSize = function (size){};

/**
 * 设置选择过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.widget.TreeTableView.prototype.setSelectableFunc = function (func){};

/**
 * 设置行选中背景颜色
 * @param {color} color
 */
ht.widget.TreeTableView.prototype.setSelectBackground = function (color){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v
 */
ht.widget.TreeTableView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置排序列
 * @param {ht.Column} column
 */
ht.widget.TreeTableView.prototype.setSortColumn = function (column){};

/**
 * 设置排序函数
 * @param {Function} func
 */
ht.widget.TreeTableView.prototype.setSortFunc = function (func){};

/**
 * 设置排序方式
 * @param {String} mode
 * <ul>
 * <li>none:不允许排序</li>
 * <li>bistate:点击表头时正序和倒序两种方式之间切换</li>
 * <li>tristate:点击表头时正序、倒序、不排序三种方式之间切换</li>
 * </ul>
 */
ht.widget.TreeTableView.prototype.setSortMode = function (mode){};

/**
 * 设置水平和垂直平移值
 * @param {Number} x 水平平移值
 * @param {Number} y 垂直平移值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.TreeTableView.prototype.setTranslate = function (x, y, anim){};

/**
 * 设置水平平移值
 * @param {Number} x 水平平移值
 */
ht.widget.TreeTableView.prototype.setTranslateX = function (x){};

/**
 * 设置垂直平移值
 * @param {Number} y 垂直平移值
 */
ht.widget.TreeTableView.prototype.setTranslateY = function (y){};

/**
 * 设置可见过滤器
 * @param {Function} func 过滤器函数
 */
ht.widget.TreeTableView.prototype.setVisibleFunc = function (func){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.TreeTableView.prototype.setWidth = function (v){};

/**
 * 显示水平滚动条
 */
ht.widget.TreeTableView.prototype.showHBar = function (){};

/**
 * 显示垂直滚动条
 */
ht.widget.TreeTableView.prototype.showVBar = function (){};

/**
 * 获取选中模型，{@link ht.widget.TreeTableView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.widget.TreeTableView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.widget.TreeTableView.prototype.sm = function (){};


/**
 * 展开或合并data对象
 * @param {ht.Data} data 数据元素
 */
ht.widget.TreeTableView.prototype.toggle = function (data){};


/**
 * 在当前值基础上增加水平和垂直平移值
 * @param {Number} x 新增的水平平移值 
 * @param {Number} y 新增的垂直平移值 
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.TreeTableView.prototype.translate = function (x, y, anim){};

/**
 * 获取或设置水平平移值，没有参数时相当于{@link ht.widget.TreeTableView#getTranslateX getTranslateX}，有参数时相当于{@link ht.widget.TreeTableView#setTranslateX setTranslateX}
 * @param {Number} value 平移值 
 */
ht.widget.TreeTableView.prototype.tx = function (value){};

/**
 * 获取或设置垂直平移值，没有参数时相当于{@link ht.widget.TreeTableView#getTranslateY getTranslateY}，有参数时相当于{@link ht.widget.TreeTableView#setTranslateY setTranslateY}
 * @param {Number} value 平移值 
 */
ht.widget.TreeTableView.prototype.ty = function (value){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.TreeTableView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.TreeTableView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.TreeTableView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.TreeTableView.prototype.validate = function (){};









/**
 * 树表面板，组合了TableHeader和TreeTableView两个子组件
 * @param {ht.widget.TreeTableView} treeTableView 绑定的树表组件
 * @constructor
 */
ht.widget.TreeTablePane = function(treeTableView) {};

/**
 * 以json的方式配置树表中的列(新增)，内部调用treeTableView的addColumns方法
 * @param {Array} columns json列
 * @example //示例：
 * treeTablePane.addColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TreeTablePane.prototype.addColumns = function(columns) {}

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.TreeTablePane.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 获取列模型， 列模型用于存储Column列对象信息，内部调用treeTableView的getColumnModel方法
 * @return {ht.DataModel}
 */
ht.widget.TreeTablePane.prototype.getColumnModel = function (){};

/**
 * 获取绑定的数据模型，内部调用treeTableView的getDataModel方法
 * @return {ht.DataModel} 数据模型
 */
ht.widget.TreeTablePane.prototype.getDataModel = function (){};

/**
 * 获取布局高度
 * @return {Number} 
 */
ht.widget.TreeTablePane.prototype.getHeight = function (){};

/**
 * 获取表头组件
 * @return {ht.widget.TableHeader}
 */
ht.widget.TreeTablePane.prototype.getTableHeader = function (){};

/**
 * 获取树表组件
 * @return {ht.widget.TreeTableView}
 */
ht.widget.TreeTablePane.prototype.getTableView = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.TreeTablePane.prototype.getView = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.TreeTablePane.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TreeTablePane#iv iv}
 */
ht.widget.TreeTablePane.prototype.invalidate = function (delay){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.TreeTablePane.prototype.isDisabled = function (){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.TreeTablePane#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.TreeTablePane#invalidate invalidate}
 */
ht.widget.TreeTablePane.prototype.iv = function (delay){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.TreeTablePane.prototype.removeViewListener = function (listener, scope){};

/**
 * 以json的方式配置树表中的列(设置)，内部调用treeTableView的setColumns方法
 * @param {Array} columns json列
 * @example //示例：
 * treeTablePane.setColumns([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.TreeTablePane.prototype.setColumns = function (v){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.TreeTablePane.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.TreeTablePane.prototype.setHeight = function (v){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.TreeTablePane.prototype.setWidth = function (v){};

/**
 * 立刻刷新组件
 */
ht.widget.TreeTablePane.prototype.validate = function (){};






/**
 * 属性组件，用于显示Data类型对象属性，以分组、排序等方式展示属性
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 */
ht.widget.PropertyView = function(dataModel) {};

/**
 * 增加底层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，底层Painter绘制在组件最下面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyBottomPainter() {
 * }
 * ht.Default.def(MyBottomPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * propertyView.addBottomPainter(MyBottomPainter);
 */
ht.widget.PropertyView.prototype.addBottomPainter = function(painter) {}

/**
 * 以json的方式配置属性(新增)
 * @param {Array} properties json属性
 * @example //示例：
 * propertyView.addProperties([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.PropertyView.prototype.addProperties = function(properties) {}


/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.PropertyView#mp mp}
 */
ht.widget.PropertyView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};


/**
 * 增加顶层Painter<br>
 * 组件上提供Painter接口，开发者可以使用Canvas的画笔对象自由绘制任意形状，顶层Painter绘制在组件最上面
 * @param {Function} painter Painter类
 * @example //Painter示例：
 * function MyTopPainter() {
 * }
 * ht.Default.def(MyTopPainter, Object, {
 * 	draw: function(g) {
 * 		g.save();
 * 		//draw...
 * 		g.restore();
 * 	}
 * });
 * propertyView.addTopPainter(MyTopPainter);
 */
ht.widget.PropertyView.prototype.addTopPainter = function (painter){};


/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.PropertyView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 传入即将设置的垂直平移值，返回最终设置值，可重载限制垂直平移范围
 * @param {Number} value 原始垂直平移值
 * @return {Number} 新的垂直平移值
 */
ht.widget.PropertyView.prototype.adjustTranslateY = function (value){};

/**
 * 合并分组
 * @param  {String} categoryName 分组名
 */
ht.widget.PropertyView.prototype.collapse = function (categoryName){};

/**
 * 合并所有分组
 */
ht.widget.PropertyView.prototype.collapseAll = function (){};

/**
 * 关闭ToolTip功能
 */
ht.widget.PropertyView.prototype.disableToolTip = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.widget.PropertyView#getDataModel getDataModel}，有参数时相当于{@link ht.widget.PropertyView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.widget.PropertyView.prototype.dm = function (dataModel){};

/**
 * 绘制分组名，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {String} name 分组名
 * @param {Number} rowIndex 行索引
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} w 绘制的宽度
 * @param {Number} h 绘制的高度
 */
ht.widget.PropertyView.prototype.drawCategoryName = function (g, name, rowIndex, x, y, w, h){};

/**
 * 绘制分组名，可重载自定义
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Property} property 属性对象
 * @param {Number} rowIndex 行索引
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} w 绘制的宽度
 * @param {Number} h 绘制的高度
 */
ht.widget.PropertyView.prototype.drawPropertyName = function (g, property, rowIndex, x, y, w, h){};

/**
 * 绘制属性值，可重载自定义，如果返回值为HTML元素，则使用HTML元素当作Renderer，一般重载Property的drawPropertyValue，无需重载此方法
 * @param {CanvasRenderingContext2D} g 画笔对象
 * @param {ht.Property} property 属性对象
 * @param {Object} value 值
 * @param {Number} rowIndex 行索引
 * @param {Number} x 左上角x坐标 
 * @param {Number} y 左上角y坐标 
 * @param {Number} w 绘制的宽度
 * @param {Number} w 绘制的宽度
 * @param {ht.Data} data 数据元素
 * @return {HTMLElement}
 */
ht.widget.PropertyView.prototype.drawPropertyValue = function (g, property, value, rowIndex, x, y, w, h, data){};

/**
 * 启用ToolTip
 */
ht.widget.PropertyView.prototype.enableToolTip = function (){};


/**
 * 展开分组
 * @param {String} categoryName 分组名
 */
ht.widget.PropertyView.prototype.expand = function (categoryName){};

/**
 * 展开所有分组
 */
ht.widget.PropertyView.prototype.expandAll = function (){};

/**
 * 获取边框和分组行的背景颜色
 * @return {color}
 */
ht.widget.PropertyView.prototype.getBackground = function (){};

/**
 * 返回分组文本颜色，可重载自定义
 * @param {String} categoryName 分组名
 * @return {color}
 */
ht.widget.PropertyView.prototype.getCategoryColor = function (categoryName){};

/**
 * 返回分组文本字体，可重载自定义
 * @param {String} categoryName 分组名
 * @return {String}
 */
ht.widget.PropertyView.prototype.getCategoryFont = function (categoryName){};

/**
 * 获取分组合并图标
 * @return {String}
 */
ht.widget.PropertyView.prototype.getCollapseIcon = function (){};

/**
 * 获取列线颜色
 * @return {color}
 */
ht.widget.PropertyView.prototype.getColumnLineColor = function (){};

/**
 * 获取列线位置比例，默认值0.5，允许范围为0~1
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getColumnPosition = function (){};

/**
 * 获取当前显示对象
 * @return {ht.Data}
 */
ht.widget.PropertyView.prototype.getCurrentData = function (){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.widget.PropertyView.prototype.getDataModel = function (){};

/**
 * 获取分组展开图标
 * @return {String}
 */
ht.widget.PropertyView.prototype.getExpandIcon = function (){};

/**
 * 获取布局高度
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getHeight = function (){};


/**
 * 获取左侧缩进，左侧空间用于绘制分组toggle图标，以及属性提示icon图标
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getIndent = function (data){};


/**
 * 返回属性值文本颜色，可重载自定义
 * @param {ht.Property} property 属性对象 
 * @param {Object} value 值
 * @param {Number} rowIndex 行索引
 * @return {color}
 */
ht.widget.PropertyView.prototype.getLabelColor = function (property, value, rowIndex){};

/**
 * 返回属性值文本字体，可重载自定义
 * @param {ht.Property} property 属性对象 
 * @param {Object} value 值
 * @param {Number} rowIndex 行索引
 * @return {String}
 */
ht.widget.PropertyView.prototype.getLabelFont = function (property, value, rowIndex){};

/**
 * 获取文本选中颜色
 * @return {color}
 */
ht.widget.PropertyView.prototype.getLableSelectColor = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.PropertyView#lp lp}
 */
ht.widget.PropertyView.prototype.getLogicalPoint = function (event){};

/**
 * 返回event事件所在的行的属性信息
 * @param {Event} event 事件对象
 * @return {ht.Property}
 */
ht.widget.PropertyView.prototype.getPropertyAt = function (event){};

/**
 * 返回属性名文本颜色，可重载自定义
 * @param {ht.Property} property 属性对象
 * @param {Number} rowIndex 行索引
 * @return {color}
 */
ht.widget.PropertyView.prototype.getPropertyColor = function (property, rowIndex){};

/**
 * 返回属性名文本字体，可重载自定义
 * @param {ht.Property} property 属性对象
 * @param {Number} rowIndex 行索引
 * @return {color}
 */
ht.widget.PropertyView.prototype.getPropertyFont = function (property, rowIndex){};

/**
 * 获取propertyModel属性，可增删Property属性对象
 * @return {ht.DataModel}
 */
ht.widget.PropertyView.prototype.getPropertyModel = function (){};

/**
 * 返回显示在左列的属性名，可重载自定义
 * @return {String}
 */
ht.widget.PropertyView.prototype.getPropertyName = function (property){};

/**
 * 返回要显示的原始未过滤排序的属性集合，默认返回propertyModel.getRoots()，可重载自定义
 * @return {ht.List}
 */
ht.widget.PropertyView.prototype.getRawProperties = function (){};

/**
 * 获取行高
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getRowHeight = function (){};

/**
 * 获取event事件所在的行索引
 * @param {Event} event 事件对象
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getRowIndexAt = function (event){};

/**
 * 返回当前显示的所有行信息的集合，集合元素为string类型代表分组名，{data:d,property:p}结构对象代表属性信息
 * @return {ht.List}
 */
ht.widget.PropertyView.prototype.getRows = function (){};

/**
 * 获取滚动条颜色
 * @return {color}
 */
ht.widget.PropertyView.prototype.getScrollBarColor = function (){};

/**
 * 获取滚动条宽度
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getScrollBarSize = function (){};

/**
 * 获取行选中背景颜色
 * @return {color}
 */
ht.widget.PropertyView.prototype.getSelectBackground = function (){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.widget.PropertyView#sm sm}
 */
ht.widget.PropertyView.prototype.getSelectionModel = function (){};

/**
 * 获取当前选中行索引
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getSelectRowIndex = function (){};

/**
 * 获取排序函数
 * @return {Function}
 */
ht.widget.PropertyView.prototype.getSortFunc = function (){};

/**
 * 获取垂直平移值
 * @return {Number} 垂直平移值
 * @see {@link ht.widget.PropertyView#ty ty}
 */
ht.widget.PropertyView.prototype.getTranslateY = function (){};

/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.PropertyView.prototype.getView = function (){};

/**
 * 获取可见过滤器函数
 * @return {Function}
 */
ht.widget.PropertyView.prototype.getVisibleFunc = function (){};

/**
 * 获取布局宽度
 * @return {Number}
 */
ht.widget.PropertyView.prototype.getWidth = function (){};

/**
 * 无效组件，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.PropertyView#iv iv}
 */
ht.widget.PropertyView.prototype.invalidate = function (delay){};

/**
 * 无效模型，最彻底的刷新方式
 * @see {@link ht.widget.PropertyView#ivm ivm}
 */
ht.widget.PropertyView.prototype.invalidateModel = function (){};

/**
 * 是否自动隐藏滚动条
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isAutoHideScrollBar = function (){};

/**
 * 是否启用批量编辑
 * @return {Boolean}
 */
ht.widget.PropertyView.prototype.isBatchEditable = function (){};

/**
 * 是否分组显示，默认为true，为false则忽略Property的categoryName属性
 * @return {Boolean}
 */
ht.widget.PropertyView.prototype.isCategorizable = function (){};

/**
 * 获取列线是否可见，默认为true
 * @return {Boolean}
 */
ht.widget.PropertyView.prototype.isColumnLineVisible = function (){};

/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isDisabled = function (){};

/**
 * 返回可否编辑的总开关，默认为false，每个Property属性对象可再控制
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isEditable = function (){};

/**
 * 分组是否展开
 * @param {String} categoryName 分组名
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isExpanded = function (categoryName){};

/**
 * 判断属性是否可编辑，可重载自定义
 * @param {ht.Property} property 属性对象
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isPropertyEditable = function (property){};

/**
 * 获取行线是否可见，默认为true
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isRowLineVisible = function (){};

/**
 * 当前组件是否共享选中模型
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isSelectionModelShared = function (){};

/**
 * 判断属性是否可见
 * @param {ht.Property} property 属性对象
 * @return {Boolean} 
 */
ht.widget.PropertyView.prototype.isVisible = function (property){};

/**
 * 无效组件，并调用延时刷新，{@link ht.widget.PropertyView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.widget.PropertyView#invalidate invalidate}
 */
ht.widget.PropertyView.prototype.iv = function (delay){};

/**
 * 无效模型，重新构造内部的rows数据，最彻底的刷新方式，{@link ht.widget.PropertyView#invalidateModel invalidateModel}的缩写
 * @see {@link ht.widget.PropertyView#invalidateModel invalidateModel}
 */
ht.widget.PropertyView.prototype.ivm = function (){};

/**
 * 传入HTML事件对象，将事件坐标转换为组件中的逻辑坐标，{@link ht.widget.PropertyView#getLogicalPoint getLogicalPoint}的缩写
 * @param {Event} event 事件对象
 * @return {Object}
 * @see {@link ht.widget.PropertyView#getLogicalPoint getLogicalPoint}
 */
ht.widget.PropertyView.prototype.lp = function (event){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.PropertyView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.PropertyView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.PropertyView.prototype.mp = function (listener, scope, ahead){};

/**
 * 合并分组时调用，可重载做后续处理
 * @param {String} categoryName 分组名
 */
ht.widget.PropertyView.prototype.onCollapsed = function (categoryName){};

/**
 * 展开分组时调用，可重载做后续处理
 * @param {String} categoryName 分组名
 */
ht.widget.PropertyView.prototype.onExpanded = function (categoryName){};

/**
 * 平移动画结束时回调，可重载做后续处理
 */
ht.widget.PropertyView.prototype.onTranslateEnded = function (){};

/**
 * 重绘组件中所有行，仅次于invalidateModel的彻底刷新方式
 */
ht.widget.PropertyView.prototype.redraw = function (){};

/**
 * 删除底层Painter
 * @param {Object} painter Painter类
 */
ht.widget.PropertyView.prototype.removeBottomPainter = function (painter){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.PropertyView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除所有选中的图元
 */
ht.widget.PropertyView.prototype.removeSelection = function (){};

/**
 * 删除顶层Painter
 * @param {Object} painter Painter类
 */
ht.widget.PropertyView.prototype.removeTopPainter = function (painter){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.PropertyView.prototype.removeViewListener = function (listener, scope){};

/**
 * 设置是否自动隐藏滚动条
 * @param {Boolean} v
 */
ht.widget.PropertyView.prototype.setAutoHideScrollBar = function (v){};

/**
 * 设置边框和分组行的背景颜色
 * @param {color} color
 */
ht.widget.PropertyView.prototype.setBackground = function (color){};

/**
 * 设置是否启用批量编辑
 * @param {Boolean} v
 */
ht.widget.PropertyView.prototype.setBatchEditable = function (v){};


/**
 * 设置是否分组显示，默认为true，为false则忽略Property的categoryName属性
 * @param {Boolean} v
 */
ht.widget.PropertyView.prototype.setCategorizable = function (v){};

/**
 * 设置分组合并图标
 * @param {String} icon
 */
ht.widget.PropertyView.prototype.setCollapseIcon = function (icon){};

/**
 * 设置列线颜色
 * @param {color} color
 */
ht.widget.PropertyView.prototype.setColumnLineColor = function (color){};

/**
 * 设置列线是否可见
 * @param {Boolean} v
 */
ht.widget.PropertyView.prototype.setColumnLineVisible = function (v){};


/**
 * 设置列线位置比例，默认值0.5，允许范围为0~1
 * @param {Number} v
 */
ht.widget.PropertyView.prototype.setColumnPosition = function (v){};

/**
 * 设置绑定的数据模型
 * @param {ht.DataModel} dataModel 数据模型
 */
ht.widget.PropertyView.prototype.setDataModel = function (dataModel){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.widget.PropertyView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置可否编辑的总开关，默认为false，每个Property属性对象可再控制
 * @param {Boolean} editable
 */
ht.widget.PropertyView.prototype.setEditable = function (editable){};

/**
 * 设置分组展开图标
 * @param {String} icon
 */
ht.widget.PropertyView.prototype.setExpandIcon = function (icon){};

/**
 * 设置布局高度
 * @param {Number} v 高度值
 */
ht.widget.PropertyView.prototype.setHeight = function (v){};

/**
 * 设置左侧缩进，左侧空间用于绘制分组toggle图标，以及属性提示icon图标
 * @param {Number} v
 */
ht.widget.PropertyView.prototype.setIndent = function (v){};

/**
 * 设置属性值文本颜色
 * @param {color} color
 */
ht.widget.PropertyView.prototype.setLabelColor = function (color){};

/**
 * 设置属性值文本字体
 * @param {String} font
 */
ht.widget.PropertyView.prototype.setLabelFont = function (font){};

/**
 * 设置选中文本颜色
 * @param {color} color
 */
ht.widget.PropertyView.prototype.setLabelSelectColor = function (color){};

/**
 * 以json的方式配置属性(设置)
 * @param {Array} properties json属性
 * @example //示例：
 * propertyView.setProperties([{
 * 	name: 'id',
 * 	displayName: '序号'
 * },
 * {
 * 	name: 'background',
 * 	accessType: 'style'
 * }
 * ]);
 */
ht.widget.PropertyView.prototype.setProperties = function (properties){};

/**
 * 设置行高
 * @param {Number} v
 */
ht.widget.PropertyView.prototype.setRowHeight = function (v){};

/**
 * 设置行线颜色
 * @param {color} color
 */
ht.widget.PropertyView.prototype.setRowLineColor = function (color){};

/**
 * 设置行线是否可见
 * @param {Boolean} v
 */
ht.widget.PropertyView.prototype.setRowLineVisible = function (v){};

/**
 * 设置滚动条颜色
 * @param {color} color 颜色值
 */
ht.widget.PropertyView.prototype.setScrollBarColor = function (color){};

/**
 * 设置滚动条宽度
 * @param {Number} size 宽度值
 */
ht.widget.PropertyView.prototype.setScrollBarSize = function (size){};

/**
 * 设置行选中背景颜色
 * @param {color} color
 */
ht.widget.PropertyView.prototype.setSelectBackground = function (color){};

/**
 * 设置组件是否共享选中模型
 * @param {Boolean} v
 */
ht.widget.PropertyView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置当前选中行索引
 * @param {Number} v
 */
ht.widget.PropertyView.prototype.setSelectRowIndex = function (v){};

/**
 * 设置排序函数
 * @param {Function} func
 */
ht.widget.PropertyView.prototype.setSortFunc = function (func){};

/**
 * 设置水平和垂直平移值
 * @param {Number} x 水平平移值(无效)
 * @param {Number} y 垂直平移值
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.PropertyView.prototype.setTranslate = function (x, y, anim){};


/**
 * 设置垂直平移值
 * @param {Number} y 垂直平移值
 */
ht.widget.PropertyView.prototype.setTranslateY = function (y){};

/**
 * 设置可见属性过滤器
 * @param {Function} func 过滤器函数
 */
ht.widget.PropertyView.prototype.setVisibleFunc = function (func){};

/**
 * 设置布局宽度
 * @param {Number} v 宽度值
 */
ht.widget.PropertyView.prototype.setWidth = function (v){};

/**
 * 显示垂直滚动条
 */
ht.widget.PropertyView.prototype.showVBar = function (){};

/**
 * 获取选中模型，{@link ht.widget.PropertyView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.widget.PropertyView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.widget.PropertyView.prototype.sm = function (){};

/**
 * 切换分组展开合并状态
 * @param {String} categoryName 分组名
 */
ht.widget.PropertyView.prototype.toggle = function (categoryName){};

/**
 * 在当前值基础上增加水平和垂直平移值
 * @param {Number} x 新增的水平平移值(无效)
 * @param {Number} y 新增的垂直平移值 
 * @param {Boolean} [anim] 是否使用动画
 */
ht.widget.PropertyView.prototype.translate = function (x, y, anim){};

/**
 * 获取或设置垂直平移值，没有参数时相当于{@link ht.widget.PropertyView#getTranslateY getTranslateY}，有参数时相当于{@link ht.widget.PropertyView#setTranslateY setTranslateY}
 * @param {Number} value 平移值 
 */
ht.widget.PropertyView.prototype.ty = function (value){};

/**
 * 删除自身属性变化事件监听器，{@link ht.widget.PropertyView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.PropertyView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.PropertyView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新组件
 */
ht.widget.PropertyView.prototype.validate = function (){};









/**
 * 3D渲染引擎组件，可视化呈现数据模型的三维环境场景
 * @param {ht.DataModel} dataModel 绑定的数据模型
 * @constructor
 */
ht.graph3d.Graph3dView = function(dataModel) {};

/**
 * 增加交互事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph3d.Graph3dView#mi mi}
 * @example //示例：
 * graph3dView.addInteractorListener(function(event) {
 * 		//event格式：
 * 		{
 * 			kind: 'clickData',//事件类型
 * 			data: data,//事件相关的数据元素
 * 			part: "part",//事件的区域,icon、label等
 * 			event: e//html原生事件
 * 		}
 * });
 */
ht.graph3d.Graph3dView.prototype.addInteractorListener = function(listener, scope, ahead) {}

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph3d.Graph3dView#mp mp}
 */
ht.graph3d.Graph3dView.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.graph3d.Graph3dView.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 关闭ToolTip功能
 */
ht.graph3d.Graph3dView.prototype.disableToolTip = function (){};

/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.graph3d.Graph3dView#getDataModel getDataModel}，有参数时相当于{@link ht.graph3d.Graph3dView#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.graph3d.Graph3dView.prototype.dm = function (dataModel){};

/**
 * 启用ToolTip
 */
ht.graph3d.Graph3dView.prototype.enableToolTip = function (){};

/**
 * 获取截头锥体的宽高比
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getAspect = function (){};

/**
 * 获取x轴线颜色
 * @return {color}
 */
ht.graph3d.Graph3dView.prototype.getAxisXColor = function (){};

/**
 * 获取y轴线颜色
 * @return {color}
 */
ht.graph3d.Graph3dView.prototype.getAxisYColor = function (){};

/**
 * 获取z轴线颜色
 * @return {color}
 */
ht.graph3d.Graph3dView.prototype.getAxisZColor = function (){};

/**
 * 获取碰撞边界
 * @return {Array}
 */
ht.graph3d.Graph3dView.prototype.getBoundaries = function (){};

/**
 * 获取图元最终亮度，默认为1,大于1变亮，小于1变暗
 * @param {ht.Data} data 图元
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getBrightness = function (data){};

/**
 * 获取渲染的画布
 * @return {HTMLCanvasElement} 画布
 */
ht.graph3d.Graph3dView.prototype.getCanvas = function (){};

/**
 * 获取拓扑中心点
 * @return {Array} 中心点坐标，格式：[x, y, z]
 */
ht.graph3d.Graph3dView.prototype.getCenter = function (){};

/**
 * 获取当前子网
 * @return {ht.SubGraph} 子网对象
 */
ht.graph3d.Graph3dView.prototype.getCurrentSubGraph = function (){};

/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {ht.Data} 点下的图元
 */
ht.graph3d.Graph3dView.prototype.getDataAt = function (pointOrEvent){};

/**
 * 传入逻辑坐标点或者交互event事件参数，返回当前点下的图元及part信息
 * @param {Object|Event} pointOrEvent 逻辑坐标点或交互事件对象(如鼠标事件对象)
 * @return {Object} 图元和part信息
 */
ht.graph3d.Graph3dView.prototype.getDataInfoAt = function (pointOrEvent){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.graph3d.Graph3dView.prototype.getDataModel = function (){};

/**
 * 获取矩形区域内的图元
 * @param {rect} rect 逻辑坐标区域
 * @return {ht.List}
 */
ht.graph3d.Graph3dView.prototype.getDatasInRect = function (rect){};

/**
 * 获取编辑过滤器函数
 * @return {Function}
 */
ht.graph3d.Graph3dView.prototype.getEditableFunc = function (){};

/**
 * 获取大小编辑控制条的颜色
 * @return {color}
 */
ht.graph3d.Graph3dView.prototype.getEditSizeColor = function (){};

/**
 * 获取眼睛（或Camera）所在位置，默认值为[0, 300, 1000]
 * @return {Array} 眼睛位置坐标，格式[x, y, z]
 */
ht.graph3d.Graph3dView.prototype.getEye = function (){};

/**
 * 获取远端截面位置，默认值为10000
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getFar = function (){};

/**
 * 获取垂直方向的视觉张角弧度，默认值为Math.PI/4
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getFovy = function (){};

/**
 * 获取网格线颜色
 * @return {color}
 */
ht.graph3d.Graph3dView.prototype.getGridColor = function (){};

/**
 * 获取网格线间距
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getGridGap = function (){};

/**
 * 获取网格行列数，默认为40
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getGridSize = function (){};

/**
 * 获取拓扑组件的布局高度
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getHeight = function (){};

/**
 * 获取交互器
 * @return {ht.List}
 */
ht.graph3d.Graph3dView.prototype.getInteractors = function (){};

/**
 * 获取图元的label，用于在拓扑上显示文字信息，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元label文字，默认返回data.s('label')||data.getName();
 */
ht.graph3d.Graph3dView.prototype.getLabel = function (data){};

/**
 * 获取图元的第二个label，用于在拓扑上显示文字，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元第二个label的文字，默认返回data.s('label2')
 */
ht.graph3d.Graph3dView.prototype.getLabel2 = function (data){};

/**
 * 获取图元的第二个label的背景色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元第二个label的背景色，默认返回data.s('label2.background')
 */
ht.graph3d.Graph3dView.prototype.getLabel2Background = function (data){};

/**
 * 获取图元的第二个label的文字颜色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元第二个label的文字颜色，默认返回data.s('label2.color')
 */
ht.graph3d.Graph3dView.prototype.getLabel2Color = function (data){};

/**
 * 获取图元label的背景色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元label的背景色，默认返回data.s('label.background')
 */
ht.graph3d.Graph3dView.prototype.getLabelBackground = function (data){};

/**
 * 获取图元label的文字颜色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元label的文字颜色，默认返回data.s('label.color')
 */
ht.graph3d.Graph3dView.prototype.getLabelColor = function (data){};

/**
 * 获取移动过滤器函数
 * @return {Function}
 */
ht.graph3d.Graph3dView.prototype.getMovableFunc = function (){};

/**
 * 获取移动漫游步进
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getMoveStep = function (){};

/**
 * 获取近端截面位置，默认值为10
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getNear = function (){};

/**
 * 获取图元的note，用于在拓扑上显示标注信息，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元note文字，默认返回data.s('note')
 */
ht.graph3d.Graph3dView.prototype.getNote = function (){data};

/**
 * 获取图元的第二个note，用于在拓扑上显示标注信息，可重载返回自定义文字
 * @param {ht.Data} data 图元
 * @return {String} 图元第二个note文字，默认返回data.s('note2')
 */
ht.graph3d.Graph3dView.prototype.getNote2 = function (){data};

/**
 * 获取图元的第二个note的背景色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元第二个note的背景色，默认返回data.s('note2.background')
 */
ht.graph3d.Graph3dView.prototype.getNote2Background = function (){data};

/**
 * 获取图元note的文字颜色，可重载返回自定义颜色
 * @param {ht.Data} data 图元
 * @return {color} 图元note的文字颜色，默认返回data.s('note.background')
 */
ht.graph3d.Graph3dView.prototype.getNoteBackground = function (data){};

/**
 * 获取图元的透明度，可重载返回自定义透明度
 * @param {ht.Data} data 图元
 * @return {Number} 图元透明度，默认返回data.s('opacity')
 */
ht.graph3d.Graph3dView.prototype.getOpacity = function (data){};

/**
 * 获取正交投影宽度，默认为2000
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getOrthoWidth = function (){};

/**
 * 获取框选选择框的背景色
 * @return {color}
 */
ht.graph3d.Graph3dView.prototype.getRectSelectBackground = function (){};

/**
 * 获取旋转编辑过滤器函数
 * @return {Function}
 */
ht.graph3d.Graph3dView.prototype.getRotationEditableFunc = function (){};

/**
 * 获取选择过滤器函数
 * @return {Function}
 */
ht.graph3d.Graph3dView.prototype.getSelectableFunc = function (){};

/**
 * 获取选中模型
 * @return {ht.SelectionModel}
 * @see {@link ht.graph3d.Graph3dView#sm sm}
 */
ht.graph3d.Graph3dView.prototype.getSelectionModel = function (){};

/**
 * 获取大小编辑过滤器
 * @return {Function}
 */
ht.graph3d.Graph3dView.prototype.getSizeEditableFunc = function (){};

/**
 * 获取组件内部的贴图映射表
 * @return {Object}
 */
ht.graph3d.Graph3dView.prototype.getTextureMap = function (){};

/**
 * 获取ToolTip文字，可重载返回自定义的toolTip文字
 * @param {Event} e 鼠标或Touch事件对象
 * @return {String} toolTip文字，默认取出鼠标下的图元，然后返回其getToolTip()
 */
ht.graph3d.Graph3dView.prototype.getToolTip = function (e){};

/**
 * 获取摄像头正上方向，该参数一般较少改动，默认值为[0, 1, 0]
 * @return {Array} 格式：[x, y, z]
 */
ht.graph3d.Graph3dView.prototype.getUp = function (){};

/**
 * 获取拓扑组件的根层div
 * @return {HTMLDivElement}
 */
ht.graph3d.Graph3dView.prototype.getView = function (){};

/**
 * 获取可见过滤器函数
 * @return {Function}
 */
ht.graph3d.Graph3dView.prototype.getVisibleFunc = function (){};

/**
 * 获取拓扑组件的布局宽度
 * @return {Number}
 */
ht.graph3d.Graph3dView.prototype.getWidth = function (){};

/**
 * 定义图元立体线框效果
 * @param {ht.Data} data 数据元素
 * @example //示例:
 * g3d.getWireframe = function(data){
 * var visible = data.s('wf.visible');
 *  if(visible === true || (visible === 'selected' && this.isSelected(data))){
 *      return {
 *          color: data.s('wf.color'),
 *          width: data.s('wf.width'),
 *          short: data.s('wf.short'),
 *          mat: data.s('wf.mat')
 *      };
 *  }
 * },
 * @return {Object}
 */
ht.graph3d.Graph3dView.prototype.getWireframe = function (data){};

/**
 * 无效拓扑，并调用延时刷新
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.graph3d.Graph3dView#iv iv}
 */
ht.graph3d.Graph3dView.prototype.invalidate = function (delay){};

/**
 * 无效拓扑中的所有图元
 */
ht.graph3d.Graph3dView.prototype.invalidateAll = function (){};

/**
 * 无效拓扑中的图元
 * @param {ht.Data} data 要无效的图元
 */
ht.graph3d.Graph3dView.prototype.invalidateData = function (data){};

/**
 * 无效选中模型中的图元
 */
ht.graph3d.Graph3dView.prototype.invalidateSelection = function (){};

/**
 * 选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
 * @return {Boolean}
 */
ht.graph3d.Graph3dView.prototype.isAutoMakeVisible = function (){};

/**
 * 是否显示中心点轴线
 * @return {Boolean}
 */
ht.graph3d.Graph3dView.prototype.isCenterAxisVisible = function (){};


/**
 * 组件是否处于不可用状态，处于此状态时不能进行任何操作并且会遮挡一层蒙板
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isDisabled = function (){};

/**
 * 判断图元是否可被编辑
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isEditable = function (data){};

/**
 * 是否是第一人称模式
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isFirstPersonMode = function (){};

/**
 * 是否显示网格
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isGridVisible = function (){};

/**
 * 判断图元是否可移动
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isMovable = function (data){};

/**
 * 是否使用鼠标漫游，默认为true, 如果改为false, 则鼠标左键右键都不支持前进后退的操作功能，
 * 但左键可拖拽编辑图元，右键可改变视角方向，采用这样的方式一般会结合键盘w|s|a|d按键进行漫游操作
 * @return {Boolean}
 */
ht.graph3d.Graph3dView.prototype.isMouseRoamable = function (){};


/**
 * 是否显示坐标原点[0,0,0]轴线
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isOriginAxisVisible = function (){};

/**
 * 是否使用正交投影
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isOrtho = function (){};

/**
 * 是否允许平移操作
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isPannable = function (){};

/**
 * 是否允许框选操作
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isRectSelectable = function (){};

/**
 * 判断是否允许通过空格将拓扑复位
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isResettable = function (){};

/**
 * 是否可旋转
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isRotatable = function (){};

/**
 * 获取旋转步进
 * @return {Number} 
 */
ht.graph3d.Graph3dView.prototype.getRotateStep = function (){};


/**
 * 判断图元是否可编辑旋转
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isRotationEditable = function (data){};

/**
 * 判断图元是否可被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isSelectable = function (data){};

/**
 * 判断图元是否被选中
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isSelected = function (data){};

/**
 * 根据id判断图元是否被选中
 * @param {String|Number} id 图元id
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isSelectedById = function (id){};

/**
 * 当前拓扑是否共享选中模型
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isSelectionModelShared = function (){};

/**
 * 图元是否可编辑大小
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isSizeEditable = function (data){};

/**
 * 判断图元是否可见
 * @param {ht.Data} data 图元
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isVisible = function (data){};

/**
 * 是否可进退
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isWalkable = function (){};

/**
 * 是否可缩放
 * @return {Boolean} 
 */
ht.graph3d.Graph3dView.prototype.isZoomable = function (){};


/**
 * 无效拓扑，并调用延时刷新，{@link ht.graph3d.Graph3dView#invalidate invalidate}的缩写
 * @param {Number} delay 延迟刷新的间隔事件(单位:ms)
 * @see {@link ht.graph3d.Graph3dView#invalidate invalidate}
 */
ht.graph3d.Graph3dView.prototype.iv = function (delay){};

/**
 * 平移拓扑以确保该图元在可见区域内
 * @param {ht.Data} data 图元
 */
ht.graph3d.Graph3dView.prototype.makeVisible = function (data){};

/**
 * 增加交互事件监听器，{@link ht.graph3d.Graph3dView#addInteractorListener addInteractorListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph3d.Graph3dView#addInteractorListener addInteractorListener}
 * @example //示例：
 * graph3dView.mi(function(event) {
 * 		//event格式：
 * 		{
 * 			kind: 'clickData',//事件类型
 * 			data: data,//事件相关的数据元素
 * 			part: "part",//事件的区域,icon、label等
 * 			event: e//html原生事件
 * 		}
 * });
 */
ht.graph3d.Graph3dView.prototype.mi = function (listener, scope, ahead){};

/**
 * 移动选中模型中图元的位置
 * @param {Number} dx x轴方向移动值
 * @param {Number} dy y轴方向移动值
 * @param {Number} dz z轴方向移动值
 */
ht.graph3d.Graph3dView.prototype.moveSelection = function (dx, dy, dz){};

/**
 * 增加自身属性变化事件监听器，{@link ht.graph3d.Graph3dView#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.graph3d.Graph3dView#addPropertyChangeListener addPropertyChangeListener}
 */
ht.graph3d.Graph3dView.prototype.mp = function (listener, scope, ahead){};

/**
 * 自动布局动画结束后时回调，可重载做后续处理
 */
ht.graph3d.Graph3dView.prototype.onAutoLayoutEnded = function (){};

/**
 * 单击拓扑背景时回调，可重载做后续处理
 * @param {Event} event 事件对象
 */
ht.graph3d.Graph3dView.prototype.onBackgroundClicked = function (event){};

/**
 * 双击拓扑背景时回调，默认调用upSubGraph()进入上一层子网，可重载改变默认逻辑或做后续处理
 * @param {Event} event 事件对象
 */
ht.graph3d.Graph3dView.prototype.onBackgroundDoubleClicked = function (event){};

/**
 * 图元被点击时回调，可重载做后续处理
 * @param {ht.Data} data 被点击的图元
 * @param {Event} e 事件对象
 * @param {Object} part 区域
 */
ht.graph3d.Graph3dView.prototype.onDataClicked = function (data, e, part){};

/**
 * 图元被双击时回调，可重载做后续处理
 * @param {ht.Data} data 双击的图元
 * @param {Event} e 事件对象
 * @param {Object} part 区域
 */
ht.graph3d.Graph3dView.prototype.onDataDoubleClicked = function (data, e, part){};

/**
 * 连线图元被双击时回调，默认调用edge.toggle()，可重载改变默认逻辑或做后续处理
 * @param {ht.Edge} edge 连线
 * @param {Event} e 事件对象
 * @param {Object} part 区域
 */
ht.graph3d.Graph3dView.prototype.onEdgeDoubleClicked = function (edge, e, part){};

/**
 * 组类型图元被双击时回调，默认实现调用group.toggle()，可重载改变默认逻辑或做后续处理
 * @param {ht.Group} group Group对象
 * @param {Event} e 事件对象
 * @param {Object} part 区域
 */
ht.graph3d.Graph3dView.prototype.onGroupDoubleClicked = function (group, e, part){};

/**
 * 移动图元位置结束时回调，可重载做后续处理
 */
ht.graph3d.Graph3dView.prototype.onMoveEnded = function (){};

/**
 * 手抓图平移拓扑图结束时回调，可重载做后续处理
 */
ht.graph3d.Graph3dView.prototype.onPanEnded = function (){};

/**
 * 触屏进行双指缩放结束时回调，可重载做后续处理
 */
ht.graph3d.Graph3dView.prototype.onPinchEnded = function (){};

/**
 * 框选结束时回调，可重载做后续处理
 */
ht.graph3d.Graph3dView.prototype.onRectSelectEnded = function (){};

/**
 * 旋转结束时回调，可重载做后续处理
 */
ht.graph3d.Graph3dView.prototype.onRotateEnded = function (){};

/**
 * 选中变化时回调，默认实现会使得该选中图元出现在拓扑图上的可见范围
 * @param {Event} event 选中变化事件对象
 */
ht.graph3d.Graph3dView.prototype.onSelectionChanged = function (event){};

/**
 * 子网图元被双击时回调，默认实现进入子网
 * @param {ht.SubGraph} subGraph 子网对象
 * @param {Event} event 事件对象
 * @param {Object} part 区域
 */
ht.graph3d.Graph3dView.prototype.onSubGraphDoubleClicked = function (subGraph, event, part){};

/**
 * 进退操作结束时回调，可重载做后续处理
 * @param {ht.SubGraph} subGraph 子网对象
 * @param {Event} event 事件对象
 */
ht.graph3d.Graph3dView.prototype.onWalkEnded = function (){};

/**
 * 缩放动画结束时回调
 */
ht.graph3d.Graph3dView.prototype.onZoomEnded = function (){};

/**
 * 上下左右四个方向的平移，本质为eye和center同时做四个方向的相同偏移量， 
 * dx左右偏移参数，dy上下偏移参数，dx和dy一般代表屏幕移动像素，
 * Graph3dView自动会换算成合理的3D空间逻辑坐标偏移量。<br>
 * firstPersonMode参数为空时则默认采用Graph3dView#isFirstPersonMode()当前值， 
 * 如果为第一人称模式调用pan操作，该函数会考虑Graph3dView#getBoundaries()边界限制。
 * @param  {dx} dx x轴方向的偏移量
 * @param  {dy} dy y轴方向的偏移量
 * @param  {Boolean} [anim] 是否使用动画
 * @param  {Boolean} [firstPersonMode] 是否第一人称模式
 */
ht.graph3d.Graph3dView.prototype.pan = function (dx, dy, anim, firstPersonMode){};


/**
 * 重绘拓扑
 */
ht.graph3d.Graph3dView.prototype.redraw = function (){};

/**
 * 删除交互事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.graph3d.Graph3dView#umi umi}
 */
ht.graph3d.Graph3dView.prototype.removeInteractorListener = function (listener, scope){};

/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.graph3d.Graph3dView.prototype.removePropertyChangeListener = function (listener, scope){};

/**
 * 删除所有选中的图元
 */
ht.graph3d.Graph3dView.prototype.removeSelection = function (){};

/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.graph3d.Graph3dView.prototype.removeViewListener = function (listener, scope){};

/**
 * 复位函数，调用该函数将eye、center和up三个变量设置为ht.Default上对应的 graph3dViewCenter、graph3dViewEye和graph3dViewUp初始默认值。
 */
ht.graph3d.Graph3dView.prototype.reset = function (){};

/**
 * 上下左右四个方位旋转一定角度
 * @param {Number} leftRight 水平旋转弧度
 * @param {Number} upDown 垂直旋转弧度
 * @param {Boolean} anim 是否使用动画
 * @param {Boolean} firstPersonMode 是否第一人称模式，为空时则采用Graph3dView#isFirstPersonMode()，该参数将影响旋转移动的参照标准，为默认非第一人称模式时， 旋转是以center为中心进行旋转，也就是围绕中心物体旋转，当为第一人称时旋转以eye为中心进行旋转，也就是旋转眼睛朝向方向。
 */
ht.graph3d.Graph3dView.prototype.rotate = function (leftRight, upDown, anim, firstPersonMode){};

/**
 * 选中拓扑中所有图元
 */
ht.graph3d.Graph3dView.prototype.selectAll = function (){};


/**
 * 设置截头锥体的宽高比，该参数默认自动根据屏幕的宽高比决定，一般不需要设置。
 * @param {Number} v 
 */
ht.graph3d.Graph3dView.prototype.setAspect = function (v){};

/**
 * 设置当选中图元时，是否自动平移拓扑以确保该图元出现在可见区域内
 * @param {Boolean} v
 */
ht.graph3d.Graph3dView.prototype.setAutoMakeVisible = function (v){};

/**
 * 设置x轴线颜色
 * @param {color} color
 */
ht.graph3d.Graph3dView.prototype.setAxisXColor = function (color){};

/**
 * 设置y轴线颜色
 * @param {color} color
 */
ht.graph3d.Graph3dView.prototype.setAxisYColor = function (){};

/**
 * 设置z轴线颜色
 * @param {color} color
 */
ht.graph3d.Graph3dView.prototype.setAxisZColor = function (){};


/**
 * 设置碰撞边界
 * @param {Array} boundaries 边界数组
 * @example //示例：
 * g3d.setBoundaries([
 *   [
 *       p0.x, p0.y,
 *       p1.x, p1.y,
 *       p2.x, p2.y,
 *       p3.x, p3.y            
 *   ],
 *   [
 *       p4.x, p4.y,
 *       p5.x, p5.y,
 *       p6.x, p6.y            
 *   ]
 * ]);    
 */
ht.graph3d.Graph3dView.prototype.setBoundaries = function (boundaries){};

/**
 * 设置中心点
 * @param {Array} center 中心点坐标，格式：[x, y, z]
 */
ht.graph3d.Graph3dView.prototype.setCenter = function (center){};

/**
 * 设置是否显示中心点轴线
 * @param {Boolean} v
 */
ht.graph3d.Graph3dView.prototype.setCenterAxisVisible = function (v){};

/**
 * 设置当前子网
 * @param {ht.SubGraph} subGraph 子网对象
 */
ht.graph3d.Graph3dView.prototype.setCurrentSubGraph = function (subGraph){};

/**
 * 设置绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.graph3d.Graph3dView.prototype.setDataModel = function (dataModel){};

/**
 * 设置组件是否处于不可用状态，处于不可用状态时不能进行任何操作并且会遮挡一层蒙板
 * @param {Boolean} value 是否禁用组件
 * @param {String} [iconUrl] 蒙板上显示的icon的路径
 */
ht.graph3d.Graph3dView.prototype.setDisabled = function (value, iconUrl){};

/**
 * 设置拓扑中的图元是否可编辑
 * @param {Boolean} editable
 */
ht.graph3d.Graph3dView.prototype.setEditable = function (editable){};

/**
 * 设置编辑过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph3d.Graph3dView.prototype.setEditableFunc = function (func){};

/**
 * 设置大小编辑控制条的颜色
 * @param {color} color 
 */
ht.graph3d.Graph3dView.prototype.setEditSizeColor = function (color){};

/**
 * 设置眼睛（或Camera）所在位置，默认值为[0, 300, 1000]
 * @param {Array} eye 眼睛位置坐标，格式[x, y, z]
 */
ht.graph3d.Graph3dView.prototype.setEye = function (eye){};

/**
 * 设置远端截面位置，默认值为10000
 * @param {Number} far 
 */
ht.graph3d.Graph3dView.prototype.setFar = function (far){};

/**
 * 设置第一人称模式
 * @param {Boolean} mode 
 */
ht.graph3d.Graph3dView.prototype.setFirstPersonMode = function (mode){};

/**
 * 设置垂直方向的视觉张角弧度，默认值为Math.PI/4
 * @param {Number} fovy
 */
ht.graph3d.Graph3dView.prototype.setFovy = function (fovy){};

/**
 * 设置网格线颜色
 * @param {color} color
 */
ht.graph3d.Graph3dView.prototype.setGridColor = function (color){};

/**
 * 设置网格线间距
 * @param {Number} gap 
 */
ht.graph3d.Graph3dView.prototype.setGridGap = function (gap){};

/**
 * 设置网格行列数，默认为40
 * @param {Number} size 
 */
ht.graph3d.Graph3dView.prototype.setGridSize = function (size){};

/**
 * 设置是否显示网格
 * @param {Boolean} v 
 */
ht.graph3d.Graph3dView.prototype.setGridVisible = function (v){};

/**
 * 设置布局高度
 * @param {Number} height 高度值
 */
ht.graph3d.Graph3dView.prototype.setHeight = function (height){};

/**
 * 设置交互器
 * @param {ht.List} interactors 交互器对象集合
 */
ht.graph3d.Graph3dView.prototype.setInteractors = function (interactors){};

/**
 * 设置是否使用鼠标漫游，默认为true, 如果改为false, 则鼠标左键右键都不支持前进后退的操作功能，
 * 但左键可拖拽编辑图元，右键可改变视角方向，采用这样的方式一般会结合键盘w|s|a|d按键进行漫游操作
 * @param {Boolean} v 
 */
ht.graph3d.Graph3dView.prototype.setMouseRoamable = function (v){};

/**
 * 设置移动过滤器函数
 * @param {Function} func 过滤器函数
 */
ht.graph3d.Graph3dView.prototype.setMovableFunc = function (func){};

/**
 * 设置移动漫游步进
 * @param {Number} v
 */
ht.graph3d.Graph3dView.prototype.setMoveStep = function (v){};

/**
 * 设置近端截面位置，默认值为10
 * @param {Number} v
 */
ht.graph3d.Graph3dView.prototype.setNear = function (v){};

/**
 * 设置是否显示坐标原点[0,0,0]轴线
 * @param {Boolean} v 
 */
ht.graph3d.Graph3dView.prototype.setOriginAxisVisible = function (v){};

/**
 * 设置是否使用正交投影
 * @param {Boolean} v 
 */
ht.graph3d.Graph3dView.prototype.setOrtho = function (v){};

/**
 * 设置正交投影宽度，默认为2000
 * @param {Number} width
 */
ht.graph3d.Graph3dView.prototype.setOrthoWidth = function (width){};

/**
 * 设置是否允许平移操作
 * @param {Boolean} v 是否可平移
 */
ht.graph3d.Graph3dView.prototype.setPannable = function (v){};

/**
 * 设置拓扑上是否允许框选操作
 * @param {Boolean} v
 */
ht.graph3d.Graph3dView.prototype.setRectSelectable = function (v){};

/**
 * 设置框选选择框的背景色
 * @param {color} color 颜色值
 */
ht.graph3d.Graph3dView.prototype.setRectSelectBackground = function (color){};

/**
 * 设置是否允许通过空格将拓扑复位
 * @param {Boolean} v
 */
ht.graph3d.Graph3dView.prototype.setResettable = function (v){};

/**
 * 设置是否可旋转
 * @param {Boolean} v 
 */
ht.graph3d.Graph3dView.prototype.setRotatable = function (v){};

/**
 * 设置旋转步进
 * @param {Number} v 
 */
ht.graph3d.Graph3dView.prototype.setRotateStep = function (v){};

/**
 * 设置图元是否可编辑旋转过滤器
 * @param {Function} func
 */
ht.graph3d.Graph3dView.prototype.setRotationEditableFunc = function (func){};

/**
 * 设置拓扑是否共享选中模型
 * @param {Boolean} v
 */
ht.graph3d.Graph3dView.prototype.setSelectionModelShared = function (v){};

/**
 * 设置大小编辑过滤器
 * @param {Function} func
 */
ht.graph3d.Graph3dView.prototype.setSizeEditableFunc = function (func){};

/**
 * 设置摄像头正上方向，该参数一般较少改动，默认值为[0, 1, 0]
 * @param {Array} up 格式：[x, y, z]
 */
ht.graph3d.Graph3dView.prototype.setUp = function (up){};

/**
 * 设置可见过滤器
 * @param {Function} func 过滤器函数
 */
ht.graph3d.Graph3dView.prototype.setVisibleFunc = function (func){};

/**
 * 设置是否可进退
 * @param {Boolean} walkable
 */
ht.graph3d.Graph3dView.prototype.setWalkable = function (walkable){};

/**
 * 设置布局宽度
 * @param {Number} width
 */
ht.graph3d.Graph3dView.prototype.setWidth = function (width){};

/**
 * 缩放操作，默认操作模式意味着eye离center的远近变化，如果在Graph3dView#isOrtho()为true的正交投影情况下，缩放意味着改变Graph3dView#setOrthoWidth(width)的可视宽度范围。
 * @param {Number} increment 步进的比例，调用zoomIn(anim)和zoomOut(anim)，等同于调用了setZoom(1.3, anim)和setZoom(1/1.3, anim)。
 * @param {Boolean} anim 是否使用动画
 */
ht.graph3d.Graph3dView.prototype.setZoom = function (increment, anim){};

/**
 * 设置是否可缩放
 * @param {Boolean} v
 */
ht.graph3d.Graph3dView.prototype.setZoomable = function (v){};

/**
 * 获取选中模型，{@link ht.graph3d.Graph3dView#getSelectionModel getSelectionModel}的缩写
 * @see {@link ht.graph3d.Graph3dView#getSelectionModel getSelectionModel}
 * @return {ht.SelectionModel}
 */
ht.graph3d.Graph3dView.prototype.sm = function (){};

/**
 * 将拓扑导出为canvas
 * @param {color} background 背景色 
 * @return {HTMLCanvasElement}
 */
ht.graph3d.Graph3dView.prototype.toCanvas = function (background){};

/**
 * 将拓扑导出为base64格式字符串
 * @param {color} background 背景色 
 * @return {String}
 */
ht.graph3d.Graph3dView.prototype.toDataURL = function (background){};

/**
 * 删除交互事件监听器，{@link ht.graph3d.Graph3dView#removeInteractorListener removeInteractorListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.graph3d.Graph3dView#removeInteractorListener removeInteractorListener}
 */
ht.graph3d.Graph3dView.prototype.umi = function (listener, scope){};

/**
 * 删除自身属性变化事件监听器，{@link ht.graph3d.Graph3dView#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.graph3d.Graph3dView#removePropertyChangeListener removePropertyChangeListener}
 */
ht.graph3d.Graph3dView.prototype.ump = function (listener, scope){};

/**
 * 立刻刷新拓扑
 */
ht.graph3d.Graph3dView.prototype.validate = function (){};

/**
 * 同时改变eye和center的位置，也就是eye和center在两点建立的矢量方向上同时移动相同的偏移量。
 * 如果为第一人称模式调用walk操作，该函数会考虑Graph3dView#getBoundaries()边界限制
 * @param {Number} step 偏移的矢量长度值
 * @param {Boolean} anim 是否使用动画
 * @param {Boolean} firstPersonMode  是否是第一人称模式，为空时则采用Graph3dView#isFirstPersonMode()
 */
ht.graph3d.Graph3dView.prototype.walk = function (step, anim, firstPersonMode){};

/**
 * 相当于调用setZoom(1.3, anim)
 * @param {Boolean} [anim] 是否使用动画
 * @see {@link ht.graph3d.Graph3dView#setZoom setZoom}
 */
ht.graph3d.Graph3dView.prototype.zoomIn = function (anim){};

/**
 * 相当于调用setZoom(1/1.3, anim)
 * @param {Boolean} [anim] 是否使用动画
 * @see {@link ht.graph3d.Graph3dView#setZoom setZoom}
 */
ht.graph3d.Graph3dView.prototype.zoomOut = function (anim){};









/**
 * 组件面板或调色板，类似于Toolbar，允许用户快速访问按钮或命令
 * @constructor
 */
ht.widget.Palette = function() {};

/**
 * 增加自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.Palette#mp mp}
 */
ht.widget.Palette.prototype.addPropertyChangeListener = function (listener, scope, ahead){};

/**
 * 监听视图事件，如布局、刷新等
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 */
ht.widget.Palette.prototype.addViewListener = function (listener, scope, ahead){};

/**
 * 获取按钮元素的宽度，默认为70
 * @return {Number}
 */
ht.widget.Palette.prototype.getItemImageWidth = function (){};

/**
 * 设置按钮元素的宽度，默认为70
 * @param {Number} v
 */
ht.widget.Palette.prototype.setItemImageWidth = function (v){};

/**
 * 获取按钮元素的高度，默认为50
 * @return {Number}
 */
ht.widget.Palette.prototype.getItemImageHeight = function (){};

/**
 * 设置按钮元素的高度，默认为50
 * @param {Number} v
 */
ht.widget.Palette.prototype.setItemImageHeight = function (v){};

/**
 * 获取按钮元素图片与边框的距离，默认为4
 * @return {Number}
 */
ht.widget.Palette.prototype.getItemImagePadding = function (){};

/**
 * 设置按钮元素图片与边框的距离，默认为4
 * @param {Number} v
 */
ht.widget.Palette.prototype.setItemImagePadding = function (v){};


/**
 * 获取按钮元素之间的间隔，默认为10
 * @return {Number}
 */
ht.widget.Palette.prototype.getItemMargin = function (){};

/**
 * 设置按钮元素之间的间隔，默认为10
 * @param {Number} v
 */
ht.widget.Palette.prototype.setItemMargin = function (v){};

/**
 * 获取按钮元素的布局方式
 * <ul>
 * <li>largeicons:大图标模式</li>
 * <li>smallicons:小图标模式</li>
 * <li>iconsonly:仅图标模式</li>
 * </ul>
 * @return {String}
 */
ht.widget.Palette.prototype.getLayout = function (){};

/**
 * 设置按钮元素的布局方式
 * @param {String} layout
 * <ul>
 * <li>largeicons:大图标模式</li>
 * <li>smallicons:小图标模式</li>
 * <li>iconsonly:仅图标模式</li>
 * </ul>
 */
ht.widget.Palette.prototype.setLayout = function (layout){};


/**
 * 获取或设置数据模型，没有参数时相当于{@link ht.widget.Palette#getDataModel getDataModel}，有参数时相当于{@link ht.widget.Palette#setDataModel setDataModel}
 * @param {ht.DataModel} [dataModel] 数据模型
 * @return {ht.DataModel} dataModel
 */
ht.widget.Palette.prototype.dm = function (dataModel){};

/**
 * 获取绑定的数据模型
 * @return {ht.DataModel} 数据模型
 */
ht.widget.Palette.prototype.getDataModel = function (){};


/**
 * 设置绑定的数据模型
 * @param {ht.DataModel} dataModel 数据模型
 */
ht.widget.Palette.prototype.setDataModel = function (dataModel){};


/**
 * 获取组件的根层div
 * @return {HTMLDivElement}
 */
ht.widget.Palette.prototype.getView = function (){};

/**
 * 重绘组件
 */
ht.widget.Palette.prototype.redraw = function (){};


/**
 * 删除自身属性变化事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.Palette.prototype.removePropertyChangeListener = function (listener, scope){};


/**
 * 删除视图事件监听器
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 */
ht.widget.Palette.prototype.removeViewListener = function (listener, scope){};

/**
 * 增加自身属性变化事件监听器，{@link ht.widget.Palette#addPropertyChangeListener addPropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @param {Boolean} [ahead] 是否将当前监听器插入到监听器列表开头
 * @see {@link ht.widget.Palette#addPropertyChangeListener addPropertyChangeListener}
 */
ht.widget.Palette.prototype.mp = function (listener, scope, ahead){};


/**
 * 删除自身属性变化事件监听器，{@link ht.widget.Palette#removePropertyChangeListener removePropertyChangeListener}的缩写
 * @param {Function} listener 监听器函数
 * @param {Object} [scope] 监听器函数域
 * @see {@link ht.widget.Palette#removePropertyChangeListener removePropertyChangeListener}
 */
ht.widget.Palette.prototype.ump = function (listener, scope){};





