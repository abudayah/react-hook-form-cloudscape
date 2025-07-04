import{g as c}from"./index-I3dhZJQA.js";function d(o,s){for(var t=0;t<s.length;t++){const e=s[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in o)){const i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(o,n,i.get?i:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var r={exports:{}},p;function $(){return p||(p=1,function(o,s){ace.define("ace/snippets/robot.snippets",["require","exports","module"],function(t,e,n){n.exports=`# scope: robot
### Sections
snippet settingssection
description *** Settings *** section
	*** Settings ***
	Library    \${1}

snippet keywordssection
description *** Keywords *** section
	*** Keywords ***
	\${1:Keyword Name}
	    [Arguments]    \\\${\${2:Example Arg 1}}
	
snippet testcasessection
description *** Test Cases *** section
	*** Test Cases ***
	\${1:First Test Case}
	    \${2:Log    Example Arg}

snippet variablessection
description *** Variables *** section
	*** Variables ***
	\\\${\${1:Variable Name}}=    \${2:Variable Value}

### Helpful keywords
snippet testcase
description A test case
	\${1:Test Case Name}
	    \${2:Log    Example log message}
	
snippet keyword
description A keyword
	\${1:Example Keyword}
	    [Arguments]    \\\${\${2:Example Arg 1}}

### Built Ins
snippet forinr
description For In Range Loop
	FOR    \\\${\${1:Index}}    IN RANGE     \\\${\${2:10}}
	    Log     \\\${\${1:Index}}
	END

snippet forin
description For In Loop
	FOR    \\\${\${1:Item}}    IN     @{\${2:List Variable}}
	    Log     \\\${\${1:Item}}
	END

snippet if
description If Statement
	IF    \${1:condition}
	    \${2:Do something}
	END

snippet else
description If Statement
	IF    \${1:Condition}
	    \${2:Do something}
	ELSE
	    \${3:Otherwise do this}
	END

snippet elif
description Else-If Statement
	IF    \${1:Condition 1}
	    \${2:Do something}
	ELSE IF    \${3:Condition 2}
	    \${4:Do something else}
	END
`}),ace.define("ace/snippets/robot",["require","exports","module","ace/snippets/robot.snippets"],function(t,e,n){e.snippetText=t("./robot.snippets"),e.scope="robot"}),function(){ace.require(["ace/snippets/robot"],function(t){o&&(o.exports=t)})}()}(r)),r.exports}var a=$();const f=c(a),u=d({__proto__:null,default:f},[a]);export{u as r};
