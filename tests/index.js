'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _chai=require('chai');var _object=require('ancient-graph/lib/adapters/object.js');var _=require('../');var _ancientGraphRemoved=require('ancient-graph-removed');var _testSpreading=require('./testSpreading.js');var _testSpreading2=_interopRequireDefault(_testSpreading);var _testQueue=require('./testQueue.js');var _testQueue2=_interopRequireDefault(_testQueue);var _testSpreader=require('./testSpreader.js');var _testSpreader2=_interopRequireDefault(_testSpreader);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}require('source-map-support').install();describe('AncientSouls/GraphSpreading',function(){function generateGraphSpreading(){// Unique id between graphs
var NamedGraph=function(_Graph){_inherits(NamedGraph,_Graph);function NamedGraph(collection,fields,config){_classCallCheck(this,NamedGraph);var _this=_possibleConstructorReturn(this,(NamedGraph.__proto__||Object.getPrototypeOf(NamedGraph)).apply(this,arguments));if(config.name)_this.name=config.name;return _this}_createClass(NamedGraph,[{key:'_idGenerator',value:function _idGenerator(index,link){return this.name+'/'+index}}]);return NamedGraph}(_object.Graph);// Removed (Existed and NonExisted)
var ExistedGraph=(0,_ancientGraphRemoved.factoryExistedGraph)(NamedGraph);var NonExistedGraph=(0,_ancientGraphRemoved.factoryNonExistedGraph)(NamedGraph);// PathGraph
var ExistedPathGraph=(0,_.factoryLaunchedGraph)((0,_.factoryPathGraph)(ExistedGraph));var NonExistedPathGraph=NonExistedGraph;// SpreadGraph
var ExistedSpreadGraph=function(){var ExistedSpreadGraph=(0,_.factorySpreadGraph)(ExistedGraph);var CustomExistedSpreadGraph=function(_ExistedSpreadGraph){_inherits(CustomExistedSpreadGraph,_ExistedSpreadGraph);function CustomExistedSpreadGraph(){_classCallCheck(this,CustomExistedSpreadGraph);return _possibleConstructorReturn(this,(CustomExistedSpreadGraph.__proto__||Object.getPrototypeOf(CustomExistedSpreadGraph)).apply(this,arguments))}_createClass(CustomExistedSpreadGraph,[{key:'_spreadingHandler',value:function _spreadingHandler(prevSpreadLink,pathGraph,pathLink,newSpreadLink,context,callback){var _this3=this;if(!pathLink){callback(newSpreadLink)}else{pathGraph.get(pathLink.id,undefined,function(error,pathLink){if(!pathLink)callback();else _this3.get({source:newSpreadLink.source,target:newSpreadLink.target,prev:newSpreadLink.prev,path:newSpreadLink.path,root:newSpreadLink.root},undefined,function(error,spreadLink){if(spreadLink)callback();else _this3.get(prevSpreadLink.id,undefined,function(error,prevSpreadLink){callback(prevSpreadLink?newSpreadLink:undefined)})})})}}}]);return CustomExistedSpreadGraph}(ExistedSpreadGraph);return CustomExistedSpreadGraph}();var NonExistedSpreadGraph=(0,_.factorySpreadGraph)(NonExistedGraph);// Graphs instances
// pathGraph
var pathGraph=new ExistedPathGraph([],{id:'id',source:'source',target:'target',removed:'removed',launched:'launched',process:'process'},{name:'path',fromFields:['source'],toFields:['target']});pathGraph.removed=new NonExistedPathGraph(pathGraph.collection,pathGraph.fields,pathGraph.config);// spreadGraph
var spreadGraph=new ExistedSpreadGraph([],{id:'id',source:'source',target:'target',removed:'removed',launched:'launched',process:'process',prev:'prev',path:'path',root:'root'},{name:'spread',constantField:'source',variableField:'target'});spreadGraph.removed=new NonExistedSpreadGraph(spreadGraph.collection,spreadGraph.fields,spreadGraph.config);// GraphSpreading instance
var graphSpreading=new _.GraphSpreading(spreadGraph);graphSpreading.addPathGraph(pathGraph);// QueueSpreading id parser
var QueueSpreading=function(_AncientQueueSpreadin){_inherits(QueueSpreading,_AncientQueueSpreadin);function QueueSpreading(){_classCallCheck(this,QueueSpreading);return _possibleConstructorReturn(this,(QueueSpreading.__proto__||Object.getPrototypeOf(QueueSpreading)).apply(this,arguments))}_createClass(QueueSpreading,[{key:'_getGraph',value:function _getGraph(id){var splited=id.split('/');if(splited[0]=='spread')return spreadGraph;else if(splited[0]=='path')return pathGraph;else throw new Error('Graph is not founded')}}]);return QueueSpreading}(_.QueueSpreading);var queueSpreading=new QueueSpreading(graphSpreading);return{pathGraph:pathGraph,spreadGraph:spreadGraph,graphSpreading:graphSpreading,queueSpreading:queueSpreading}};describe('GraphSpreading PathGraph SpreadGraph',function(){(0,_testSpreading2.default)(generateGraphSpreading,'abcdefghijklmnopqrstuvwxyz'.split(''))});describe('QueueSpreading PathGraph SpreadGraph',function(){(0,_testQueue2.default)(generateGraphSpreading,'abcdefghijklmnopqrstuvwxyz'.split(''))});describe('SpreaderGraph PathGraph SpreadGraph',function(){(0,_testSpreader2.default)(function(){// Unique id between graphs
var NamedGraph=function(_Graph2){_inherits(NamedGraph,_Graph2);function NamedGraph(collection,fields,config){_classCallCheck(this,NamedGraph);var _this5=_possibleConstructorReturn(this,(NamedGraph.__proto__||Object.getPrototypeOf(NamedGraph)).apply(this,arguments));if(config.name)_this5.name=config.name;return _this5}_createClass(NamedGraph,[{key:'_idGenerator',value:function _idGenerator(index,link){return this.name+'/'+index}}]);return NamedGraph}(_object.Graph);// Removed (Existed and NonExisted)
var ExistedGraph=(0,_ancientGraphRemoved.factoryExistedGraph)(NamedGraph);var NonExistedGraph=(0,_ancientGraphRemoved.factoryNonExistedGraph)(NamedGraph);// PathGraph
var ExistedPathGraph=(0,_.factoryLaunchedGraph)((0,_.factoryPathGraph)(ExistedGraph));var NonExistedPathGraph=NonExistedGraph;// SpreadGraph
var ExistedSpreadGraph=function(){var ExistedSpreadGraph=(0,_.factorySpreadGraph)(ExistedGraph);var CustomExistedSpreadGraph=function(_ExistedSpreadGraph2){_inherits(CustomExistedSpreadGraph,_ExistedSpreadGraph2);function CustomExistedSpreadGraph(){_classCallCheck(this,CustomExistedSpreadGraph);return _possibleConstructorReturn(this,(CustomExistedSpreadGraph.__proto__||Object.getPrototypeOf(CustomExistedSpreadGraph)).apply(this,arguments))}_createClass(CustomExistedSpreadGraph,[{key:'_spreadingHandler',value:function _spreadingHandler(prevSpreadLink,pathGraph,pathLink,newSpreadLink,context,callback){// Spreader support for this SpreadGraph
if(prevSpreadLink&&prevSpreadLink.spreader){newSpreadLink.spreader=prevSpreadLink.spreader}this.fetch({source:newSpreadLink.source,target:newSpreadLink.target,spreader:newSpreadLink.spreader},undefined,function(error,spreadLinks){callback(!spreadLinks.length?newSpreadLink:undefined)})}}]);return CustomExistedSpreadGraph}(ExistedSpreadGraph);return CustomExistedSpreadGraph}();var NonExistedSpreadGraph=(0,_.factorySpreadGraph)(NonExistedGraph);// SpreaderGraph
var ExistedSpreaderGraph=(0,_.factoryLaunchedGraph)((0,_.factorySpreaderGraph)(ExistedGraph));var NonExistedSpreaderGraph=NonExistedGraph;// Graphs instances
// pathGraph
var pathGraph=new ExistedPathGraph([],{id:'id',source:'source',target:'target',removed:'removed',launched:'launched',process:'process'},{name:'path',fromFields:['source'],toFields:['target']});pathGraph.removed=new NonExistedPathGraph(pathGraph.collection,pathGraph.fields,pathGraph.config);// spreadGraph
var spreadGraph=new ExistedSpreadGraph([],{id:'id',source:'source',target:'target',removed:'removed',launched:'launched',process:'process',spreader:'spreader',prev:'prev',path:'path',root:'root'},{name:'spread',constantField:'source',variableField:'target'});spreadGraph.removed=new NonExistedSpreadGraph(spreadGraph.collection,spreadGraph.fields,spreadGraph.config);// spreaderGraph
var spreaderGraph=new ExistedSpreaderGraph([],{id:'id',source:'source',target:'target',removed:'removed',launched:'launched',process:'process'},{name:'spreader',constantField:'source',variableField:'target'});spreaderGraph.removed=new NonExistedSpreaderGraph(spreaderGraph.collection,spreaderGraph.fields,spreaderGraph.config);// GraphSpreading instance
var graphSpreading=new _.GraphSpreading(spreadGraph);graphSpreading.addPathGraph(pathGraph);// QueueSpreading id parser
var QueueSpreading=function(_AncientQueueSpreadin2){_inherits(QueueSpreading,_AncientQueueSpreadin2);function QueueSpreading(){_classCallCheck(this,QueueSpreading);return _possibleConstructorReturn(this,(QueueSpreading.__proto__||Object.getPrototypeOf(QueueSpreading)).apply(this,arguments))}_createClass(QueueSpreading,[{key:'_getGraph',value:function _getGraph(id){var splited=id.split('/');if(splited[0]=='spread')return spreadGraph;else if(splited[0]=='path')return pathGraph;else if(splited[0]=='spreader')return spreaderGraph;else throw new Error('Graph is not founded')}}]);return QueueSpreading}(_.QueueSpreading);var queueSpreading=new QueueSpreading(graphSpreading);return{pathGraph:pathGraph,spreadGraph:spreadGraph,spreaderGraph:spreaderGraph,graphSpreading:graphSpreading,queueSpreading:queueSpreading}},'abcdefghijklmnopqrstuvwxyz'.split(''))})});
//# sourceMappingURL=index.js.map