// Generated from /media/sf_GitHub/gap-lint/gap.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002:\u01a3\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003*\u0003+\u0003+\u0003,\u0003",
    ",\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u0003/\u00030\u00030\u0003",
    "0\u00031\u00031\u00031\u00032\u00032\u00032\u00032\u00032\u00032\u0003",
    "2\u00032\u00032\u00052\u0122\n2\u00033\u00033\u00033\u00063\u0127\n",
    "3\r3\u000e3\u0128\u00053\u012b\n3\u00033\u00033\u00063\u012f\n3\r3\u000e",
    "3\u0130\u00053\u0133\n3\u00034\u00034\u00034\u00074\u0138\n4\f4\u000e",
    "4\u013b\u000b4\u00034\u00034\u00034\u00034\u00074\u0141\n4\f4\u000e",
    "4\u0144\u000b4\u00034\u00054\u0147\n4\u00035\u00035\u00035\u00035\u0003",
    "5\u00035\u00075\u014f\n5\f5\u000e5\u0152\u000b5\u00035\u00035\u0003",
    "5\u00035\u00036\u00066\u0159\n6\r6\u000e6\u015a\u00036\u00066\u015e",
    "\n6\r6\u000e6\u015f\u00036\u00066\u0163\n6\r6\u000e6\u0164\u00076\u0167",
    "\n6\f6\u000e6\u016a\u000b6\u00036\u00066\u016d\n6\r6\u000e6\u016e\u0003",
    "6\u00066\u0172\n6\r6\u000e6\u0173\u00076\u0176\n6\f6\u000e6\u0179\u000b",
    "6\u00036\u00066\u017c\n6\r6\u000e6\u017d\u00056\u0180\n6\u00037\u0003",
    "7\u00077\u0184\n7\f7\u000e7\u0187\u000b7\u00037\u00037\u00037\u0003",
    "7\u00038\u00038\u00038\u00038\u00039\u00039\u00039\u00039\u0003:\u0003",
    ":\u0003:\u0003;\u0003;\u0007;\u019a\n;\f;\u000e;\u019d\u000b;\u0003",
    ";\u0005;\u01a0\n;\u0003<\u0003<\u0006\u0139\u0142\u0150\u0185\u0002",
    "=\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018",
    "/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'",
    "M(O)Q*S+U,W-Y.[/]0_1a2c3e4g5i6k7m8o9q:s\u0002u\u0002w\u0002\u0003\u0002",
    "\u000b\u0006\u00022;B\\aac|\u0003\u0002^^\n\u0002\"\"*+..002;B\\aac",
    "|\u000b\u0002\"\"*+..002;B\\^^aac|\u0004\u0002\f\f\u000f\u000f\u0005",
    "\u0002\u000b\f\u000e\u000f\"\"\b\u0002$$^^ddppttvv\u0003\u00023;\u0003",
    "\u00022;\u01b7\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002",
    "\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002",
    "I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003",
    "\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002",
    "\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002",
    "\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002\u0002",
    "\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002\u0002",
    "_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002c\u0003",
    "\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003\u0002",
    "\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002",
    "\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002\u0002",
    "\u0002q\u0003\u0002\u0002\u0002\u0003y\u0003\u0002\u0002\u0002\u0005",
    "\u0082\u0003\u0002\u0002\u0002\u0007\u0088\u0003\u0002\u0002\u0002\t",
    "\u008e\u0003\u0002\u0002\u0002\u000b\u0091\u0003\u0002\u0002\u0002\r",
    "\u0096\u0003\u0002\u0002\u0002\u000f\u009b\u0003\u0002\u0002\u0002\u0011",
    "\u00a0\u0003\u0002\u0002\u0002\u0013\u00a3\u0003\u0002\u0002\u0002\u0015",
    "\u00aa\u0003\u0002\u0002\u0002\u0017\u00ae\u0003\u0002\u0002\u0002\u0019",
    "\u00b4\u0003\u0002\u0002\u0002\u001b\u00b7\u0003\u0002\u0002\u0002\u001d",
    "\u00ba\u0003\u0002\u0002\u0002\u001f\u00be\u0003\u0002\u0002\u0002!",
    "\u00c1\u0003\u0002\u0002\u0002#\u00c8\u0003\u0002\u0002\u0002%\u00ce",
    "\u0003\u0002\u0002\u0002\'\u00d2\u0003\u0002\u0002\u0002)\u00d5\u0003",
    "\u0002\u0002\u0002+\u00d9\u0003\u0002\u0002\u0002-\u00db\u0003\u0002",
    "\u0002\u0002/\u00de\u0003\u0002\u0002\u00021\u00e1\u0003\u0002\u0002",
    "\u00023\u00e4\u0003\u0002\u0002\u00025\u00e6\u0003\u0002\u0002\u0002",
    "7\u00e8\u0003\u0002\u0002\u00029\u00ea\u0003\u0002\u0002\u0002;\u00ec",
    "\u0003\u0002\u0002\u0002=\u00ee\u0003\u0002\u0002\u0002?\u00f0\u0003",
    "\u0002\u0002\u0002A\u00f2\u0003\u0002\u0002\u0002C\u00f4\u0003\u0002",
    "\u0002\u0002E\u00f6\u0003\u0002\u0002\u0002G\u00f8\u0003\u0002\u0002",
    "\u0002I\u00fa\u0003\u0002\u0002\u0002K\u00fc\u0003\u0002\u0002\u0002",
    "M\u00fe\u0003\u0002\u0002\u0002O\u0100\u0003\u0002\u0002\u0002Q\u0102",
    "\u0003\u0002\u0002\u0002S\u0104\u0003\u0002\u0002\u0002U\u0107\u0003",
    "\u0002\u0002\u0002W\u0109\u0003\u0002\u0002\u0002Y\u010b\u0003\u0002",
    "\u0002\u0002[\u010d\u0003\u0002\u0002\u0002]\u010f\u0003\u0002\u0002",
    "\u0002_\u0112\u0003\u0002\u0002\u0002a\u0115\u0003\u0002\u0002\u0002",
    "c\u0121\u0003\u0002\u0002\u0002e\u0132\u0003\u0002\u0002\u0002g\u0146",
    "\u0003\u0002\u0002\u0002i\u0148\u0003\u0002\u0002\u0002k\u017f\u0003",
    "\u0002\u0002\u0002m\u0181\u0003\u0002\u0002\u0002o\u018c\u0003\u0002",
    "\u0002\u0002q\u0190\u0003\u0002\u0002\u0002s\u0194\u0003\u0002\u0002",
    "\u0002u\u019f\u0003\u0002\u0002\u0002w\u01a1\u0003\u0002\u0002\u0002",
    "yz\u0007h\u0002\u0002z{\u0007w\u0002\u0002{|\u0007p\u0002\u0002|}\u0007",
    "e\u0002\u0002}~\u0007v\u0002\u0002~\u007f\u0007k\u0002\u0002\u007f\u0080",
    "\u0007q\u0002\u0002\u0080\u0081\u0007p\u0002\u0002\u0081\u0004\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0007k\u0002\u0002\u0083\u0084\u0007",
    "p\u0002\u0002\u0084\u0085\u0007r\u0002\u0002\u0085\u0086\u0007w\u0002",
    "\u0002\u0086\u0087\u0007v\u0002\u0002\u0087\u0006\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007n\u0002\u0002\u0089\u008a\u0007q\u0002\u0002",
    "\u008a\u008b\u0007e\u0002\u0002\u008b\u008c\u0007c\u0002\u0002\u008c",
    "\u008d\u0007n\u0002\u0002\u008d\b\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0007k\u0002\u0002\u008f\u0090\u0007h\u0002\u0002\u0090\n\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0007v\u0002\u0002\u0092\u0093\u0007j\u0002",
    "\u0002\u0093\u0094\u0007g\u0002\u0002\u0094\u0095\u0007p\u0002\u0002",
    "\u0095\f\u0003\u0002\u0002\u0002\u0096\u0097\u0007g\u0002\u0002\u0097",
    "\u0098\u0007n\u0002\u0002\u0098\u0099\u0007k\u0002\u0002\u0099\u009a",
    "\u0007h\u0002\u0002\u009a\u000e\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0007g\u0002\u0002\u009c\u009d\u0007n\u0002\u0002\u009d\u009e\u0007",
    "u\u0002\u0002\u009e\u009f\u0007g\u0002\u0002\u009f\u0010\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0007h\u0002\u0002\u00a1\u00a2\u0007k\u0002",
    "\u0002\u00a2\u0012\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007t\u0002",
    "\u0002\u00a4\u00a5\u0007g\u0002\u0002\u00a5\u00a6\u0007v\u0002\u0002",
    "\u00a6\u00a7\u0007w\u0002\u0002\u00a7\u00a8\u0007t\u0002\u0002\u00a8",
    "\u00a9\u0007p\u0002\u0002\u00a9\u0014\u0003\u0002\u0002\u0002\u00aa",
    "\u00ab\u0007h\u0002\u0002\u00ab\u00ac\u0007q\u0002\u0002\u00ac\u00ad",
    "\u0007t\u0002\u0002\u00ad\u0016\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0007y\u0002\u0002\u00af\u00b0\u0007j\u0002\u0002\u00b0\u00b1\u0007",
    "k\u0002\u0002\u00b1\u00b2\u0007n\u0002\u0002\u00b2\u00b3\u0007g\u0002",
    "\u0002\u00b3\u0018\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007f\u0002",
    "\u0002\u00b5\u00b6\u0007q\u0002\u0002\u00b6\u001a\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0007q\u0002\u0002\u00b8\u00b9\u0007f\u0002\u0002",
    "\u00b9\u001c\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007g\u0002\u0002",
    "\u00bb\u00bc\u0007p\u0002\u0002\u00bc\u00bd\u0007f\u0002\u0002\u00bd",
    "\u001e\u0003\u0002\u0002\u0002\u00be\u00bf\u0007k\u0002\u0002\u00bf",
    "\u00c0\u0007p\u0002\u0002\u00c0 \u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0007t\u0002\u0002\u00c2\u00c3\u0007g\u0002\u0002\u00c3\u00c4\u0007",
    "r\u0002\u0002\u00c4\u00c5\u0007g\u0002\u0002\u00c5\u00c6\u0007c\u0002",
    "\u0002\u00c6\u00c7\u0007v\u0002\u0002\u00c7\"\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0007w\u0002\u0002\u00c9\u00ca\u0007p\u0002\u0002\u00ca",
    "\u00cb\u0007v\u0002\u0002\u00cb\u00cc\u0007k\u0002\u0002\u00cc\u00cd",
    "\u0007n\u0002\u0002\u00cd$\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007",
    "p\u0002\u0002\u00cf\u00d0\u0007q\u0002\u0002\u00d0\u00d1\u0007v\u0002",
    "\u0002\u00d1&\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007q\u0002\u0002",
    "\u00d3\u00d4\u0007t\u0002\u0002\u00d4(\u0003\u0002\u0002\u0002\u00d5",
    "\u00d6\u0007c\u0002\u0002\u00d6\u00d7\u0007p\u0002\u0002\u00d7\u00d8",
    "\u0007f\u0002\u0002\u00d8*\u0003\u0002\u0002\u0002\u00d9\u00da\u0007",
    "?\u0002\u0002\u00da,\u0003\u0002\u0002\u0002\u00db\u00dc\u0007>\u0002",
    "\u0002\u00dc\u00dd\u0007@\u0002\u0002\u00dd.\u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0007@\u0002\u0002\u00df\u00e0\u0007?\u0002\u0002\u00e0",
    "0\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007>\u0002\u0002\u00e2\u00e3",
    "\u0007?\u0002\u0002\u00e32\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007",
    "`\u0002\u0002\u00e54\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007#\u0002",
    "\u0002\u00e76\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007@\u0002\u0002",
    "\u00e98\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007>\u0002\u0002\u00eb",
    ":\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007-\u0002\u0002\u00ed<\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0007/\u0002\u0002\u00ef>\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0007,\u0002\u0002\u00f1@\u0003\u0002\u0002",
    "\u0002\u00f2\u00f3\u00071\u0002\u0002\u00f3B\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0007\'\u0002\u0002\u00f5D\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0007}\u0002\u0002\u00f7F\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0007\u007f\u0002\u0002\u00f9H\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u0007]\u0002\u0002\u00fbJ\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007",
    "_\u0002\u0002\u00fdL\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007*\u0002",
    "\u0002\u00ffN\u0003\u0002\u0002\u0002\u0100\u0101\u0007+\u0002\u0002",
    "\u0101P\u0003\u0002\u0002\u0002\u0102\u0103\u0007=\u0002\u0002\u0103",
    "R\u0003\u0002\u0002\u0002\u0104\u0105\u0007<\u0002\u0002\u0105\u0106",
    "\u0007?\u0002\u0002\u0106T\u0003\u0002\u0002\u0002\u0107\u0108\u0007",
    ".\u0002\u0002\u0108V\u0003\u0002\u0002\u0002\u0109\u010a\u00070\u0002",
    "\u0002\u010aX\u0003\u0002\u0002\u0002\u010b\u010c\u0007A\u0002\u0002",
    "\u010cZ\u0003\u0002\u0002\u0002\u010d\u010e\u0007<\u0002\u0002\u010e",
    "\\\u0003\u0002\u0002\u0002\u010f\u0110\u0007/\u0002\u0002\u0110\u0111",
    "\u0007@\u0002\u0002\u0111^\u0003\u0002\u0002\u0002\u0112\u0113\u0007",
    "0\u0002\u0002\u0113\u0114\u00070\u0002\u0002\u0114`\u0003\u0002\u0002",
    "\u0002\u0115\u0116\u0007#\u0002\u0002\u0116\u0117\u00070\u0002\u0002",
    "\u0117b\u0003\u0002\u0002\u0002\u0118\u0119\u0007v\u0002\u0002\u0119",
    "\u011a\u0007t\u0002\u0002\u011a\u011b\u0007w\u0002\u0002\u011b\u0122",
    "\u0007g\u0002\u0002\u011c\u011d\u0007h\u0002\u0002\u011d\u011e\u0007",
    "c\u0002\u0002\u011e\u011f\u0007n\u0002\u0002\u011f\u0120\u0007u\u0002",
    "\u0002\u0120\u0122\u0007g\u0002\u0002\u0121\u0118\u0003\u0002\u0002",
    "\u0002\u0121\u011c\u0003\u0002\u0002\u0002\u0122d\u0003\u0002\u0002",
    "\u0002\u0123\u012a\u0005u;\u0002\u0124\u0126\u00070\u0002\u0002\u0125",
    "\u0127\u0005w<\u0002\u0126\u0125\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0003\u0002\u0002\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0128\u0129",
    "\u0003\u0002\u0002\u0002\u0129\u012b\u0003\u0002\u0002\u0002\u012a\u0124",
    "\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u0133",
    "\u0003\u0002\u0002\u0002\u012c\u012e\u00070\u0002\u0002\u012d\u012f",
    "\u0005w<\u0002\u012e\u012d\u0003\u0002\u0002\u0002\u012f\u0130\u0003",
    "\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0130\u0131\u0003",
    "\u0002\u0002\u0002\u0131\u0133\u0003\u0002\u0002\u0002\u0132\u0123\u0003",
    "\u0002\u0002\u0002\u0132\u012c\u0003\u0002\u0002\u0002\u0133f\u0003",
    "\u0002\u0002\u0002\u0134\u0139\u0007$\u0002\u0002\u0135\u0138\u0005",
    "s:\u0002\u0136\u0138\u000b\u0002\u0002\u0002\u0137\u0135\u0003\u0002",
    "\u0002\u0002\u0137\u0136\u0003\u0002\u0002\u0002\u0138\u013b\u0003\u0002",
    "\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u0139\u0137\u0003\u0002",
    "\u0002\u0002\u013a\u013c\u0003\u0002\u0002\u0002\u013b\u0139\u0003\u0002",
    "\u0002\u0002\u013c\u0147\u0007$\u0002\u0002\u013d\u0142\u0007)\u0002",
    "\u0002\u013e\u0141\u0005s:\u0002\u013f\u0141\u000b\u0002\u0002\u0002",
    "\u0140\u013e\u0003\u0002\u0002\u0002\u0140\u013f\u0003\u0002\u0002\u0002",
    "\u0141\u0144\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002",
    "\u0142\u0140\u0003\u0002\u0002\u0002\u0143\u0145\u0003\u0002\u0002\u0002",
    "\u0144\u0142\u0003\u0002\u0002\u0002\u0145\u0147\u0007)\u0002\u0002",
    "\u0146\u0134\u0003\u0002\u0002\u0002\u0146\u013d\u0003\u0002\u0002\u0002",
    "\u0147h\u0003\u0002\u0002\u0002\u0148\u0149\u0007$\u0002\u0002\u0149",
    "\u014a\u0007$\u0002\u0002\u014a\u014b\u0007$\u0002\u0002\u014b\u0150",
    "\u0003\u0002\u0002\u0002\u014c\u014f\u0005s:\u0002\u014d\u014f\u000b",
    "\u0002\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002\u014e\u014d\u0003",
    "\u0002\u0002\u0002\u014f\u0152\u0003\u0002\u0002\u0002\u0150\u0151\u0003",
    "\u0002\u0002\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0151\u0153\u0003",
    "\u0002\u0002\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0153\u0154\u0007",
    "$\u0002\u0002\u0154\u0155\u0007$\u0002\u0002\u0155\u0156\u0007$\u0002",
    "\u0002\u0156j\u0003\u0002\u0002\u0002\u0157\u0159\t\u0002\u0002\u0002",
    "\u0158\u0157\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002",
    "\u015a\u0158\u0003\u0002\u0002\u0002\u015a\u015b\u0003\u0002\u0002\u0002",
    "\u015b\u0168\u0003\u0002\u0002\u0002\u015c\u015e\t\u0003\u0002\u0002",
    "\u015d\u015c\u0003\u0002\u0002\u0002\u015e\u015f\u0003\u0002\u0002\u0002",
    "\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002",
    "\u0160\u0162\u0003\u0002\u0002\u0002\u0161\u0163\t\u0004\u0002\u0002",
    "\u0162\u0161\u0003\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002\u0002",
    "\u0164\u0162\u0003\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002",
    "\u0165\u0167\u0003\u0002\u0002\u0002\u0166\u015d\u0003\u0002\u0002\u0002",
    "\u0167\u016a\u0003\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u0180\u0003\u0002\u0002\u0002",
    "\u016a\u0168\u0003\u0002\u0002\u0002\u016b\u016d\t\u0003\u0002\u0002",
    "\u016c\u016b\u0003\u0002\u0002\u0002\u016d\u016e\u0003\u0002\u0002\u0002",
    "\u016e\u016c\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002",
    "\u016f\u0171\u0003\u0002\u0002\u0002\u0170\u0172\t\u0005\u0002\u0002",
    "\u0171\u0170\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002",
    "\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002",
    "\u0174\u0176\u0003\u0002\u0002\u0002\u0175\u016c\u0003\u0002\u0002\u0002",
    "\u0176\u0179\u0003\u0002\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002",
    "\u0177\u0178\u0003\u0002\u0002\u0002\u0178\u017b\u0003\u0002\u0002\u0002",
    "\u0179\u0177\u0003\u0002\u0002\u0002\u017a\u017c\t\u0002\u0002\u0002",
    "\u017b\u017a\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002",
    "\u017d\u017b\u0003\u0002\u0002\u0002\u017d\u017e\u0003\u0002\u0002\u0002",
    "\u017e\u0180\u0003\u0002\u0002\u0002\u017f\u0158\u0003\u0002\u0002\u0002",
    "\u017f\u0177\u0003\u0002\u0002\u0002\u0180l\u0003\u0002\u0002\u0002",
    "\u0181\u0185\u0007%\u0002\u0002\u0182\u0184\u000b\u0002\u0002\u0002",
    "\u0183\u0182\u0003\u0002\u0002\u0002\u0184\u0187\u0003\u0002\u0002\u0002",
    "\u0185\u0186\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002",
    "\u0186\u0188\u0003\u0002\u0002\u0002\u0187\u0185\u0003\u0002\u0002\u0002",
    "\u0188\u0189\t\u0006\u0002\u0002\u0189\u018a\u0003\u0002\u0002\u0002",
    "\u018a\u018b\b7\u0002\u0002\u018bn\u0003\u0002\u0002\u0002\u018c\u018d",
    "\t\u0007\u0002\u0002\u018d\u018e\u0003\u0002\u0002\u0002\u018e\u018f",
    "\b8\u0002\u0002\u018fp\u0003\u0002\u0002\u0002\u0190\u0191\t\u0006\u0002",
    "\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0193\b9\u0002\u0002",
    "\u0193r\u0003\u0002\u0002\u0002\u0194\u0195\u0007^\u0002\u0002\u0195",
    "\u0196\t\b\u0002\u0002\u0196t\u0003\u0002\u0002\u0002\u0197\u019b\t",
    "\t\u0002\u0002\u0198\u019a\u0005w<\u0002\u0199\u0198\u0003\u0002\u0002",
    "\u0002\u019a\u019d\u0003\u0002\u0002\u0002\u019b\u0199\u0003\u0002\u0002",
    "\u0002\u019b\u019c\u0003\u0002\u0002\u0002\u019c\u01a0\u0003\u0002\u0002",
    "\u0002\u019d\u019b\u0003\u0002\u0002\u0002\u019e\u01a0\u00072\u0002",
    "\u0002\u019f\u0197\u0003\u0002\u0002\u0002\u019f\u019e\u0003\u0002\u0002",
    "\u0002\u01a0v\u0003\u0002\u0002\u0002\u01a1\u01a2\t\n\u0002\u0002\u01a2",
    "x\u0003\u0002\u0002\u0002\u001b\u0002\u0121\u0128\u012a\u0130\u0132",
    "\u0137\u0139\u0140\u0142\u0146\u014e\u0150\u015a\u015f\u0164\u0168\u016e",
    "\u0173\u0177\u017d\u017f\u0185\u019b\u019f\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

function gapLexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

gapLexer.prototype = Object.create(antlr4.Lexer.prototype);
gapLexer.prototype.constructor = gapLexer;

gapLexer.EOF = antlr4.Token.EOF;
gapLexer.Function = 1;
gapLexer.Input = 2;
gapLexer.Local = 3;
gapLexer.If = 4;
gapLexer.Then = 5;
gapLexer.Elif = 6;
gapLexer.Else = 7;
gapLexer.Fi = 8;
gapLexer.Return = 9;
gapLexer.For = 10;
gapLexer.While = 11;
gapLexer.Do = 12;
gapLexer.Od = 13;
gapLexer.End = 14;
gapLexer.In = 15;
gapLexer.Repeat = 16;
gapLexer.Until = 17;
gapLexer.Not = 18;
gapLexer.Or = 19;
gapLexer.And = 20;
gapLexer.Equals = 21;
gapLexer.NEquals = 22;
gapLexer.GTEquals = 23;
gapLexer.LTEquals = 24;
gapLexer.Pow = 25;
gapLexer.Excl = 26;
gapLexer.GT = 27;
gapLexer.LT = 28;
gapLexer.Plus = 29;
gapLexer.Minus = 30;
gapLexer.Star = 31;
gapLexer.Slash = 32;
gapLexer.Modulus = 33;
gapLexer.OBrace = 34;
gapLexer.CBrace = 35;
gapLexer.OBracket = 36;
gapLexer.CBracket = 37;
gapLexer.OParen = 38;
gapLexer.CParen = 39;
gapLexer.SemiColon = 40;
gapLexer.Assign = 41;
gapLexer.Comma = 42;
gapLexer.Dot = 43;
gapLexer.QuestionMark = 44;
gapLexer.Colon = 45;
gapLexer.ShortHandFunction = 46;
gapLexer.Range = 47;
gapLexer.ComponentObject = 48;
gapLexer.Boolean = 49;
gapLexer.Number = 50;
gapLexer.Quote = 51;
gapLexer.TrippleQuote = 52;
gapLexer.Identifier = 53;
gapLexer.Comment = 54;
gapLexer.Space = 55;
gapLexer.EOL = 56;


