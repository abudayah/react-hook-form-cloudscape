import{g as o}from"./index-I3dhZJQA.js";function $(l,i){for(var e=0;e<i.length;e++){const t=i[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in l)){const s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(l,n,s.get?s:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var r={exports:{}},p;function g(){return p||(p=1,function(l,i){ace.define("ace/snippets/lsl.snippets",["require","exports","module"],function(e,t,n){n.exports=`snippet @
	@\${1:label};
snippet CAMERA_ACTIVE
	CAMERA_ACTIVE, \${1:integer isActive}, $0
snippet CAMERA_BEHINDNESS_ANGLE
	CAMERA_BEHINDNESS_ANGLE, \${1:float degrees}, $0
snippet CAMERA_BEHINDNESS_LAG
	CAMERA_BEHINDNESS_LAG, \${1:float seconds}, $0
snippet CAMERA_DISTANCE
	CAMERA_DISTANCE, \${1:float meters}, $0
snippet CAMERA_FOCUS
	CAMERA_FOCUS, \${1:vector position}, $0
snippet CAMERA_FOCUS_LAG
	CAMERA_FOCUS_LAG, \${1:float seconds}, $0
snippet CAMERA_FOCUS_LOCKED
	CAMERA_FOCUS_LOCKED, \${1:integer isLocked}, $0
snippet CAMERA_FOCUS_OFFSET
	CAMERA_FOCUS_OFFSET, \${1:vector meters}, $0
snippet CAMERA_FOCUS_THRESHOLD
	CAMERA_FOCUS_THRESHOLD, \${1:float meters}, $0
snippet CAMERA_PITCH
	CAMERA_PITCH, \${1:float degrees}, $0
snippet CAMERA_POSITION
	CAMERA_POSITION, \${1:vector position}, $0
snippet CAMERA_POSITION_LAG
	CAMERA_POSITION_LAG, \${1:float seconds}, $0
snippet CAMERA_POSITION_LOCKED
	CAMERA_POSITION_LOCKED, \${1:integer isLocked}, $0
snippet CAMERA_POSITION_THRESHOLD
	CAMERA_POSITION_THRESHOLD, \${1:float meters}, $0
snippet CHARACTER_AVOIDANCE_MODE
	CHARACTER_AVOIDANCE_MODE, \${1:integer flags}, $0
snippet CHARACTER_DESIRED_SPEED
	CHARACTER_DESIRED_SPEED, \${1:float speed}, $0
snippet CHARACTER_DESIRED_TURN_SPEED
	CHARACTER_DESIRED_TURN_SPEED, \${1:float speed}, $0
snippet CHARACTER_LENGTH
	CHARACTER_LENGTH, \${1:float length}, $0
snippet CHARACTER_MAX_TURN_RADIUS
	CHARACTER_MAX_TURN_RADIUS, \${1:float radius}, $0
snippet CHARACTER_ORIENTATION
	CHARACTER_ORIENTATION, \${1:integer orientation}, $0
snippet CHARACTER_RADIUS
	CHARACTER_RADIUS, \${1:float radius}, $0
snippet CHARACTER_STAY_WITHIN_PARCEL
	CHARACTER_STAY_WITHIN_PARCEL, \${1:boolean stay}, $0
snippet CHARACTER_TYPE
	CHARACTER_TYPE, \${1:integer type}, $0
snippet HTTP_BODY_MAXLENGTH
	HTTP_BODY_MAXLENGTH, \${1:integer length}, $0
snippet HTTP_CUSTOM_HEADER
	HTTP_CUSTOM_HEADER, \${1:string name}, \${2:string value}, $0
snippet HTTP_METHOD
	HTTP_METHOD, \${1:string method}, $0
snippet HTTP_MIMETYPE
	HTTP_MIMETYPE, \${1:string mimeType}, $0
snippet HTTP_PRAGMA_NO_CACHE
	HTTP_PRAGMA_NO_CACHE, \${1:integer send_header}, $0
snippet HTTP_VERBOSE_THROTTLE
	HTTP_VERBOSE_THROTTLE, \${1:integer noisy}, $0
snippet HTTP_VERIFY_CERT
	HTTP_VERIFY_CERT, \${1:integer verify}, $0
snippet RC_DATA_FLAGS
	RC_DATA_FLAGS, \${1:integer flags}, $0
snippet RC_DETECT_PHANTOM
	RC_DETECT_PHANTOM, \${1:integer dectedPhantom}, $0
snippet RC_MAX_HITS
	RC_MAX_HITS, \${1:integer maxHits}, $0
snippet RC_REJECT_TYPES
	RC_REJECT_TYPES, \${1:integer filterMask}, $0
snippet at_rot_target
	at_rot_target(\${1:integer handle}, \${2:rotation targetrot}, \${3:rotation ourrot})
	{
		$0
	}
snippet at_target
	at_target(\${1:integer tnum}, \${2:vector targetpos}, \${3:vector ourpos})
	{
		$0
	}
snippet attach
	attach(\${1:key id})
	{
		$0
	}
snippet changed
	changed(\${1:integer change})
	{
		$0
	}
snippet collision
	collision(\${1:integer index})
	{
		$0
	}
snippet collision_end
	collision_end(\${1:integer index})
	{
		$0
	}
snippet collision_start
	collision_start(\${1:integer index})
	{
		$0
	}
snippet control
	control(\${1:key id}, \${2:integer level}, \${3:integer edge})
	{
		$0
	}
snippet dataserver
	dataserver(\${1:key query_id}, \${2:string data})
	{
		$0
	}
snippet do
	do
	{
		$0
	}
	while (\${1:condition});
snippet else
	else
	{
		$0
	}
snippet email
	email(\${1:string time}, \${2:string address}, \${3:string subject}, \${4:string message}, \${5:integer num_left})
	{
		$0
	}
snippet experience_permissions
	experience_permissions(\${1:key agent_id})
	{
		$0
	}
snippet experience_permissions_denied
	experience_permissions_denied(\${1:key agent_id}, \${2:integer reason})
	{
		$0
	}
snippet for
	for (\${1:start}; \${3:condition}; \${3:step})
	{
		$0
	}
snippet http_request
	http_request(\${1:key request_id}, \${2:string method}, \${3:string body})
	{
		$0
	}
snippet http_response
	http_response(\${1:key request_id}, \${2:integer status}, \${3:list metadata}, \${4:string body})
	{
		$0
	}
snippet if
	if (\${1:condition})
	{
		$0
	}
snippet jump
	jump \${1:label};
snippet land_collision
	land_collision(\${1:vector pos})
	{
		$0
	}
snippet land_collision_end
	land_collision_end(\${1:vector pos})
	{
		$0
	}
snippet land_collision_start
	land_collision_start(\${1:vector pos})
	{
		$0
	}
snippet link_message
	link_message(\${1:integer sender_num}, \${2:integer num}, \${3:string str}, \${4:key id})
	{
		$0
	}
snippet listen
	listen(\${1:integer channel}, \${2:string name}, \${3:key id}, \${4:string message})
	{
		$0
	}
snippet llAbs
	llAbs(\${1:integer val})
snippet llAcos
	llAcos(\${1:float val})
snippet llAddToLandBanList
	llAddToLandBanList(\${1:key agent}, \${2:float hours});
	$0
snippet llAddToLandPassList
	llAddToLandPassList(\${1:key agent}, \${2:float hours});
	$0
snippet llAdjustSoundVolume
	llAdjustSoundVolume(\${1:float volume});
	$0
snippet llAgentInExperience
	llAgentInExperience(\${1:key agent})
snippet llAllowInventoryDrop
	llAllowInventoryDrop(\${1:integer add});
	$0
snippet llAngleBetween
	llAngleBetween(\${1:rotation a}, \${2:rotation b})
snippet llApplyImpulse
	llApplyImpulse(\${1:vector force}, \${2:integer local});
	$0
snippet llApplyRotationalImpulse
	llApplyRotationalImpulse(\${1:vector force}, \${2:integer local});
	$0
snippet llAsin
	llAsin(\${1:float val})
snippet llAtan2
	llAtan2(\${1:float y}, \${2:float x})
snippet llAttachToAvatar
	llAttachToAvatar(\${1:integer attach_point});
	$0
snippet llAttachToAvatarTemp
	llAttachToAvatarTemp(\${1:integer attach_point});
	$0
snippet llAvatarOnLinkSitTarget
	llAvatarOnLinkSitTarget(\${1:integer link})
snippet llAvatarOnSitTarget
	llAvatarOnSitTarget()
snippet llAxes2Rot
	llAxes2Rot(\${1:vector fwd}, \${2:vector left}, \${3:vector up})
snippet llAxisAngle2Rot
	llAxisAngle2Rot(\${1:vector axis}, \${2:float angle})
snippet llBase64ToInteger
	llBase64ToInteger(\${1:string str})
snippet llBase64ToString
	llBase64ToString(\${1:string str})
snippet llBreakAllLinks
	llBreakAllLinks();
	$0
snippet llBreakLink
	llBreakLink(\${1:integer link});
	$0
snippet llCastRay
	llCastRay(\${1:vector start}, \${2:vector end}, \${3:list options});
	$0
snippet llCeil
	llCeil(\${1:float val})
snippet llClearCameraParams
	llClearCameraParams();
	$0
snippet llClearLinkMedia
	llClearLinkMedia(\${1:integer link}, \${2:integer face});
	$0
snippet llClearPrimMedia
	llClearPrimMedia(\${1:integer face});
	$0
snippet llCloseRemoteDataChannel
	llCloseRemoteDataChannel(\${1:key channel});
	$0
snippet llCollisionFilter
	llCollisionFilter(\${1:string name}, \${2:key id}, \${3:integer accept});
	$0
snippet llCollisionSound
	llCollisionSound(\${1:string impact_sound}, \${2:float impact_volume});
	$0
snippet llCos
	llCos(\${1:float theta})
snippet llCreateCharacter
	llCreateCharacter(\${1:list options});
	$0
snippet llCreateKeyValue
	llCreateKeyValue(\${1:string k})
snippet llCreateLink
	llCreateLink(\${1:key target}, \${2:integer parent});
	$0
snippet llCSV2List
	llCSV2List(\${1:string src})
snippet llDataSizeKeyValue
	llDataSizeKeyValue()
snippet llDeleteCharacter
	llDeleteCharacter();
	$0
snippet llDeleteKeyValue
	llDeleteKeyValue(\${1:string k})
snippet llDeleteSubList
	llDeleteSubList(\${1:list src}, \${2:integer start}, \${3:integer end})
snippet llDeleteSubString
	llDeleteSubString(\${1:string src}, \${2:integer start}, \${3:integer end})
snippet llDetachFromAvatar
	llDetachFromAvatar();
	$0
snippet llDetectedGrab
	llDetectedGrab(\${1:integer number})
snippet llDetectedGroup
	llDetectedGroup(\${1:integer number})
snippet llDetectedKey
	llDetectedKey(\${1:integer number})
snippet llDetectedLinkNumber
	llDetectedLinkNumber(\${1:integer number})
snippet llDetectedName
	llDetectedName(\${1:integer number})
snippet llDetectedOwner
	llDetectedOwner(\${1:integer number})
snippet llDetectedPos
	llDetectedPosl(\${1:integer number})
snippet llDetectedRot
	llDetectedRot(\${1:integer number})
snippet llDetectedTouchBinormal
	llDetectedTouchBinormal(\${1:integer number})
snippet llDetectedTouchFace
	llDetectedTouchFace(\${1:integer number})
snippet llDetectedTouchNormal
	llDetectedTouchNormal(\${1:integer number})
snippet llDetectedTouchPos
	llDetectedTouchPos(\${1:integer number})
snippet llDetectedTouchST
	llDetectedTouchST(\${1:integer number})
snippet llDetectedTouchUV
	llDetectedTouchUV(\${1:integer number})
snippet llDetectedType
	llDetectedType(\${1:integer number})
snippet llDetectedVel
	llDetectedVel(\${1:integer number})
snippet llDialog
	llDialog(\${1:key agent}, \${2:string message}, \${3:list buttons}, \${4:integer channel});
	$0
snippet llDie
	llDie();
	$0
snippet llDumpList2String
	llDumpList2String(\${1:list src}, \${2:string separator})
snippet llEdgeOfWorld
	llEdgeOfWorld(\${1:vector pos}, \${2:vector dir})
snippet llEjectFromLand
	llEjectFromLand(\${1:key agent});
	$0
snippet llEmail
	llEmail(\${1:string address}, \${2:string subject}, \${3:string message});
	$0
snippet llEscapeURL
	llEscapeURL(\${1:string url})
snippet llEuler2Rot
	llEuler2Rot(\${1:vector v})
snippet llExecCharacterCmd
	llExecCharacterCmd(\${1:integer command}, \${2:list options});
	$0
snippet llEvade
	llEvade(\${1:key target}, \${2:list options});
	$0
snippet llFabs
	llFabs(\${1:float val})
snippet llFleeFrom
	llFleeFrom(\${1:vector position}, \${2:float distance}, \${3:list options});
	$0
snippet llFloor
	llFloor(\${1:float val})
snippet llForceMouselook
	llForceMouselook(\${1:integer mouselook});
	$0
snippet llFrand
	llFrand(\${1:float mag})
snippet llGenerateKey
	llGenerateKey()
snippet llGetAccel
	llGetAccel()
snippet llGetAgentInfo
	llGetAgentInfo(\${1:key id})
snippet llGetAgentLanguage
	llGetAgentLanguage(\${1:key agent})
snippet llGetAgentList
	llGetAgentList(\${1:integer scope}, \${2:list options})
snippet llGetAgentSize
	llGetAgentSize(\${1:key agent})
snippet llGetAlpha
	llGetAlpha(\${1:integer face})
snippet llGetAndResetTime
	llGetAndResetTime()
snippet llGetAnimation
	llGetAnimation(\${1:key id})
snippet llGetAnimationList
	llGetAnimationList(\${1:key agent})
snippet llGetAnimationOverride
	llGetAnimationOverride(\${1:string anim_state})
snippet llGetAttached
	llGetAttached()
snippet llGetAttachedList
	llGetAttachedList(\${1:key id})
snippet llGetBoundingBox
	llGetBoundingBox(\${1:key object})
snippet llGetCameraPos
	llGetCameraPos()
snippet llGetCameraRot
	llGetCameraRot()
snippet llGetCenterOfMass
	llGetCenterOfMass()
snippet llGetClosestNavPoint
	llGetClosestNavPoint(\${1:vector point}, \${2:list options})
snippet llGetColor
	llGetColor(\${1:integer face})
snippet llGetCreator
	llGetCreator()
snippet llGetDate
	llGetDate()
snippet llGetDisplayName
	llGetDisplayName(\${1:key id})
snippet llGetEnergy
	llGetEnergy()
snippet llGetEnv
	llGetEnv(\${1:string name})
snippet llGetExperienceDetails
	llGetExperienceDetails(\${1:key experience_id})
snippet llGetExperienceErrorMessage
	llGetExperienceErrorMessage(\${1:integer error})
snippet llGetForce
	llGetForce()
snippet llGetFreeMemory
	llGetFreeMemory()
snippet llGetFreeURLs
	llGetFreeURLs()
snippet llGetGeometricCenter
	llGetGeometricCenter()
snippet llGetGMTclock
	llGetGMTclock()
snippet llGetHTTPHeader
	llGetHTTPHeader(\${1:key request_id}, \${2:string header})
snippet llGetInventoryCreator
	llGetInventoryCreator(\${1:string item})
snippet llGetInventoryKey
	llGetInventoryKey(\${1:string name})
snippet llGetInventoryName
	llGetInventoryName(\${1:integer type}, \${2:integer number})
snippet llGetInventoryNumber
	llGetInventoryNumber(\${1:integer type})
snippet llGetInventoryPermMask
	llGetInventoryPermMask(\${1:string item}, \${2:integer mask})
snippet llGetInventoryType
	llGetInventoryType(\${1:string name})
snippet llGetKey
	llGetKey()
snippet llGetLandOwnerAt
	llGetLandOwnerAt(\${1:vector pos})
snippet llGetLinkKey
	llGetLinkKey(\${1:integer link})
snippet llGetLinkMedia
	llGetLinkMedia(\${1:integer link}, \${2:integer face}, \${3:list params})
snippet llGetLinkName
	llGetLinkName(\${1:integer link})
snippet llGetLinkNumber
	llGetLinkNumber()
snippet llGetLinkNumberOfSides
	llGetLinkNumberOfSides(\${1:integer link})
snippet llGetLinkPrimitiveParams
	llGetLinkPrimitiveParams(\${1:integer link}, \${2:list params})
snippet llGetListEntryType
	llGetListEntryType(\${1:list src}, \${2:integer index})
snippet llGetListLength
	llGetListLength(\${1:list src})
snippet llGetLocalPos
	llGetLocalPos()
snippet llGetLocalRot
	llGetLocalRot()
snippet llGetMass
	llGetMass()
snippet llGetMassMKS
	llGetMassMKS()
snippet llGetMaxScaleFactor
	llGetMaxScaleFactor()
snippet llGetMemoryLimit
	llGetMemoryLimit()
snippet llGetMinScaleFactor
	llGetMinScaleFactor()
snippet llGetNextEmail
	llGetNextEmail(\${1:string address}, \${2:string subject});
	$0
snippet llGetNotecardLine
	llGetNotecardLine(\${1:string name}, \${2:integer line})
snippet llGetNumberOfNotecardLines
	llGetNumberOfNotecardLines(\${1:string name})
snippet llGetNumberOfPrims
	llGetNumberOfPrims()
snippet llGetNumberOfSides
	llGetNumberOfSides()
snippet llGetObjectDesc
	llGetObjectDesc()
snippet llGetObjectDetails
	llGetObjectDetails(\${1:key id}, \${2:list params})
snippet llGetObjectMass
	llGetObjectMass(\${1:key id})
snippet llGetObjectName
	llGetObjectName()
snippet llGetObjectPermMask
	llGetObjectPermMask(\${1:integer mask})
snippet llGetObjectPrimCount
	llGetObjectPrimCount(\${1:key prim})
snippet llGetOmega
	llGetOmega()
snippet llGetOwner
	llGetOwner()
snippet llGetOwnerKey
	llGetOwnerKey(\${1:key id})
snippet llGetParcelDetails
	llGetParcelDetails(\${1:vector pos}, \${2:list params})
snippet llGetParcelFlags
	llGetParcelFlags(\${1:vector pos})
snippet llGetParcelMaxPrims
	llGetParcelMaxPrims(\${1:vector pos}, \${2:integer sim_wide})
snippet llGetParcelMusicURL
	llGetParcelMusicURL()
snippet llGetParcelPrimCount
	llGetParcelPrimCount(\${1:vector pos}, \${2:integer category}, \${3:integer sim_wide})
snippet llGetParcelPrimOwners
	llGetParcelPrimOwners(\${1:vector pos})
snippet llGetPermissions
	llGetPermissions()
snippet llGetPermissionsKey
	llGetPermissionsKey()
snippet llGetPhysicsMaterial
	llGetPhysicsMaterial()
snippet llGetPos
	llGetPos()
snippet llGetPrimitiveParams
	llGetPrimitiveParams(\${1:list params})
snippet llGetPrimMediaParams
	llGetPrimMediaParams(\${1:integer face}, \${2:list params})
snippet llGetRegionAgentCount
	llGetRegionAgentCount()
snippet llGetRegionCorner
	llGetRegionCorner()
snippet llGetRegionFlags
	llGetRegionFlags()
snippet llGetRegionFPS
	llGetRegionFPS()
snippet llGetRegionName
	llGetRegionName()
snippet llGetRegionTimeDilation
	llGetRegionTimeDilation()
snippet llGetRootPosition
	llGetRootPosition()
snippet llGetRootRotation
	llGetRootRotation()
snippet llGetRot
	llGetRot()
snippet llGetScale
	llGetScale()
snippet llGetScriptName
	llGetScriptName()
snippet llGetScriptState
	llGetScriptState(\${1:string script})
snippet llGetSimStats
	llGetSimStats(\${1:integer stat_type})
snippet llGetSimulatorHostname
	llGetSimulatorHostname()
snippet llGetSPMaxMemory
	llGetSPMaxMemory()
snippet llGetStartParameter
	llGetStartParameter()
snippet llGetStaticPath
	llGetStaticPath(\${1:vector start}, \${2:vector end}, \${3:float radius}, \${4:list params})
snippet llGetStatus
	llGetStatus(\${1:integer status})
snippet llGetSubString
	llGetSubString(\${1:string src}, \${2:integer start}, \${3:integer end})
snippet llGetSunDirection
	llGetSunDirection()
snippet llGetTexture
	llGetTexture(\${1:integer face})
snippet llGetTextureOffset
	llGetTextureOffset(\${1:integer face})
snippet llGetTextureRot
	llGetTextureRot(\${1:integer face})
snippet llGetTextureScale
	llGetTextureScale(\${1:integer face})
snippet llGetTime
	llGetTime()
snippet llGetTimeOfDay
	llGetTimeOfDay()
snippet llGetTimestamp
	llGetTimestamp()
snippet llGetTorque
	llGetTorque()
snippet llGetUnixTime
	llGetUnixTime()
snippet llGetUsedMemory
	llGetUsedMemory()
snippet llGetUsername
	llGetUsername(\${1:key id})
snippet llGetVel
	llGetVel()
snippet llGetWallclock
	llGetWallclock()
snippet llGiveInventory
	llGiveInventory(\${1:key destination}, \${2:string inventory});
	$0
snippet llGiveInventoryList
	llGiveInventoryList(\${1:key target}, \${2:string folder}, \${3:list inventory});
	$0
snippet llGiveMoney
	llGiveMoney(\${1:key destination}, \${2:integer amount})
snippet llGround
	llGround(\${1:vector offset})
snippet llGroundContour
	llGroundContour(\${1:vector offset})
snippet llGroundNormal
	llGroundNormal(\${1:vector offset})
snippet llGroundRepel
	llGroundRepel(\${1:float height}, \${2:integer water}, \${3:float tau});
	$0
snippet llGroundSlope
	llGroundSlope(\${1:vector offset})
snippet llHTTPRequest
	llHTTPRequest(\${1:string url}, \${2:list parameters}, \${3:string body})
snippet llHTTPResponse
	llHTTPResponse(\${1:key request_id}, \${2:integer status}, \${3:string body});
	$0
snippet llInsertString
	llInsertString(\${1:string dst}, \${2:integer pos}, \${3:string src})
snippet llInstantMessage
	llInstantMessage(\${1:key user}, \${2:string message});
	$0
snippet llIntegerToBase64
	llIntegerToBase64(\${1:integer number})
snippet llJson2List
	llJson2List(\${1:string json})
snippet llJsonGetValue
	llJsonGetValue(\${1:string json}, \${2:list specifiers})
snippet llJsonSetValue
	llJsonSetValue(\${1:string json}, \${2:list specifiers}, \${3:string newValue})
snippet llJsonValueType
	llJsonValueType(\${1:string json}, \${2:list specifiers})
snippet llKey2Name
	llKey2Name(\${1:key id})
snippet llKeyCountKeyValue
	llKeyCountKeyValue()
snippet llKeysKeyValue
	llKeysKeyValue(\${1:integer first}, \${2:integer count})
snippet llLinkParticleSystem
	llLinkParticleSystem(\${1:integer link}, \${2:list rules});
	$0
snippet llLinkSitTarget
	llLinkSitTarget(\${1:integer link}, \${2:vector offset}, \${3:rotation rot});
	$0
snippet llList2CSV
	llList2CSV(\${1:list src})
snippet llList2Float
	llList2Float(\${1:list src}, \${2:integer index})
snippet llList2Integer
	llList2Integer(\${1:list src}, \${2:integer index})
snippet llList2Json
	llList2Json(\${1:string type}, \${2:list values})
snippet llList2Key
	llList2Key(\${1:list src}, \${2:integer index})
snippet llList2List
	llList2List(\${1:list src}, \${2:integer start}, \${3:integer end})
snippet llList2ListStrided
	llList2ListStrided(\${1:list src}, \${2:integer start}, \${3:integer end}, \${4:integer stride})
snippet llList2Rot
	llList2Rot(\${1:list src}, \${2:integer index})
snippet llList2String
	llList2String(\${1:list src}, \${2:integer index})
snippet llList2Vector
	llList2Vector(\${1:list src}, \${2:integer index})
snippet llListen
	llListen(\${1:integer channel}, \${2:string name}, \${3:key id}, \${4:string msg})
snippet llListenControl
	llListenControl(\${1:integer handle}, \${2:integer active});
	$0
snippet llListenRemove
	llListenRemove(\${1:integer handle});
	$0
snippet llListFindList
	llListFindList(\${1:list src}, \${2:list test})
snippet llListInsertList
	llListInsertList(\${1:list dest}, \${2:list src}, \${3:integer start})
snippet llListRandomize
	llListRandomize(\${1:list src}, \${2:integer stride})
snippet llListReplaceList
	llListReplaceList(\${1:list dest}, \${2:list src}, \${3:integer start}, \${4:integer end})
snippet llListSort
	llListSort(\${1:list src}, \${2:integer stride}, \${3:integer ascending})
snippet llListStatistics
	llListStatistics(\${1:integer operation}, \${2:list src})
snippet llLoadURL
	llLoadURL(\${1:key agent}, \${2:string message}, \${3:string url});
	$0
snippet llLog
	llLog(\${1:float val})
snippet llLog10
	llLog10(\${1:float val})
snippet llLookAt
	llLookAt(\${1:vector target}, \${2:float strength}, \${3:float damping});
	$0
snippet llLoopSound
	llLoopSound(\${1:string sound}, \${2:float volume});
	$0
snippet llLoopSoundMaster
	llLoopSoundMaster(\${1:string sound}, \${2:float volume});
	$0
snippet llLoopSoundSlave
	llLoopSoundSlave(\${1:string sound}, \${2:float volume});
	$0
snippet llManageEstateAccess
	llManageEstateAccess(\${1:integer action}, \${2:key agent})
snippet llMapDestination
	llMapDestination(\${1:string simname}, \${2:vector pos}, \${3:vector look_at});
	$0
snippet llMD5String
	llMD5String(\${1:string src}, \${2:integer nonce})
snippet llMessageLinked
	llMessageLinked(\${1:integer link}, \${2:integer num}, \${3:string str}, \${4:key id});
	$0
snippet llMinEventDelay
	llMinEventDelay(\${1:float delay});
	$0
snippet llModifyLand
	llModifyLand(\${1:integer action}, \${2:integer brush});
	$0
snippet llModPow
	llModPow(\${1:integer a}, \${2:integer b}, \${3:integer c})
snippet llMoveToTarget
	llMoveToTarget(\${1:vector target}, \${2:float tau});
	$0
snippet llNavigateTo
	llNavigateTo(\${1:vector pos}, \${2:list options});
	$0
snippet llOffsetTexture
	llOffsetTexture(\${1:float u}, \${2:float v}, \${3:integer face});
	$0
snippet llOpenRemoteDataChannel
	llOpenRemoteDataChannel();
	$0
snippet llOverMyLand
	llOverMyLand(\${1:key id})
snippet llOwnerSay
	llOwnerSay(\${1:string msg});
	$0
snippet llParcelMediaCommandList
	llParcelMediaCommandList(\${1:list commandList});
	$0
snippet llParcelMediaQuery
	llParcelMediaQuery(\${1:list query})
snippet llParseString2List
	llParseString2List(\${1:string src}, \${2:list separators}, \${3:list spacers})
snippet llParseStringKeepNulls
	llParseStringKeepNulls(\${1:string src}, \${2:list separators}, \${3:list spacers})
snippet llParticleSystem
	llParticleSystem(\${1:list rules});
	$0
snippet llPassCollisions
	llPassCollisions(\${1:integer pass});
	$0
snippet llPassTouches
	llPassTouches(\${1:integer pass});
	$0
snippet llPatrolPoints
	llPatrolPoints(\${1:list patrolPoints}, \${2:list options});
	$0
snippet llPlaySound
	llPlaySound(\${1:string sound}, \${2:float volume});
	$0
snippet llPlaySoundSlave
	llPlaySoundSlave(\${1:string sound}, \${2:float volume});
	$0
snippet llPow
	llPow(\${1:float base}, \${2:float exponent})
snippet llPreloadSound
	llPreloadSound(\${1:string sound});
	$0
snippet llPursue
	llPursue(\${1:key target}, \${2:list options});
	$0
snippet llPushObject
	llPushObject(\${1:key target}, \${2:vector impulse}, \${3:vector ang_impulse}, \${4:integer local});
	$0
snippet llReadKeyValue
	llReadKeyValue(\${1:string k})
snippet llRegionSay
	llRegionSay(\${1:integer channel}, \${2:string msg});
	$0
snippet llRegionSayTo
	llRegionSayTo(\${1:key target}, \${2:integer channel}, \${3:string msg});
	$0
snippet llReleaseControls
	llReleaseControls();
	$0
snippet llReleaseURL
	llReleaseURL(\${1:string url});
	$0
snippet llRemoteDataReply
	llRemoteDataReply(\${1:key channel}, \${2:key message_id}, \${3:string sdata}, \${4:integer idata});
	$0
snippet llRemoteLoadScriptPin
	llRemoteLoadScriptPin(\${1:key target}, \${2:string name}, \${3:integer pin}, \${4:integer running}, \${5:integer start_param});
	$0
snippet llRemoveFromLandBanList
	llRemoveFromLandBanList(\${1:key agent});
	$0
snippet llRemoveFromLandPassList
	llRemoveFromLandPassList(\${1:key agent});
	$0
snippet llRemoveInventory
	llRemoveInventory(\${1:string item});
	$0
snippet llRemoveVehicleFlags
	llRemoveVehicleFlags(\${1:integer flags});
	$0
snippet llRequestAgentData
	llRequestAgentData(\${1:key id}, \${2:integer data})
snippet llRequestDisplayName
	llRequestDisplayName(\${1:key id})
snippet llRequestExperiencePermissions
	llRequestExperiencePermissions(\${1:key agent}, \${2:string name})
snippet llRequestInventoryData
	llRequestInventoryData(\${1:string name})
snippet llRequestPermissions
	llRequestPermissions(\${1:key agent}, \${2:integer permissions})
snippet llRequestSecureURL
	llRequestSecureURL()
snippet llRequestSimulatorData
	llRequestSimulatorData(\${1:string region}, \${2:integer data})
snippet llRequestURL
	llRequestURL()
snippet llRequestUsername
	llRequestUsername(\${1:key id})
snippet llResetAnimationOverride
	llResetAnimationOverride(\${1:string anim_state});
	$0
snippet llResetLandBanList
	llResetLandBanList();
	$0
snippet llResetLandPassList
	llResetLandPassList();
	$0
snippet llResetOtherScript
	llResetOtherScript(\${1:string name});
	$0
snippet llResetScript
	llResetScript();
	$0
snippet llResetTime
	llResetTime();
	$0
snippet llReturnObjectsByID
	llReturnObjectsByID(\${1:list objects})
snippet llReturnObjectsByOwner
	llReturnObjectsByOwner(\${1:key owner}, \${2:integer scope})
snippet llRezAtRoot
	llRezAtRoot(\${1:string inventory}, \${2:vector position}, \${3:vector velocity}, \${4:rotation rot}, \${5:integer param});
	$0
snippet llRezObject
	llRezObject(\${1:string inventory}, \${2:vector pos}, \${3:vector vel}, \${4:rotation rot}, \${5:integer param});
	$0
snippet llRot2Angle
	llRot2Angle(\${1:rotation rot})
snippet llRot2Axis
	llRot2Axis(\${1:rotation rot})
snippet llRot2Euler
	llRot2Euler(\${1:rotation quat})
snippet llRot2Fwd
	llRot2Fwd(\${1:rotation q})
snippet llRot2Left
	llRot2Left(\${1:rotation q})
snippet llRot2Up
	llRot2Up(\${1:rotation q})
snippet llRotateTexture
	llRotateTexture(\${1:float angle}, \${2:integer face});
	$0
snippet llRotBetween
	llRotBetween(\${1:vector start}, \${2:vector end})
snippet llRotLookAt
	llRotLookAt(\${1:rotation target_direction}, \${2:float strength}, \${3:float damping});
	$0
snippet llRotTarget
	llRotTarget(\${1:rotation rot}, \${2:float error})
snippet llRotTargetRemove
	llRotTargetRemove(\${1:integer handle});
	$0
snippet llRound
	llRound(\${1:float val})
snippet llSameGroup
	llSameGroup(\${1:key group})
snippet llSay
	llSay(\${1:integer channel}, \${2:string msg});
	$0
snippet llScaleByFactor
	llScaleByFactor(\${1:float scaling_factor})
snippet llScaleTexture
	llScaleTexture(\${1:float u}, \${2:float v}, \${3:integer face});
	$0
snippet llScriptDanger
	llScriptDanger(\${1:vector pos})
snippet llScriptProfiler
	llScriptProfiler(\${1:integer flags});
	$0
snippet llSendRemoteData
	llSendRemoteData(\${1:key channel}, \${2:string dest}, \${3:integer idata}, \${4:string sdata})
snippet llSensor
	llSensor(\${1:string name}, \${2:key id}, \${3:integer type}, \${4:float range}, \${5:float arc});
	$0
snippet llSensorRepeat
	llSensorRepeat(\${1:string name}, \${2:key id}, \${3:integer type}, \${4:float range}, \${5:float arc}, \${6:float rate});
	$0
snippet llSetAlpha
	llSetAlpha(\${1:float alpha}, \${2:integer face});
	$0
snippet llSetAngularVelocity
	llSetAngularVelocity(\${1:vector force}, \${2:integer local});
	$0
snippet llSetAnimationOverride
	llSetAnimationOverride(\${1:string anim_state}, \${2:string anim})
snippet llSetBuoyancy
	llSetBuoyancy(\${1:float buoyancy});
	$0
snippet llSetCameraAtOffset
	llSetCameraAtOffset(\${1:vector offset});
	$0
snippet llSetCameraEyeOffset
	llSetCameraEyeOffset(\${1:vector offset});
	$0
snippet llSetCameraParams
	llSetCameraParams(\${1:list rules});
	$0
snippet llSetClickAction
	llSetClickAction(\${1:integer action});
	$0
snippet llSetColor
	llSetColor(\${1:vector color}, \${2:integer face});
	$0
snippet llSetContentType
	llSetContentType(\${1:key request_id}, \${2:integer content_type});
	$0
snippet llSetDamage
	llSetDamage(\${1:float damage});
	$0
snippet llSetForce
	llSetForce(\${1:vector force}, \${2:integer local});
	$0
snippet llSetForceAndTorque
	llSetForceAndTorque(\${1:vector force}, \${2:vector torque}, \${3:integer local});
	$0
snippet llSetHoverHeight
	llSetHoverHeight(\${1:float height}, \${2:integer water}, \${3:float tau});
	$0
snippet llSetKeyframedMotion
	llSetKeyframedMotion(\${1:list keyframes}, \${2:list options});
	$0
snippet llSetLinkAlpha
	llSetLinkAlpha(\${1:integer link}, \${2:float alpha}, \${3:integer face});
	$0
snippet llSetLinkCamera
	llSetLinkCamera(\${1:integer link}, \${2:vector eye}, \${3:vector at});
	$0
snippet llSetLinkColor
	llSetLinkColor(\${1:integer link}, \${2:vector color}, \${3:integer face});
	$0
snippet llSetLinkMedia
	llSetLinkMedia(\${1:integer link}, \${2:integer face}, \${3:list params});
	$0
snippet llSetLinkPrimitiveParams
	llSetLinkPrimitiveParams(\${1:integer link}, \${2:list rules});
	$0
snippet llSetLinkPrimitiveParamsFast
	llSetLinkPrimitiveParamsFast(\${1:integer link}, \${2:list rules});
	$0
snippet llSetLinkTexture
	llSetLinkTexture(\${1:integer link}, \${2:string texture}, \${3:integer face});
	$0
snippet llSetLinkTextureAnim
	llSetLinkTextureAnim(\${1:integer link}, \${2:integer mode}, \${3:integer face}, \${4:integer sizex}, \${5:integer sizey}, \${6:float start}, \${7:float length}, \${8:float rate});
	$0
snippet llSetLocalRot
	llSetLocalRot(\${1:rotation rot});
	$0
snippet llSetMemoryLimit
	llSetMemoryLimit(\${1:integer limit})
snippet llSetObjectDesc
	llSetObjectDesc(\${1:string description});
	$0
snippet llSetObjectName
	llSetObjectName(\${1:string name});
	$0
snippet llSetParcelMusicURL
	llSetParcelMusicURL(\${1:string url});
	$0
snippet llSetPayPrice
	llSetPayPrice(\${1:integer price}, [\${2:integer price_button_a}, \${3:integer price_button_b}, \${4:integer price_button_c}, \${5:integer price_button_d}]);
	$0
snippet llSetPhysicsMaterial
	llSetPhysicsMaterial(\${1:integer mask}, \${2:float gravity_multiplier}, \${3:float restitution}, \${4:float friction}, \${5:float density});
	$0
snippet llSetPos
	llSetPos(\${1:vector pos});
	$0
snippet llSetPrimitiveParams
	llSetPrimitiveParams(\${1:list rules});
	$0
snippet llSetPrimMediaParams
	llSetPrimMediaParams(\${1:integer face}, \${2:list params});
	$0
snippet llSetRegionPos
	llSetRegionPos(\${1:vector position})
snippet llSetRemoteScriptAccessPin
	llSetRemoteScriptAccessPin(\${1:integer pin});
	$0
snippet llSetRot
	llSetRot(\${1:rotation rot});
	$0
snippet llSetScale
	llSetScale(\${1:vector size});
	$0
snippet llSetScriptState
	llSetScriptState(\${1:string name}, \${2:integer run});
	$0
snippet llSetSitText
	llSetSitText(\${1:string text});
	$0
snippet llSetSoundQueueing
	llSetSoundQueueing(\${1:integer queue});
	$0
snippet llSetSoundRadius
	llSetSoundRadius(\${1:float radius});
	$0
snippet llSetStatus
	llSetStatus(\${1:integer status}, \${2:integer value});
	$0
snippet llSetText
	llSetText(\${1:string text}, \${2:vector color}, \${3:float alpha});
	$0
snippet llSetTexture
	llSetTexture(\${1:string texture}, \${2:integer face});
	$0
snippet llSetTextureAnim
	llSetTextureAnim(\${1:integer mode}, \${2:integer face}, \${3:integer sizex}, \${4:integer sizey}, \${5:float start}, \${6:float length}, \${7:float rate});
	$0
snippet llSetTimerEvent
	llSetTimerEvent(\${1:float sec});
	$0
snippet llSetTorque
	llSetTorque(\${1:vector torque}, \${2:integer local});
	$0
snippet llSetTouchText
	llSetTouchText(\${1:string text});
	$0
snippet llSetVehicleFlags
	llSetVehicleFlags(\${1:integer flags});
	$0
snippet llSetVehicleFloatParam
	llSetVehicleFloatParam(\${1:integer param}, \${2:float value});
	$0
snippet llSetVehicleRotationParam
	llSetVehicleRotationParam(\${1:integer param}, \${2:rotation rot});
	$0
snippet llSetVehicleType
	llSetVehicleType(\${1:integer type});
	$0
snippet llSetVehicleVectorParam
	llSetVehicleVectorParam(\${1:integer param}, \${2:vector vec});
	$0
snippet llSetVelocity
	llSetVelocity(\${1:vector force}, \${2:integer local});
	$0
snippet llSHA1String
	llSHA1String(\${1:string src})
snippet llShout
	llShout(\${1:integer channel}, \${2:string msg});
	$0
snippet llSin
	llSin(\${1:float theta})
snippet llSitTarget
	llSitTarget(\${1:vector offset}, \${2:rotation rot});
	$0
snippet llSleep
	llSleep(\${1:float sec});
	$0
snippet llSqrt
	llSqrt(\${1:float val})
snippet llStartAnimation
	llStartAnimation(\${1:string anim});
	$0
snippet llStopAnimation
	llStopAnimation(\${1:string anim});
	$0
snippet llStopHover
	llStopHover();
	$0
snippet llStopLookAt
	llStopLookAt();
	$0
snippet llStopMoveToTarget
	llStopMoveToTarget();
	$0
snippet llStopSound
	llStopSound();
	$0
snippet llStringLength
	llStringLength(\${1:string str})
snippet llStringToBase64
	llStringToBase64(\${1:string str})
snippet llStringTrim
	llStringTrim(\${1:string src}, \${2:integer type})
snippet llSubStringIndex
	llSubStringIndex(\${1:string source}, \${2:string pattern})
snippet llTakeControls
	llTakeControls(\${1:integer controls}, \${2:integer accept}, \${3:integer pass_on});
	$0
snippet llTan
	llTan(\${1:float theta})
snippet llTarget
	llTarget(\${1:vector position}, \${2:float range})
snippet llTargetOmega
	llTargetOmega(\${1:vector axis}, \${2:float spinrate}, \${3:float gain});
	$0
snippet llTargetRemove
	llTargetRemove(\${1:integer handle});
	$0
snippet llTeleportAgent
	llTeleportAgent(\${1:key agent}, \${2:string landmark}, \${3:vector position}, \${4:vector look_at});
	$0
snippet llTeleportAgentGlobalCoords
	llTeleportAgentGlobalCoords(\${1:key agent}, \${2:vector global_coordinates}, \${3:vector region_coordinates}, \${4:vector look_at});
	$0
snippet llTeleportAgentHome
	llTeleportAgentHome(\${1:key agent});
	$0
snippet llTextBox
	llTextBox(\${1:key agent}, \${2:string message}, \${3:integer channel});
	$0
snippet llToLower
	llToLower(\${1:string src})
snippet llToUpper
	llToUpper(\${1:string src})
snippet llTransferLindenDollars
	llTransferLindenDollars(\${1:key destination}, \${2:integer amount})
snippet llTriggerSound
	llTriggerSound(\${1:string sound}, \${2:float volume});
	$0
snippet llTriggerSoundLimited
	llTriggerSoundLimited(\${1:string sound}, \${2:float volume}, \${3:vector top_north_east}, \${4:vector bottom_south_west});
	$0
snippet llUnescapeURL
	llUnescapeURL(\${1:string url})
snippet llUnSit
	llUnSit(\${1:key id});
	$0
snippet llUpdateCharacter
	llUpdateCharacter(\${1:list options})
snippet llUpdateKeyValue
	llUpdateKeyValue(\${1:string k}, \${2:string v}, \${3:integer checked}, \${4:string ov})
snippet llVecDist
	llVecDist(\${1:vector vec_a}, \${2:vector vec_b})
snippet llVecMag
	llVecMag(\${1:vector vec})
snippet llVecNorm
	llVecNorm(\${1:vector vec})
snippet llVolumeDetect
	llVolumeDetect(\${1:integer detect});
	$0
snippet llWanderWithin
	llWanderWithin(\${1:vector origin}, \${2:vector dist}, \${3:list options});
	$0
snippet llWater
	llWater(\${1:vector offset});
	$0
snippet llWhisper
	llWhisper(\${1:integer channel}, \${2:string msg});
	$0
snippet llWind
	llWind(\${1:vector offset});
	$0
snippet llXorBase64
	llXorBase64(\${1:string str1}, \${2:string str2})
snippet money
	money(\${1:key id}, \${2:integer amount})
	{
		$0
	}
snippet object_rez
	object_rez(\${1:key id})
	{
		$0
	}
snippet on_rez
	on_rez(\${1:integer start_param})
	{
		$0
	}
snippet path_update
	path_update(\${1:integer type}, \${2:list reserved})
	{
		$0
	}
snippet remote_data
	remote_data(\${1:integer event_type}, \${2:key channel}, \${3:key message_id}, \${4:string sender}, \${5:integer idata}, \${6:string sdata})
	{
		$0
	}
snippet run_time_permissions
	run_time_permissions(\${1:integer perm})
	{
		$0
	}
snippet sensor
	sensor(\${1:integer index})
	{
		$0
	}
snippet state
	state \${1:name}
snippet touch
	touch(\${1:integer index})
	{
		$0
	}
snippet touch_end
	touch_end(\${1:integer index})
	{
		$0
	}
snippet touch_start
	touch_start(\${1:integer index})
	{
		$0
	}
snippet transaction_result
	transaction_result(\${1:key id}, \${2:integer success}, \${3:string data})
	{
		$0
	}
snippet while
	while (\${1:condition})
	{
		$0
	}
`}),ace.define("ace/snippets/lsl",["require","exports","module","ace/snippets/lsl.snippets"],function(e,t,n){t.snippetText=e("./lsl.snippets"),t.scope="lsl"}),function(){ace.require(["ace/snippets/lsl"],function(e){l&&(l.exports=e)})}()}(r)),r.exports}var a=g();const c=o(a),d=$({__proto__:null,default:c},[a]);export{d as l};
