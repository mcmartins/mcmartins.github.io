// Generated from /media/sf_GitHub/gap-lint/gap.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "gap.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00038\u0187\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003A\n\u0003\r\u0003",
    "\u000e\u0003B\u0003\u0004\u0003\u0004\u0005\u0004G\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004^\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005c\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0006\u0007n\n\u0007\r\u0007\u000e\u0007o\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007u\n\u0007\f\u0007\u000e\u0007x\u000b\u0007\u0005\u0007",
    "z\n\u0007\u0003\b\u0003\b\u0003\b\u0005\b\u007f\n\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0006\t\u0087\n\t\r\t\u000e\t\u0088",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0005\n\u0090\n\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0005\u000e\u00a0\n\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0007\u000f\u00a6\n",
    "\u000f\f\u000f\u000e\u000f\u00a9\u000b\u000f\u0003\u000f\u0005\u000f",
    "\u00ac\n\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00b4\n\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00ba\n\u0011\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u00be\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014",
    "\u00c8\n\u0014\f\u0014\u000e\u0014\u00cb\u000b\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00d3",
    "\n\u0015\f\u0015\u000e\u0015\u00d6\u000b\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00de\n",
    "\u0016\f\u0016\u000e\u0016\u00e1\u000b\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u00e6\n\u0017\f\u0017\u000e\u0017\u00e9\u000b",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u00ee\n\u0018",
    "\f\u0018\u000e\u0018\u00f1\u000b\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00fe\n\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0005\u0019\u0103\n\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u010a\n\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0110\n",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0115\n\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u011b\n",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0007\u0019\u014d\n\u0019\f\u0019\u000e\u0019\u0150\u000b\u0019",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u0154\n\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u015c",
    "\n\u001b\f\u001b\u000e\u001b\u015f\u000b\u001b\u0003\u001b\u0006\u001b",
    "\u0162\n\u001b\r\u001b\u000e\u001b\u0163\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0007",
    "\u001c\u016e\n\u001c\f\u001c\u000e\u001c\u0171\u000b\u001c\u0005\u001c",
    "\u0173\n\u001c\u0003\u001c\u0003\u001c\u0006\u001c\u0177\n\u001c\r\u001c",
    "\u000e\u001c\u0178\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0006\u001d\u0181\n\u001d\r\u001d\u000e\u001d\u0182",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0002\u00030\u001f\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:\u0002\u0005\u0003\u000234\u0004\u0002--//\u0004\u0002",
    "\u001c\u001c $\u01b3\u0002<\u0003\u0002\u0002\u0002\u0004@\u0003\u0002",
    "\u0002\u0002\u0006]\u0003\u0002\u0002\u0002\b_\u0003\u0002\u0002\u0002",
    "\ng\u0003\u0002\u0002\u0002\fi\u0003\u0002\u0002\u0002\u000e{\u0003",
    "\u0002\u0002\u0002\u0010\u0082\u0003\u0002\u0002\u0002\u0012\u008c\u0003",
    "\u0002\u0002\u0002\u0014\u0093\u0003\u0002\u0002\u0002\u0016\u0095\u0003",
    "\u0002\u0002\u0002\u0018\u0099\u0003\u0002\u0002\u0002\u001a\u009d\u0003",
    "\u0002\u0002\u0002\u001c\u00a3\u0003\u0002\u0002\u0002\u001e\u00af\u0003",
    "\u0002\u0002\u0002 \u00b5\u0003\u0002\u0002\u0002\"\u00bb\u0003\u0002",
    "\u0002\u0002$\u00bf\u0003\u0002\u0002\u0002&\u00c1\u0003\u0002\u0002",
    "\u0002(\u00ce\u0003\u0002\u0002\u0002*\u00d9\u0003\u0002\u0002\u0002",
    ",\u00e2\u0003\u0002\u0002\u0002.\u00ea\u0003\u0002\u0002\u00020\u011a",
    "\u0003\u0002\u0002\u00022\u0151\u0003\u0002\u0002\u00024\u0161\u0003",
    "\u0002\u0002\u00026\u0165\u0003\u0002\u0002\u00028\u0180\u0003\u0002",
    "\u0002\u0002:\u0184\u0003\u0002\u0002\u0002<=\u0005\u0004\u0003\u0002",
    "=>\u0007\u0002\u0002\u0003>\u0003\u0003\u0002\u0002\u0002?A\u0005\u0006",
    "\u0004\u0002@?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B@\u0003",
    "\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002C\u0005\u0003\u0002\u0002",
    "\u0002DF\u00050\u0019\u0002EG\u0007+\u0002\u0002FE\u0003\u0002\u0002",
    "\u0002FG\u0003\u0002\u0002\u0002G^\u0003\u0002\u0002\u0002HI\u0005\n",
    "\u0006\u0002IJ\u0007+\u0002\u0002J^\u0003\u0002\u0002\u0002KL\u0005",
    "\f\u0007\u0002LM\u0007+\u0002\u0002M^\u0003\u0002\u0002\u0002NO\u0005",
    "\u001c\u000f\u0002OP\u0007+\u0002\u0002P^\u0003\u0002\u0002\u0002QR",
    "\u0005&\u0014\u0002RS\u0007+\u0002\u0002S^\u0003\u0002\u0002\u0002T",
    "U\u0005(\u0015\u0002UV\u0007+\u0002\u0002V^\u0003\u0002\u0002\u0002",
    "WX\u0005\u001a\u000e\u0002XY\u0007+\u0002\u0002Y^\u0003\u0002\u0002",
    "\u0002Z[\u0005*\u0016\u0002[\\\u0007+\u0002\u0002\\^\u0003\u0002\u0002",
    "\u0002]D\u0003\u0002\u0002\u0002]H\u0003\u0002\u0002\u0002]K\u0003\u0002",
    "\u0002\u0002]N\u0003\u0002\u0002\u0002]Q\u0003\u0002\u0002\u0002]T\u0003",
    "\u0002\u0002\u0002]W\u0003\u0002\u0002\u0002]Z\u0003\u0002\u0002\u0002",
    "^\u0007\u0003\u0002\u0002\u0002_b\u00074\u0002\u0002`c\u00058\u001d",
    "\u0002ac\u00052\u001a\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002",
    "\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0007",
    "\u0003\u0002\u0002ef\u00050\u0019\u0002f\t\u0003\u0002\u0002\u0002g",
    "h\t\u0002\u0002\u0002h\u000b\u0003\u0002\u0002\u0002im\t\u0002\u0002",
    "\u0002jk\u0005:\u001e\u0002kl\t\u0002\u0002\u0002ln\u0003\u0002\u0002",
    "\u0002mj\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002om\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002py\u0003\u0002\u0002\u0002qv\u0007",
    "\u0018\u0002\u0002ru\u0005\f\u0007\u0002su\u00050\u0019\u0002tr\u0003",
    "\u0002\u0002\u0002ts\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002",
    "vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002",
    "\u0002xv\u0003\u0002\u0002\u0002yq\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002z\r\u0003\u0002\u0002\u0002{|\u00074\u0002\u0002|~\u0007",
    ")\u0002\u0002}\u007f\u0005.\u0018\u0002~}\u0003\u0002\u0002\u0002~\u007f",
    "\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0007*\u0002\u0002\u0081\u000f\u0003\u0002\u0002\u0002\u0082\u0086",
    "\u0005\u0012\n\u0002\u0083\u0087\u0005\u0006\u0004\u0002\u0084\u0087",
    "\u0005\u0016\f\u0002\u0085\u0087\u0005\u0018\r\u0002\u0086\u0083\u0003",
    "\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0085\u0003",
    "\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0086\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0005\u0014\u000b\u0002\u008b\u0011\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0007\u0004\u0002\u0002\u008d\u008f\u0007",
    ")\u0002\u0002\u008e\u0090\u0005,\u0017\u0002\u008f\u008e\u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0007*\u0002\u0002\u0092\u0013\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0007\u0011\u0002\u0002\u0094\u0015\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0007\u0006\u0002\u0002\u0096\u0097\u0005,",
    "\u0017\u0002\u0097\u0098\u0007+\u0002\u0002\u0098\u0017\u0003\u0002",
    "\u0002\u0002\u0099\u009a\u0007\f\u0002\u0002\u009a\u009b\u00050\u0019",
    "\u0002\u009b\u009c\u0007+\u0002\u0002\u009c\u0019\u0003\u0002\u0002",
    "\u0002\u009d\u009f\u0007\u000f\u0002\u0002\u009e\u00a0\u0005\u0004\u0003",
    "\u0002\u009f\u009e\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0010\u0002",
    "\u0002\u00a2\u001b\u0003\u0002\u0002\u0002\u00a3\u00a7\u0005\u001e\u0010",
    "\u0002\u00a4\u00a6\u0005 \u0011\u0002\u00a5\u00a4\u0003\u0002\u0002",
    "\u0002\u00a6\u00a9\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002",
    "\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa\u00ac\u0005\"\u0012",
    "\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0005$\u0013",
    "\u0002\u00ae\u001d\u0003\u0002\u0002\u0002\u00af\u00b0\u0007\u0007\u0002",
    "\u0002\u00b0\u00b1\u00050\u0019\u0002\u00b1\u00b3\u0007\b\u0002\u0002",
    "\u00b2\u00b4\u0005\u0004\u0003\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u001f\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0007\t\u0002\u0002\u00b6\u00b7\u00050\u0019\u0002\u00b7",
    "\u00b9\u0007\b\u0002\u0002\u00b8\u00ba\u0005\u0004\u0003\u0002\u00b9",
    "\u00b8\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba",
    "!\u0003\u0002\u0002\u0002\u00bb\u00bd\u0007\n\u0002\u0002\u00bc\u00be",
    "\u0005\u0004\u0003\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0003\u0002\u0002\u0002\u00be#\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u0007\u000b\u0002\u0002\u00c0%\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0007\r\u0002\u0002\u00c2\u00c3\u00050\u0019\u0002\u00c3\u00c4\u0007",
    "\u0012\u0002\u0002\u00c4\u00c5\u00050\u0019\u0002\u00c5\u00c9\u0007",
    "\u000f\u0002\u0002\u00c6\u00c8\u0005\u0004\u0003\u0002\u00c7\u00c6\u0003",
    "\u0002\u0002\u0002\u00c8\u00cb\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003",
    "\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007",
    "\u0010\u0002\u0002\u00cd\'\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007",
    "\u000e\u0002\u0002\u00cf\u00d0\u00050\u0019\u0002\u00d0\u00d4\u0007",
    "\u000f\u0002\u0002\u00d1\u00d3\u0005\u0004\u0003\u0002\u00d2\u00d1\u0003",
    "\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003",
    "\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d7\u0003",
    "\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007",
    "\u0010\u0002\u0002\u00d8)\u0003\u0002\u0002\u0002\u00d9\u00da\u0007",
    "\u0013\u0002\u0002\u00da\u00db\u00050\u0019\u0002\u00db\u00df\u0007",
    "\u0014\u0002\u0002\u00dc\u00de\u0005\u0004\u0003\u0002\u00dd\u00dc\u0003",
    "\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002\u0002\u00df\u00dd\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0+\u0003",
    "\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2\u00e7\u0007",
    "4\u0002\u0002\u00e3\u00e4\u0007-\u0002\u0002\u00e4\u00e6\u00074\u0002",
    "\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e9\u0003\u0002\u0002",
    "\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002",
    "\u0002\u00e8-\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002",
    "\u0002\u00ea\u00ef\u00050\u0019\u0002\u00eb\u00ec\t\u0003\u0002\u0002",
    "\u00ec\u00ee\u00050\u0019\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002",
    "\u00ee\u00f1\u0003\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002",
    "\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0/\u0003\u0002\u0002\u0002",
    "\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f3\b\u0019\u0001\u0002",
    "\u00f3\u00f4\u0007!\u0002\u0002\u00f4\u011b\u00050\u0019\"\u00f5\u00f6",
    "\u0007\u0015\u0002\u0002\u00f6\u011b\u00050\u0019!\u00f7\u011b\u0005",
    "\b\u0005\u0002\u00f8\u011b\u00073\u0002\u0002\u00f9\u011b\u00072\u0002",
    "\u0002\u00fa\u011b\u00075\u0002\u0002\u00fb\u00fd\u0005\u000e\b\u0002",
    "\u00fc\u00fe\u00058\u001d\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002",
    "\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u011b\u0003\u0002\u0002\u0002",
    "\u00ff\u011b\u0005\u0010\t\u0002\u0100\u0102\u00052\u001a\u0002\u0101",
    "\u0103\u00058\u001d\u0002\u0102\u0101\u0003\u0002\u0002\u0002\u0102",
    "\u0103\u0003\u0002\u0002\u0002\u0103\u011b\u0003\u0002\u0002\u0002\u0104",
    "\u0105\t\u0002\u0002\u0002\u0105\u0106\u00071\u0002\u0002\u0106\u011b",
    "\t\u0002\u0002\u0002\u0107\u0109\u00074\u0002\u0002\u0108\u010a\u0005",
    "8\u001d\u0002\u0109\u0108\u0003\u0002\u0002\u0002\u0109\u010a\u0003",
    "\u0002\u0002\u0002\u010a\u011b\u0003\u0002\u0002\u0002\u010b\u010c\u0007",
    ")\u0002\u0002\u010c\u010d\u00050\u0019\u0002\u010d\u010f\u0007*\u0002",
    "\u0002\u010e\u0110\u00058\u001d\u0002\u010f\u010e\u0003\u0002\u0002",
    "\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110\u011b\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0007\u0005\u0002\u0002\u0112\u0114\u0007)\u0002",
    "\u0002\u0113\u0115\u00075\u0002\u0002\u0114\u0113\u0003\u0002\u0002",
    "\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002",
    "\u0002\u0116\u011b\u0007*\u0002\u0002\u0117\u011b\u00054\u001b\u0002",
    "\u0118\u011b\u0005\u0018\r\u0002\u0119\u011b\u00056\u001c\u0002\u011a",
    "\u00f2\u0003\u0002\u0002\u0002\u011a\u00f5\u0003\u0002\u0002\u0002\u011a",
    "\u00f7\u0003\u0002\u0002\u0002\u011a\u00f8\u0003\u0002\u0002\u0002\u011a",
    "\u00f9\u0003\u0002\u0002\u0002\u011a\u00fa\u0003\u0002\u0002\u0002\u011a",
    "\u00fb\u0003\u0002\u0002\u0002\u011a\u00ff\u0003\u0002\u0002\u0002\u011a",
    "\u0100\u0003\u0002\u0002\u0002\u011a\u0104\u0003\u0002\u0002\u0002\u011a",
    "\u0107\u0003\u0002\u0002\u0002\u011a\u010b\u0003\u0002\u0002\u0002\u011a",
    "\u0111\u0003\u0002\u0002\u0002\u011a\u0117\u0003\u0002\u0002\u0002\u011a",
    "\u0118\u0003\u0002\u0002\u0002\u011a\u0119\u0003\u0002\u0002\u0002\u011b",
    "\u014e\u0003\u0002\u0002\u0002\u011c\u011d\f \u0002\u0002\u011d\u011e",
    "\u0007\u001c\u0002\u0002\u011e\u014d\u00050\u0019!\u011f\u0120\f\u001f",
    "\u0002\u0002\u0120\u0121\u0007\"\u0002\u0002\u0121\u014d\u00050\u0019",
    " \u0122\u0123\f\u001e\u0002\u0002\u0123\u0124\u0007#\u0002\u0002\u0124",
    "\u014d\u00050\u0019\u001f\u0125\u0126\f\u001d\u0002\u0002\u0126\u0127",
    "\u0007$\u0002\u0002\u0127\u014d\u00050\u0019\u001e\u0128\u0129\f\u001c",
    "\u0002\u0002\u0129\u012a\u0007 \u0002\u0002\u012a\u014d\u00050\u0019",
    "\u001d\u012b\u012c\f\u001b\u0002\u0002\u012c\u012d\u0007!\u0002\u0002",
    "\u012d\u014d\u00050\u0019\u001c\u012e\u012f\f\u001a\u0002\u0002\u012f",
    "\u0130\u0007\u001a\u0002\u0002\u0130\u014d\u00050\u0019\u001b\u0131",
    "\u0132\f\u0019\u0002\u0002\u0132\u0133\u0007\u001b\u0002\u0002\u0133",
    "\u014d\u00050\u0019\u001a\u0134\u0135\f\u0018\u0002\u0002\u0135\u0136",
    "\u0007\u001e\u0002\u0002\u0136\u014d\u00050\u0019\u0019\u0137\u0138",
    "\f\u0017\u0002\u0002\u0138\u0139\u0007\u001f\u0002\u0002\u0139\u014d",
    "\u00050\u0019\u0018\u013a\u013b\f\u0016\u0002\u0002\u013b\u013c\u0007",
    "\u0018\u0002\u0002\u013c\u014d\u00050\u0019\u0017\u013d\u013e\f\u0015",
    "\u0002\u0002\u013e\u013f\u0007\u0019\u0002\u0002\u013f\u014d\u00050",
    "\u0019\u0016\u0140\u0141\f\u0014\u0002\u0002\u0141\u0142\u0007\u0017",
    "\u0002\u0002\u0142\u014d\u00050\u0019\u0015\u0143\u0144\f\u0013\u0002",
    "\u0002\u0144\u0145\u0007\u0016\u0002\u0002\u0145\u014d\u00050\u0019",
    "\u0014\u0146\u0147\f\u0012\u0002\u0002\u0147\u0148\u00070\u0002\u0002",
    "\u0148\u014d\u00050\u0019\u0013\u0149\u014a\f\u0011\u0002\u0002\u014a",
    "\u014b\u0007\u0012\u0002\u0002\u014b\u014d\u00050\u0019\u0012\u014c",
    "\u011c\u0003\u0002\u0002\u0002\u014c\u011f\u0003\u0002\u0002\u0002\u014c",
    "\u0122\u0003\u0002\u0002\u0002\u014c\u0125\u0003\u0002\u0002\u0002\u014c",
    "\u0128\u0003\u0002\u0002\u0002\u014c\u012b\u0003\u0002\u0002\u0002\u014c",
    "\u012e\u0003\u0002\u0002\u0002\u014c\u0131\u0003\u0002\u0002\u0002\u014c",
    "\u0134\u0003\u0002\u0002\u0002\u014c\u0137\u0003\u0002\u0002\u0002\u014c",
    "\u013a\u0003\u0002\u0002\u0002\u014c\u013d\u0003\u0002\u0002\u0002\u014c",
    "\u0140\u0003\u0002\u0002\u0002\u014c\u0143\u0003\u0002\u0002\u0002\u014c",
    "\u0146\u0003\u0002\u0002\u0002\u014c\u0149\u0003\u0002\u0002\u0002\u014d",
    "\u0150\u0003\u0002\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002\u014e",
    "\u014f\u0003\u0002\u0002\u0002\u014f1\u0003\u0002\u0002\u0002\u0150",
    "\u014e\u0003\u0002\u0002\u0002\u0151\u0153\u0007\'\u0002\u0002\u0152",
    "\u0154\u0005.\u0018\u0002\u0153\u0152\u0003\u0002\u0002\u0002\u0153",
    "\u0154\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002\u0155",
    "\u0156\u0007(\u0002\u0002\u01563\u0003\u0002\u0002\u0002\u0157\u0158",
    "\u0007)\u0002\u0002\u0158\u015d\t\u0002\u0002\u0002\u0159\u015a\u0007",
    "-\u0002\u0002\u015a\u015c\t\u0002\u0002\u0002\u015b\u0159\u0003\u0002",
    "\u0002\u0002\u015c\u015f\u0003\u0002\u0002\u0002\u015d\u015b\u0003\u0002",
    "\u0002\u0002\u015d\u015e\u0003\u0002\u0002\u0002\u015e\u0160\u0003\u0002",
    "\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u0160\u0162\u0007*",
    "\u0002\u0002\u0161\u0157\u0003\u0002\u0002\u0002\u0162\u0163\u0003\u0002",
    "\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002",
    "\u0002\u0002\u01645\u0003\u0002\u0002\u0002\u0165\u0166\u00074\u0002",
    "\u0002\u0166\u0176\u0007%\u0002\u0002\u0167\u0168\u0007\'\u0002\u0002",
    "\u0168\u0172\u00050\u0019\u0002\u0169\u016a\u00071\u0002\u0002\u016a",
    "\u0173\u00050\u0019\u0002\u016b\u016c\u0007-\u0002\u0002\u016c\u016e",
    "\u00050\u0019\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016e\u0171",
    "\u0003\u0002\u0002\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u016f\u0170",
    "\u0003\u0002\u0002\u0002\u0170\u0173\u0003\u0002\u0002\u0002\u0171\u016f",
    "\u0003\u0002\u0002\u0002\u0172\u0169\u0003\u0002\u0002\u0002\u0172\u016f",
    "\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0175",
    "\u0007(\u0002\u0002\u0175\u0177\u0003\u0002\u0002\u0002\u0176\u0167",
    "\u0003\u0002\u0002\u0002\u0177\u0178\u0003\u0002\u0002\u0002\u0178\u0176",
    "\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u017a",
    "\u0003\u0002\u0002\u0002\u017a\u017b\u0007&\u0002\u0002\u017b7\u0003",
    "\u0002\u0002\u0002\u017c\u017d\u0007\'\u0002\u0002\u017d\u017e\u0005",
    "0\u0019\u0002\u017e\u017f\u0007(\u0002\u0002\u017f\u0181\u0003\u0002",
    "\u0002\u0002\u0180\u017c\u0003\u0002\u0002\u0002\u0181\u0182\u0003\u0002",
    "\u0002\u0002\u0182\u0180\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002",
    "\u0002\u0002\u01839\u0003\u0002\u0002\u0002\u0184\u0185\t\u0004\u0002",
    "\u0002\u0185;\u0003\u0002\u0002\u0002(BF]botvy~\u0086\u0088\u008f\u009f",
    "\u00a7\u00ab\u00b3\u00b9\u00bd\u00c9\u00d4\u00df\u00e7\u00ef\u00fd\u0102",
    "\u0109\u010f\u0114\u011a\u014c\u014e\u0153\u015d\u0163\u016f\u0172\u0178",
    "\u0182"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':='", "'function'", "'input'", "'local'", "'if'", 
                     "'then'", "'elif'", "'else'", "'fi'", "'return'", "'for'", 
                     "'while'", "'do'", "'od'", "'end'", "'in'", "'repeat'", 
                     "'until'", "'not'", "'or'", "'and'", null, "'<>'", 
                     "'>='", "'<='", "'^'", "'!'", "'>'", "'<'", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'{'", "'}'", "'['", "']'", 
                     "'('", "')'", "';'", null, "','", "'?'", "':'", "'->'", 
                     "'..'" ];