gapLexer.modeNames = ["DEFAULT_MODE"];

gapLexer.literalNames = [null, "'function'", "'input'", "'local'", "'if'",
    "'then'", "'elif'", "'else'", "'fi'", "'return'",
    "'for'", "'while'", "'do'", "'od'", "'end'", "'in'",
    "'repeat'", "'until'", "'not'", "'or'", "'and'",
    "'='", "'<>'", "'>='", "'<='", "'^'", "'!'", "'>'",
    "'<'", "'+'", "'-'", "'*'", "'/'", "'%'", "'{'",
    "'}'", "'['", "']'", "'('", "')'", "';'", "':='",
    "','", "'.'", "'?'", "':'", "'->'", "'..'", "'!.'"];

gapLexer.symbolicNames = [null, "Function", "Input", "Local", "If", "Then",
    "Elif", "Else", "Fi", "Return", "For", "While",
    "Do", "Od", "End", "In", "Repeat", "Until", "Not",
    "Or", "And", "Equals", "NEquals", "GTEquals",
    "LTEquals", "Pow", "Excl", "GT", "LT", "Plus",
    "Minus", "Star", "Slash", "Modulus", "OBrace",
    "CBrace", "OBracket", "CBracket", "OParen", "CParen",
    "SemiColon", "Assign", "Comma", "Dot", "QuestionMark",
    "Colon", "ShortHandFunction", "Range", "ComponentObject",
    "Boolean", "Number", "Quote", "TrippleQuote",
    "Identifier", "Comment", "Space", "EOL"];

