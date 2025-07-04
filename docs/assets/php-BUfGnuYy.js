import{g as a}from"./index-I3dhZJQA.js";function c($,p){for(var n=0;n<p.length;n++){const t=p[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in $)){const i=Object.getOwnPropertyDescriptor(t,e);i&&Object.defineProperty($,e,i.get?i:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty($,Symbol.toStringTag,{value:"Module"}))}var s={exports:{}},o;function u(){return o||(o=1,function($,p){ace.define("ace/snippets/php.snippets",["require","exports","module"],function(n,t,e){e.exports=`snippet ec
	echo \${1};
snippet ns
	namespace \${1:Foo\\Bar\\Baz};
	\${2}
snippet use
	use \${1:Foo\\Bar\\Baz};
	\${2}
snippet c
	\${1:abstract }class \${2:$FILENAME}
	{
		\${3}
	}
snippet i
	interface \${1:$FILENAME}
	{
		\${2}
	}
snippet t.
	$this->\${1}
snippet f
	function \${1:foo}(\${2:array }\${3:$bar})
	{
		\${4}
	}
# method
snippet m
	\${1:abstract }\${2:protected}\${3: static} function \${4:foo}(\${5:array }\${6:$bar})
	{
		\${7}
	}
# setter method
snippet sm
	/**
	 * Sets the value of \${1:foo}
	 *
	 * @param \${2:$1} $$1 \${3:description}
	 *
	 * @return \${4:$FILENAME}
	 */
	\${5:public} function set\${6:$2}(\${7:$2 }$$1)
	{
		$this->\${8:$1} = $$1;
		return $this;
	}\${9}
# getter method
snippet gm
	/**
	 * Gets the value of \${1:foo}
	 *
	 * @return \${2:$1}
	 */
	\${3:public} function get\${4:$2}()
	{
		return $this->\${5:$1};
	}\${6}
#setter
snippet $s
	\${1:$foo}->set\${2:Bar}(\${3});
#getter
snippet $g
	\${1:$foo}->get\${2:Bar}();

# Tertiary conditional
snippet =?:
	$\${1:foo} = \${2:true} ? \${3:a} : \${4};
snippet ?:
	\${1:true} ? \${2:a} : \${3}

snippet C
	$_COOKIE['\${1:variable}']\${2}
snippet E
	$_ENV['\${1:variable}']\${2}
snippet F
	$_FILES['\${1:variable}']\${2}
snippet G
	$_GET['\${1:variable}']\${2}
snippet P
	$_POST['\${1:variable}']\${2}
snippet R
	$_REQUEST['\${1:variable}']\${2}
snippet S
	$_SERVER['\${1:variable}']\${2}
snippet SS
	$_SESSION['\${1:variable}']\${2}

# the following are old ones
snippet inc
	include '\${1:file}';\${2}
snippet inc1
	include_once '\${1:file}';\${2}
snippet req
	require '\${1:file}';\${2}
snippet req1
	require_once '\${1:file}';\${2}
# Start Docblock
snippet /*
	/**
	 * \${1}
	 */
# Class - post doc
snippet doc_cp
	/**
	 * \${1:undocumented class}
	 *
	 * @package \${2:default}
	 * @subpackage \${3:default}
	 * @author \${4:\`g:snips_author\`}
	 */\${5}
# Class Variable - post doc
snippet doc_vp
	/**
	 * \${1:undocumented class variable}
	 *
	 * @var \${2:string}
	 */\${3}
# Class Variable
snippet doc_v
	/**
	 * \${3:undocumented class variable}
	 *
	 * @var \${4:string}
	 */
	\${1:var} $\${2};\${5}
# Class
snippet doc_c
	/**
	 * \${3:undocumented class}
	 *
	 * @package \${4:default}
	 * @subpackage \${5:default}
	 * @author \${6:\`g:snips_author\`}
	 */
	\${1:}class \${2:}
	{
		\${7}
	} // END $1class $2
# Constant Definition - post doc
snippet doc_dp
	/**
	 * \${1:undocumented constant}
	 */\${2}
# Constant Definition
snippet doc_d
	/**
	 * \${3:undocumented constant}
	 */
	define(\${1}, \${2});\${4}
# Function - post doc
snippet doc_fp
	/**
	 * \${1:undocumented function}
	 *
	 * @return \${2:void}
	 * @author \${3:\`g:snips_author\`}
	 */\${4}
# Function signature
snippet doc_s
	/**
	 * \${4:undocumented function}
	 *
	 * @return \${5:void}
	 * @author \${6:\`g:snips_author\`}
	 */
	\${1}function \${2}(\${3});\${7}
# Function
snippet doc_f
	/**
	 * \${4:undocumented function}
	 *
	 * @return \${5:void}
	 * @author \${6:\`g:snips_author\`}
	 */
	\${1}function \${2}(\${3})
	{\${7}
	}
# Header
snippet doc_h
	/**
	 * \${1}
	 *
	 * @author \${2:\`g:snips_author\`}
	 * @version \${3:$Id$}
	 * @copyright \${4:$2}, \`strftime('%d %B, %Y')\`
	 * @package \${5:default}
	 */

# Interface
snippet interface
	/**
	 * \${2:undocumented class}
	 *
	 * @package \${3:default}
	 * @author \${4:\`g:snips_author\`}
	 */
	interface \${1:$FILENAME}
	{
		\${5}
	}
# class ...
snippet class
	/**
	 * \${1}
	 */
	class \${2:$FILENAME}
	{
		\${3}
		/**
		 * \${4}
		 */
		\${5:public} function \${6:__construct}(\${7:argument})
		{
			\${8:// code...}
		}
	}
# define(...)
snippet def
	define('\${1}'\${2});\${3}
# defined(...)
snippet def?
	\${1}defined('\${2}')\${3}
snippet wh
	while (\${1:/* condition */}) {
		\${2:// code...}
	}
# do ... while
snippet do
	do {
		\${2:// code... }
	} while (\${1:/* condition */});
snippet if
	if (\${1:/* condition */}) {
		\${2:// code...}
	}
snippet ife
	if (\${1:/* condition */}) {
		\${2:// code...}
	} else {
		\${3:// code...}
	}
	\${4}
snippet else
	else {
		\${1:// code...}
	}
snippet elseif
	elseif (\${1:/* condition */}) {
		\${2:// code...}
	}
snippet switch
	switch ($\${1:variable}) {
		case '\${2:value}':
			\${3:// code...}
			break;
		\${5}
		default:
			\${4:// code...}
			break;
	}
snippet case
	case '\${1:value}':
		\${2:// code...}
		break;\${3}
snippet for
	for ($\${2:i} = 0; $$2 < \${1:count}; $$2\${3:++}) {
		\${4: // code...}
	}
snippet foreach
	foreach ($\${1:variable} as $\${2:value}) {
		\${3:// code...}
	}
snippet foreachk
	foreach ($\${1:variable} as $\${2:key} => $\${3:value}) {
		\${4:// code...}
	}
# $... = array (...)
snippet array
	$\${1:arrayName} = array('\${2}' => \${3});\${4}
snippet try
	try {
		\${2}
	} catch (\${1:Exception} $e) {
	}
# lambda with closure
snippet lambda
	\${1:static }function (\${2:args}) use (\${3:&$x, $y /*put vars in scope (closure) */}) {
		\${4}
	};
# pre_dump();
snippet pd
	echo '<pre>'; var_dump(\${1}); echo '</pre>';
# pre_dump(); die();
snippet pdd
	echo '<pre>'; var_dump(\${1}); echo '</pre>'; die(\${2:});
snippet vd
	var_dump(\${1});
snippet vdd
	var_dump(\${1}); die(\${2:});
snippet http_redirect
	header ("HTTP/1.1 301 Moved Permanently");
	header ("Location: ".URL);
	exit();
# Getters & Setters
snippet gs
	/**
	 * Gets the value of \${1:foo}
	 *
	 * @return \${2:$1}
	 */
	public function get\${3:$2}()
	{
		return $this->\${4:$1};
	}

	/**
	 * Sets the value of $1
	 *
	 * @param $2 $$1 \${5:description}
	 *
	 * @return \${6:$FILENAME}
	 */
	public function set$3(\${7:$2 }$$1)
	{
		$this->$4 = $$1;
		return $this;
	}\${8}
# anotation, get, and set, useful for doctrine
snippet ags
	/**
	 * \${1:description}
	 *
	 * @\${7}
	 */
	\${2:protected} $\${3:foo};

	public function get\${4:$3}()
	{
		return $this->$3;
	}

	public function set$4(\${5:$4 }$\${6:$3})
	{
		$this->$3 = $$6;
		return $this;
	}
snippet rett
	return true;
snippet retf
	return false;
scope html
snippet <?
	<?php

	\${1}
snippet <?e
	<?php echo \${1} ?>
# this one is for php5.4
snippet <?=
	<?=\${1}?>
snippet ifil
	<?php if (\${1:/* condition */}): ?>
		\${2:<!-- code... -->}
	<?php endif; ?>
snippet ifeil
	<?php if (\${1:/* condition */}): ?>
		\${2:<!-- html... -->}
	<?php else: ?>
		\${3:<!-- html... -->}
	<?php endif; ?>
	\${4}
snippet foreachil
	<?php foreach ($\${1:variable} as $\${2:value}): ?>
		\${3:<!-- html... -->}
	<?php endforeach; ?>
snippet foreachkil
	<?php foreach ($\${1:variable} as $\${2:key} => $\${3:value}): ?>
		\${4:<!-- html... -->}
	<?php endforeach; ?>
scope html-tag
snippet ifil\\n\\
	<?php if (\${1:true}): ?>\${2:code}<?php endif; ?>
snippet ifeil\\n\\
	<?php if (\${1:true}): ?>\${2:code}<?php else: ?>\${3:code}<?php endif; ?>\${4}
`}),ace.define("ace/snippets/php",["require","exports","module","ace/snippets/php.snippets"],function(n,t,e){t.snippetText=n("./php.snippets"),t.scope="php"}),function(){ace.require(["ace/snippets/php"],function(n){$&&($.exports=n)})}()}(s)),s.exports}var r=u();const d=a(r),l=c({__proto__:null,default:d},[r]);export{l as p};