var symbolicNames = [ null, null, "Function", "Input", "Local", "If", "Then", 
                      "Elif", "Else", "Fi", "Return", "For", "While", "Do", 
                      "Od", "End", "In", "Repeat", "Until", "Not", "Or", 
                      "And", "Equals", "NEquals", "GTEquals", "LTEquals", 
                      "Pow", "Excl", "GT", "LT", "Plus", "Minus", "Star", 
                      "Slash", "Modulus", "OBrace", "CBrace", "OBracket", 
                      "CBracket", "OParen", "CParen", "SColon", "Assign", 
                      "Comma", "QMark", "Colon", "ShortHandFunction", "Range", 
                      "Boolean", "Number", "Identifier", "String", "Comment", 
                      "Space", "EOL" ];

var ruleNames =  [ "parse", "block", "statement", "assignment", "invocation", 
                   "operation", "functionCall", "functionDecl", "functionDefinition", 
                   "functionEnd", "functionLocalDeclaration", "functionReturnDeclaration", 
                   "doStatement", "ifStatement", "ifStat", "elseIfStat", 
                   "elseStat", "fiIfStat", "forStatement", "whileStatement", 
                   "repeatStatement", "idList", "exprList", "expression", 
                   "list", "tuple", "listEvaluation", "indexes", "operator" ];

function gapParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

gapParser.prototype = Object.create(antlr4.Parser.prototype);
gapParser.prototype.constructor = gapParser;

Object.defineProperty(gapParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

gapParser.EOF = antlr4.Token.EOF;
gapParser.T__0 = 1;
gapParser.Function = 2;
gapParser.Input = 3;
gapParser.Local = 4;
gapParser.If = 5;
gapParser.Then = 6;
gapParser.Elif = 7;
gapParser.Else = 8;
gapParser.Fi = 9;
gapParser.Return = 10;
gapParser.For = 11;
gapParser.While = 12;
gapParser.Do = 13;
gapParser.Od = 14;
gapParser.End = 15;
gapParser.In = 16;
gapParser.Repeat = 17;
gapParser.Until = 18;
gapParser.Not = 19;
gapParser.Or = 20;
gapParser.And = 21;
gapParser.Equals = 22;
gapParser.NEquals = 23;
gapParser.GTEquals = 24;
gapParser.LTEquals = 25;
gapParser.Pow = 26;
gapParser.Excl = 27;
gapParser.GT = 28;
gapParser.LT = 29;
gapParser.Plus = 30;
gapParser.Minus = 31;
gapParser.Star = 32;
gapParser.Slash = 33;
gapParser.Modulus = 34;
gapParser.OBrace = 35;
gapParser.CBrace = 36;
gapParser.OBracket = 37;
gapParser.CBracket = 38;
gapParser.OParen = 39;
gapParser.CParen = 40;
gapParser.SColon = 41;
gapParser.Assign = 42;
gapParser.Comma = 43;
gapParser.QMark = 44;
gapParser.Colon = 45;
gapParser.ShortHandFunction = 46;
gapParser.Range = 47;
gapParser.Boolean = 48;
gapParser.Number = 49;
gapParser.Identifier = 50;
gapParser.String = 51;
gapParser.Comment = 52;
gapParser.Space = 53;
gapParser.EOL = 54;

gapParser.RULE_parse = 0;
gapParser.RULE_block = 1;
gapParser.RULE_statement = 2;
gapParser.RULE_assignment = 3;
gapParser.RULE_invocation = 4;
gapParser.RULE_operation = 5;
gapParser.RULE_functionCall = 6;
gapParser.RULE_functionDecl = 7;
gapParser.RULE_functionDefinition = 8;
gapParser.RULE_functionEnd = 9;
gapParser.RULE_functionLocalDeclaration = 10;
gapParser.RULE_functionReturnDeclaration = 11;
gapParser.RULE_doStatement = 12;
gapParser.RULE_ifStatement = 13;
gapParser.RULE_ifStat = 14;
gapParser.RULE_elseIfStat = 15;
gapParser.RULE_elseStat = 16;
gapParser.RULE_fiIfStat = 17;
gapParser.RULE_forStatement = 18;
gapParser.RULE_whileStatement = 19;
gapParser.RULE_repeatStatement = 20;
gapParser.RULE_idList = 21;
gapParser.RULE_exprList = 22;
gapParser.RULE_expression = 23;
gapParser.RULE_list = 24;
gapParser.RULE_tuple = 25;
gapParser.RULE_listEvaluation = 26;
gapParser.RULE_indexes = 27;
gapParser.RULE_operator = 28;

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ParseContext.prototype.EOF = function() {
    return this.getToken(gapParser.EOF, 0);
};




gapParser.ParseContext = ParseContext;

gapParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, gapParser.RULE_parse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.block();
        this.state = 59;
        this.match(gapParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};




gapParser.BlockContext = BlockContext;

gapParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, gapParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 61;
        		this.statement();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 64; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

StatementContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.forStatement = function() {
    return this.getTypedRuleContext(ForStatementContext,0);
};

StatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

StatementContext.prototype.doStatement = function() {
    return this.getTypedRuleContext(DoStatementContext,0);
};

StatementContext.prototype.repeatStatement = function() {
    return this.getTypedRuleContext(RepeatStatementContext,0);
};




gapParser.StatementContext = StatementContext;

gapParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, gapParser.RULE_statement);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.expression(0);
            this.state = 68;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            if(la_===1) {
                this.state = 67;
                this.match(gapParser.SColon);

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 70;
            this.invocation();
            this.state = 71;
            this.match(gapParser.SColon);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 73;
            this.operation();
            this.state = 74;
            this.match(gapParser.SColon);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 76;
            this.ifStatement();
            this.state = 77;
            this.match(gapParser.SColon);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 79;
            this.forStatement();
            this.state = 80;
            this.match(gapParser.SColon);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 82;
            this.whileStatement();
            this.state = 83;
            this.match(gapParser.SColon);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 85;
            this.doStatement();
            this.state = 86;
            this.match(gapParser.SColon);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 88;
            this.repeatStatement();
            this.state = 89;
            this.match(gapParser.SColon);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

AssignmentContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};