gapLexer.ruleNames = ["Function", "Input", "Local", "If", "Then", "Elif",
    "Else", "Fi", "Return", "For", "While", "Do", "Od",
    "End", "In", "Repeat", "Until", "Not", "Or", "And",
    "Equals", "NEquals", "GTEquals", "LTEquals", "Pow",
    "Excl", "GT", "LT", "Plus", "Minus", "Star", "Slash",
    "Modulus", "OBrace", "CBrace", "OBracket", "CBracket",
    "OParen", "CParen", "SemiColon", "Assign", "Comma",
    "Dot", "QuestionMark", "Colon", "ShortHandFunction",
    "Range", "ComponentObject", "Boolean", "Number",
    "Quote", "TrippleQuote", "Identifier", "Comment",
    "Space", "EOL", "ESC", "Integer", "Digit"];

gapLexer.grammarFileName = "gap.g4";

exports.gapLexer = gapLexer;
                                                                                                                                                                                                                           "Dot", "QuestionMark", "Colon", "ShortHandFunction", 
                           "Range", "ComponentObject", "Boolean", "Number", 
                           "Quote", "TrippleQuote", "Identifier", "Comment", 
                           "Space", "EOL" ];

gapLexer.ruleNames = [ "Function", "Input", "Local", "If", "Then", "Elif", 
                       "Else", "Fi", "Return", "For", "While", "Do", "Od", 
                       "End", "In", "Repeat", "Until", "Not", "Or", "And", 
                       "Equals", "NEquals", "GTEquals", "LTEquals", "Pow", 
                       "Excl", "GT", "LT", "Plus", "Minus", "Star", "Slash", 
                       "Modulus", "OBrace", "CBrace", "OBracket", "CBracket", 
                       "OParen", "CParen", "SemiColon", "Assign", "Comparison", 
                       "Comma", "Dot", "QuestionMark", "Colon", "ShortHandFunction", 
                       "Range", "ComponentObject", "Boolean", "Number", 
                       "Quote", "TrippleQuote", "Identifier", "Comment", 
                       "Space", "EOL", "ESC", "Integer", "Digit" ];

gapLexer.grammarFileName = "gap.g4";



exports.gapLexer = gapLexer;

