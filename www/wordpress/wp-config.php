<?php
/**
 * WordPress基础配置文件。
 *
 * 这个文件被安装程序用于自动生成wp-config.php配置文件，
 * 您可以不使用网站，您需要手动复制这个文件，
 * 并重命名为“wp-config.php”，然后填入相关信息。
 *
 * 本文件包含以下配置选项：
 *
 * * MySQL设置
 * * 密钥
 * * 数据库表名前缀
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL 设置 - 具体信息来自您正在使用的主机 ** //
/** WordPress数据库的名称 */
define('DB_NAME', 'zhengdou');

/** MySQL数据库用户名 */
define('DB_USER', 'root');

/** MySQL数据库密码 */
define('DB_PASSWORD', 'root');

/** MySQL主机 */
define('DB_HOST', '127.0.0.1');

/** 创建数据表时默认的文字编码 */
define('DB_CHARSET', 'utf8mb4');

/** 数据库整理类型。如不确定请勿更改 */
define('DB_COLLATE', '');

/**#@+
 * 身份认证密钥与盐。
 *
 * 修改为任意独一无二的字串！
 * 或者直接访问{@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org密钥生成服务}
 * 任何修改都会导致所有cookies失效，所有用户将必须重新登录。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '@f~iX`Ht)*PxO(*gs8xb%5R2Fy+ia6STvR5:=hEMqCC4qC.fH=>eO x%Iof)iqFQ');
define('SECURE_AUTH_KEY',  't@`9fkSa2por,>7%x%)3aNod20,Ob<NT@|x13ut?}`Cnl?g&BoQq>+h0lHiXb$+F');
define('LOGGED_IN_KEY',    'G>elTX4<dq5^40|XhU5KWKmBGk%;zA.+f]djo*R-}+UKJ$`zzX+c-p2.+QNMz|o-');
define('NONCE_KEY',        '>!yr(IH6zq&@3`,*=t(rZ[4H&r~*&h<T%W-u$P>07J/|7DD|}oN@E-<_.^O) F.)');
define('AUTH_SALT',        'r&0w%<GNOPI&IO6oUA+q7/v@@Y{0>jB#LEV`WfvX^6YD$0!~*iO>axx5*Hs0syN#');
define('SECURE_AUTH_SALT', 'X7Lq/6Fj0)H;F.hfF}br.E.:$RKi&SwE=@PA$J!}IuWl!=U0w#,{-f-.bPr4%]^+');
define('LOGGED_IN_SALT',   'tSv6L~ND_;(Lz[cB4Bvz?J[r/F%W#,mzfW&NBA,6Ajk$J;T,,h ^2xX.%2Q[Tw?S');
define('NONCE_SALT',       'Y{jQ=C|PHBGk.Tm5G|vpaZ>0<.NiT[,vdgwH|kGT%;2{hhWde=R!GgkaDo cc8+y');

/**#@-*/

/**
 * WordPress数据表前缀。
 *
 * 如果您有在同一数据库内安装多个WordPress的需求，请为每个WordPress设置
 * 不同的数据表前缀。前缀名只能为数字、字母加下划线。
 */
$table_prefix  = 'wp_';

/**
 * 开发者专用：WordPress调试模式。
 *
 * 将这个值改为true，WordPress将显示所有用于开发的提示。
 * 强烈建议插件开发者在开发环境中启用WP_DEBUG。
 *
 * 要获取其他能用于调试的信息，请访问Codex。
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* 好了！请不要再继续编辑。请保存本文件。使用愉快！ */

/** WordPress目录的绝对路径。 */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** 设置WordPress变量和包含文件。 */
require_once(ABSPATH . 'wp-settings.php');