gapParser.AssignmentContext = AssignmentContext;

gapParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, gapParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(gapParser.Identifier);
        this.state = 96;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 94;
            this.indexes();

        } else if(la_===2) {
            this.state = 95;
            this.list();

        }
        this.state = 98;
        this.match(gapParser.T__0);
        this.state = 99;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

InvocationContext.prototype.Number = function() {
    return this.getToken(gapParser.Number, 0);
};




gapParser.InvocationContext = InvocationContext;

gapParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, gapParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        _la = this._input.LA(1);
        if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_operation;
    return this;
}

OperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperationContext.prototype.constructor = OperationContext;

OperationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};


OperationContext.prototype.Number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Number);
    } else {
        return this.getToken(gapParser.Number, i);
    }
};


OperationContext.prototype.operator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperatorContext);
    } else {
        return this.getTypedRuleContext(OperatorContext,i);
    }
};

OperationContext.prototype.Equals = function() {
    return this.getToken(gapParser.Equals, 0);
};

OperationContext.prototype.operation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperationContext);
    } else {
        return this.getTypedRuleContext(OperationContext,i);
    }
};

OperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




gapParser.OperationContext = OperationContext;

gapParser.prototype.operation = function() {

    var localctx = new OperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, gapParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        _la = this._input.LA(1);
        if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 107; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 104;
        		this.operator();
        		this.state = 105;
        		_la = this._input.LA(1);
        		if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 109; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 119;
        _la = this._input.LA(1);
        if(_la===gapParser.Equals) {
            this.state = 111;
            this.match(gapParser.Equals);
            this.state = 116;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 114;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 112;
                        this.operation();
                        break;

                    case 2:
                        this.state = 113;
                        this.expression(0);
                        break;

                    } 
                }
                this.state = 118;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
            }

        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

FunctionCallContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};




