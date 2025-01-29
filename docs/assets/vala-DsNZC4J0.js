import{g as l}from"./index-CU2Byj_S.js";function p(a,r){for(var t=0;t<r.length;t++){const e=r[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in a)){const o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(a,n,o.get?o:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var c={exports:{}},i;function g(){return i||(i=1,function(a,r){ace.define("ace/snippets/vala",["require","exports","module"],function(t,e,n){e.snippets=[{content:`case \${1:condition}:
	$0
	break;
`,name:"case",scope:"vala",tabTrigger:"case"},{content:`/**
 * \${6}
 */
\${1:public} class \${2:MethodName}\${3: : GLib.Object} {

	/**
	 * \${7}
	 */
	public \${2}(\${4}) {
		\${5}
	}

	$0
}`,name:"class",scope:"vala",tabTrigger:"class"},{content:`(\${1}) => {
	\${0}
}
`,name:"closure",scope:"vala",tabTrigger:"=>"},{content:`/*
 * $0
 */`,name:"Comment (multiline)",scope:"vala",tabTrigger:"/*"},{content:`Console.WriteLine($1);
$0`,name:"Console.WriteLine (writeline)",scope:"vala",tabTrigger:"writeline"},{content:'[DBus(name = "$0")]',name:"DBus annotation",scope:"vala",tabTrigger:"[DBus"},{content:"delegate ${1:void} ${2:DelegateName}($0);",name:"delegate",scope:"vala",tabTrigger:"delegate"},{content:`do {
	$0
} while ($1);
`,name:"do while",scope:"vala",tabTrigger:"dowhile"},{content:`/**
 * $0
 */`,name:"DocBlock",scope:"vala",tabTrigger:"/**"},{content:`else if ($1) {
	$0
}
`,name:"else if (elseif)",scope:"vala",tabTrigger:"elseif"},{content:`else {
	$0
}`,name:"else",scope:"vala",tabTrigger:"else"},{content:`enum {$1:EnumName} {
	$0
}`,name:"enum",scope:"vala",tabTrigger:"enum"},{content:`public errordomain \${1:Error} {
	$0
}`,name:"error domain",scope:"vala",tabTrigger:"errordomain"},{content:`for ($1;$2;$3) {
	$0
}`,name:"for",scope:"vala",tabTrigger:"for"},{content:`foreach ($1 in $2) {
	$0
}`,name:"foreach",scope:"vala",tabTrigger:"foreach"},{content:"Gee.ArrayList<${1:G}>($0);",name:"Gee.ArrayList",scope:"vala",tabTrigger:"ArrayList"},{content:"Gee.HashMap<${1:K},${2:V}>($0);",name:"Gee.HashMap",scope:"vala",tabTrigger:"HashMap"},{content:"Gee.HashSet<${1:G}>($0);",name:"Gee.HashSet",scope:"vala",tabTrigger:"HashSet"},{content:`if ($1) {
	$0
}`,name:"if",scope:"vala",tabTrigger:"if"},{content:`interface \${1:InterfaceName}{$2: : SuperInterface} {
	$0
}`,name:"interface",scope:"vala",tabTrigger:"interface"},{content:`public static int main(string [] argv) {
	\${0}
	return 0;
}`,name:"Main function",scope:"vala",tabTrigger:"main"},{content:`namespace $1 {
	$0
}
`,name:"namespace (ns)",scope:"vala",tabTrigger:"ns"},{content:"stdout.printf($0);",name:"printf",scope:"vala",tabTrigger:"printf"},{content:`\${1:public} \${2:Type} \${3:Name} {
	set {
		$0
	}
	get {

	}
}`,name:"property (prop)",scope:"vala",tabTrigger:"prop"},{content:`\${1:public} \${2:Type} \${3:Name} {
	get {
		$0
	}
}`,name:"read-only property (roprop)",scope:"vala",tabTrigger:"roprop"},{content:'@"${1:\\$var}"',name:"String template (@)",scope:"vala",tabTrigger:"@"},{content:`struct \${1:StructName} {
	$0
}`,name:"struct",scope:"vala",tabTrigger:"struct"},{content:`switch ($1) {
	$0
}`,name:"switch",scope:"vala",tabTrigger:"switch"},{content:`try {
	$2
} catch (\${1:Error} e) {
	$0
}`,name:"try/catch",scope:"vala",tabTrigger:"try"},{content:'"""$0""";',name:'Verbatim string (""")',scope:"vala",tabTrigger:"verbatim"},{content:`while ($1) {
	$0
}`,name:"while",scope:"vala",tabTrigger:"while"}],e.scope=""}),function(){ace.require(["ace/snippets/vala"],function(t){a.exports=t})}()}(c)),c.exports}var s=g();const $=l(s),b=p({__proto__:null,default:$},[s]);export{b as v};
