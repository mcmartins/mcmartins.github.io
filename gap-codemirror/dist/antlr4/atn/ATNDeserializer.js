/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function initArray(length,value){var tmp=[];return tmp[length-1]=value,tmp.map(function(i){return value})}function ATNDeserializer(options){return void 0!==options&&null!==options||(options=ATNDeserializationOptions.defaultOptions),this.deserializationOptions=options,this.stateFactories=null,this.actionFactories=null,this}function createByteToHex(){for(var bth=[],i=0;i<256;i++)bth[i]=(i+256).toString(16).substr(1).toUpperCase();return bth}var Token=require("./../Token").Token,ATN=require("./ATN").ATN,ATNType=require("./ATNType").ATNType,ATNStates=require("./ATNState"),ATNState=ATNStates.ATNState,BasicState=ATNStates.BasicState,DecisionState=ATNStates.DecisionState,BlockStartState=ATNStates.BlockStartState,BlockEndState=ATNStates.BlockEndState,LoopEndState=ATNStates.LoopEndState,RuleStartState=ATNStates.RuleStartState,RuleStopState=ATNStates.RuleStopState,TokensStartState=ATNStates.TokensStartState,PlusLoopbackState=ATNStates.PlusLoopbackState,StarLoopbackState=ATNStates.StarLoopbackState,StarLoopEntryState=ATNStates.StarLoopEntryState,PlusBlockStartState=ATNStates.PlusBlockStartState,StarBlockStartState=ATNStates.StarBlockStartState,BasicBlockStartState=ATNStates.BasicBlockStartState,Transitions=require("./Transition"),Transition=Transitions.Transition,AtomTransition=Transitions.AtomTransition,SetTransition=Transitions.SetTransition,NotSetTransition=Transitions.NotSetTransition,RuleTransition=Transitions.RuleTransition,RangeTransition=Transitions.RangeTransition,ActionTransition=Transitions.ActionTransition,EpsilonTransition=Transitions.EpsilonTransition,WildcardTransition=Transitions.WildcardTransition,PredicateTransition=Transitions.PredicateTransition,PrecedencePredicateTransition=Transitions.PrecedencePredicateTransition,IntervalSet=require("./../IntervalSet").IntervalSet,Interval=require("./../IntervalSet").Interval,ATNDeserializationOptions=require("./ATNDeserializationOptions").ATNDeserializationOptions,LexerActions=require("./LexerAction"),LexerActionType=LexerActions.LexerActionType,LexerSkipAction=LexerActions.LexerSkipAction,LexerChannelAction=LexerActions.LexerChannelAction,LexerCustomAction=LexerActions.LexerCustomAction,LexerMoreAction=LexerActions.LexerMoreAction,LexerTypeAction=LexerActions.LexerTypeAction,LexerPushModeAction=LexerActions.LexerPushModeAction,LexerPopModeAction=LexerActions.LexerPopModeAction,LexerModeAction=LexerActions.LexerModeAction,BASE_SERIALIZED_UUID="AADB8D7E-AEEF-4415-AD2B-8204D6CF042E",SUPPORTED_UUIDS=[BASE_SERIALIZED_UUID],SERIALIZED_VERSION=3,SERIALIZED_UUID=BASE_SERIALIZED_UUID;ATNDeserializer.prototype.isFeatureSupported=function(feature,actualUuid){var idx1=SUPPORTED_UUIDS.index(feature);if(idx1<0)return!1;var idx2=SUPPORTED_UUIDS.index(actualUuid);return idx2>=idx1},ATNDeserializer.prototype.deserialize=function(data){this.reset(data),this.checkVersion(),this.checkUUID();var atn=this.readATN();this.readStates(atn),this.readRules(atn),this.readModes(atn);var sets=this.readSets(atn);return this.readEdges(atn,sets),this.readDecisions(atn),this.readLexerActions(atn),this.markPrecedenceDecisions(atn),this.verifyATN(atn),this.deserializationOptions.generateRuleBypassTransitions&&atn.grammarType===ATNType.PARSER&&(this.generateRuleBypassTransitions(atn),this.verifyATN(atn)),atn},ATNDeserializer.prototype.reset=function(data){var adjust=function(c){var v=c.charCodeAt(0);return v>1?v-2:-1},temp=data.split("").map(adjust);temp[0]=data.charCodeAt(0),this.data=temp,this.pos=0},ATNDeserializer.prototype.checkVersion=function(){var version=this.readInt();if(version!==SERIALIZED_VERSION)throw"Could not deserialize ATN with version "+version+" (expected "+SERIALIZED_VERSION+")."},ATNDeserializer.prototype.checkUUID=function(){var uuid=this.readUUID();if(SUPPORTED_UUIDS.indexOf(uuid)<0)throw SERIALIZED_UUID;this.uuid=uuid},ATNDeserializer.prototype.readATN=function(){var grammarType=this.readInt(),maxTokenType=this.readInt();return new ATN(grammarType,maxTokenType)},ATNDeserializer.prototype.readStates=function(atn){for(var j,pair,stateNumber,loopBackStateNumbers=[],endStateNumbers=[],nstates=this.readInt(),i=0;i<nstates;i++){var stype=this.readInt();if(stype!==ATNState.INVALID_TYPE){var ruleIndex=this.readInt();65535===ruleIndex&&(ruleIndex=-1);var s=this.stateFactory(stype,ruleIndex);if(stype===ATNState.LOOP_END){var loopBackStateNumber=this.readInt();loopBackStateNumbers.push([s,loopBackStateNumber])}else if(s instanceof BlockStartState){var endStateNumber=this.readInt();endStateNumbers.push([s,endStateNumber])}atn.addState(s)}else atn.addState(null)}for(j=0;j<loopBackStateNumbers.length;j++)pair=loopBackStateNumbers[j],pair[0].loopBackState=atn.states[pair[1]];for(j=0;j<endStateNumbers.length;j++)pair=endStateNumbers[j],pair[0].endState=atn.states[pair[1]];var numNonGreedyStates=this.readInt();for(j=0;j<numNonGreedyStates;j++)stateNumber=this.readInt(),atn.states[stateNumber].nonGreedy=!0;var numPrecedenceStates=this.readInt();for(j=0;j<numPrecedenceStates;j++)stateNumber=this.readInt(),atn.states[stateNumber].isPrecedenceRule=!0},ATNDeserializer.prototype.readRules=function(atn){var i,nrules=this.readInt();for(atn.grammarType===ATNType.LEXER&&(atn.ruleToTokenType=initArray(nrules,0)),atn.ruleToStartState=initArray(nrules,0),i=0;i<nrules;i++){var s=this.readInt(),startState=atn.states[s];if(atn.ruleToStartState[i]=startState,atn.grammarType===ATNType.LEXER){var tokenType=this.readInt();65535===tokenType&&(tokenType=Token.EOF),atn.ruleToTokenType[i]=tokenType}}for(atn.ruleToStopState=initArray(nrules,0),i=0;i<atn.states.length;i++){var state=atn.states[i];state instanceof RuleStopState&&(atn.ruleToStopState[state.ruleIndex]=state,atn.ruleToStartState[state.ruleIndex].stopState=state)}},ATNDeserializer.prototype.readModes=function(atn){for(var nmodes=this.readInt(),i=0;i<nmodes;i++){var s=this.readInt();atn.modeToStartState.push(atn.states[s])}},ATNDeserializer.prototype.readSets=function(atn){for(var sets=[],m=this.readInt(),i=0;i<m;i++){var iset=new IntervalSet;sets.push(iset);var n=this.readInt(),containsEof=this.readInt();0!==containsEof&&iset.addOne(-1);for(var j=0;j<n;j++){var i1=this.readInt(),i2=this.readInt();iset.addRange(i1,i2)}}return sets},ATNDeserializer.prototype.readEdges=function(atn,sets){var i,j,state,trans,target,nedges=this.readInt();for(i=0;i<nedges;i++){var src=this.readInt(),trg=this.readInt(),ttype=this.readInt(),arg1=this.readInt(),arg2=this.readInt(),arg3=this.readInt();trans=this.edgeFactory(atn,ttype,src,trg,arg1,arg2,arg3,sets);var srcState=atn.states[src];srcState.addTransition(trans)}for(i=0;i<atn.states.length;i++)for(state=atn.states[i],j=0;j<state.transitions.length;j++){var t=state.transitions[j];if(t instanceof RuleTransition){var outermostPrecedenceReturn=-1;atn.ruleToStartState[t.target.ruleIndex].isPrecedenceRule&&0===t.precedence&&(outermostPrecedenceReturn=t.target.ruleIndex),trans=new EpsilonTransition(t.followState,outermostPrecedenceReturn),atn.ruleToStopState[t.target.ruleIndex].addTransition(trans)}}for(i=0;i<atn.states.length;i++){if(state=atn.states[i],state instanceof BlockStartState){if(null===state.endState)throw"IllegalState";if(null!==state.endState.startState)throw"IllegalState";state.endState.startState=state}if(state instanceof PlusLoopbackState)for(j=0;j<state.transitions.length;j++)target=state.transitions[j].target,target instanceof PlusBlockStartState&&(target.loopBackState=state);else if(state instanceof StarLoopbackState)for(j=0;j<state.transitions.length;j++)target=state.transitions[j].target,target instanceof StarLoopEntryState&&(target.loopBackState=state)}},ATNDeserializer.prototype.readDecisions=function(atn){for(var ndecisions=this.readInt(),i=0;i<ndecisions;i++){var s=this.readInt(),decState=atn.states[s];atn.decisionToState.push(decState),decState.decision=i}},ATNDeserializer.prototype.readLexerActions=function(atn){if(atn.grammarType===ATNType.LEXER){var count=this.readInt();atn.lexerActions=initArray(count,null);for(var i=0;i<count;i++){var actionType=this.readInt(),data1=this.readInt();65535===data1&&(data1=-1);var data2=this.readInt();65535===data2&&(data2=-1);var lexerAction=this.lexerActionFactory(actionType,data1,data2);atn.lexerActions[i]=lexerAction}}},ATNDeserializer.prototype.generateRuleBypassTransitions=function(atn){var i,count=atn.ruleToStartState.length;for(i=0;i<count;i++)atn.ruleToTokenType[i]=atn.maxTokenType+i+1;for(i=0;i<count;i++)this.generateRuleBypassTransition(atn,i)},ATNDeserializer.prototype.generateRuleBypassTransition=function(atn,idx){var i,state,bypassStart=new BasicBlockStartState;bypassStart.ruleIndex=idx,atn.addState(bypassStart);var bypassStop=new BlockEndState;bypassStop.ruleIndex=idx,atn.addState(bypassStop),bypassStart.endState=bypassStop,atn.defineDecisionState(bypassStart),bypassStop.startState=bypassStart;var excludeTransition=null,endState=null;if(atn.ruleToStartState[idx].isPrecedenceRule){for(endState=null,i=0;i<atn.states.length;i++)if(state=atn.states[i],this.stateIsEndStateFor(state,idx)){endState=state,excludeTransition=state.loopBackState.transitions[0];break}if(null===excludeTransition)throw"Couldn't identify final state of the precedence rule prefix section."}else endState=atn.ruleToStopState[idx];for(i=0;i<atn.states.length;i++){state=atn.states[i];for(var j=0;j<state.transitions.length;j++){var transition=state.transitions[j];transition!==excludeTransition&&transition.target===endState&&(transition.target=bypassStop)}}for(var ruleToStartState=atn.ruleToStartState[idx],count=ruleToStartState.transitions.length;count>0;)bypassStart.addTransition(ruleToStartState.transitions[count-1]),ruleToStartState.transitions=ruleToStartState.transitions.slice(-1);atn.ruleToStartState[idx].addTransition(new EpsilonTransition(bypassStart)),bypassStop.addTransition(new EpsilonTransition(endState));var matchState=new BasicState;atn.addState(matchState),matchState.addTransition(new AtomTransition(bypassStop,atn.ruleToTokenType[idx])),bypassStart.addTransition(new EpsilonTransition(matchState))},ATNDeserializer.prototype.stateIsEndStateFor=function(state,idx){if(state.ruleIndex!==idx)return null;if(!(state instanceof StarLoopEntryState))return null;var maybeLoopEndState=state.transitions[state.transitions.length-1].target;return maybeLoopEndState instanceof LoopEndState&&maybeLoopEndState.epsilonOnlyTransitions&&maybeLoopEndState.transitions[0].target instanceof RuleStopState?state:null},ATNDeserializer.prototype.markPrecedenceDecisions=function(atn){for(var i=0;i<atn.states.length;i++){var state=atn.states[i];if(state instanceof StarLoopEntryState&&atn.ruleToStartState[state.ruleIndex].isPrecedenceRule){var maybeLoopEndState=state.transitions[state.transitions.length-1].target;maybeLoopEndState instanceof LoopEndState&&maybeLoopEndState.epsilonOnlyTransitions&&maybeLoopEndState.transitions[0].target instanceof RuleStopState&&(state.precedenceRuleDecision=!0)}}},ATNDeserializer.prototype.verifyATN=function(atn){if(this.deserializationOptions.verifyATN)for(var i=0;i<atn.states.length;i++){var state=atn.states[i];if(null!==state)if(this.checkCondition(state.epsilonOnlyTransitions||state.transitions.length<=1),state instanceof PlusBlockStartState)this.checkCondition(null!==state.loopBackState);else if(state instanceof StarLoopEntryState)if(this.checkCondition(null!==state.loopBackState),this.checkCondition(2===state.transitions.length),state.transitions[0].target instanceof StarBlockStartState)this.checkCondition(state.transitions[1].target instanceof LoopEndState),this.checkCondition(!state.nonGreedy);else{if(!(state.transitions[0].target instanceof LoopEndState))throw"IllegalState";this.checkCondition(state.transitions[1].target instanceof StarBlockStartState),this.checkCondition(state.nonGreedy)}else state instanceof StarLoopbackState?(this.checkCondition(1===state.transitions.length),this.checkCondition(state.transitions[0].target instanceof StarLoopEntryState)):state instanceof LoopEndState?this.checkCondition(null!==state.loopBackState):state instanceof RuleStartState?this.checkCondition(null!==state.stopState):state instanceof BlockStartState?this.checkCondition(null!==state.endState):state instanceof BlockEndState?this.checkCondition(null!==state.startState):state instanceof DecisionState?this.checkCondition(state.transitions.length<=1||state.decision>=0):this.checkCondition(state.transitions.length<=1||state instanceof RuleStopState)}},ATNDeserializer.prototype.checkCondition=function(condition,message){if(!condition)throw void 0!==message&&null!==message||(message="IllegalState"),message},ATNDeserializer.prototype.readInt=function(){return this.data[this.pos++]},ATNDeserializer.prototype.readInt32=function(){var low=this.readInt(),high=this.readInt();return low|high<<16},ATNDeserializer.prototype.readLong=function(){var low=this.readInt32(),high=this.readInt32();return 4294967295&low|high<<32};var byteToHex=createByteToHex();ATNDeserializer.prototype.readUUID=function(){for(var bb=[],i=7;i>=0;i--){var int=this.readInt();bb[2*i+1]=255&int,bb[2*i]=int>>8&255}return byteToHex[bb[0]]+byteToHex[bb[1]]+byteToHex[bb[2]]+byteToHex[bb[3]]+"-"+byteToHex[bb[4]]+byteToHex[bb[5]]+"-"+byteToHex[bb[6]]+byteToHex[bb[7]]+"-"+byteToHex[bb[8]]+byteToHex[bb[9]]+"-"+byteToHex[bb[10]]+byteToHex[bb[11]]+byteToHex[bb[12]]+byteToHex[bb[13]]+byteToHex[bb[14]]+byteToHex[bb[15]]},ATNDeserializer.prototype.edgeFactory=function(atn,type,src,trg,arg1,arg2,arg3,sets){var target=atn.states[trg];switch(type){case Transition.EPSILON:return new EpsilonTransition(target);case Transition.RANGE:return 0!==arg3?new RangeTransition(target,Token.EOF,arg2):new RangeTransition(target,arg1,arg2);case Transition.RULE:return new RuleTransition(atn.states[arg1],arg2,arg3,target);case Transition.PREDICATE:return new PredicateTransition(target,arg1,arg2,0!==arg3);case Transition.PRECEDENCE:return new PrecedencePredicateTransition(target,arg1);case Transition.ATOM:return 0!==arg3?new AtomTransition(target,Token.EOF):new AtomTransition(target,arg1);case Transition.ACTION:return new ActionTransition(target,arg1,arg2,0!==arg3);case Transition.SET:return new SetTransition(target,sets[arg1]);case Transition.NOT_SET:return new NotSetTransition(target,sets[arg1]);case Transition.WILDCARD:return new WildcardTransition(target);default:throw"The specified transition type: "+type+" is not valid."}},ATNDeserializer.prototype.stateFactory=function(type,ruleIndex){if(null===this.stateFactories){var sf=[];sf[ATNState.INVALID_TYPE]=null,sf[ATNState.BASIC]=function(){return new BasicState},sf[ATNState.RULE_START]=function(){return new RuleStartState},sf[ATNState.BLOCK_START]=function(){return new BasicBlockStartState},sf[ATNState.PLUS_BLOCK_START]=function(){return new PlusBlockStartState},sf[ATNState.STAR_BLOCK_START]=function(){return new StarBlockStartState},sf[ATNState.TOKEN_START]=function(){return new TokensStartState},sf[ATNState.RULE_STOP]=function(){return new RuleStopState},sf[ATNState.BLOCK_END]=function(){return new BlockEndState},sf[ATNState.STAR_LOOP_BACK]=function(){return new StarLoopbackState},sf[ATNState.STAR_LOOP_ENTRY]=function(){return new StarLoopEntryState},sf[ATNState.PLUS_LOOP_BACK]=function(){return new PlusLoopbackState},sf[ATNState.LOOP_END]=function(){return new LoopEndState},this.stateFactories=sf}if(type>this.stateFactories.length||null===this.stateFactories[type])throw"The specified state type "+type+" is not valid.";var s=this.stateFactories[type]();if(null!==s)return s.ruleIndex=ruleIndex,s},ATNDeserializer.prototype.lexerActionFactory=function(type,data1,data2){if(null===this.actionFactories){var af=[];af[LexerActionType.CHANNEL]=function(data1,data2){return new LexerChannelAction(data1)},af[LexerActionType.CUSTOM]=function(data1,data2){return new LexerCustomAction(data1,data2)},af[LexerActionType.MODE]=function(data1,data2){return new LexerModeAction(data1)},af[LexerActionType.MORE]=function(data1,data2){return LexerMoreAction.INSTANCE},af[LexerActionType.POP_MODE]=function(data1,data2){return LexerPopModeAction.INSTANCE},af[LexerActionType.PUSH_MODE]=function(data1,data2){return new LexerPushModeAction(data1)},af[LexerActionType.SKIP]=function(data1,data2){return LexerSkipAction.INSTANCE},af[LexerActionType.TYPE]=function(data1,data2){return new LexerTypeAction(data1)},this.actionFactories=af}if(type>this.actionFactories.length||null===this.actionFactories[type])throw"The specified lexer action type "+type+" is not valid.";return this.actionFactories[type](data1,data2)},exports.ATNDeserializer=ATNDeserializer;