gapParser.FunctionCallContext = FunctionCallContext;

gapParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, gapParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(gapParser.Identifier);
        this.state = 122;
        this.match(gapParser.OParen);
        this.state = 124;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 123;
            this.exprList();
        }

        this.state = 126;
        this.match(gapParser.CParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionDecl;
    return this;
}

FunctionDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclContext.prototype.constructor = FunctionDeclContext;

FunctionDeclContext.prototype.functionDefinition = function() {
    return this.getTypedRuleContext(FunctionDefinitionContext,0);
};

FunctionDeclContext.prototype.functionEnd = function() {
    return this.getTypedRuleContext(FunctionEndContext,0);
};

FunctionDeclContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

FunctionDeclContext.prototype.functionLocalDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionLocalDeclarationContext);
    } else {
        return this.getTypedRuleContext(FunctionLocalDeclarationContext,i);
    }
};

FunctionDeclContext.prototype.functionReturnDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionReturnDeclarationContext);
    } else {
        return this.getTypedRuleContext(FunctionReturnDeclarationContext,i);
    }
};




gapParser.FunctionDeclContext = FunctionDeclContext;

gapParser.prototype.functionDecl = function() {

    var localctx = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, gapParser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.functionDefinition();
        this.state = 132; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 132;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 129;
                this.statement();
                break;

            case 2:
                this.state = 130;
                this.functionLocalDeclaration();
                break;

            case 3:
                this.state = 131;
                this.functionReturnDeclaration();
                break;

            }
            this.state = 134; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Local) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0));
        this.state = 136;
        this.functionEnd();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionDefinition;
    return this;
}

FunctionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefinitionContext.prototype.constructor = FunctionDefinitionContext;

FunctionDefinitionContext.prototype.Function = function() {
    return this.getToken(gapParser.Function, 0);
};

FunctionDefinitionContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};




gapParser.FunctionDefinitionContext = FunctionDefinitionContext;

gapParser.prototype.functionDefinition = function() {

    var localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, gapParser.RULE_functionDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(gapParser.Function);
        this.state = 139;
        this.match(gapParser.OParen);
        this.state = 141;
        _la = this._input.LA(1);
        if(_la===gapParser.Identifier) {
            this.state = 140;
            this.idList();
        }

        this.state = 143;
        this.match(gapParser.CParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionEndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionEnd;
    return this;
}

FunctionEndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionEndContext.prototype.constructor = FunctionEndContext;

FunctionEndContext.prototype.End = function() {
    return this.getToken(gapParser.End, 0);
};




gapParser.FunctionEndContext = FunctionEndContext;

gapParser.prototype.functionEnd = function() {

    var localctx = new FunctionEndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, gapParser.RULE_functionEnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(gapParser.End);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionLocalDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionLocalDeclaration;
    return this;
}

FunctionLocalDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionLocalDeclarationContext.prototype.constructor = FunctionLocalDeclarationContext;

FunctionLocalDeclarationContext.prototype.Local = function() {
    return this.getToken(gapParser.Local, 0);
};

FunctionLocalDeclarationContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};




gapParser.FunctionLocalDeclarationContext = FunctionLocalDeclarationContext;

gapParser.prototype.functionLocalDeclaration = function() {

    var localctx = new FunctionLocalDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, gapParser.RULE_functionLocalDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(gapParser.Local);
        this.state = 148;
        this.idList();
        this.state = 149;
        this.match(gapParser.SColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionReturnDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_functionReturnDeclaration;
    return this;
}

FunctionReturnDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionReturnDeclarationContext.prototype.constructor = FunctionReturnDeclarationContext;

FunctionReturnDeclarationContext.prototype.Return = function() {
    return this.getToken(gapParser.Return, 0);
};

FunctionReturnDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};




gapParser.FunctionReturnDeclarationContext = FunctionReturnDeclarationContext;

gapParser.prototype.functionReturnDeclaration = function() {

    var localctx = new FunctionReturnDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, gapParser.RULE_functionReturnDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(gapParser.Return);

        this.state = 152;
        this.expression(0);
        this.state = 153;
        this.match(gapParser.SColon);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DoStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_doStatement;
    return this;
}

DoStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoStatementContext.prototype.constructor = DoStatementContext;

DoStatementContext.prototype.Do = function() {
    return this.getToken(gapParser.Do, 0);
};

DoStatementContext.prototype.Od = function() {
    return this.getToken(gapParser.Od, 0);
};

DoStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.DoStatementContext = DoStatementContext;

gapParser.prototype.doStatement = function() {

    var localctx = new DoStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, gapParser.RULE_doStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(gapParser.Do);
        this.state = 157;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 156;
            this.block();
        }

        this.state = 159;
        this.match(gapParser.Od);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.ifStat = function() {
    return this.getTypedRuleContext(IfStatContext,0);
};

IfStatementContext.prototype.fiIfStat = function() {
    return this.getTypedRuleContext(FiIfStatContext,0);
};

IfStatementContext.prototype.elseIfStat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfStatContext);
    } else {
        return this.getTypedRuleContext(ElseIfStatContext,i);
    }
};

IfStatementContext.prototype.elseStat = function() {
    return this.getTypedRuleContext(ElseStatContext,0);
};




gapParser.IfStatementContext = IfStatementContext;

gapParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, gapParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.ifStat();
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Elif) {
            this.state = 162;
            this.elseIfStat();
            this.state = 167;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 169;
        _la = this._input.LA(1);
        if(_la===gapParser.Else) {
            this.state = 168;
            this.elseStat();
        }

        this.state = 171;
        this.fiIfStat();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_ifStat;
    return this;
}

IfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatContext.prototype.constructor = IfStatContext;

IfStatContext.prototype.If = function() {
    return this.getToken(gapParser.If, 0);
};

IfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStatContext.prototype.Then = function() {
    return this.getToken(gapParser.Then, 0);
};

IfStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.IfStatContext = IfStatContext;

gapParser.prototype.ifStat = function() {

    var localctx = new IfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, gapParser.RULE_ifStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(gapParser.If);
        this.state = 174;
        this.expression(0);
        this.state = 175;
        this.match(gapParser.Then);
        this.state = 177;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 176;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseIfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_elseIfStat;
    return this;
}

ElseIfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfStatContext.prototype.constructor = ElseIfStatContext;

ElseIfStatContext.prototype.Elif = function() {
    return this.getToken(gapParser.Elif, 0);
};

ElseIfStatContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ElseIfStatContext.prototype.Then = function() {
    return this.getToken(gapParser.Then, 0);
};

ElseIfStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.ElseIfStatContext = ElseIfStatContext;

gapParser.prototype.elseIfStat = function() {

    var localctx = new ElseIfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, gapParser.RULE_elseIfStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(gapParser.Elif);
        this.state = 180;
        this.expression(0);
        this.state = 181;
        this.match(gapParser.Then);
        this.state = 183;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 182;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElseStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_elseStat;
    return this;
}

ElseStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatContext.prototype.constructor = ElseStatContext;

ElseStatContext.prototype.Else = function() {
    return this.getToken(gapParser.Else, 0);
};

ElseStatContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};




gapParser.ElseStatContext = ElseStatContext;

gapParser.prototype.elseStat = function() {

    var localctx = new ElseStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, gapParser.RULE_elseStat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(gapParser.Else);
        this.state = 187;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 186;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FiIfStatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_fiIfStat;
    return this;
}

FiIfStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FiIfStatContext.prototype.constructor = FiIfStatContext;

FiIfStatContext.prototype.Fi = function() {
    return this.getToken(gapParser.Fi, 0);
};




gapParser.FiIfStatContext = FiIfStatContext;

gapParser.prototype.fiIfStat = function() {

    var localctx = new FiIfStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, gapParser.RULE_fiIfStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(gapParser.Fi);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_forStatement;
    return this;
}

ForStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStatementContext.prototype.constructor = ForStatementContext;

ForStatementContext.prototype.For = function() {
    return this.getToken(gapParser.For, 0);
};

ForStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ForStatementContext.prototype.In = function() {
    return this.getToken(gapParser.In, 0);
};

ForStatementContext.prototype.Do = function() {
    return this.getToken(gapParser.Do, 0);
};

ForStatementContext.prototype.Od = function() {
    return this.getToken(gapParser.Od, 0);
};

ForStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




gapParser.ForStatementContext = ForStatementContext;

gapParser.prototype.forStatement = function() {

    var localctx = new ForStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, gapParser.RULE_forStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(gapParser.For);
        this.state = 192;
        this.expression(0);
        this.state = 193;
        this.match(gapParser.In);
        this.state = 194;
        this.expression(0);
        this.state = 195;
        this.match(gapParser.Do);
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 196;
            this.block();
            this.state = 201;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 202;
        this.match(gapParser.Od);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.While = function() {
    return this.getToken(gapParser.While, 0);
};

WhileStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileStatementContext.prototype.Do = function() {
    return this.getToken(gapParser.Do, 0);
};

WhileStatementContext.prototype.Od = function() {
    return this.getToken(gapParser.Od, 0);
};

WhileStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




gapParser.WhileStatementContext = WhileStatementContext;

gapParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, gapParser.RULE_whileStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(gapParser.While);
        this.state = 205;
        this.expression(0);
        this.state = 206;
        this.match(gapParser.Do);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 207;
            this.block();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 213;
        this.match(gapParser.Od);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RepeatStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_repeatStatement;
    return this;
}

RepeatStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeatStatementContext.prototype.constructor = RepeatStatementContext;

RepeatStatementContext.prototype.Repeat = function() {
    return this.getToken(gapParser.Repeat, 0);
};

RepeatStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RepeatStatementContext.prototype.Until = function() {
    return this.getToken(gapParser.Until, 0);
};

RepeatStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};




gapParser.RepeatStatementContext = RepeatStatementContext;

gapParser.prototype.repeatStatement = function() {

    var localctx = new RepeatStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, gapParser.RULE_repeatStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.match(gapParser.Repeat);
        this.state = 216;
        this.expression(0);
        this.state = 217;
        this.match(gapParser.Until);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.If) | (1 << gapParser.Return) | (1 << gapParser.For) | (1 << gapParser.While) | (1 << gapParser.Do) | (1 << gapParser.Repeat) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 218;
            this.block();
            this.state = 223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_idList;
    return this;
}

IdListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdListContext.prototype.constructor = IdListContext;

IdListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};





gapParser.IdListContext = IdListContext;

gapParser.prototype.idList = function() {

    var localctx = new IdListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, gapParser.RULE_idList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(gapParser.Identifier);
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Comma) {
            this.state = 225;
            this.match(gapParser.Comma);
            this.state = 226;
            this.match(gapParser.Identifier);
            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_exprList;
    return this;
}

ExprListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprListContext.prototype.constructor = ExprListContext;

ExprListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




gapParser.ExprListContext = ExprListContext;

gapParser.prototype.exprList = function() {

    var localctx = new ExprListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, gapParser.RULE_exprList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.expression(0);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===gapParser.Comma || _la===gapParser.Colon) {
            this.state = 233;
            _la = this._input.LA(1);
            if(!(_la===gapParser.Comma || _la===gapParser.Colon)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 234;
            this.expression(0);
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function GtExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GtExpressionContext.prototype.constructor = GtExpressionContext;

gapParser.GtExpressionContext = GtExpressionContext;

GtExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GtExpressionContext.prototype.GT = function() {
    return this.getToken(gapParser.GT, 0);
};

function ReturnDeclarationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnDeclarationContext.prototype = Object.create(ExpressionContext.prototype);
ReturnDeclarationContext.prototype.constructor = ReturnDeclarationContext;

gapParser.ReturnDeclarationContext = ReturnDeclarationContext;

ReturnDeclarationContext.prototype.functionReturnDeclaration = function() {
    return this.getTypedRuleContext(FunctionReturnDeclarationContext,0);
};

function NumberExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

gapParser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.Number = function() {
    return this.getToken(gapParser.Number, 0);
};

function IdentifierExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

gapParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

IdentifierExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

function ModulusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModulusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ModulusExpressionContext.prototype.constructor = ModulusExpressionContext;

gapParser.ModulusExpressionContext = ModulusExpressionContext;

ModulusExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ModulusExpressionContext.prototype.Modulus = function() {
    return this.getToken(gapParser.Modulus, 0);
};

function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

gapParser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.Not = function() {
    return this.getToken(gapParser.Not, 0);
};

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

function MultiplyExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MultiplyExpressionContext.prototype.constructor = MultiplyExpressionContext;

gapParser.MultiplyExpressionContext = MultiplyExpressionContext;

MultiplyExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MultiplyExpressionContext.prototype.Star = function() {
    return this.getToken(gapParser.Star, 0);
};

function GtEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GtEqExpressionContext.prototype.constructor = GtEqExpressionContext;

gapParser.GtEqExpressionContext = GtEqExpressionContext;

GtEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

GtEqExpressionContext.prototype.GTEquals = function() {
    return this.getToken(gapParser.GTEquals, 0);
};

function AndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AndExpressionContext.prototype.constructor = AndExpressionContext;

gapParser.AndExpressionContext = AndExpressionContext;

AndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AndExpressionContext.prototype.And = function() {
    return this.getToken(gapParser.And, 0);
};

function StringExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(ExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

gapParser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.String = function() {
    return this.getToken(gapParser.String, 0);
};

function ExpressionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionExpressionContext.prototype.constructor = ExpressionExpressionContext;

gapParser.ExpressionExpressionContext = ExpressionExpressionContext;

ExpressionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

function TupleDeclarationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TupleDeclarationContext.prototype = Object.create(ExpressionContext.prototype);
TupleDeclarationContext.prototype.constructor = TupleDeclarationContext;

gapParser.TupleDeclarationContext = TupleDeclarationContext;

TupleDeclarationContext.prototype.tuple = function() {
    return this.getTypedRuleContext(TupleContext,0);
};

function FunctionCallExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionCallExpressionContext.prototype.constructor = FunctionCallExpressionContext;

gapParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

FunctionCallExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

FunctionCallExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

function ListExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ListExpressionContext.prototype.constructor = ListExpressionContext;

gapParser.ListExpressionContext = ListExpressionContext;

ListExpressionContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ListExpressionContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

function LtEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LtEqExpressionContext.prototype.constructor = LtEqExpressionContext;

gapParser.LtEqExpressionContext = LtEqExpressionContext;

LtEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LtEqExpressionContext.prototype.LTEquals = function() {
    return this.getToken(gapParser.LTEquals, 0);
};

function LtExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LtExpressionContext.prototype.constructor = LtExpressionContext;

gapParser.LtExpressionContext = LtExpressionContext;

LtExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LtExpressionContext.prototype.LT = function() {
    return this.getToken(gapParser.LT, 0);
};

function BoolExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BoolExpressionContext.prototype.constructor = BoolExpressionContext;

gapParser.BoolExpressionContext = BoolExpressionContext;

BoolExpressionContext.prototype.Boolean = function() {
    return this.getToken(gapParser.Boolean, 0);
};

function NotEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotEqExpressionContext.prototype.constructor = NotEqExpressionContext;

gapParser.NotEqExpressionContext = NotEqExpressionContext;

NotEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NotEqExpressionContext.prototype.NEquals = function() {
    return this.getToken(gapParser.NEquals, 0);
};

function AssignmentExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignmentExpressionContext.prototype.constructor = AssignmentExpressionContext;

gapParser.AssignmentExpressionContext = AssignmentExpressionContext;

AssignmentExpressionContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

function DivideExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivideExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DivideExpressionContext.prototype.constructor = DivideExpressionContext;

gapParser.DivideExpressionContext = DivideExpressionContext;

DivideExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

DivideExpressionContext.prototype.Slash = function() {
    return this.getToken(gapParser.Slash, 0);
};

function NewListEvaluationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewListEvaluationContext.prototype = Object.create(ExpressionContext.prototype);
NewListEvaluationContext.prototype.constructor = NewListEvaluationContext;

gapParser.NewListEvaluationContext = NewListEvaluationContext;

NewListEvaluationContext.prototype.listEvaluation = function() {
    return this.getTypedRuleContext(ListEvaluationContext,0);
};

function OrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OrExpressionContext.prototype.constructor = OrExpressionContext;

gapParser.OrExpressionContext = OrExpressionContext;

OrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

OrExpressionContext.prototype.Or = function() {
    return this.getToken(gapParser.Or, 0);
};

function UnaryMinusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

gapParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.Minus = function() {
    return this.getToken(gapParser.Minus, 0);
};

UnaryMinusExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

function PowerExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PowerExpressionContext.prototype.constructor = PowerExpressionContext;

gapParser.PowerExpressionContext = PowerExpressionContext;

PowerExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PowerExpressionContext.prototype.Pow = function() {
    return this.getToken(gapParser.Pow, 0);
};

function EqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
EqExpressionContext.prototype.constructor = EqExpressionContext;

gapParser.EqExpressionContext = EqExpressionContext;

EqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqExpressionContext.prototype.Equals = function() {
    return this.getToken(gapParser.Equals, 0);
};

function InExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InExpressionContext.prototype.constructor = InExpressionContext;

gapParser.InExpressionContext = InExpressionContext;

InExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

InExpressionContext.prototype.In = function() {
    return this.getToken(gapParser.In, 0);
};

function ShorthandFunctionCallContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ShorthandFunctionCallContext.prototype = Object.create(ExpressionContext.prototype);
ShorthandFunctionCallContext.prototype.constructor = ShorthandFunctionCallContext;

gapParser.ShorthandFunctionCallContext = ShorthandFunctionCallContext;

ShorthandFunctionCallContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ShorthandFunctionCallContext.prototype.ShortHandFunction = function() {
    return this.getToken(gapParser.ShortHandFunction, 0);
};

function AddExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

gapParser.AddExpressionContext = AddExpressionContext;

AddExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AddExpressionContext.prototype.Plus = function() {
    return this.getToken(gapParser.Plus, 0);
};

function SubtractExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubtractExpressionContext.prototype = Object.create(ExpressionContext.prototype);
SubtractExpressionContext.prototype.constructor = SubtractExpressionContext;

gapParser.SubtractExpressionContext = SubtractExpressionContext;

SubtractExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SubtractExpressionContext.prototype.Minus = function() {
    return this.getToken(gapParser.Minus, 0);
};

function RangeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RangeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
RangeExpressionContext.prototype.constructor = RangeExpressionContext;

gapParser.RangeExpressionContext = RangeExpressionContext;

RangeExpressionContext.prototype.Range = function() {
    return this.getToken(gapParser.Range, 0);
};

RangeExpressionContext.prototype.Number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Number);
    } else {
        return this.getToken(gapParser.Number, i);
    }
};


RangeExpressionContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};


function FunctionDeclarationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionDeclarationContext.prototype = Object.create(ExpressionContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

gapParser.FunctionDeclarationContext = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.functionDecl = function() {
    return this.getTypedRuleContext(FunctionDeclContext,0);
};

function InputExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InputExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InputExpressionContext.prototype.constructor = InputExpressionContext;

gapParser.InputExpressionContext = InputExpressionContext;

InputExpressionContext.prototype.Input = function() {
    return this.getToken(gapParser.Input, 0);
};

InputExpressionContext.prototype.String = function() {
    return this.getToken(gapParser.String, 0);
};


gapParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 46;
    this.enterRecursionRule(localctx, 46, gapParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 241;
            this.match(gapParser.Minus);
            this.state = 242;
            this.expression(32);
            break;

        case 2:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 243;
            this.match(gapParser.Not);
            this.state = 244;
            this.expression(31);
            break;

        case 3:
            localctx = new AssignmentExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 245;
            this.assignment();
            break;

        case 4:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 246;
            this.match(gapParser.Number);
            break;

        case 5:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 247;
            this.match(gapParser.Boolean);
            break;

        case 6:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 248;
            this.match(gapParser.String);
            break;

        case 7:
            localctx = new FunctionCallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 249;
            this.functionCall();
            this.state = 251;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
            if(la_===1) {
                this.state = 250;
                this.indexes();

            }
            break;

        case 8:
            localctx = new FunctionDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 253;
            this.functionDecl();
            break;

        case 9:
            localctx = new ListExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 254;
            this.list();
            this.state = 256;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            if(la_===1) {
                this.state = 255;
                this.indexes();

            }
            break;

        case 10:
            localctx = new RangeExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 258;
            _la = this._input.LA(1);
            if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 259;
            this.match(gapParser.Range);
            this.state = 260;
            _la = this._input.LA(1);
            if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            break;

        case 11:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 261;
            this.match(gapParser.Identifier);
            this.state = 263;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
            if(la_===1) {
                this.state = 262;
                this.indexes();

            }
            break;

        case 12:
            localctx = new ExpressionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 265;
            this.match(gapParser.OParen);
            this.state = 266;
            this.expression(0);
            this.state = 267;
            this.match(gapParser.CParen);
            this.state = 269;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
            if(la_===1) {
                this.state = 268;
                this.indexes();

            }
            break;

        case 13:
            localctx = new InputExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 271;
            this.match(gapParser.Input);
            this.state = 272;
            this.match(gapParser.OParen);
            this.state = 274;
            _la = this._input.LA(1);
            if(_la===gapParser.String) {
                this.state = 273;
                this.match(gapParser.String);
            }

            this.state = 276;
            this.match(gapParser.CParen);
            break;

        case 14:
            localctx = new TupleDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 277;
            this.tuple();
            break;

        case 15:
            localctx = new ReturnDeclarationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 278;
            this.functionReturnDeclaration();
            break;

        case 16:
            localctx = new NewListEvaluationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 279;
            this.listEvaluation();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 332;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 330;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 282;
                    if (!( this.precpred(this._ctx, 30))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 30)");
                    }
                    this.state = 283;
                    this.match(gapParser.Pow);
                    this.state = 284;
                    this.expression(31);
                    break;

                case 2:
                    localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 285;
                    if (!( this.precpred(this._ctx, 29))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
                    }
                    this.state = 286;
                    this.match(gapParser.Star);
                    this.state = 287;
                    this.expression(30);
                    break;

                case 3:
                    localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 288;
                    if (!( this.precpred(this._ctx, 28))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                    }
                    this.state = 289;
                    this.match(gapParser.Slash);
                    this.state = 290;
                    this.expression(29);
                    break;

                case 4:
                    localctx = new ModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 291;
                    if (!( this.precpred(this._ctx, 27))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                    }
                    this.state = 292;
                    this.match(gapParser.Modulus);
                    this.state = 293;
                    this.expression(28);
                    break;

                case 5:
                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 294;
                    if (!( this.precpred(this._ctx, 26))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                    }
                    this.state = 295;
                    this.match(gapParser.Plus);
                    this.state = 296;
                    this.expression(27);
                    break;

                case 6:
                    localctx = new SubtractExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 297;
                    if (!( this.precpred(this._ctx, 25))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                    }
                    this.state = 298;
                    this.match(gapParser.Minus);
                    this.state = 299;
                    this.expression(26);
                    break;

                case 7:
                    localctx = new GtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 300;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 301;
                    this.match(gapParser.GTEquals);
                    this.state = 302;
                    this.expression(25);
                    break;

                case 8:
                    localctx = new LtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 303;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 304;
                    this.match(gapParser.LTEquals);
                    this.state = 305;
                    this.expression(24);
                    break;

                case 9:
                    localctx = new GtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 306;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 307;
                    this.match(gapParser.GT);
                    this.state = 308;
                    this.expression(23);
                    break;

                case 10:
                    localctx = new LtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 309;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 310;
                    this.match(gapParser.LT);
                    this.state = 311;
                    this.expression(22);
                    break;

                case 11:
                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 312;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 313;
                    this.match(gapParser.Equals);
                    this.state = 314;
                    this.expression(21);
                    break;

                case 12:
                    localctx = new NotEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 315;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 316;
                    this.match(gapParser.NEquals);
                    this.state = 317;
                    this.expression(20);
                    break;

                case 13:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 318;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 319;
                    this.match(gapParser.And);
                    this.state = 320;
                    this.expression(19);
                    break;

                case 14:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 321;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 322;
                    this.match(gapParser.Or);
                    this.state = 323;
                    this.expression(18);
                    break;

                case 15:
                    localctx = new ShorthandFunctionCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 324;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 325;
                    this.match(gapParser.ShortHandFunction);
                    this.state = 326;
                    this.expression(17);
                    break;

                case 16:
                    localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, gapParser.RULE_expression);
                    this.state = 327;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 328;
                    this.match(gapParser.In);
                    this.state = 329;
                    this.expression(16);
                    break;

                } 
            }
            this.state = 334;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.exprList = function() {
    return this.getTypedRuleContext(ExprListContext,0);
};




gapParser.ListContext = ListContext;

gapParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, gapParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335;
        this.match(gapParser.OBracket);
        this.state = 337;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << gapParser.Function) | (1 << gapParser.Input) | (1 << gapParser.Return) | (1 << gapParser.Not) | (1 << gapParser.Minus))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (gapParser.OBracket - 37)) | (1 << (gapParser.OParen - 37)) | (1 << (gapParser.Boolean - 37)) | (1 << (gapParser.Number - 37)) | (1 << (gapParser.Identifier - 37)) | (1 << (gapParser.String - 37)))) !== 0)) {
            this.state = 336;
            this.exprList();
        }

        this.state = 339;
        this.match(gapParser.CBracket);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TupleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_tuple;
    return this;
}

TupleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TupleContext.prototype.constructor = TupleContext;

TupleContext.prototype.Number = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Number);
    } else {
        return this.getToken(gapParser.Number, i);
    }
};


TupleContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Identifier);
    } else {
        return this.getToken(gapParser.Identifier, i);
    }
};





gapParser.TupleContext = TupleContext;

gapParser.prototype.tuple = function() {

    var localctx = new TupleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, gapParser.RULE_tuple);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 351; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 341;
        		this.match(gapParser.OParen);
        		this.state = 342;
        		_la = this._input.LA(1);
        		if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        		    this.consume();
        		}
        		this.state = 347;
        		this._errHandler.sync(this);
        		_la = this._input.LA(1);
        		while(_la===gapParser.Comma) {
        		    this.state = 343;
        		    this.match(gapParser.Comma);
        		    this.state = 344;
        		    _la = this._input.LA(1);
        		    if(!(_la===gapParser.Number || _la===gapParser.Identifier)) {
        		    this._errHandler.recoverInline(this);
        		    }
        		    else {
        		        this.consume();
        		    }
        		    this.state = 349;
        		    this._errHandler.sync(this);
        		    _la = this._input.LA(1);
        		}
        		this.state = 350;
        		this.match(gapParser.CParen);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 353; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,33, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListEvaluationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_listEvaluation;
    return this;
}

ListEvaluationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListEvaluationContext.prototype.constructor = ListEvaluationContext;

ListEvaluationContext.prototype.Identifier = function() {
    return this.getToken(gapParser.Identifier, 0);
};

ListEvaluationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ListEvaluationContext.prototype.Range = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(gapParser.Range);
    } else {
        return this.getToken(gapParser.Range, i);
    }
};





gapParser.ListEvaluationContext = ListEvaluationContext;

gapParser.prototype.listEvaluation = function() {

    var localctx = new ListEvaluationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, gapParser.RULE_listEvaluation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this.match(gapParser.Identifier);
        this.state = 356;
        this.match(gapParser.OBrace);
        this.state = 372; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 357;
            this.match(gapParser.OBracket);
            this.state = 358;
            this.expression(0);
            this.state = 368;
            switch(this._input.LA(1)) {
            case gapParser.Range:
                this.state = 359;
                this.match(gapParser.Range);
                this.state = 360;
                this.expression(0);
                break;
            case gapParser.CBracket:
            case gapParser.Comma:
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===gapParser.Comma) {
                    this.state = 361;
                    this.match(gapParser.Comma);
                    this.state = 362;
                    this.expression(0);
                    this.state = 367;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 370;
            this.match(gapParser.CBracket);
            this.state = 374; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===gapParser.OBracket);
        this.state = 376;
        this.match(gapParser.CBrace);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IndexesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_indexes;
    return this;
}

IndexesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexesContext.prototype.constructor = IndexesContext;

IndexesContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};




gapParser.IndexesContext = IndexesContext;

gapParser.prototype.indexes = function() {

    var localctx = new IndexesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, gapParser.RULE_indexes);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 378;
        		this.match(gapParser.OBracket);
        		this.state = 379;
        		this.expression(0);
        		this.state = 380;
        		this.match(gapParser.CBracket);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 384; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = gapParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.Plus = function() {
    return this.getToken(gapParser.Plus, 0);
};

OperatorContext.prototype.Minus = function() {
    return this.getToken(gapParser.Minus, 0);
};

OperatorContext.prototype.Star = function() {
    return this.getToken(gapParser.Star, 0);
};

OperatorContext.prototype.Slash = function() {
    return this.getToken(gapParser.Slash, 0);
};

OperatorContext.prototype.Modulus = function() {
    return this.getToken(gapParser.Modulus, 0);
};

OperatorContext.prototype.Pow = function() {
    return this.getToken(gapParser.Pow, 0);
};




gapParser.OperatorContext = OperatorContext;

gapParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, gapParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        _la = this._input.LA(1);
        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (gapParser.Pow - 26)) | (1 << (gapParser.Plus - 26)) | (1 << (gapParser.Minus - 26)) | (1 << (gapParser.Star - 26)) | (1 << (gapParser.Slash - 26)) | (1 << (gapParser.Modulus - 26)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


gapParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 23:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

gapParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 30);
		case 1:
			return this.precpred(this._ctx, 29);
		case 2:
			return this.precpred(this._ctx, 28);
		case 3:
			return this.precpred(this._ctx, 27);
		case 4:
			return this.precpred(this._ctx, 26);
		case 5:
			return this.precpred(this._ctx, 25);
		case 6:
			return this.precpred(this._ctx, 24);
		case 7:
			return this.precpred(this._ctx, 23);
		case 8:
			return this.precpred(this._ctx, 22);
		case 9:
			return this.precpred(this._ctx, 21);
		case 10:
			return this.precpred(this._ctx, 20);
		case 11:
			return this.precpred(this._ctx, 19);
		case 12:
			return this.precpred(this._ctx, 18);
		case 13:
			return this.precpred(this._ctx, 17);
		case 14:
			return this.precpred(this._ctx, 16);
		case 15:
			return this.precpred(this._ctx, 15);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.gapParser = gapParser;
