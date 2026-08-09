📦
209522 /OGFMH.js
119489 /OGFMH.js.map
✄
// OGFMH.ts
var hooksInstalled = false;
var IL2CPP_API_NAMES = [
  "il2cpp_init",
  "il2cpp_init_utf16",
  "il2cpp_shutdown",
  "il2cpp_set_config_dir",
  "il2cpp_set_data_dir",
  "il2cpp_set_temp_dir",
  "il2cpp_set_commandline_arguments",
  "il2cpp_set_commandline_arguments_utf16",
  "il2cpp_set_config_utf16",
  "il2cpp_set_config",
  "il2cpp_set_memory_callbacks",
  "il2cpp_memory_pool_set_region_size",
  "il2cpp_memory_pool_get_region_size",
  "il2cpp_get_corlib",
  "il2cpp_add_internal_call",
  "il2cpp_resolve_icall",
  "il2cpp_alloc",
  "il2cpp_free",
  "il2cpp_array_class_get",
  "il2cpp_array_length",
  "il2cpp_array_get_byte_length",
  "il2cpp_array_new",
  "il2cpp_array_new_specific",
  "il2cpp_array_new_full",
  "il2cpp_bounded_array_class_get",
  "il2cpp_array_element_size",
  "il2cpp_assembly_get_image",
  "il2cpp_class_enum_basetype",
  "il2cpp_class_from_system_type",
  "il2cpp_class_is_inited",
  "il2cpp_class_is_generic",
  "il2cpp_class_is_inflated",
  "il2cpp_class_is_assignable_from",
  "il2cpp_class_is_subclass_of",
  "il2cpp_class_has_parent",
  "il2cpp_class_from_il2cpp_type",
  "il2cpp_class_from_name",
  "il2cpp_class_get_element_class",
  "il2cpp_class_get_events",
  "il2cpp_class_get_fields",
  "il2cpp_class_get_nested_types",
  "il2cpp_class_get_interfaces",
  "il2cpp_class_get_properties",
  "il2cpp_class_get_property_from_name",
  "il2cpp_class_get_field_from_name",
  "il2cpp_class_get_methods",
  "il2cpp_class_get_method_from_name",
  "il2cpp_class_get_name",
  "il2cpp_class_get_namespace",
  "il2cpp_class_get_parent",
  "il2cpp_class_get_declaring_type",
  "il2cpp_class_instance_size",
  "il2cpp_class_num_fields",
  "il2cpp_class_is_valuetype",
  "il2cpp_class_is_blittable",
  "il2cpp_class_value_size",
  "il2cpp_class_get_flags",
  "il2cpp_class_is_abstract",
  "il2cpp_class_is_interface",
  "il2cpp_class_array_element_size",
  "il2cpp_class_from_type",
  "il2cpp_class_get_type",
  "il2cpp_class_get_type_token",
  "il2cpp_class_has_attribute",
  "il2cpp_class_has_references",
  "il2cpp_class_is_enum",
  "il2cpp_class_get_image",
  "il2cpp_class_get_assemblyname",
  "il2cpp_class_get_rank",
  "il2cpp_class_get_data_size",
  "il2cpp_class_get_static_field_data",
  "il2cpp_stats_dump_to_file",
  "il2cpp_stats_get_value",
  "il2cpp_domain_get",
  "il2cpp_domain_assembly_open",
  "il2cpp_domain_get_assemblies",
  "il2cpp_raise_exception",
  "il2cpp_exception_from_name_msg",
  "il2cpp_get_exception_argument_null",
  "il2cpp_format_exception",
  "il2cpp_format_stack_trace",
  "il2cpp_unhandled_exception",
  "il2cpp_native_stack_trace",
  "il2cpp_field_get_name",
  "il2cpp_field_get_flags",
  "il2cpp_field_get_from_reflection",
  "il2cpp_field_get_parent",
  "il2cpp_field_get_object",
  "il2cpp_field_get_offset",
  "il2cpp_field_get_type",
  "il2cpp_field_get_value",
  "il2cpp_field_get_value_object",
  "il2cpp_field_has_attribute",
  "il2cpp_field_set_value",
  "il2cpp_field_set_value_object",
  "il2cpp_field_static_get_value",
  "il2cpp_field_static_set_value",
  "il2cpp_field_is_literal",
  "il2cpp_gc_collect",
  "il2cpp_gc_collect_a_little",
  "il2cpp_gc_start_incremental_collection",
  "il2cpp_gc_enable",
  "il2cpp_gc_disable",
  "il2cpp_gc_is_disabled",
  "il2cpp_gc_set_mode",
  "il2cpp_gc_is_incremental",
  "il2cpp_gc_get_max_time_slice_ns",
  "il2cpp_gc_set_max_time_slice_ns",
  "il2cpp_gc_get_used_size",
  "il2cpp_gc_get_heap_size",
  "il2cpp_gc_foreach_heap",
  "il2cpp_stop_gc_world",
  "il2cpp_start_gc_world",
  "il2cpp_gc_alloc_fixed",
  "il2cpp_gc_free_fixed",
  "il2cpp_gchandle_new",
  "il2cpp_gchandle_new_weakref",
  "il2cpp_gchandle_get_target",
  "il2cpp_gchandle_foreach_get_target",
  "il2cpp_gc_wbarrier_set_field",
  "il2cpp_gc_has_strict_wbarriers",
  "il2cpp_gc_set_external_allocation_tracker",
  "il2cpp_gc_set_external_wbarrier_tracker",
  "il2cpp_gchandle_free",
  "il2cpp_object_header_size",
  "il2cpp_array_object_header_size",
  "il2cpp_offset_of_array_length_in_array_object_header",
  "il2cpp_offset_of_array_bounds_in_array_object_header",
  "il2cpp_allocation_granularity",
  "il2cpp_unity_liveness_allocate_struct",
  "il2cpp_unity_liveness_calculation_from_root",
  "il2cpp_unity_liveness_calculation_from_statics",
  "il2cpp_unity_liveness_finalize",
  "il2cpp_unity_liveness_free_struct",
  "il2cpp_method_get_return_type",
  "il2cpp_method_get_from_reflection",
  "il2cpp_method_get_object",
  "il2cpp_method_get_name",
  "il2cpp_method_is_generic",
  "il2cpp_method_is_inflated",
  "il2cpp_method_is_instance",
  "il2cpp_method_get_param_count",
  "il2cpp_method_get_param",
  "il2cpp_method_get_class",
  "il2cpp_method_has_attribute",
  "il2cpp_method_get_declaring_type",
  "il2cpp_method_get_flags",
  "il2cpp_method_get_token",
  "il2cpp_method_get_param_name",
  "il2cpp_profiler_install",
  "il2cpp_profiler_set_events",
  "il2cpp_profiler_install_enter_leave",
  "il2cpp_profiler_install_allocation",
  "il2cpp_profiler_install_gc",
  "il2cpp_profiler_install_fileio",
  "il2cpp_profiler_install_thread",
  "il2cpp_property_get_name",
  "il2cpp_property_get_get_method",
  "il2cpp_property_get_set_method",
  "il2cpp_property_get_parent",
  "il2cpp_property_get_flags",
  "il2cpp_object_get_class",
  "il2cpp_object_get_size",
  "il2cpp_object_get_virtual_method",
  "il2cpp_object_new",
  "il2cpp_object_unbox",
  "il2cpp_value_box",
  "il2cpp_monitor_enter",
  "il2cpp_monitor_try_enter",
  "il2cpp_monitor_exit",
  "il2cpp_monitor_pulse",
  "il2cpp_monitor_pulse_all",
  "il2cpp_monitor_wait",
  "il2cpp_monitor_try_wait",
  "il2cpp_runtime_invoke_convert_args",
  "il2cpp_runtime_invoke",
  "il2cpp_runtime_class_init",
  "il2cpp_runtime_object_init",
  "il2cpp_runtime_object_init_exception",
  "il2cpp_runtime_unhandled_exception_policy_set",
  "il2cpp_string_length",
  "il2cpp_string_chars",
  "il2cpp_string_new",
  "il2cpp_string_new_wrapper",
  "il2cpp_string_new_utf16",
  "il2cpp_string_new_len",
  "il2cpp_string_intern",
  "il2cpp_string_is_interned",
  "il2cpp_thread_current",
  "il2cpp_thread_attach",
  "il2cpp_thread_detach",
  "il2cpp_is_vm_thread",
  "il2cpp_current_thread_walk_frame_stack",
  "il2cpp_thread_walk_frame_stack",
  "il2cpp_current_thread_get_top_frame",
  "il2cpp_thread_get_top_frame",
  "il2cpp_current_thread_get_frame_at",
  "il2cpp_thread_get_frame_at",
  "il2cpp_current_thread_get_stack_depth",
  "il2cpp_thread_get_stack_depth",
  "il2cpp_set_default_thread_affinity",
  "il2cpp_override_stack_backtrace",
  "il2cpp_type_get_object",
  "il2cpp_type_get_type",
  "il2cpp_type_get_class_or_element_class",
  "il2cpp_type_get_name",
  "il2cpp_type_get_assembly_qualified_name",
  "il2cpp_type_get_reflection_name",
  "il2cpp_type_is_byref",
  "il2cpp_type_get_attrs",
  "il2cpp_type_equals",
  "il2cpp_type_is_static",
  "il2cpp_type_is_pointer_type",
  "il2cpp_image_get_assembly",
  "il2cpp_image_get_name",
  "il2cpp_image_get_filename",
  "il2cpp_image_get_entry_point",
  "il2cpp_image_get_class_count",
  "il2cpp_image_get_class",
  "il2cpp_capture_memory_snapshot",
  "il2cpp_free_captured_memory_snapshot",
  "il2cpp_set_find_plugin_callback",
  "il2cpp_register_log_callback",
  "il2cpp_debugger_set_agent_options",
  "il2cpp_is_debugger_attached",
  "il2cpp_register_debugger_agent_transport",
  "il2cpp_debug_foreach_method",
  "il2cpp_debug_get_method_info",
  "il2cpp_unity_install_unitytls_interface",
  "il2cpp_custom_attrs_from_class",
  "il2cpp_custom_attrs_from_method",
  "il2cpp_custom_attrs_from_field",
  "il2cpp_custom_attrs_has_attr",
  "il2cpp_custom_attrs_get_attr",
  "il2cpp_custom_attrs_construct",
  "il2cpp_custom_attrs_free",
  "il2cpp_type_get_name_chunked",
  "il2cpp_class_set_userdata",
  "il2cpp_class_get_userdata_offset",
  "il2cpp_class_for_each",
  "il2cpp_unity_set_android_network_up_state_func"
];
Il2Cpp.$config = Il2Cpp.$config || {};
Il2Cpp.$config.exports = {};
for (const api of IL2CPP_API_NAMES) {
  Il2Cpp.$config.exports[api] = () => Il2Cpp.module.findExportByName(api);
}
var thngtohook = "il2cpp_runtime_invoke_convert_args";
var autofindclasscauselazyyesyes = /* @__PURE__ */ (() => {
  let leclass = null;
  let cached = false;
  return function() {
    if (cached)
      return leclass;
    cached = true;
    try {
      for (const assembly of Il2Cpp.domain.assemblies) {
        for (const klass of assembly.image.classes) {
          let hasthingygood = false, hasthingybad = false;
          for (const method of klass.methods) {
            if (method.name === "OnTriggerEnter")
              hasthingygood = true;
            if (method.name === "Awake")
              hasthingybad = true;
          }
          if (hasthingygood && !hasthingybad) {
            leclass = klass;
            break;
          }
        }
        if (leclass)
          break;
      }
    } catch (e) {
      cached = false;
      return null;
    }
    if (leclass) {
      return leclass;
    } else {
      return null;
    }
  };
})();
var menuName = "Explodings cewl menu -- thank ya thatguyronin for da temp";
var menu = null;
var reference = null;
var referenceCollider = null;
var cachedClickClip = null;
var cachedClickSource = null;
var buttonClickDelay = 0;
var LerpMenu = false;
var righthand = false;
var deltaTime = 0;
var time = 0;
var flySpeed = 20;
var bgColor = [0.2, 0.15, 0.25, 0.85];
var textColor = [0.95, 0.85, 1, 1];
var buttonColor = [0.3, 0.2, 0.4, 0.8];
var buttonPressedColor = [0.5, 0.35, 0.65, 1];
var MENU_SCALE = 1.15;
var THEMES = [
  { name: "Dark", bg: [0.08, 0.08, 0.08, 0.98], text: [0.95, 0.95, 0.95, 1], button: [0.15, 0.15, 0.15, 1], buttonPressed: [0.3, 0.3, 0.3, 1], outline: [0.15, 0.15, 0.15, 1], pageOutline: [0.2, 0.2, 0.2, 1], buttonOutline: [0.2, 0.2, 0.2, 1] },
  { name: "Blue", bg: [0.05, 0.07, 0.12, 0.98], text: [0.9, 0.95, 1, 1], button: [0.1, 0.16, 0.28, 1], buttonPressed: [0.16, 0.28, 0.45, 1], outline: [0.12, 0.2, 0.35, 1], pageOutline: [0.15, 0.25, 0.4, 1], buttonOutline: [0.15, 0.25, 0.4, 1] },
  { name: "Red", bg: [0.12, 0.05, 0.05, 0.98], text: [1, 0.92, 0.92, 1], button: [0.28, 0.1, 0.1, 1], buttonPressed: [0.45, 0.15, 0.15, 1], outline: [0.35, 0.12, 0.12, 1], pageOutline: [0.4, 0.15, 0.15, 1], buttonOutline: [0.4, 0.15, 0.15, 1] },
  { name: "Green", bg: [0.05, 0.1, 0.06, 0.98], text: [0.92, 1, 0.93, 1], button: [0.1, 0.22, 0.12, 1], buttonPressed: [0.16, 0.35, 0.18, 1], outline: [0.12, 0.28, 0.15, 1], pageOutline: [0.15, 0.32, 0.18, 1], buttonOutline: [0.15, 0.32, 0.18, 1] }
];
var themeIndex = 0;
var menuOutlineColor = THEMES[0].outline;
var pageOutlineColor = THEMES[0].pageOutline;
var buttonOutlineColor = THEMES[0].buttonOutline;
function applyTheme() {
  const t = THEMES[themeIndex];
  bgColor = t.bg;
  textColor = t.text;
  buttonColor = t.button;
  buttonPressedColor = t.buttonPressed;
  menuOutlineColor = t.outline;
  pageOutlineColor = t.pageOutline;
  buttonOutlineColor = t.buttonOutline;
}
function applyThemeId(i) {
  themeIndex = i;
  applyTheme();
}
applyTheme();
var menuOutlineThickness = 9e-3 * MENU_SCALE;
var controlOutlineThickness = 75e-4 * MENU_SCALE;
var rowOutlineThickness = 65e-4 * MENU_SCALE;
var outlinesEnabled = true;
var rowButtonHeight = 0.06 * MENU_SCALE;
var rowButtonWidth = 0.61 * MENU_SCALE;
var rowButtonSpacing = 0.032 * MENU_SCALE;
var disconnectButtonWidth = 0.62 * MENU_SCALE;
var buttonsPerPage = 9;
var currentNotification = "";
var notifactionResetTime = 0;
var currentCategory = 0;
var currentPage = 0;
var frameCount = 0;
var menuCanvas = null;
var leftAxis = null;
var rightAxis = null;
var outAxis = null;
function ensureOutAxis() {
  if (outAxis === null)
    outAxis = Il2Cpp.alloc(8);
  return outAxis;
}
var leftPrimary = false;
var leftSecondary = false;
var rightPrimary = false;
var rightSecondary = false;
var leftGrab = false;
var rightGrab = false;
var leftTrigger = false;
var rightTrigger = false;
var leftStick = false;
var rightStick = false;
var gunColor = [0.6784, 0.498, 0.8549, 0.75];
var wasRightTrigger = false;
var wasRightTriggerFling = false;
var wasRightTriggerKick = false;
var menuInitTime = 0;
function Hooks() {
  Il2Cpp.perform(() => {
    const images = {
      "GRO": Il2Cpp.domain.assembly("Assembly-CSharp").image,
      "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,
      "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image,
      "UnityEngine.UIModule": Il2Cpp.domain.assembly("UnityEngine.UIModule").image,
      "UnityEngine.UI": Il2Cpp.domain.assembly("UnityEngine.UI").image,
      "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly("UnityEngine.TextRenderingModule").image,
      "PhotonFusionNetworkingRealtime": Il2Cpp.domain.assembly("Assembly-CSharp").image,
      "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
      "UnityEngine.XRModule": Il2Cpp.domain.assembly("UnityEngine.XRModule").image,
      "UnityEngine.AudioModule": Il2Cpp.domain.assembly("UnityEngine.AudioModule").image,
      "UnityEngine.AssetBundleModule": Il2Cpp.domain.assembly("UnityEngine.AssetBundleModule").image,
      "PhotonUnityNetworking": Il2Cpp.domain.assembly("PhotonUnityNetworking").image,
      "PhotonVoice": (() => {
        try {
          return Il2Cpp.domain.assembly("PhotonVoice").image;
        } catch (e) {
          return null;
        }
      })(),
      "PhotonVoicePUN": (() => {
        try {
          return Il2Cpp.domain.assembly("PhotonVoicePUN").image;
        } catch (e) {
          try {
            return Il2Cpp.domain.assembly("PhotonVoice.PUN").image;
          } catch (e2) {
            return null;
          }
        }
      })()
    };
    const AssemblyCSharp = images["GRO"];
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const UnityEngineUI = images["UnityEngine.UI"];
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    const PhotonFusionNetworking = images["PhotonRealtime"];
    const UnityTextMeshPro = images["Unity.TextMeshPro"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineAudio = images["UnityEngine.AudioModule"];
    const PhotonUnityNetworking = images["PhotonUnityNetworking"];
    let AudioSourceClass = null;
    let AudioClipClass = null;
    try {
      if (UnityEngineAudio != null) {
        AudioSourceClass = UnityEngineAudio.class("UnityEngine.AudioSource");
        AudioClipClass = UnityEngineAudio.class("UnityEngine.AudioClip");
      }
    } catch (e) {
    }
    let RecorderClass = null;
    try {
      if (images["PhotonVoice"] != null)
        RecorderClass = images["PhotonVoice"].class("Photon.Voice.Unity.Recorder");
    } catch (e) {
    }
    let PhotonVoiceViewClass = null;
    try {
      if (images["PhotonVoicePUN"] != null)
        PhotonVoiceViewClass = images["PhotonVoicePUN"].class("Photon.Voice.PUN.PhotonVoiceView");
    } catch (e) {
    }
    let PunVoiceClientClass = null;
    try {
      if (images["PhotonVoicePUN"] != null)
        PunVoiceClientClass = images["PhotonVoicePUN"].class("Photon.Voice.PUN.PunVoiceClient");
    } catch (e) {
    }
    const InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices");
    const CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages");
    const GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    const Object = UnityEngineCore.class("UnityEngine.Object");
    const Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    const Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    const Time = UnityEngineCore.class("UnityEngine.Time");
    const Resources = UnityEngineCore.class("UnityEngine.Resources");
    const Material = UnityEngineCore.class("UnityEngine.Material");
    const Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    const Shader = UnityEngineCore.class("UnityEngine.Shader");
    const RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    const LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    const GorillaReportButton = autofindclasscauselazyyesyes();
    const PhotonNetwork = PhotonUnityNetworking.class("Photon.Pun.PhotonNetwork");
    const classOf = (image, name) => {
      try {
        return image.class(name);
      } catch (_) {
        return null;
      }
    };
    const EnverGardenGame = (() => {
      try {
        return Il2Cpp.domain.assembly("Enver.GardenGame").image;
      } catch (e) {
        return null;
      }
    })();
    const UsernameControllerClass = classOf(EnverGardenGame, "BwahVR.Controllers.UsernameController");
    const GTPlayerClass = classOf(EnverGardenGame, "GorillaLocomotion.PlayerBwah");
    let GTPlayer = null;
    let leftHandTransform = null;
    let rightHandTransform = null;
    let headCollider = null;
    let bodyCollider = null;
    const BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    const Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    const Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    const Physics = UnityEnginePhysics.class("UnityEngine.Physics");
    const Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    const CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    const GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    const Text = UnityEngineUI.class("UnityEngine.UI.Text");
    const Font = UnityEngineTextRendering.class("UnityEngine.Font");
    try {
      const AssemblyCSharp2 = Il2Cpp.domain.assembly("Assembly-CSharp").image;
      const GorillaVrRigClass = AssemblyCSharp2.class("GorillaVrRig");
      try {
        GorillaVrRigClass.method("NotifyDiscordAction").implementation = function(actionMessage) {
          return this.method("NotifyDiscordAction").invoke(actionMessage);
        };
      } catch (e) {
      }
      const rigs = Object.method("FindObjectsOfTypeAll").overload("System.Type").invoke(GorillaVrRigClass.type.object);
      for (let i = 0; i < rigs.length; i++) {
        try {
          const instance = rigs.get(i);
          const wv = instance.field("discordWebhookURL").value;
        } catch (e) {
        }
      }
    } catch (e) {
    }
    try {
      const LoadingScreenManager = AssemblyCSharp.class("LoadingScreenManager");
      LoadingScreenManager.method("ShowLoadingScreen").implementation = function() {
        try {
          this.method("HideLoadingScreen").invoke();
        } catch (_) {
        }
      };
      LoadingScreenManager.method("Start").implementation = function() {
        this.method("Start").invoke();
        try {
          const loadingObjects = this.field("loadingScreenObjects").value;
          if (loadingObjects) {
            loadingObjects.method("SetActive").invoke(false);
          }
          this.method("HideLoadingScreen").invoke();
        } catch (_) {
        }
      };
    } catch (e) {
    }
    try {
      let PlayFabSettings = null;
      const customUrl = Il2Cpp.string("https://playfabapi.com");
      try {
        PlayFabSettings = AssemblyCSharp.class("PlayFab.PlayFabApiSettings");
      } catch (_) {
        try {
          PlayFabSettings = Il2Cpp.domain.assembly("PlayFab").image.class("PlayFab.PlayFabApiSettings");
        } catch (__) {
          try {
            PlayFabSettings = Il2Cpp.domain.assembly("PlayFabSDK").image.class("PlayFab.PlayFabApiSettings");
          } catch (___) {
          }
        }
      }
      if (PlayFabSettings) {
        PlayFabSettings.method("set_ProductionEnvironmentUrl").implementation = function(value) {
          return;
        };
        PlayFabSettings.method("get_ProductionEnvironmentUrl").implementation = function() {
          return customUrl;
        };
      }
    } catch (e) {
    }
    let firebaseHooked = false;
    try {
      const FirebaseApi = AssemblyCSharp.class("FirebaseApi");
      try {
        const originalUpdateScore = FirebaseApi.method("UpdateScore").implementation;
        FirebaseApi.method("UpdateScore").implementation = function(joinCode, stat, score) {
          return originalUpdateScore.call(this, joinCode, stat, score);
        };
      } catch (e) {
      }
      const originalGetLeaderboard = FirebaseApi.method("GetLeaderboard").implementation;
      FirebaseApi.method("GetLeaderboard").implementation = function(stat, limit) {
        return originalGetLeaderboard.call(this, stat, limit);
      };
      firebaseHooked = true;
    } catch (e) {
    }
    try {
      const SodaMachineClass = AssemblyCSharp.class("SodaMachine");
      SodaMachineClass.method("BuySoda").implementation = function() {
        try {
          const prefabs = this.field("allSodaPrefabs").value;
          for (let j = 0; j < prefabs.length; j++) {
            this.method("DisplaySoda").invoke(j);
            this.method("BuySoda").invoke();
          }
        } catch (_) {
          this.method("BuySoda").invoke();
        }
      };
    } catch (e) {
    }
    let UberShader = null;
    let TextShader = null;
    let zeroVector = null;
    let oneVector = null;
    let identityQuaternion = null;
    let arial = null;
    function Destroy(object) {
      Object.method("Destroy", 1).invoke(object);
    }
    function getComponent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("GetComponent").overload("System.Type").invoke(type.type.object);
    }
    function getComponentInParent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("GetComponentInParent").overload("System.Type").invoke(type.type.object);
    }
    function addComponent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("AddComponent").overload("System.Type").invoke(type.type.object);
    }
    function findObjectsOfType(type) {
      if (!type || !type.type)
        return [];
      return Object.method("FindObjectsOfType").overload("System.Type").invoke(type.type.object);
    }
    function findObjectOfType(type) {
      if (!type || !type.type)
        return null;
      return Object.method("FindObjectOfType").overload("System.Type").invoke(type.type.object);
    }
    function getTransform(obj) {
      return obj.method("get_transform").invoke();
    }
    function playerIsLocal(player) {
      return player.method("get_IsMine").invoke();
    }
    function sendAllOutgoing() {
      PhotonNetwork.method("SendAllOutgoingCommands").invoke();
    }
    function vec3(x, y, z) {
      const temp = GameObject.method("CreatePrimitive").invoke(3);
      const t = temp.method("get_transform").invoke();
      t.method("set_position").invoke([x, y, z]);
      const pos = t.method("get_position").invoke();
      Object.method("Destroy", 1).invoke(temp);
      return pos;
    }
    function identityQ() {
      const temp = GameObject.method("CreatePrimitive").invoke(3);
      const q = temp.method("get_transform").invoke().method("get_rotation").invoke();
      Object.method("Destroy", 1).invoke(temp);
      return q;
    }
    function PrefabGun(spawnId) {
      if (rightGrab) {
        const gunData = renderGun();
        const gunPointer = gunData.gunPointer;
        if (rightTrigger) {
          const pos = getTransform(gunPointer).method("get_position").invoke();
          const Spawned = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string(spawnId), pos, identityQuaternion, 0, NULL);
          sendAllOutgoing();
        }
        ;
        ;
      }
    }
    function SetName(name) {
      try {
        PhotonNetwork.method("set_NickName").invoke(Il2Cpp.string(name));
      } catch (e) {
      }
      if (UsernameControllerClass != null) {
        try {
          const controllers = Object.method("FindObjectsOfType").inflate(UsernameControllerClass).invoke();
          for (let i = 0; i < controllers.length; i++) {
            try {
              controllers.get(i).method("SetUsernameText").invoke(Il2Cpp.string(name));
            } catch (e) {
            }
          }
        } catch (e) {
        }
        try {
          UsernameControllerClass.method("RequestUsernameUpdate").invoke(Il2Cpp.string(name));
        } catch (e) {
        }
      }
    }
    function CrashAll() {
      for (let i = 0; i < 1500; i++) {
        const thingforlag = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string("Hellephant"), [400, -400, 0], identityQuaternion, 0, NULL);
        Destroy(thingforlag);
      }
      sendAllOutgoing();
    }
    function PhotonInstantiate(prefab, x, y, z) {
      const pos = vec3(x, y, z);
      let q;
      try {
        q = identityQuaternion;
      } catch (_) {
      }
      if (!q || q.isNull())
        q = identityQ();
      return PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string(prefab), pos, q, 0, null);
    }
    function world2Player(position) {
      position = Vector3.method("op_Subtraction", 2).invoke(position, getTransform(bodyCollider).method("get_position").invoke());
      position = Vector3.method("op_Addition", 2).invoke(position, getTransform(GTPlayer).method("get_position").invoke());
      return position;
    }
    function sendNotification(text = "", requiresReload = true, clearTime = 5) {
      const isOld = currentNotification == text;
      notifactionResetTime = time + clearTime;
      currentNotification = text;
      if (requiresReload && !isOld)
        reloadMenu();
    }
    function setupPanelMaterial(material, colorArr) {
      const setFloat = (name, value) => {
        try {
          material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string(name), value);
        } catch (_) {
        }
      };
      const setColor3 = (name, value) => {
        try {
          material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string(name), value);
        } catch (_) {
        }
      };
      setColor3("_BaseColor", colorArr);
      setColor3("_Color", colorArr);
      const emission = [colorArr[0] * 0.25, colorArr[1] * 0.25, colorArr[2] * 0.25, 1];
      setColor3("_EmissionColor", emission);
      try {
        material.method("EnableKeyword").invoke(Il2Cpp.string("_EMISSION"));
      } catch (_) {
      }
      try {
        material.method("SetOverrideTag").invoke(Il2Cpp.string("RenderType"), Il2Cpp.string("Opaque"));
      } catch (_) {
      }
      setFloat("_Surface", 0);
      setFloat("_ZWrite", 1);
      setFloat("_Cull", 0);
      setFloat("_Smoothness", 0);
      setFloat("_Glossiness", 0);
      setFloat("_Metallic", 0);
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_SURFACE_TYPE_TRANSPARENT"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHAPREMULTIPLY_ON"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHABLEND_ON"));
      } catch (_) {
      }
      try {
        material.method("set_renderQueue").invoke(2e3);
      } catch (_) {
      }
    }
    function setupOpaqueMaterial(material) {
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_ZWrite"), 1);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_ZTest"), 4);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_SrcBlend"), 1);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_DstBlend"), 0);
      } catch (_) {
      }
      try {
        material.method("SetOverrideTag").invoke(Il2Cpp.string("RenderType"), Il2Cpp.string("Opaque"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHABLEND_ON"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHAPREMULTIPLY_ON"));
      } catch (_) {
      }
      try {
        material.method("set_renderQueue").invoke(2e3);
      } catch (_) {
      }
    }
    function createOutlinedRoundedObject(pos, scale, fillColor, outlineColor, parent, interactive = false, outlineSize = 0.025) {
      const createLayer = (center, size, color, keepCollider) => {
        return createObject(center, identityQuaternion, size, 3, color, parent);
      };
      if (outlinesEnabled && outlineSize > 0) {
        createLayer([pos[0] - 1e-3, pos[1], pos[2]], [scale[0], scale[1] + outlineSize * 2, scale[2] + outlineSize * 2], outlineColor, false);
      }
      return createLayer(pos, scale, fillColor, interactive);
    }
    function createObject(pos = zeroVector, rot = identityQuaternion, scale = oneVector, primitiveType = 3, colorArr = [1, 1, 1, 1], parent = null, enableCollider = false) {
      const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);
      const renderer = getComponent(obj, Renderer);
      if (colorArr[3] == 0) {
        renderer.method("set_enabled").invoke(false);
      } else {
        const material = renderer.method("get_material").invoke();
        material.method("set_shader").invoke(UberShader);
        material.method("set_color").invoke(colorArr);
        try {
          setupPanelMaterial(material, colorArr);
        } catch (_) {
          try {
            setupOpaqueMaterial(material);
          } catch (_2) {
          }
        }
      }
      const col = getComponent(obj, Collider);
      if (!col.isNull()) {
        if (enableCollider) {
          col.method("set_enabled").invoke(true);
          col.method("set_isTrigger").invoke(true);
        } else {
          col.method("set_isTrigger").invoke(true);
        }
      }
      const transform = getTransform(obj);
      if (parent != null)
        transform.method("SetParent", 2).invoke(parent, false);
      transform.method("set_position").invoke(pos);
      transform.method("set_rotation").invoke(rot);
      transform.method("set_localScale").invoke(scale);
      return obj;
    }
    function renderMenuText(canvasObject, text = "", color = [1, 1, 1, 1], pos = zeroVector, size = oneVector) {
      const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
      title.method("set_text").invoke(Il2Cpp.string(text));
      title.method("set_font").invoke(arial);
      title.method("set_fontSize").invoke(1);
      title.method("set_color").invoke(color);
      title.method("set_fontStyle").invoke(3);
      title.method("set_alignment").invoke(4);
      title.method("set_resizeTextForBestFit").invoke(true);
      title.method("set_resizeTextMinSize").invoke(0);
      try {
        title.method("set_resizeTextMaxSize").invoke(16.8);
      } catch (_) {
      }
      const rectTransform = getComponent(title, RectTransform);
      rectTransform.method("set_sizeDelta").invoke(size);
      rectTransform.method("set_position").invoke(pos);
      rectTransform.method("set_rotation").invoke(Quaternion.method("Euler").invoke(180, 90, 90));
    }
    function updateButtonColor(button, buttonData) {
      const RendererClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Renderer");
      const renderer = getComponent(button, RendererClass);
      if (!renderer)
        return;
      const material = renderer.method("get_material").invoke();
      const c = buttonData.enabled ? buttonPressedColor : buttonColor;
      try {
        material.method("set_color").invoke(c);
      } catch (_) {
      }
      try {
        material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_BaseColor"), c);
      } catch (_) {
      }
      try {
        material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_EmissionColor"), [c[0] * 0.25, c[1] * 0.25, c[2] * 0.25, 1]);
      } catch (_) {
      }
    }
    function reloadMenu() {
      if (menu != null) {
        Object.method("Destroy", 1).invoke(menu);
        menu = null;
      }
      if (allStockOn) {
        try {
          makeAllInStock();
        } catch (e) {
        }
      }
    }
    let gunLocked = false;
    let lockTarget = null;
    let GunPointer = null;
    let GunLine = null;
    function renderMenu() {
      try {
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        Destroy(getComponent(menu, BoxCollider));
        try {
          menu.method("set_layer").invoke(31);
        } catch (_) {
        }
        const S = MENU_SCALE;
        const panelScaleZ = 0.76 * S;
        const panelCenterZ = -0.03 * S;
        const pageCenterZ = -0.045 * S;
        createOutlinedRoundedObject([0.1 * S, 0, panelCenterZ], [0.1 * S, 0.72 * S, panelScaleZ], bgColor, menuOutlineColor, getTransform(menu), false, menuOutlineThickness);
        try {
          const CameraClass2 = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          const cameras = Object.method("FindObjectsOfType").overload("System.Type").invoke(CameraClass2.type.object);
          for (let ci = 0; ci < cameras.length; ci++) {
            try {
              const cam = cameras.get(ci);
              const maskBefore = cam.method("get_cullingMask").invoke();
              if ((maskBefore & 1 << 31) === 0)
                cam.method("set_cullingMask").invoke(maskBefore | 1 << 31);
            } catch (_) {
            }
          }
        } catch (_) {
        }
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const canvas = addComponent(canvasObject, Canvas);
        Destroy(getComponent(canvasObject, BoxCollider));
        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvas.method("set_sortingOrder").invoke(32767);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1e3);
        menuCanvas = canvas;
        try {
          const CameraClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          let mainCam = CameraClass.method("get_main").invoke();
          if (!mainCam || mainCam.isNull()) {
            const sz = CameraClass.method("get_allCamerasCount").invoke();
            if (sz > 0) {
              const camArr = CameraClass.method("GetAllCameras", 1).invoke([]);
              for (let ci = 0; ci < sz; ci++) {
                const c = camArr.get(ci);
                if (c && !c.isNull() && c.method("get_isActiveAndEnabled").invoke()) {
                  mainCam = c;
                  break;
                }
              }
            }
          }
          if (mainCam && !mainCam.isNull())
            canvas.method("set_worldCamera").invoke(mainCam);
        } catch (_) {
        }
        renderMenuText(canvasObject, menuName + ` [${currentPage + 1}]`, textColor, [0.11 * S, 0, 0.103 * S], [0.7 * S, 0.06 * S]);
        if (time > notifactionResetTime)
          currentNotification = "";
        renderMenuText(canvasObject, currentNotification.length > 0 ? "[" + currentNotification + "]" : "", textColor, [0.11 * S, 0, 0.225 * S], [0.7 * S, 0.045 * S]);
        const homeZ = 0.205 * S;
        {
          const homeButton = createOutlinedRoundedObject([0.1 * S, 0, homeZ], [0.09 * S, disconnectButtonWidth, 0.065 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          homeButton.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"));
          addComponent(homeButton, GorillaReportButton);
          if (AudioSourceClass != null) {
            try {
              addComponent(homeButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(homeButton, Collider).method("set_isTrigger").invoke(true);
          renderMenuText(canvasObject, "home page", textColor, [0.11 * S, 0, homeZ], [0.7 * S, 0.05 * S]);
        }
        {
          const pageButton = createOutlinedRoundedObject([0.1 * S, 0.14 * S, pageCenterZ], [0.09 * S, 0.135 * S, 0.64 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));
          addComponent(pageButton, GorillaReportButton);
          if (AudioSourceClass != null) {
            try {
              addComponent(pageButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
          renderMenuText(canvasObject, "<", textColor, [0.11 * S, 0.14 * S, pageCenterZ], [0.25 * S, 0.075 * S]);
        }
        {
          const pageButton = createOutlinedRoundedObject([0.1 * S, -0.14 * S, pageCenterZ], [0.09 * S, 0.135 * S, 0.64 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));
          addComponent(pageButton, GorillaReportButton);
          if (AudioSourceClass != null) {
            try {
              addComponent(pageButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
          renderMenuText(canvasObject, ">", textColor, [0.11 * S, -0.14 * S, pageCenterZ], [0.25 * S, 0.075 * S]);
        }
        const maxCurrentPage = Math.max(Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1, 0);
        if (currentPage > maxCurrentPage)
          currentPage = maxCurrentPage;
        const targetMods = buttons[currentCategory].slice(currentPage * buttonsPerPage).slice(0, buttonsPerPage);
        const rowStartZ = 0.075 * S;
        let i = 0;
        targetMods.forEach((buttonData) => {
          const rowZ = rowStartZ - i * rowButtonSpacing;
          const button = createOutlinedRoundedObject([0.105 * S, 0, rowZ], [0.09 * S, rowButtonWidth, rowButtonHeight], buttonData.enabled ? buttonPressedColor : buttonColor, buttonOutlineColor, getTransform(menu), true, rowOutlineThickness);
          button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText));
          addComponent(button, GorillaReportButton);
          if (AudioSourceClass != null) {
            try {
              addComponent(button, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(button, Collider).method("set_isTrigger").invoke(true);
          renderMenuText(canvasObject, (buttonData.enabled ? "[+] " : "") + buttonData.buttonText, textColor, [0.11 * S, 0, rowZ], [0.8 * S, 0.05 * S]);
          updateButtonColor(button, buttonData);
          i++;
        });
      } catch (e) {
      }
    }
    function renderReference() {
      if (righthand) {
        reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, leftHandTransform);
      } else {
        reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform);
      }
      referenceCollider = getComponent(reference, Collider);
      getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
      reference.method("set_layer").invoke(2);
      addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
    }
    function renderGun(overrideLayerMask = null) {
      const StartPosition = rightHandTransform.method("get_position").invoke();
      const Direction = rightHandTransform.method("get_forward").invoke();
      const DirectionDivided = Vector3.method("op_Division").invoke(Direction, 4);
      const rayStartPosition = Vector3.method("op_Addition").invoke(StartPosition, DirectionDivided);
      const layerMask = overrideLayerMask || -3180559;
      const hits = Physics.method("RaycastAll", 4).invoke(rayStartPosition, Direction, 512, layerMask);
      let finalDistance = Infinity;
      let finalRay = null;
      for (const hit of hits) {
        const distance = Vector3.method("Distance").invoke(hit.method("get_point").invoke(), StartPosition);
        if (distance < finalDistance) {
          finalRay = hit;
          finalDistance = distance;
        }
      }
      let EndPosition;
      if (gunLocked) {
        EndPosition = getTransform(lockTarget).method("get_position").invoke();
      } else if (finalRay != null && !finalRay.isNull()) {
        EndPosition = finalRay.method("get_point").invoke();
      } else {
        const farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
        EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
      }
      if (Vector3.method("op_Equality").invoke(EndPosition, zeroVector)) {
        const farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
        EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
      }
      if (GunPointer == null) {
        GunPointer = createObject(EndPosition, identityQuaternion, [0.1, 0.1, 0.1], 0, [1, 1, 1, 1]);
      }
      GunPointer.method("SetActive").invoke(true);
      const pointerTransform = getTransform(GunPointer);
      pointerTransform.method("set_position").invoke(EndPosition);
      const PointerRenderer = getComponent(GunPointer, Renderer);
      const material = PointerRenderer.method("get_material").invoke();
      material.method("set_shader").invoke(TextShader);
      const pointerColor = gunLocked || rightTrigger ? buttonPressedColor : gunColor;
      material.method("set_color").invoke(pointerColor);
      const collider = getComponent(GunPointer, Collider);
      if (collider != null) {
        Destroy(collider);
      }
      if (GunLine == null) {
        const lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
        GunLine = addComponent(lineObj, LineRenderer);
      } else {
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
      }
      const lineMaterial = GunLine.method("get_material").invoke();
      lineMaterial.method("set_shader").invoke(TextShader);
      GunLine.method("set_startColor").invoke(bgColor);
      GunLine.method("set_endColor").invoke(bgColor);
      const lineWidth = 0.025;
      GunLine.method("set_startWidth").invoke(lineWidth);
      GunLine.method("set_endWidth").invoke(lineWidth);
      GunLine.method("set_positionCount").invoke(2);
      GunLine.method("set_useWorldSpace").invoke(true);
      GunLine.method("SetPosition").invoke(0, StartPosition);
      GunLine.method("SetPosition").invoke(1, EndPosition);
      if (rightTrigger || gunLocked) {
        const Step = 10;
        GunLine.method("set_positionCount").invoke(Step);
        GunLine.method("SetPosition").invoke(0, StartPosition);
        for (let i = 1; i < Step - 1; i++) {
          const t = i / (Step - 1);
          const Position = Vector3.method("Lerp").invoke(StartPosition, EndPosition, t);
          const randomValue = Math.random();
          let offset = zeroVector;
          if (randomValue > 0.75) {
            offset = [
              Math.random() * 0.2 - 0.1,
              Math.random() * 0.2 - 0.1,
              Math.random() * 0.2 - 0.1
            ];
          }
          const finalPosition = Vector3.method("op_Addition").invoke(Position, offset);
          GunLine.method("SetPosition").invoke(i, finalPosition);
        }
        GunLine.method("SetPosition").invoke(Step - 1, EndPosition);
      }
      return { ray: finalRay, gunPointer: GunPointer };
    }
    const ROCK_GLYPHS = {
      "A": [".#.", "#.#", "###", "#.#", "#.#"],
      "B": ["##.", "#.#", "##.", "#.#", "##."],
      "C": [".##", "#..", "#..", "#..", ".##"],
      "D": ["##.", "#.#", "#.#", "#.#", "##."],
      "E": ["###", "#..", "##.", "#..", "###"],
      "F": ["###", "#..", "##.", "#..", "#.."],
      "G": [".##", "#..", "#.#", "#.#", ".##"],
      "H": ["#.#", "#.#", "###", "#.#", "#.#"],
      "I": ["###", ".#.", ".#.", ".#.", "###"],
      "J": ["..#", "..#", "..#", "#.#", ".#."],
      "K": ["#.#", "#.#", "##.", "#.#", "#.#"],
      "L": ["#..", "#..", "#..", "#..", "###"],
      "M": ["#.#", "###", "###", "#.#", "#.#"],
      "N": ["#.#", "##.", "###", "#.#", "#.#"],
      "O": [".#.", "#.#", "#.#", "#.#", ".#."],
      "P": ["##.", "#.#", "##.", "#..", "#.."],
      "Q": [".#.", "#.#", "#.#", "##.", ".##"],
      "R": ["##.", "#.#", "##.", "#.#", "#.#"],
      "S": [".##", "#..", ".#.", "..#", "##."],
      "T": ["###", ".#.", ".#.", ".#.", ".#."],
      "U": ["#.#", "#.#", "#.#", "#.#", "###"],
      "V": ["#.#", "#.#", "#.#", "#.#", ".#."],
      "W": ["#.#", "#.#", "###", "###", "#.#"],
      "X": ["#.#", "#.#", ".#.", "#.#", "#.#"],
      "Y": ["#.#", "#.#", ".#.", ".#.", ".#."],
      "Z": ["###", "..#", ".#.", "#..", "###"],
      " ": ["...", "...", "...", "...", "..."]
    };
    function spawnVehicleWord(gunPointer, word) {
      Il2Cpp.perform(() => {
        try {
          const VSV = classOf(EnverGardenGame, "Enver.Features.Rideable.Shop.VehicleShopView");
          if (VSV == null)
            return;
          const views = findObjectsOfType(VSV);
          let view = null;
          for (let v = 0; v < views.length; v++) {
            try {
              view = views.get(v);
              if (view != null && !view.isNull())
                break;
            } catch (e) {
            }
          }
          if (view == null)
            return;
          const list = view.field("vehicles").value;
          if (list == null || list.isNull())
            return;
          const count = list.method("get_Count").invoke();
          let entry = null;
          for (let i = 0; i < count; i++) {
            try {
              const en = list.method("get_Item").invoke(i);
              if (en == null || en.isNull())
                continue;
              let nmStr = "";
              try {
                const nm = en.field("displayName").value;
                if (nm != null)
                  nmStr = String(nm.toString()).toLowerCase();
              } catch (e) {
              }
              let skuStr = "";
              try {
                const sku = en.field("vehicleSku").value;
                if (sku != null)
                  skuStr = String(sku.toString()).toLowerCase();
              } catch (e) {
              }
              if (nmStr.indexOf("jet") >= 0 || nmStr.indexOf("ski") >= 0 || skuStr.indexOf("jet") >= 0 || skuStr.indexOf("ski") >= 0) {
                entry = en;
                break;
              }
              if (entry == null)
                entry = en;
            } catch (e) {
            }
          }
          if (entry == null)
            return;
          const prefab = entry.field("vehiclePrefab").value;
          if (prefab == null || prefab.isNull())
            return;
          const spawner = view.field("vehicleSpawner").value;
          if (spawner == null || spawner.isNull())
            return;
          let basePos = rightHandTransform.method("get_position").invoke();
          if (gunPointer != null && !gunPointer.isNull()) {
            try {
              basePos = getTransform(gunPointer).method("get_position").invoke();
            } catch (e) {
            }
          }
          const spacing = 1.2;
          const up = Vector3.field("upVector").value;
          const right = Vector3.field("rightVector").value;
          const wordUpper = word.toUpperCase();
          let totalWidth = 0;
          for (let c = 0; c < wordUpper.length; c++) {
            const glyph = ROCK_GLYPHS[wordUpper[c]] || ROCK_GLYPHS[" "];
            totalWidth += (glyph[0].length + 1) * spacing;
          }
          const startOffset = Vector3.method("op_Multiply", 2).invoke(right, -(totalWidth / 2));
          let cursor = 0;
          for (let c = 0; c < wordUpper.length; c++) {
            const glyph = ROCK_GLYPHS[wordUpper[c]] || ROCK_GLYPHS[" "];
            const cols = glyph[0].length;
            for (let row = 0; row < glyph.length; row++) {
              for (let col = 0; col < cols; col++) {
                if (glyph[row][col] !== "#")
                  continue;
                const xOff = Vector3.method("op_Multiply", 2).invoke(right, (cursor + col) * spacing);
                const yOff = Vector3.method("op_Multiply", 2).invoke(up, (glyph.length - 1 - row) * spacing);
                const offset = Vector3.method("op_Addition", 2).invoke(xOff, yOff);
                const pos = Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Addition", 2).invoke(basePos, startOffset), offset);
                const rot = identityQuaternion;
                try {
                  spawner.method("SetVehicle").invoke(prefab, entry.field("vehicleHintPrefab").value, entry.field("spawnType").value, entry.field("portSpawnPoints").value, entry.field("waterSurface").value, entry.field("spawnSurfaceLayers").value, entry.field("requiredSurfaceTag").value);
                  spawner.method("SpawnVehicleAt").invoke(pos, rot);
                } catch (e) {
                }
              }
            }
            cursor += cols + 1;
          }
          sendAllOutgoing();
          const noGravClasses = [
            "Enver.Features.Rideable.JetSkiController",
            "Enver.Features.Rideable.CarController"
          ];
          for (const clsName of noGravClasses) {
            try {
              const cls = classOf(EnverGardenGame, clsName);
              if (cls == null)
                continue;
              const objs = findObjectsOfType(cls);
              for (let oi = 0; oi < objs.length; oi++) {
                try {
                  const go = objs.get(oi).method("get_gameObject").invoke();
                  if (go == null || go.isNull())
                    continue;
                  const rb = getComponent(go, Rigidbody);
                  if (rb != null && !rb.isNull()) {
                    rb.method("set_isKinematic").invoke(true);
                    rb.method("set_useGravity").invoke(false);
                  }
                } catch (e) {
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function recenterMenu() {
      const menuTransform = getTransform(menu);
      let targetPos, targetRot;
      if (righthand) {
        targetPos = rightHandTransform.method("get_position").invoke();
        targetRot = rightHandTransform.method("get_rotation").invoke();
        targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, 0, 180));
      } else {
        targetPos = leftHandTransform.method("get_position").invoke();
        targetRot = leftHandTransform.method("get_rotation").invoke();
      }
      if (LerpMenu) {
        const menuPos = menuTransform.method("get_position").invoke();
        const distance = Vector3.method("Distance").invoke(menuPos, zeroVector);
        if (distance < 1) {
          menuTransform.method("set_position").invoke(targetPos);
          menuTransform.method("set_rotation").invoke(targetRot);
        } else {
          menuTransform.method("set_position").invoke(Vector3.method("Lerp").invoke(menuPos, targetPos, deltaTime * 15));
          menuTransform.method("set_rotation").invoke(Quaternion.method("Slerp").invoke(menuTransform.method("get_rotation").invoke(), targetRot, deltaTime * 15));
        }
      } else {
        menuTransform.method("set_position").invoke(targetPos);
        menuTransform.method("set_rotation").invoke(targetRot);
      }
    }
    class ButtonInfo {
      buttonText;
      method;
      enableMethod;
      disableMethod;
      isTogglable;
      toolTip;
      enabled;
      constructor(config) {
        this.buttonText = config.buttonText;
        this.method = config.method;
        this.enableMethod = config.enableMethod;
        this.disableMethod = config.disableMethod;
        this.isTogglable = config.isTogglable ?? true;
        this.toolTip = config.toolTip ?? null;
        this.enabled = config.enabled ?? false;
      }
    }
    const buttons = [
      [
        new ButtonInfo({
          buttonText: "Settings",
          method: () => {
            currentCategory = 2;
            currentPage = 0;
          },
          isTogglable: false,
          toolTip: "Opens the settings category."
        }),
        new ButtonInfo({
          buttonText: "Soundboard",
          method: () => {
            currentCategory = 14;
            currentPage = 0;
            rebuildSoundboardButtons();
          },
          isTogglable: false,
          toolTip: "Opens soundboard category."
        })
      ],
      [
        new ButtonInfo({
          buttonText: "PreviousPage",
          method: () => {
            const lastPage = Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1;
            currentPage--;
            if (currentPage < 0)
              currentPage = lastPage;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "NextPage",
          method: () => {
            const lastPage = Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1;
            currentPage++;
            currentPage %= lastPage + 1;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "GlobalReturn",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
          },
          isTogglable: false,
          toolTip: "Returns you back to the main category."
        })
      ],
      [
        new ButtonInfo({
          buttonText: "Exit Settings",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
          },
          isTogglable: false,
          toolTip: "Returns you back to the main category."
        }),
        new ButtonInfo({
          buttonText: "dump game (fixed 0x86)",
          method: () => {
            dumpIl2CppAll();
          },
          isTogglable: false,
          toolTip: ""
        }),
        new ButtonInfo({
          buttonText: "dump photon views (fixed 0x86)",
          method: () => {
            dumpPhotonPrefabs();
          },
          isTogglable: false,
          toolTip: ""
        }),
        new ButtonInfo({
          buttonText: "DONT press",
          method: () => {
            const ok = playNamedClip("Kay Flock - PSA (Official Video)");
            sendNotification(ok ? "playing Kay Flock" : "clip not found", false, 2);
          },
          isTogglable: false,
          toolTip: "Plays the Kay Flock song clip."
        }),
        new ButtonInfo({
          buttonText: "Dark",
          isTogglable: false,
          method: () => {
            applyThemeId(0);
            reloadMenu();
          },
          toolTip: "Dark theme."
        }),
        new ButtonInfo({
          buttonText: "Blue",
          isTogglable: false,
          method: () => {
            applyThemeId(1);
            reloadMenu();
          },
          toolTip: "Blue theme."
        }),
        new ButtonInfo({
          buttonText: "Red",
          isTogglable: false,
          method: () => {
            applyThemeId(2);
            reloadMenu();
          },
          toolTip: "Red theme."
        }),
        new ButtonInfo({
          buttonText: "Green",
          isTogglable: false,
          method: () => {
            applyThemeId(3);
            reloadMenu();
          },
          toolTip: "Green theme."
        })
      ]
    ];
    let buttonMap = /* @__PURE__ */ new Map();
    buttons.flat().forEach((button) => {
      buttonMap.set(button.buttonText, button);
    });
    function getIndex(buttonText) {
      return buttonMap.get(buttonText);
    }
    function rebuildButtonMap() {
      buttonMap = /* @__PURE__ */ new Map();
      buttons.flat().forEach((button) => {
        if (button)
          buttonMap.set(button.buttonText, button);
      });
    }
    function hideGun() {
      try {
        if (GunPointer != null)
          GunPointer.method("SetActive").invoke(false);
      } catch (e) {
      }
      try {
        const lineObj = GunLine.method("get_gameObject").invoke();
        if (lineObj != null && !lineObj.isNull())
          lineObj.method("SetActive").invoke(false);
      } catch (e) {
      }
    }
    const PhotonView = classOf(PhotonUnityNetworking, "Photon.Pun.PhotonView");
    const vAdd = Vector3.method("op_Addition", 2);
    const vMul = Vector3.method("op_Multiply", 2);
    const VolcanicEruption = classOf(EnverGardenGame, "Enver.Features.Environment.VolcanicEruption.VolcanicEruption");
    const VolcanicRockClass = classOf(EnverGardenGame, "Enver.Features.Environment.VolcanicEruption.VolcanicRock");
    let growthSize = 10;
    let growthBoostOn = false;
    const SprinklerAbility = classOf(EnverGardenGame, "Enver.Features.GearSprinklerAbility");
    const growthBoost = (model) => {
      if (!growthBoostOn || model == null || model.isNull())
        return;
      try {
        const base = model.field("TargetScale").value;
        let valid = true;
        try {
          valid = base.field("x").value > 1e-3 || base.field("y").value > 1e-3 || base.field("z").value > 1e-3;
        } catch (e) {
          valid = true;
        }
        if (!valid)
          return;
        const target = vMul.invoke(base, growthSize);
        model.field("TargetScale").value = target;
        if (SprinklerAbility != null)
          SprinklerAbility.method("SaveGrowable").invoke(model);
      } catch (e) {
      }
    };
    const installGrowthBoost = (cls) => {
      if (cls == null)
        return;
      try {
        const init = cls.method("EveryoneInitialize");
        init.implementation = function() {
          const res = this.method("EveryoneInitialize").invoke();
          growthBoost(this);
          return res;
        };
      } catch (e) {
      }
    };
    installGrowthBoost(classOf(EnverGardenGame, "Enver.Features.Plant"));
    installGrowthBoost(classOf(EnverGardenGame, "Enver.Features.Crop"));
    const StaffItemClass = classOf(EnverGardenGame, "Enver.Features.StaffManagement.StaffItem");
    let staffNoCooldown = false;
    let staffRapidFire = false;
    const zeroStaffCooldown = (obj) => {
      try {
        obj.field("coolDownSeconds").value = 0;
      } catch (e) {
      }
      try {
        obj.field("_currentTimer").value = 0;
      } catch (e) {
      }
      try {
        obj.field("AllowAction").value = true;
      } catch (e) {
      }
    };
    if (StaffItemClass != null) {
      try {
        const sUpd = StaffItemClass.method("Update");
        sUpd.implementation = function() {
          try {
            if (staffNoCooldown) {
              this.field("coolDownSeconds").value = 0;
              this.field("_currentTimer").value = 0;
              this.field("AllowAction").value = true;
            }
            if (staffRapidFire) {
              let gripHeld = false;
              try {
                const node = this.field("xrNode").value;
                const n = node.field("value__").value;
                if (n == 4)
                  gripHeld = leftGrab;
                else if (n == 5)
                  gripHeld = rightGrab;
                else
                  gripHeld = leftGrab || rightGrab;
              } catch (e) {
                gripHeld = leftGrab || rightGrab;
              }
              if (gripHeld) {
                this.field("coolDownSeconds").value = 0;
                this.field("_currentTimer").value = 0;
                this.field("AllowAction").value = true;
                try {
                  this.method("PerformAction").invoke();
                } catch (e) {
                }
              }
            }
          } catch (e) {
          }
          return this.method("Update").invoke();
        };
      } catch (e) {
      }
    }
    const RocketLauncherClass = classOf(EnverGardenGame, "Enver.Features.StaffManagement.RocketLauncher.RocketLauncherStaffItem");
    const RocketProjectileClass = classOf(EnverGardenGame, "Enver.Features.StaffManagement.RocketLauncher.RocketProjectile");
    const rocketSwarmCount = 10;
    if (RocketLauncherClass != null) {
      try {
        const pa = RocketLauncherClass.method("PerformAction");
        pa.implementation = function() {
          try {
            this.method("PerformAction").invoke();
          } catch (e) {
          }
          try {
            const prefab = this.field("rocket").value;
            const start = this.field("startPoint").value;
            if (prefab == null || prefab.isNull() || start == null || start.isNull())
              return;
            const speed = this.field("launchSpeed").value;
            const dist = this.field("maxDistance").value;
            const basePos = start.method("get_position").invoke();
            const right = start.method("get_right").invoke();
            const fwd = start.method("get_forward").invoke();
            const rot = start.method("get_rotation").invoke();
            let rocketName = null;
            if (rocketName == null) {
              try {
                rocketName = prefab.method("get_gameObject").invoke().method("get_name").invoke().toString();
              } catch (e) {
              }
            }
            const tempGo = GameObject.method("CreatePrimitive").invoke(3);
            const tempT = tempGo.method("get_transform").invoke();
            try {
              const bc = getComponent(tempGo, BoxCollider);
              if (bc != null)
                Object.method("Destroy", 1).invoke(bc);
              tempT.method("set_rotation").invoke(rot);
              for (let k = 0; k < rocketSwarmCount; k++) {
                try {
                  const fan = (k - (rocketSwarmCount - 1) / 2) * 0.35;
                  const offPos = Vector3.method("op_Addition", 2).invoke(basePos, Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Multiply", 2).invoke(right, fan), Vector3.method("op_Multiply", 2).invoke(fwd, k * 1)));
                  tempT.method("set_position").invoke(offPos);
                  let r = null;
                  let networked = false;
                  if (rocketName != null) {
                    try {
                      const netGo = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string(rocketName), offPos, rot, 0, null);
                      if (netGo != null && !netGo.isNull()) {
                        r = getComponent(netGo, RocketProjectileClass);
                        networked = true;
                      }
                    } catch (e) {
                    }
                  }
                  if (r == null) {
                    r = Object.method("Instantiate", 1).invoke(prefab);
                    if (r != null) {
                      const rt = r.method("get_transform").invoke();
                      rt.method("set_position").invoke(offPos);
                      rt.method("set_rotation").invoke(rot);
                    }
                  }
                  if (r != null)
                    r.method("Launch").invoke(tempT, speed, dist);
                } catch (e) {
                }
              }
            } finally {
              try {
                Object.method("Destroy", 1).invoke(tempGo);
              } catch (e) {
              }
            }
          } catch (e) {
          }
        };
      } catch (e) {
      }
    }
    let lastVolcanoRockTime = 0;
    function fireVolcanoRockGun() {
      if (!rightTrigger)
        return;
      const now = Date.now();
      if (now - lastVolcanoRockTime < 200)
        return;
      lastVolcanoRockTime = now;
      Il2Cpp.perform(() => {
        try {
          try {
            applyWeather("Volcano");
          } catch (e) {
          }
          if (VolcanicEruption == null)
            return;
          const eruptions = findObjectsOfType(VolcanicEruption);
          let er = null;
          if (eruptions != null && eruptions.length > 0)
            er = eruptions.get(0);
          if (er == null) {
            return;
          }
          try {
            er.field("_allowEruption").value = true;
          } catch (e) {
          }
          const pos = rightHandTransform.method("get_position").invoke();
          const x = pos.field("x").value;
          const z = pos.field("z").value;
          try {
            const pv = er.method("get_photonView").invoke();
            if (pv != null && !pv.isNull()) {
              pv.method("RPC", 3).invoke(Il2Cpp.string("RpcLaunchRock"), 0, [0, x, z]);
              return;
            }
          } catch (e) {
          }
          try {
            er.method("RpcLaunchRock").invoke(0, x, z);
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    let lastRockSpamTime = 0;
    function rockSpamOthers() {
      const now = Date.now();
      if (now - lastRockSpamTime < 200)
        return;
      lastRockSpamTime = now;
      Il2Cpp.perform(() => {
        try {
          if (VolcanicEruption == null)
            return;
          const eruptions = findObjectsOfType(VolcanicEruption);
          let er = null;
          if (eruptions != null && eruptions.length > 0)
            er = eruptions.get(0);
          if (er == null) {
            return;
          }
          try {
            er.field("_allowEruption").value = true;
          } catch (e) {
          }
          const pos = rightHandTransform.method("get_position").invoke();
          const x = pos.field("x").value;
          const z = pos.field("z").value;
          let pv = null;
          try {
            pv = er.method("get_photonView").invoke();
          } catch (e) {
          }
          if (pv == null || pv.isNull()) {
            try {
              pv = getComponent(er, PhotonView);
            } catch (e) {
            }
          }
          if (pv == null || pv.isNull()) {
            return;
          }
          pv.method("RPC", 3).invoke(Il2Cpp.string("RpcLaunchRock"), 1, [0, x, z]);
        } catch (e) {
        }
      });
    }
    const NPE = classOf(EnverGardenGame, "Enver.Features.WavyEvent.NetworkedPlayerEffect");
    if (NPE != null) {
      try {
        const rk = NPE.method("RpcKickPlayer");
        rk.implementation = function() {
        };
      } catch (e) {
      }
      try {
        const rf = NPE.method("RpcApplyFling");
        rf.implementation = function(dir, f, u) {
        };
      } catch (e) {
      }
    }
    const localActorNumber = () => {
      try {
        return PhotonNetwork.method("get_LocalPlayer").invoke().method("get_ActorNumber").invoke();
      } catch (e) {
        return -1;
      }
    };
    const localRigRoot = () => {
      try {
        let t = getTransform(GTPlayer);
        while (t != null) {
          try {
            const p = t.method("get_parent").invoke();
            if (p == null || p.isNull())
              break;
            t = p;
          } catch (e) {
            break;
          }
        }
        if (t != null && !t.isNull())
          return t.method("get_gameObject").invoke();
      } catch (e) {
      }
      return null;
    };
    const npeIsLocal = (e, localActor, myRoot) => {
      try {
        if (PhotonView != null) {
          let t = e.method("get_transform").invoke();
          while (t != null) {
            try {
              const go = t.method("get_gameObject").invoke();
              if (go != null && !go.isNull()) {
                try {
                  const pv = getComponent(go, PhotonView);
                  if (pv != null && !pv.isNull()) {
                    try {
                      if (pv.method("get_IsMine").invoke())
                        return true;
                    } catch (err) {
                    }
                    try {
                      const owner = pv.method("get_Owner").invoke();
                      if (owner != null && !owner.isNull()) {
                        const a = owner.method("get_ActorNumber").invoke();
                        if (a != null && a == localActor)
                          return true;
                      }
                    } catch (err) {
                    }
                  }
                } catch (err) {
                }
              }
            } catch (err) {
            }
            try {
              const p = t.method("get_parent").invoke();
              if (p == null || p.isNull())
                break;
              t = p;
            } catch (err) {
              break;
            }
          }
        }
      } catch (err) {
      }
      if (myRoot != null) {
        try {
          let t = e.method("get_transform").invoke();
          while (t != null) {
            try {
              const p = t.method("get_parent").invoke();
              if (p == null || p.isNull())
                break;
              t = p;
            } catch (e2) {
              break;
            }
          }
          if (t != null && !t.isNull()) {
            const go = t.method("get_gameObject").invoke();
            if (go != null && !go.isNull()) {
              try {
                if (go.handle.equals(myRoot.handle))
                  return true;
              } catch (e2) {
              }
            }
          }
        } catch (err) {
        }
      }
      return false;
    };
    function kickAllPlayers() {
      Il2Cpp.perform(() => {
        try {
          if (NPE == null) {
            return;
          }
          const effects = findObjectsOfType(NPE);
          const localActor = localActorNumber();
          const myRoot = localRigRoot();
          let kicked = 0;
          for (let i = 0; i < effects.length; i++) {
            try {
              const e = effects.get(i);
              if (npeIsLocal(e, localActor, myRoot))
                continue;
              e.method("KickPlayer").invoke();
              kicked++;
            } catch (err) {
            }
          }
        } catch (e) {
        }
      });
    }
    function flingAllPlayers() {
      Il2Cpp.perform(() => {
        try {
          if (NPE == null) {
            return;
          }
          const effects = findObjectsOfType(NPE);
          const localActor = localActorNumber();
          const myRoot = localRigRoot();
          const myPos = getTransform(GTPlayer).method("get_position").invoke();
          let flung = 0;
          for (let i = 0; i < effects.length; i++) {
            try {
              const e = effects.get(i);
              if (npeIsLocal(e, localActor, myRoot))
                continue;
              const theirPos = e.method("get_transform").invoke().method("get_position").invoke();
              let away = Vector3.method("op_Subtraction", 2).invoke(theirPos, myPos);
              try {
                const n = away.method("get_normalized").invoke();
                if (n != null)
                  away = n;
              } catch (err) {
              }
              let dir = away;
              try {
                const up = Vector3.field("upVector").value;
                dir = Vector3.method("op_Addition", 2).invoke(away, Vector3.method("op_Multiply", 2).invoke(up, 0.6));
              } catch (err) {
              }
              e.method("ApplyFling").invoke(dir, 18, 8);
              flung++;
            } catch (err) {
            }
          }
        } catch (e) {
        }
      });
    }
    function giveMoneyAll() {
      Il2Cpp.perform(() => {
        try {
          const UDM = classOf(EnverGardenGame, "Enver.Features.UserDataManager");
          if (UDM == null) {
            return;
          }
          const soft = UDM.method("get_SoftCurrency").invoke();
          if (soft == null || soft.isNull()) {
            return;
          }
          const amount = 2147483647;
          try {
            soft.method("set_Current").invoke(amount);
          } catch (e) {
          }
          try {
            UDM.method("Save").invoke(true);
          } catch (e) {
          }
          try {
            const Cuc = classOf(EnverGardenGame, "BwahVR.Controllers.CurrencyUIController");
            if (Cuc != null) {
              const cs = findObjectsOfType(Cuc);
              for (let i = 0; i < cs.length; i++) {
                try {
                  cs.get(i).method("UpdateCurrencyDisplays").invoke(0, amount);
                } catch (e) {
                }
              }
            }
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    let allStockOn = false;
    let lastStockApply = 0;
    let buyMult = 1;
    let allCosmeticsOn = false;
    const SRM = classOf(EnverGardenGame, "Enver.Features.Shop.ShopRestockManager");
    if (SRM != null) {
      try {
        const gcs = SRM.method("GetCurrentStock");
        gcs.implementation = function(itemName) {
          if (allStockOn)
            return 999;
          return this.method("GetCurrentStock").invoke(itemName);
        };
      } catch (e) {
      }
    }
    const BSIHook = classOf(EnverGardenGame, "Enver.Features.Shop.BaseShopItem");
    if (BSIHook != null) {
      try {
        const ss = BSIHook.method("SetStock");
        ss.implementation = function(value) {
          if (allStockOn)
            value = 999;
          return this.method("SetStock").invoke(value);
        };
      } catch (e) {
      }
    }
    (function hookBuyMult() {
      const mgrNames = [
        "Enver.Features.Shop.Seeds.SeedStockManager",
        "Enver.Features.Shop.Gears.GearStockManager",
        "Enver.Features.Shop.Eggs.EggStockManager"
      ];
      for (let n = 0; n < mgrNames.length; n++) {
        try {
          const mgr = classOf(EnverGardenGame, mgrNames[n]);
          if (mgr == null)
            continue;
          const tpi = mgr.method("TryPurchaseItem");
          const origTPI = tpi;
          tpi.implementation = function(item, spawnPoint) {
            if (buyMult <= 1)
              return origTPI.bind(this).invoke(item, spawnPoint);
            let ok = false;
            for (let i = 0; i < buyMult; i++) {
              try {
                ok = origTPI.bind(this).invoke(item, spawnPoint) || ok;
              } catch (e) {
              }
            }
            return ok;
          };
        } catch (e) {
        }
      }
    })();
    const BCM = classOf(EnverGardenGame, "Enver.Cosmetics.BwahCosmeticsManager");
    if (BCM != null) {
      try {
        const io = BCM.method("IsOwned");
        io.implementation = function(itemId) {
          if (allCosmeticsOn)
            return true;
          return this.method("IsOwned").invoke(itemId);
        };
      } catch (e) {
      }
    }
    function giveAllCosmetics() {
      Il2Cpp.perform(() => {
        try {
          if (BCM == null)
            return;
          const mgrs = findObjectsOfType(BCM);
          for (let i = 0; i < mgrs.length; i++) {
            try {
              const m = mgrs.get(i);
              const owned = m.field("_ownedItemIds").value;
              if (owned == null || owned.isNull())
                continue;
              let items = null;
              try {
                items = m.field("_currItems").value;
              } catch (e) {
              }
              if (items != null && !items.isNull()) {
                for (let j = 0; j < items.length; j++) {
                  try {
                    const it = items.get(j).field("itemId").value;
                    if (it != null && !it.isNull()) {
                      try {
                        owned.method("Add").invoke(it);
                      } catch (e2) {
                      }
                    }
                  } catch (e2) {
                  }
                }
              }
              let bundles = null;
              try {
                bundles = m.field("_bundles").value;
              } catch (e) {
              }
              if (bundles != null && !bundles.isNull()) {
                for (let j = 0; j < bundles.length; j++) {
                  try {
                    const b = bundles.get(j);
                    const bid = b.field("itemId").value;
                    if (bid != null && !bid.isNull()) {
                      try {
                        owned.method("Add").invoke(bid);
                      } catch (e2) {
                      }
                    }
                    const ids = b.field("bundledItemIds").value;
                    if (ids != null && !ids.isNull()) {
                      for (let k = 0; k < ids.length; k++) {
                        try {
                          const idv = ids.get(k);
                          if (idv != null && !idv.isNull()) {
                            try {
                              owned.method("Add").invoke(idv);
                            } catch (e2) {
                            }
                          }
                        } catch (e2) {
                        }
                      }
                    }
                  } catch (e2) {
                  }
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function forceBuyTimerReady() {
      try {
        if (SRM == null)
          return;
        const mgrs = findObjectsOfType(SRM);
        for (let m = 0; m < mgrs.length; m++) {
          try {
            const timer = mgrs.get(m).field("_purchaseTimer").value;
            if (timer == null)
              continue;
            try {
              timer.field("_accumulator").value = 999999;
            } catch (e) {
            }
            try {
              timer.field("_intervalSeconds").value = 1e-3;
            } catch (e) {
            }
          } catch (e) {
          }
        }
      } catch (e) {
      }
    }
    function makeAllInStock() {
      Il2Cpp.perform(() => {
        try {
          const BSI = classOf(EnverGardenGame, "Enver.Features.Shop.BaseShopItem");
          if (BSI == null)
            return;
          const items = findObjectsOfType(BSI);
          let set = 0;
          for (let i = 0; i < items.length; i++) {
            try {
              items.get(i).method("SetStock").invoke(999);
              set++;
            } catch (e) {
            }
          }
          if (SRM != null) {
            try {
              const mgrs = findObjectsOfType(SRM);
              for (let m = 0; m < mgrs.length; m++) {
                try {
                  const sm = mgrs.get(m).field("_stockMap").value;
                  if (sm == null || sm.isNull())
                    continue;
                  const en = sm.method("GetEnumerator").invoke();
                  let guard = 0;
                  while (en.method("MoveNext").invoke() && guard < 2e4) {
                    guard++;
                    try {
                      const kvp = en.method("get_Current").invoke();
                      const k = kvp.method("get_Key").invoke();
                      try {
                        sm.method("set_Item").invoke(k, 999);
                      } catch (e) {
                      }
                    } catch (e) {
                    }
                  }
                  try {
                    en.method("Dispose").invoke();
                  } catch (e) {
                  }
                } catch (e) {
                }
              }
            } catch (e) {
            }
          }
          try {
            forceBuyTimerReady();
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    (function hookTimer() {
      let TimerStruct = null;
      try {
        TimerStruct = Il2Cpp.domain.assembly("Enver.Collections").image.class("Enver.Collections.Timer");
      } catch (e) {
        TimerStruct = null;
      }
      if (TimerStruct == null) {
        try {
          TimerStruct = EnverGardenGame.class("Enver.Collections.Timer");
        } catch (e) {
          TimerStruct = null;
        }
      }
      if (TimerStruct != null) {
        try {
          const methods = TimerStruct.methods;
          for (let i = 0; i < methods.length; i++) {
            const m = methods[i];
            if (m.name !== "Update")
              continue;
            if (m.parameterCount !== 1)
              continue;
            let isSingle = false;
            try {
              isSingle = m.parameters[0].type.name === "System.Single";
            } catch (e) {
            }
            if (!isSingle)
              continue;
            const origMethod = m;
            m.implementation = function(delta) {
              if (allStockOn)
                return true;
              return origMethod.bind(this).invoke(delta);
            };
            break;
          }
        } catch (e) {
        }
      }
    })();
    function applyWeatherLocal(id) {
      const WEC = classOf(EnverGardenGame, "Enver.Features.Environment.Weather.WeatherEventController");
      if (WEC == null)
        return false;
      const ctrls = findObjectsOfType(WEC);
      let ok = false;
      for (let i = 0; i < ctrls.length; i++) {
        try {
          ctrls.get(i).method("ApplyWeather").invoke(Il2Cpp.string(id));
          ok = true;
        } catch (e) {
        }
      }
      return ok;
    }
    function applyWeatherNetworked(id) {
      try {
        const PM = classOf(EnverGardenGame, "Enver.Features.GameMods.PlayerMods.PlayerModManager");
        if (PM == null)
          return false;
        const inst = PM.method("get_Instance").invoke();
        if (inst == null || inst.isNull())
          return false;
        const mrm = inst.field("bwahPlayer").value;
        if (mrm == null || mrm.isNull())
          return false;
        const controller = getFirstWeatherEventController();
        try {
          const mod = mrm.field("_modEffect").value;
          if (mod != null && !mod.isNull() && controller != null) {
            mod.method("SetWeather").invoke(controller);
          }
        } catch (e) {
        }
        try {
          const wa = mrm.field("weatherActivator").value;
          if (wa != null && !wa.isNull() && controller != null) {
            wa.field("weatherEventController").value = controller;
          }
        } catch (e) {
        }
        mrm.method("ChangeWeatherByKey").invoke(Il2Cpp.string(id));
        return true;
      } catch (e) {
        return false;
      }
    }
    function getFirstWeatherEventController() {
      const WEC = classOf(EnverGardenGame, "Enver.Features.Environment.Weather.WeatherEventController");
      if (WEC == null)
        return null;
      const ctrls = findObjectsOfType(WEC);
      for (let i = 0; i < ctrls.length; i++) {
        try {
          if (ctrls.get(i) != null && !ctrls.get(i).isNull())
            return ctrls.get(i);
        } catch (e) {
        }
      }
      return null;
    }
    function applyWeather(id) {
      Il2Cpp.perform(() => {
        try {
          id = String(id).replace(/^["\s]+|["\s]+$/g, "");
          let ss = false;
          try {
            ss = applyWeatherNetworked(id);
          } catch (e) {
          }
          applyWeatherLocal(id);
        } catch (e) {
        }
      });
    }
    function clearWeather() {
      Il2Cpp.perform(() => {
        try {
          const WEC = classOf(EnverGardenGame, "Enver.Features.Environment.Weather.WeatherEventController");
          if (WEC == null)
            return;
          const ctrls = findObjectsOfType(WEC);
          for (let i = 0; i < ctrls.length; i++) {
            try {
              ctrls.get(i).method("ClearWeather").invoke();
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function cycleWeather() {
      Il2Cpp.perform(() => {
        try {
          const WM = classOf(EnverGardenGame, "Enver.Features.Environment.Weather.WeatherManager");
          if (WM == null)
            return;
          const mgrs = findObjectsOfType(WM);
          for (let i = 0; i < mgrs.length; i++) {
            try {
              mgrs.get(i).method("CycleWeatherEvents").invoke();
              const id = mgrs.get(i).method("GetActiveWeatherId").invoke();
              if (id != null && !id.isNull()) {
                const s = String(id.toString()).replace(/^["\s]+|["\s]+$/g, "");
                if (s.length > 0)
                  applyWeather(s);
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function rebuildEnvButtons() {
      const envButtons = [
        new ButtonInfo({ buttonText: "Exit Environments", method: () => {
          currentCategory = 0;
          currentPage = 0;
          reloadMenu();
        }, isTogglable: false }),
        new ButtonInfo({ buttonText: "Clear Weather", method: () => {
          clearWeather();
        }, isTogglable: false }),
        new ButtonInfo({ buttonText: "Cycle Weather", method: () => {
          cycleWeather();
        }, isTogglable: false })
      ];
      const seen = /* @__PURE__ */ new Map();
      try {
        const WM = classOf(EnverGardenGame, "Enver.Features.Environment.Weather.WeatherManager");
        if (WM != null) {
          const mgrs = findObjectsOfType(WM);
          for (let mi = 0; mi < mgrs.length; mi++) {
            try {
              const mgr = mgrs.get(mi);
              let wec = null;
              try {
                wec = mgr.method("GetEventController").invoke();
              } catch (e) {
              }
              if ((wec == null || wec.isNull()) && !mgr.isNull()) {
                try {
                  wec = mgr.field("weatherEventController").value;
                } catch (e) {
                }
              }
              if (wec == null || wec.isNull())
                continue;
              const evs = wec.field("weatherEvents").value;
              if (evs == null || evs.isNull())
                continue;
              let evCount = -1;
              try {
                evCount = evs.field("_size").value;
              } catch (e) {
              }
              const evItems = (() => {
                try {
                  return evs.field("_items").value;
                } catch (e) {
                  return null;
                }
              })();
              for (let j = 0; j < evCount; j++) {
                try {
                  const w = evItems == null ? evs.get(j) : evItems.get(j);
                  const wid = w.field("weatherId").value;
                  if (wid == null || wid.isNull())
                    continue;
                  const s = String(wid.toString()).replace(/^["\s]+|["\s]+$/g, "");
                  if (seen.has(s))
                    continue;
                  seen.set(s, true);
                  envButtons.push(new ButtonInfo({
                    buttonText: s,
                    method: () => {
                      applyWeather(s);
                    },
                    isTogglable: false
                  }));
                } catch (e) {
                }
              }
            } catch (e) {
            }
          }
        }
      } catch (e) {
      }
      buttons[22] = envButtons;
    }
    let lastInvSpawnTime = 0;
    function inventoryTypes() {
      const GOT = classOf(EnverGardenGame, "Enver.Features.GardenObjectType");
      const typeNames = ["PlantSeed", "Plant", "Crop", "Gear", "Egg", "Pet"];
      const rawInts = [1, 2, 3, 1024, 2048, 2049];
      const types = [];
      let useRaw = true;
      if (GOT != null) {
        let okCount = 0;
        for (const tn of typeNames) {
          try {
            const v = GOT.field(tn).value;
            if (v != null) {
              types.push(v);
              okCount++;
            }
          } catch (e) {
          }
        }
        if (okCount === typeNames.length)
          useRaw = false;
      }
      if (useRaw) {
        types.length = 0;
        for (const ri of rawInts)
          types.push(ri);
      }
      return types;
    }
    function spawnNextFromInventory() {
      const now = Date.now();
      if (now - lastInvSpawnTime < 200)
        return;
      lastInvSpawnTime = now;
      Il2Cpp.perform(() => {
        try {
          const UDM = classOf(EnverGardenGame, "Enver.Features.UserDataManager");
          if (UDM == null)
            return;
          const tx = UDM.method("get_Transaction").invoke();
          if (tx == null || tx.isNull())
            return;
          const types = inventoryTypes();
          for (const t of types) {
            try {
              const entries = tx.method("GetInventoryEntries").invoke(t);
              if (entries == null || entries.isNull())
                continue;
              const en = entries.method("GetEnumerator").invoke();
              while (en.method("MoveNext").invoke()) {
                let model = null;
                try {
                  model = en.method("get_Current").invoke();
                } catch (e) {
                }
                if (model == null || model.isNull())
                  continue;
                try {
                  const pos = rightHandTransform.method("get_position").invoke();
                  const rot = rightHandTransform.method("get_rotation").invoke();
                  const outSlot = Memory.alloc(Process.pointerSize);
                  outSlot.writeU64(0);
                  const ok = tx.method("MoveFromInventory").invoke(model, pos, rot, outSlot);
                  try {
                    en.method("Dispose").invoke();
                  } catch (e) {
                  }
                  if (ok) {
                    try {
                      UDM.method("Save").invoke(true);
                    } catch (e) {
                    }
                  }
                  return;
                } catch (e) {
                }
              }
              try {
                en.method("Dispose").invoke();
              } catch (e) {
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function autoPlant() {
      Il2Cpp.perform(() => {
        let placed = 0, failed = 0, counted = 0;
        try {
          const UDM = classOf(EnverGardenGame, "Enver.Features.UserDataManager");
          if (UDM == null) {
            return;
          }
          const tx = UDM.method("get_Transaction").invoke();
          if (tx == null || tx.isNull()) {
            return;
          }
          let spawnT = null;
          try {
            const GS = classOf(EnverGardenGame, "Enver.Features.GardenSlot");
            if (GS != null) {
              const slots = findObjectsOfType(GS);
              for (let i = 0; i < slots.length; i++) {
                try {
                  if (slots.get(i).method("get_IsMine").invoke()) {
                    spawnT = slots.get(i).method("get_SpawnTransform").invoke();
                    break;
                  }
                } catch (e) {
                }
              }
            }
          } catch (e) {
          }
          const playerT = getTransform(GTPlayer);
          const refT = spawnT != null ? spawnT : playerT;
          let basePos = Vector3.field("zeroVector").value;
          if (refT != null) {
            try {
              basePos = refT.method("get_position").invoke();
            } catch (e) {
            }
          }
          let fwd = null, rightV = null;
          if (refT != null) {
            try {
              fwd = refT.method("get_forward").invoke();
            } catch (e) {
            }
            try {
              rightV = refT.method("get_right").invoke();
            } catch (e) {
            }
          }
          const types = inventoryTypes();
          const tryPlant = (model, pos) => {
            try {
              return tx.method("TryConvertToPlant").invoke(model, pos, identityQuaternion, spawnT);
            } catch (e) {
              return false;
            }
          };
          const tryPlace = (model, pos) => {
            try {
              const outSlot = Memory.alloc(Process.pointerSize);
              outSlot.writeU64(0);
              return tx.method("MoveFromInventory").invoke(model, pos, identityQuaternion, outSlot);
            } catch (e) {
              return false;
            }
          };
          for (const t of types) {
            try {
              const entries = tx.method("GetInventoryEntries").invoke(t);
              if (entries == null || entries.isNull())
                continue;
              const en = entries.method("GetEnumerator").invoke();
              let guard = 0;
              while (en.method("MoveNext").invoke() && guard < 5e3) {
                guard++;
                let model = null;
                try {
                  model = en.method("get_Current").invoke();
                } catch (e) {
                }
                if (model == null || model.isNull())
                  continue;
                counted++;
                const col = placed % 5;
                const row = Math.floor(placed / 5);
                let off = Vector3.field("zeroVector").value;
                if (fwd != null)
                  off = vAdd.invoke(off, vMul.invoke(fwd, 1 * row));
                if (rightV != null)
                  off = vAdd.invoke(off, vMul.invoke(rightV, 1 * col));
                off = vAdd.invoke(off, vMul.invoke(Vector3.field("upVector").value, 0.2));
                const pos = vAdd.invoke(basePos, off);
                let ok = tryPlant(model, pos);
                if (!ok)
                  ok = tryPlace(model, pos);
                if (ok)
                  placed++;
                else
                  failed++;
              }
              try {
                en.method("Dispose").invoke();
              } catch (e) {
              }
            } catch (e) {
            }
          }
          try {
            UDM.method("Save").invoke(true);
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    try {
      const VS = classOf(EnverGardenGame, "Enver.Features.Rideable.Shop.VRVehicleSpawner");
      if (VS != null) {
        const dv = VS.method("DespawnActiveVehicle");
        dv.implementation = function() {
        };
      }
    } catch (e) {
    }
    function spawnJetSki() {
      Il2Cpp.perform(() => {
        try {
          const VSV = classOf(EnverGardenGame, "Enver.Features.Rideable.Shop.VehicleShopView");
          if (VSV == null)
            return;
          const views = findObjectsOfType(VSV);
          let view = null;
          for (let v = 0; v < views.length; v++) {
            try {
              view = views.get(v);
              if (view != null && !view.isNull())
                break;
            } catch (e) {
            }
          }
          if (view == null)
            return;
          const list = view.field("vehicles").value;
          if (list == null || list.isNull())
            return;
          const count = list.method("get_Count").invoke();
          let entry = null;
          for (let i = 0; i < count; i++) {
            try {
              const en = list.method("get_Item").invoke(i);
              if (en == null || en.isNull())
                continue;
              let nmStr = "";
              try {
                const nm = en.field("displayName").value;
                if (nm != null)
                  nmStr = String(nm.toString()).toLowerCase();
              } catch (e) {
              }
              let skuStr = "";
              try {
                const sku = en.field("vehicleSku").value;
                if (sku != null)
                  skuStr = String(sku.toString()).toLowerCase();
              } catch (e) {
              }
              if (nmStr.indexOf("jet") >= 0 || nmStr.indexOf("ski") >= 0 || skuStr.indexOf("jet") >= 0 || skuStr.indexOf("ski") >= 0) {
                entry = en;
                break;
              }
              if (entry == null)
                entry = en;
            } catch (e) {
            }
          }
          if (entry == null)
            return;
          const prefab = entry.field("vehiclePrefab").value;
          if (prefab == null || prefab.isNull())
            return;
          const spawner = view.field("vehicleSpawner").value;
          if (spawner == null || spawner.isNull())
            return;
          const pos = rightHandTransform.method("get_position").invoke();
          const rot = rightHandTransform.method("get_rotation").invoke();
          try {
            spawner.method("SetVehicle").invoke(prefab, entry.field("vehicleHintPrefab").value, entry.field("spawnType").value, entry.field("portSpawnPoints").value, entry.field("waterSurface").value, entry.field("spawnSurfaceLayers").value, entry.field("requiredSurfaceTag").value);
          } catch (e) {
          }
          try {
            spawner.method("SpawnVehicleAt").invoke(pos, rot);
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    function spawnNuke() {
      Il2Cpp.perform(() => {
        try {
          const NukeModClass = classOf(EnverGardenGame, "Enver.Features.GameMods.PlayerMods.NukeMod");
          const PMM = classOf(EnverGardenGame, "Enver.Features.GameMods.PlayerMods.PlayerModManager");
          if (NukeModClass == null)
            return;
          const pos = rightHandTransform.method("get_position").invoke();
          const rot = rightHandTransform.method("get_rotation").invoke();
          let nukeMod = null;
          if (PMM != null) {
            try {
              const mgr = PMM.method("get_Instance").invoke();
              if (mgr != null && !mgr.isNull()) {
                const modsData = mgr.field("modsData").value;
                if (modsData != null && !modsData.isNull()) {
                  const mods = modsData.method("GetAvailableMods").invoke();
                  if (mods != null && !mods.isNull()) {
                    const cnt = mods.method("get_Count").invoke();
                    for (let i = 0; i < cnt; i++) {
                      try {
                        const m = mods.method("get_Item").invoke(i);
                        if (m == null || m.isNull())
                          continue;
                        let tn = "";
                        let tfn = "";
                        try {
                          tn = String(m.type.name);
                        } catch (e) {
                        }
                        try {
                          tfn = String(m.type.fullName);
                        } catch (e) {
                        }
                        if (tn == "NukeMod" || tfn == "Enver.Features.GameMods.PlayerMods.NukeMod") {
                          nukeMod = m;
                          break;
                        }
                      } catch (e) {
                      }
                    }
                  }
                }
              }
            } catch (e) {
            }
          }
          if (nukeMod == null) {
            try {
              const found = findObjectsOfType(NukeModClass);
              if (found != null && found.length > 0)
                nukeMod = found.get(0);
            } catch (e) {
            }
            if (nukeMod == null) {
              try {
                const all = Resources.method("FindObjectsOfTypeAll").overload("System.Type").invoke(NukeModClass.type.object);
                if (all != null && all.length > 0)
                  nukeMod = all.get(0);
              } catch (e) {
              }
            }
          }
          const prefab = nukeMod != null ? nukeMod.field("nukePrefab").value : null;
          let prefabName = null;
          if (nukeMod != null) {
            try {
              prefabName = nukeMod.field("nukePrefabName").value;
              if (prefabName != null)
                prefabName = prefabName.toString();
            } catch (e) {
            }
          }
          if (prefabName == null && prefab != null && !prefab.isNull()) {
            try {
              prefabName = prefab.method("get_gameObject").invoke().method("get_name").invoke().toString();
            } catch (e) {
            }
          }
          if (prefabName != null) {
            try {
              const netGo = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string(prefabName), pos, rot, 0, null);
              if (netGo != null && !netGo.isNull())
                return;
            } catch (e) {
            }
          }
          let activated = false;
          if (nukeMod != null) {
            try {
              const nowTime = Time.method("get_time").invoke();
              try {
                nukeMod.field("_nextAllowedTime").value = nowTime - 1;
              } catch (e) {
              }
              try {
                nukeMod.field("isActive").value = false;
              } catch (e) {
              }
              try {
                nukeMod.field("spawnPosition").value = pos;
              } catch (e) {
              }
            } catch (e) {
            }
            try {
              nukeMod.method("ActivateMod").invoke();
              try {
                activated = nukeMod.field("isActive").value;
              } catch (e) {
                activated = true;
              }
            } catch (e) {
              activated = false;
            }
          }
          if (!activated && prefab != null && !prefab.isNull()) {
            try {
              const go = Object.method("Instantiate", 1).invoke(prefab);
              if (go != null) {
                const gt = go.method("get_transform").invoke();
                gt.method("set_position").invoke(pos);
                gt.method("set_rotation").invoke(rot);
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function crashJetskis() {
      Il2Cpp.perform(() => {
        try {
          const VSV = classOf(EnverGardenGame, "Enver.Features.Rideable.Shop.VehicleShopView");
          if (VSV == null)
            return;
          const views = findObjectsOfType(VSV);
          let view = null;
          for (let v = 0; v < views.length; v++) {
            try {
              view = views.get(v);
              if (view != null && !view.isNull())
                break;
            } catch (e) {
            }
          }
          if (view == null)
            return;
          const list = view.field("vehicles").value;
          if (list == null || list.isNull())
            return;
          const count = list.method("get_Count").invoke();
          let entry = null;
          for (let i = 0; i < count; i++) {
            try {
              const en = list.method("get_Item").invoke(i);
              if (en == null || en.isNull())
                continue;
              let nmStr = "";
              try {
                const nm = en.field("displayName").value;
                if (nm != null)
                  nmStr = String(nm.toString()).toLowerCase();
              } catch (e) {
              }
              if (nmStr.indexOf("jet") >= 0 || nmStr.indexOf("ski") >= 0) {
                entry = en;
                break;
              }
              if (entry == null)
                entry = en;
            } catch (e) {
            }
          }
          if (entry == null)
            return;
          const spawner = view.field("vehicleSpawner").value;
          if (spawner == null || spawner.isNull())
            return;
          try {
            spawner.method("SetVehicle").invoke(entry.field("vehiclePrefab").value, entry.field("vehicleHintPrefab").value, entry.field("spawnType").value, entry.field("portSpawnPoints").value, entry.field("waterSurface").value, entry.field("spawnSurfaceLayers").value, entry.field("requiredSurfaceTag").value);
          } catch (e) {
            return;
          }
          const pos = Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Multiply", 2).invoke(Vector3.field("rightVector").value, 100), Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, -100));
          const rot = identityQuaternion;
          for (let i = 0; i < 555; i++) {
            try {
              spawner.method("SpawnVehicleAt").invoke(pos, rot);
            } catch (e) {
            }
          }
          const JetSkiClass = classOf(EnverGardenGame, "Enver.Features.Rideable.JetSkiController");
          if (JetSkiClass != null) {
            try {
              const jetskis = findObjectsOfType(JetSkiClass);
              for (let i = 0; i < jetskis.length; i++) {
                try {
                  const go = jetskis.get(i).method("get_gameObject").invoke();
                  if (go != null && !go.isNull())
                    Object.method("Destroy", 1).invoke(go);
                } catch (e) {
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function spawnJetskiiText(gunPointer) {
      Il2Cpp.perform(() => {
        try {
          const VSV = classOf(EnverGardenGame, "Enver.Features.Rideable.Shop.VehicleShopView");
          if (VSV == null)
            return;
          const views = findObjectsOfType(VSV);
          let view = null;
          for (let v = 0; v < views.length; v++) {
            try {
              view = views.get(v);
              if (view != null && !view.isNull())
                break;
            } catch (e) {
            }
          }
          if (view == null)
            return;
          const list = view.field("vehicles").value;
          if (list == null || list.isNull())
            return;
          const count = list.method("get_Count").invoke();
          let entry = null;
          for (let i = 0; i < count; i++) {
            try {
              const en = list.method("get_Item").invoke(i);
              if (en == null || en.isNull())
                continue;
              let nmStr = "";
              try {
                const nm = en.field("displayName").value;
                if (nm != null)
                  nmStr = String(nm.toString()).toLowerCase();
              } catch (e) {
              }
              if (nmStr.indexOf("jet") >= 0 || nmStr.indexOf("ski") >= 0) {
                entry = en;
                break;
              }
              if (entry == null)
                entry = en;
            } catch (e) {
            }
          }
          if (entry == null)
            return;
          const spawner = view.field("vehicleSpawner").value;
          if (spawner == null || spawner.isNull())
            return;
          try {
            spawner.method("SetVehicle").invoke(entry.field("vehiclePrefab").value, entry.field("vehicleHintPrefab").value, entry.field("spawnType").value, entry.field("portSpawnPoints").value, entry.field("waterSurface").value, entry.field("spawnSurfaceLayers").value, entry.field("requiredSurfaceTag").value);
          } catch (e) {
            return;
          }
          let basePos = rightHandTransform.method("get_position").invoke();
          if (gunPointer != null && !gunPointer.isNull()) {
            try {
              basePos = getTransform(gunPointer).method("get_position").invoke();
            } catch (e) {
            }
          }
          const rot = identityQuaternion;
          const spacing = 3;
          const formation = [];
          for (let x = -2; x <= 2; x++)
            formation.push([x, 0, 0]);
          for (let y = 1; y <= 100; y++)
            formation.push([0, y, 0]);
          for (let i = 0; i < formation.length; i++) {
            try {
              const offset = Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Addition", 2).invoke(Vector3.method("op_Multiply", 2).invoke(Vector3.field("rightVector").value, formation[i][0] * spacing), Vector3.method("op_Multiply", 2).invoke(Vector3.field("upVector").value, formation[i][1] * spacing)), Vector3.method("op_Multiply", 2).invoke(Vector3.field("forwardVector").value, formation[i][2] * spacing));
              const pos = Vector3.method("op_Addition", 2).invoke(basePos, offset);
              spawner.method("SpawnVehicleAt").invoke(pos, rot);
            } catch (e) {
            }
          }
          const JetSkiClass = classOf(EnverGardenGame, "Enver.Features.Rideable.JetSkiController");
          if (JetSkiClass != null) {
            try {
              const jetskis = findObjectsOfType(JetSkiClass);
              for (let j = 0; j < jetskis.length; j++) {
                try {
                  const go = jetskis.get(j).method("get_gameObject").invoke();
                  if (go == null || go.isNull())
                    continue;
                  const rb = getComponent(go, Rigidbody);
                  if (rb != null && !rb.isNull()) {
                    rb.method("set_isKinematic").invoke(true);
                    rb.method("set_useGravity").invoke(false);
                  }
                } catch (e) {
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function jetskiOnTrigger() {
      if (!rightTrigger)
        return;
      spawnJetSki();
    }
    function spawnSsCropAtHand() {
      Il2Cpp.perform(() => {
        try {
          const DS = classOf(EnverGardenGame, "Enver.Features.DebugCropSpawner");
          if (DS == null)
            return;
          const objs = findObjectsOfType(DS);
          let sp = null;
          for (let oi = 0; oi < objs.length; oi++) {
            try {
              sp = objs.get(oi);
              if (sp != null && !sp.isNull())
                break;
            } catch (e) {
            }
          }
          if (sp == null)
            return;
          try {
            sp.field("_useTransformPosition").value = true;
          } catch (e) {
          }
          const pos = rightHandTransform.method("get_position").invoke();
          try {
            sp.field("_spawnPosition").value = pos;
          } catch (e) {
          }
          try {
            sp.field("_spawnRotation").value = [0, 0, 0];
          } catch (e) {
          }
          try {
            sp.method("SpawnCrop").invoke();
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    function nukeOnTrigger() {
      if (!rightTrigger)
        return;
      spawnNuke();
    }
    const lastPrefabSpawnTime = {};
    function spawnVehicleByShop(targetName) {
      try {
        const VSV = classOf(EnverGardenGame, "Enver.Features.Rideable.Shop.VehicleShopView");
        if (VSV == null)
          return false;
        const views = findObjectsOfType(VSV);
        let view = null;
        for (let v = 0; v < views.length; v++) {
          try {
            view = views.get(v);
            if (view != null && !view.isNull())
              break;
          } catch (e) {
          }
        }
        if (view == null)
          return false;
        const list = view.field("vehicles").value;
        if (list == null || list.isNull())
          return false;
        const count = list.method("get_Count").invoke();
        const needle = targetName.toLowerCase();
        let entry = null;
        for (let i = 0; i < count; i++) {
          try {
            const en = list.method("get_Item").invoke(i);
            if (en == null || en.isNull())
              continue;
            let nmStr = "";
            try {
              const nm = en.field("displayName").value;
              if (nm != null)
                nmStr = String(nm.toString()).toLowerCase();
            } catch (e) {
            }
            let skuStr = "";
            try {
              const sku = en.field("vehicleSku").value;
              if (sku != null)
                skuStr = String(sku.toString()).toLowerCase();
            } catch (e) {
            }
            if (nmStr.indexOf(needle) >= 0 || skuStr.indexOf(needle) >= 0) {
              entry = en;
              break;
            }
          } catch (e) {
          }
        }
        if (entry == null) {
          return false;
        }
        const prefab = entry.field("vehiclePrefab").value;
        if (prefab == null || prefab.isNull())
          return false;
        const spawner = view.field("vehicleSpawner").value;
        if (spawner == null || spawner.isNull())
          return false;
        const pos = rightHandTransform.method("get_position").invoke();
        const rot = rightHandTransform.method("get_rotation").invoke();
        try {
          spawner.method("SetVehicle").invoke(prefab, entry.field("vehicleHintPrefab").value, entry.field("spawnType").value, entry.field("portSpawnPoints").value, entry.field("waterSurface").value, entry.field("spawnSurfaceLayers").value, entry.field("requiredSurfaceTag").value);
        } catch (e) {
        }
        try {
          spawner.method("SpawnVehicleAt").invoke(pos, rot);
          return true;
        } catch (e) {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    function spawnPrefabAtHand(prefabName) {
      const now = Date.now();
      if (now - (lastPrefabSpawnTime[prefabName] || 0) < 200)
        return;
      lastPrefabSpawnTime[prefabName] = now;
      Il2Cpp.perform(() => {
        try {
          if (spawnVehicleByShop(prefabName))
            return;
          const pos = rightHandTransform.method("get_position").invoke();
          const rot = rightHandTransform.method("get_rotation").invoke();
          let spawned = null;
          try {
            const emptyArr = Il2Cpp.array(Il2Cpp.corlib.class("System.Object"), []);
            spawned = PhotonNetwork.method("Instantiate").overload("System.String", "UnityEngine.Vector3", "UnityEngine.Quaternion", "System.Byte", "System.Object[]").invoke(Il2Cpp.string(prefabName), pos, rot, 0, emptyArr);
          } catch (e) {
          }
          if (spawned == null || spawned.isNull()) {
            try {
              const prefab = Resources.method("Load", 1).invoke(Il2Cpp.string(prefabName));
              if (prefab != null && !prefab.isNull()) {
                spawned = Object.method("Instantiate", 1).invoke(prefab);
                if (spawned != null && !spawned.isNull()) {
                  const t = spawned.method("get_transform").invoke();
                  t.method("set_position").invoke(pos);
                  t.method("set_rotation").invoke(rot);
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function prefabTrigger(name) {
      return () => {
        if (rightTrigger)
          spawnPrefabAtHand(name);
      };
    }
    function staffShit() {
      Il2Cpp.perform(() => {
        try {
          const SPI = classOf(EnverGardenGame, "Enver.Features.StaffManagement.StaffPreviewItem");
          const SAC = classOf(EnverGardenGame, "Enver.Features.StaffManagement.StaffAccessController");
          if (SAC == null) {
            return;
          }
          try {
            SAC.field("_isStaffMember").value = true;
          } catch (e) {
          }
          const controllers = findObjectsOfType(SAC);
          try {
            const bytes = new Uint8Array(controllers.handle.readByteArray(64));
            const hex = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join(" ");
          } catch (e) {
          }
          for (let i = 0; i < controllers.length; i++) {
            const c = controllers.get(i);
            if (!c || c.isNull()) {
              continue;
            }
            try {
              c.method("SetStaffDoors").invoke();
            } catch (e) {
            }
            try {
              c.method("GetInventoryStaffItems").invoke();
            } catch (e) {
            }
          }
          for (let i = 0; i < controllers.length; i++) {
            const c = controllers.get(i);
            if (!c || c.isNull()) {
              continue;
            }
            try {
              const data = c.field("staffItemData").value;
              if (data == null || data.isNull()) {
                continue;
              }
              const count = data.method("get_Count").invoke();
              for (let j = 0; j < count; j++) {
                try {
                  const item = data.method("get_Item").invoke(j);
                  const spawnPoint = item.field("itemSpawnPoint").value;
                  let spawnPos = null, spawnRot = null;
                  if (spawnPoint != null && !spawnPoint.isNull()) {
                    spawnPos = spawnPoint.method("get_position").invoke();
                    spawnRot = spawnPoint.method("get_rotation").invoke();
                  } else {
                    spawnPos = rightHandTransform.method("get_position").invoke();
                    spawnRot = rightHandTransform.method("get_rotation").invoke();
                  }
                  const previewPrefab = item.field("itemPreviewPrefab").value;
                  if (SPI != null && previewPrefab != null && !previewPrefab.isNull()) {
                    const preview = Object.method("Instantiate", 1).invoke(previewPrefab);
                    if (preview != null) {
                      preview.method("Initialize").invoke(item);
                      const t = preview.method("get_transform").invoke();
                      t.method("set_position").invoke(spawnPos);
                      t.method("set_rotation").invoke(spawnRot);
                    }
                  } else {
                    const staffPrefab = item.field("staffItem").value;
                    if (staffPrefab != null && !staffPrefab.isNull()) {
                      const spawned = Object.method("Instantiate", 1).invoke(staffPrefab);
                      if (spawned != null) {
                        zeroStaffCooldown(spawned);
                        const t = spawned.method("get_transform").invoke();
                        t.method("set_position").invoke(spawnPos);
                        t.method("set_rotation").invoke(spawnRot);
                      }
                    }
                  }
                } catch (e) {
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function flyB() {
      if (rightSecondary) {
        try {
          getComponent(GTPlayer, Rigidbody).method("set_velocity").invoke(zeroVector);
        } catch (e) {
        }
        const transform = getTransform(GTPlayer);
        let forward = getTransform(rightHandTransform).method("get_forward").invoke();
        let position = transform.method("get_position").invoke();
        forward = Vector3.method("op_Multiply", 2).invoke(forward, flySpeed * 0.25 * deltaTime);
        position = Vector3.method("op_Addition", 2).invoke(position, forward);
        transform.method("set_position").invoke(position);
      }
    }
    buttons[17] = [
      new ButtonInfo({
        buttonText: "Exit Movement Mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "Fly [B]",
        method: () => {
          flyB();
        },
        toolTip: "Hold B to fly where you look"
      }),
      new ButtonInfo({
        buttonText: "Toggle Gravity",
        method: () => {
          const rb = getComponent(GTPlayer, Rigidbody);
          if (!rb)
            return;
          const g = rb.method("get_useGravity").invoke();
          rb.method("set_useGravity").invoke(!g);
        },
        toolTip: "Toggles gravity."
      })
    ];
    buttons[18] = [
      new ButtonInfo({
        buttonText: "Exit plant moddys",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "Mutation mods",
        method: () => {
          currentCategory = 25;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Opens mutation mods (tab inside this tab)"
      }),
      new ButtonInfo({
        buttonText: "growth multi",
        enableMethod: () => {
          growthBoostOn = true;
        },
        disableMethod: () => {
          growthBoostOn = false;
        },
        isTogglable: true,
        toolTip: "Newly planted crops grow supa huge (synced). Adjust with +/- below"
      }),
      new ButtonInfo({ buttonText: "+ 1 growth", method: () => {
        growthSize = growthSize + 1;
      }, isTogglable: false, toolTip: "Increase growth multiplier by 1" }),
      new ButtonInfo({ buttonText: "- 1 growth", method: () => {
        growthSize = growthSize - 1;
      }, isTogglable: false, toolTip: "Decrease growth multiplier by 1" }),
      new ButtonInfo({ buttonText: "+ 5 growth", method: () => {
        growthSize = growthSize + 5;
      }, isTogglable: false, toolTip: "Increase growth multiplier by 5" }),
      new ButtonInfo({ buttonText: "- 5 growth", method: () => {
        growthSize = growthSize - 5;
      }, isTogglable: false, toolTip: "Decrease growth multiplier by 5" }),
      new ButtonInfo({ buttonText: "+ 10 growth", method: () => {
        growthSize = growthSize + 10;
      }, isTogglable: false, toolTip: "Increase growth multiplier by 10" }),
      new ButtonInfo({ buttonText: "- 10 growth", method: () => {
        growthSize = growthSize - 10;
      }, isTogglable: false, toolTip: "Decrease growth multiplier by 10" }),
      new ButtonInfo({ buttonText: "+ 100 growth", method: () => {
        growthSize = growthSize + 100;
      }, isTogglable: false, toolTip: "Increase growth multiplier by 100" }),
      new ButtonInfo({ buttonText: "- 100 growth", method: () => {
        growthSize = growthSize - 100;
      }, isTogglable: false, toolTip: "Decrease growth multiplier by 100" }),
      new ButtonInfo({ buttonText: "set to 0", method: () => {
        growthSize = 0;
      }, isTogglable: false, toolTip: "Set growth multiplier to 0" })
    ];
    buttons[19] = [
      new ButtonInfo({
        buttonText: "Exit Name Mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "ex ontop",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("<size=23><color=#b14d95>ex ontop");
            } catch (e) {
            }
          });
        },
        isTogglable: true,
        toolTip: "EZZZZZZZ"
      }),
      new ButtonInfo({
        buttonText: "dont press dis",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("Ima suck ya dick");
            } catch (e) {
            }
          });
        },
        isTogglable: true,
        toolTip: "EZZZZZZZ"
      }),
      new ButtonInfo({
        buttonText: "large name",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("<size=300><color=#FFFFFF>im horny");
            } catch (e) {
            }
          });
        },
        isTogglable: true,
        toolTip: "EZZZZZZZ"
      })
    ];
    buttons[20] = [
      new ButtonInfo({
        buttonText: "Exit OP mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "environments",
        method: () => {
          currentCategory = 22;
          currentPage = 0;
          rebuildEnvButtons();
        },
        isTogglable: false,
        toolTip: "Opens weather/environment options"
      }),
      new ButtonInfo({
        buttonText: "all staff shit",
        method: () => staffShit(),
        isTogglable: false,
        toolTip: "Unlock staff, open doors, spawn every staff item in the staff room"
      }),
      new ButtonInfo({
        buttonText: "No cooldown on staff gun / rocket launcher",
        enableMethod: () => {
          staffNoCooldown = true;
        },
        disableMethod: () => {
          staffNoCooldown = false;
        },
        isTogglable: true,
        toolTip: "Remove the fire delay on staff weapons"
      }),
      new ButtonInfo({
        buttonText: "Rapid fire",
        enableMethod: () => {
          staffRapidFire = true;
        },
        disableMethod: () => {
          staffRapidFire = false;
        },
        isTogglable: true,
        toolTip: "Hold your grip down to loop-fire the staff weapon"
      }),
      new ButtonInfo({
        buttonText: "Kick all",
        method: () => kickAllPlayers(),
        isTogglable: false,
        toolTip: "Kicks every player using the staff kick effect"
      }),
      new ButtonInfo({
        buttonText: "Fling all",
        method: () => flingAllPlayers(),
        isTogglable: false,
        toolTip: "Flings every player away using the staff gun effect"
      }),
      new ButtonInfo({
        buttonText: "max moneh",
        method: () => giveMoneyAll(),
        isTogglable: false,
        toolTip: "Set your BwahCoins to the 32-bit max (2,147,483,647)"
      }),
      new ButtonInfo({
        buttonText: "Spawn jetski",
        method: () => jetskiOnTrigger(),
        isTogglable: true,
        toolTip: "Spawns the jetski near you through the game spawner"
      }),
      new ButtonInfo({
        buttonText: "spawn ss crop at hand",
        method: () => {
          try {
            if (rightTrigger && !wasRightTrigger) {
              spawnSsCropAtHand();
            }
          } catch (e) {
          }
          wasRightTrigger = rightTrigger;
        },
        isTogglable: true,
        toolTip: "Uses DebugCropSpawner to spawn the SS crop where your right hand is"
      }),
      new ButtonInfo({
        buttonText: "Spawn nuke",
        method: () => nukeOnTrigger(),
        isTogglable: true,
        toolTip: "Drops a nuke at your right hand using NukeMod (no cooldown)"
      }),
      new ButtonInfo({
        buttonText: "dick spawner",
        method: () => {
          try {
            if (rightTrigger && !wasRightTrigger) {
              spawnJetskiiText(null);
            }
          } catch (e) {
          }
          wasRightTrigger = rightTrigger;
        },
        isTogglable: true,
        enableMethod: () => {
          try {
            if (GunPointer != null)
              GunPointer.method("SetActive").invoke(true);
          } catch (e) {
          }
        },
        disableMethod: () => {
          hideGun();
        },
        toolTip: "Spawns 400 jetskis at (100, -100, 0) then destroys them all"
      }),
      new ButtonInfo({
        buttonText: "fling gun",
        method: () => {
          try {
            if (rightGrab) {
              renderGun();
              if (rightTrigger && !wasRightTriggerFling) {
                flingAllPlayers();
              }
            } else {
              hideGun();
            }
          } catch (e) {
          }
          wasRightTriggerFling = rightTrigger;
        },
        isTogglable: true,
        enableMethod: () => {
          try {
            if (GunPointer != null)
              GunPointer.method("SetActive").invoke(true);
          } catch (e) {
          }
        },
        disableMethod: () => {
          hideGun();
        },
        toolTip: "Hold right grip, then pull the trigger to fling all players"
      }),
      new ButtonInfo({
        buttonText: "kick gun",
        method: () => {
          try {
            if (rightGrab) {
              renderGun();
              if (rightTrigger && !wasRightTriggerKick) {
                kickAllPlayers();
              }
            } else {
              hideGun();
            }
          } catch (e) {
          }
          wasRightTriggerKick = rightTrigger;
        },
        isTogglable: true,
        enableMethod: () => {
          try {
            if (GunPointer != null)
              GunPointer.method("SetActive").invoke(true);
          } catch (e) {
          }
        },
        disableMethod: () => {
          hideGun();
        },
        toolTip: "Hold right grip, then pull the trigger to kick all players"
      }),
      new ButtonInfo({
        buttonText: "inventory spawn gun",
        method: () => {
          try {
            if (rightGrab) {
              renderGun();
              if (rightTrigger) {
                spawnNextFromInventory();
              }
            } else {
              hideGun();
            }
          } catch (e) {
          }
        },
        isTogglable: true,
        enableMethod: () => {
          try {
            if (GunPointer != null)
              GunPointer.method("SetActive").invoke(true);
          } catch (e) {
          }
        },
        disableMethod: () => {
          hideGun();
        },
        toolTip: "Hold right grip + trigger to remove inventory items 1 by 1 (200ms) and spawn them at your hand"
      }),
      new ButtonInfo({
        buttonText: "rock launcher",
        method: () => {
          try {
            fireVolcanoRockGun();
          } catch (e) {
          }
        },
        isTogglable: true,
        toolTip: "Right trigger fires volcanic rocks to everyone (RPC) + starts Volcano weather"
      }),
      new ButtonInfo({
        buttonText: "rock storm (others loop)",
        method: () => {
          try {
            rockSpamOthers();
          } catch (e) {
          }
        },
        isTogglable: true,
        toolTip: "Loops RpcLaunchRock to everyone else (not you) every 200ms"
      }),
      new ButtonInfo({
        buttonText: "crasheeeeeeer",
        method: () => crashJetskis(),
        isTogglable: false,
        toolTip: "Spawns 400 jetskis at (100, -100, 0) then destroys them all"
      }),
      new ButtonInfo({
        buttonText: "every cosmetic",
        enableMethod: () => {
          allCosmeticsOn = true;
          giveAllCosmetics();
        },
        disableMethod: () => {
          allCosmeticsOn = false;
        },
        isTogglable: true,
        toolTip: "Owns every cosmetic so you can equip/use them all"
      }),
      new ButtonInfo({
        buttonText: "auto plant all seeds",
        method: () => autoPlant(),
        isTogglable: false,
        toolTip: "Takes every seed/plant/gear/pet from your inventory and plants or places it in your garden"
      })
    ];
    buttons[21] = [
      new ButtonInfo({
        buttonText: "Exit Cosmetics Mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      })
    ];
    buttons[22] = [];
    buttons[24] = [
      new ButtonInfo({
        buttonText: "Exit le buy mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns you back to the main category."
      }),
      new ButtonInfo({
        buttonText: "all seeds in stock",
        enableMethod: () => {
          allStockOn = true;
          makeAllInStock();
        },
        disableMethod: () => {
          allStockOn = false;
        },
        isTogglable: true,
        toolTip: "Sets every seed/shop item's stock to 999"
      }),
      new ButtonInfo({
        buttonText: "buy multi",
        method: () => {
        },
        isTogglable: false,
        toolTip: "Buying one item gives you this many. Press the +/- buttons to change it"
      }),
      new ButtonInfo({ buttonText: "+ 5 buy", method: () => {
        buyMult = Math.max(1, buyMult + 5);
      }, isTogglable: false, toolTip: "Increase buy multiplier by 5" }),
      new ButtonInfo({ buttonText: "- 5 buy", method: () => {
        buyMult = Math.max(1, buyMult - 5);
      }, isTogglable: false, toolTip: "Decrease buy multiplier by 5" }),
      new ButtonInfo({ buttonText: "+ 10 buy", method: () => {
        buyMult = Math.max(1, buyMult + 10);
      }, isTogglable: false, toolTip: "Increase buy multiplier by 10" }),
      new ButtonInfo({ buttonText: "- 10 buy", method: () => {
        buyMult = Math.max(1, buyMult - 10);
      }, isTogglable: false, toolTip: "Decrease buy multiplier by 10" }),
      new ButtonInfo({ buttonText: "- 100 buy", method: () => {
        buyMult = Math.max(1, buyMult - 100);
      }, isTogglable: false, toolTip: "Decrease buy multiplier by 100" })
    ];
    function rollRandomCropMutation(mutationType) {
      try {
        const CC = classOf(EnverGardenGame, "Enver.Features.CropController");
        if (CC == null)
          return;
        const objs = findObjectsOfType(CC);
        if (objs.length === 0)
          return;
        let ctl = null;
        for (let oi = 0; oi < objs.length; oi++) {
          try {
            ctl = objs.get(oi);
            if (ctl != null && !ctl.isNull())
              break;
          } catch (e) {
          }
        }
        if (ctl == null)
          return;
        ctl.method("RollMutationOnRandomCrop").invoke(mutationType, 1);
      } catch (e) {
      }
    }
    const mutationTabs = [
      ["Disco", 1],
      ["Frozen", 2],
      ["MoonMade", 4],
      ["Wet", 8],
      ["Glacial", 16],
      ["Wavy", 32],
      ["Volcanic", 64],
      ["BloodLit", 128],
      ["Radioactive", 256],
      ["Heartburst", 512]
    ];
    let mutationGunType = 1;
    let wasMutationGunTrigger = false;
    function getCropModelFromHit(hit) {
      try {
        if (hit == null || hit.isNull())
          return null;
        const col = hit.method("get_collider").invoke();
        if (col == null || col.isNull())
          return null;
        const go = col.method("get_gameObject").invoke();
        if (go == null || go.isNull())
          return null;
        const CV = classOf(EnverGardenGame, "Enver.Features.CropView");
        if (CV == null)
          return null;
        let cur = go;
        let view = null;
        while (cur != null && !cur.isNull()) {
          view = getComponent(cur, CV);
          if (view != null && !view.isNull())
            break;
          try {
            const t = cur.method("get_transform").invoke();
            if (t == null || t.isNull()) {
              view = null;
              break;
            }
            const parent = t.method("get_parent").invoke();
            if (parent == null || parent.isNull()) {
              view = null;
              break;
            }
            cur = parent.method("get_gameObject").invoke();
          } catch (e) {
            view = null;
            break;
          }
        }
        if (view == null || view.isNull())
          return null;
        let model = null;
        try {
          model = view.method("get_Model").invoke();
        } catch (e) {
        }
        if (model == null || model.isNull()) {
          try {
            model = view.field("Model").value;
          } catch (e) {
          }
        }
        return model;
      } catch (e) {
        return null;
      }
    }
    function getCropMutations(model) {
      try {
        const mv = model.field("Mutations").value;
        if (mv == null)
          return 0;
        const rv = mv.field("RuntimeValue").value;
        if (rv == null)
          return 0;
        if (rv.field != null) {
          try {
            return rv.field("value__").value;
          } catch (e) {
          }
        }
        return rv;
      } catch (e) {
        return 0;
      }
    }
    function rollMutationGunFrame() {
      try {
        if (rightGrab) {
          const g = renderGun(-5);
          if (rightTrigger && !wasMutationGunTrigger) {
            wasMutationGunTrigger = true;
            const model = g != null && g.ray != null && !g.ray.isNull() ? getCropModelFromHit(g.ray) : null;
            if (model == null || model.isNull()) {
              sendNotification("Aim at a crop!", false);
            } else {
              try {
                const cur = getCropMutations(model);
                const newMask = cur | mutationGunType;
                model.method("OnSetMutations").invoke(newMask);
                sendNotification("Mutation applied!", false);
              } catch (e) {
                sendNotification("Mutation failed", false);
              }
            }
          }
        } else {
          hideGun();
        }
        wasMutationGunTrigger = rightTrigger;
      } catch (e) {
      }
    }
    buttons[25] = [
      new ButtonInfo({
        buttonText: "Exit Mutation Mods",
        method: () => {
          currentCategory = 18;
          currentPage = 0;
        },
        isTogglable: false,
        toolTip: "Returns back to plant moddys."
      })
    ];
    for (const [mutName, mutVal] of mutationTabs) {
      buttons[25].push(new ButtonInfo({
        buttonText: mutName,
        method: () => {
          mutationGunType = mutVal;
          rollMutationGunFrame();
        },
        isTogglable: true,
        enableMethod: () => {
          mutationGunType = mutVal;
          try {
            if (GunPointer != null)
              GunPointer.method("SetActive").invoke(true);
          } catch (e) {
          }
        },
        disableMethod: () => {
          hideGun();
        },
        toolTip: "Aim at a crop with the gun and pull the trigger to roll " + mutName + " mutation on it"
      }));
    }
    buttons[0].push(new ButtonInfo({ buttonText: "shit in here", method: () => {
      currentCategory = 17;
      currentPage = 0;
    }, isTogglable: false, toolTip: "Opens the movement category." }));
    buttons[0].push(new ButtonInfo({ buttonText: "plant moddys", method: () => {
      currentCategory = 18;
      currentPage = 0;
    }, isTogglable: false, toolTip: "Opens the plant moddys category." }));
    buttons[0].push(new ButtonInfo({ buttonText: "Name Mods", method: () => {
      currentCategory = 19;
      currentPage = 0;
    }, isTogglable: false, toolTip: "Opens the fun category." }));
    buttons[0].push(new ButtonInfo({ buttonText: "OP mods", method: () => {
      currentCategory = 20;
      currentPage = 0;
    }, isTogglable: false, toolTip: "Opens the advantage category." }));
    buttons[0].push(new ButtonInfo({ buttonText: "nothing in here", method: () => {
      currentCategory = 21;
      currentPage = 0;
    }, isTogglable: false, toolTip: "Opens cosmetics category." }));
    buttons[0].push(new ButtonInfo({ buttonText: "le buyer mods", method: () => {
      currentCategory = 24;
      currentPage = 0;
    }, isTogglable: false, toolTip: "Buy multiplier + all seeds in stock." }));
    rebuildButtonMap();
    let isPlayingSound = false;
    let soundEndTime = 0;
    let currentPlayingClip = null;
    let soundPreviewObject = null;
    let soundPreviewSource = null;
    const soundboardCache = /* @__PURE__ */ new Map();
    let soundboardArmed = null;
    let fullSoundList = [];
    let loudMicEnabled = false;
    let hearMyselfEnabled = false;
    function getFileNameWithoutExtension(path) {
      const parts = path.replace(/\\/g, "/").split("/");
      const last = parts[parts.length - 1];
      const dotIdx = last.lastIndexOf(".");
      return dotIdx === -1 ? last : last.substring(0, dotIdx);
    }
    function getFileExtension(path) {
      const cleanPath = path.split("?")[0].split("#")[0];
      const dotIdx = cleanPath.lastIndexOf(".");
      return dotIdx === -1 ? "" : cleanPath.substring(dotIdx + 1).toLowerCase();
    }
    function getRecorder() {
      try {
        if (PhotonVoiceViewClass != null) {
          const views = findObjectsOfType(PhotonVoiceViewClass);
          if (views && !views.isNull()) {
            for (let i = 0; i < views.length; i++) {
              try {
                const view = views.get(i);
                if (!view || view.isNull())
                  continue;
                const pv = view.field("photonView").value;
                if (!pv || pv.isNull())
                  continue;
                const isMine = pv.method("get_IsMine").invoke();
                if (!isMine)
                  continue;
                const rec = view.method("get_RecorderInUse").invoke();
                if (rec && !rec.isNull())
                  return rec;
              } catch (e) {
              }
            }
          }
        }
      } catch (e) {
      }
      try {
        if (PunVoiceClientClass != null) {
          const instance = PunVoiceClientClass.method("get_Instance").invoke();
          if (instance && !instance.isNull()) {
            const primary = instance.method("get_PrimaryRecorder").invoke();
            if (primary && !primary.isNull()) {
              return primary;
            }
          }
        }
      } catch (e) {
      }
      try {
        if (RecorderClass == null)
          return null;
        const RecorderFinder = findObjectOfType(RecorderClass);
        if (RecorderFinder && !RecorderFinder.isNull())
          return RecorderFinder;
      } catch (e) {
      }
      return null;
    }
    function restartRecorder(recorder) {
      try {
        recorder.method("RestartRecording").invoke();
        return;
      } catch (e) {
      }
      try {
        recorder.method("RestartRecording", 1).invoke(true);
        return;
      } catch (e) {
      }
      try {
        recorder.method("StopRecording").invoke();
      } catch (e) {
      }
      try {
        recorder.method("StartRecording").invoke();
      } catch (e) {
      }
    }
    function applyLoudMic(enabled) {
      loudMicEnabled = enabled;
      try {
        const recorder = getRecorder();
        if (recorder && !recorder.isNull()) {
          try {
            recorder.method("set_Bitrate").invoke(enabled ? 192e3 : 24e3);
          } catch (e) {
          }
          try {
            recorder.method("set_SamplingRate").invoke(enabled ? 48e3 : 24e3);
          } catch (e) {
          }
          restartRecorder(recorder);
        }
      } catch (e) {
      }
    }
    function toggleHearMyself(enabled) {
      hearMyselfEnabled = enabled;
      try {
        const recorder = getRecorder();
        if (recorder && !recorder.isNull()) {
          try {
            recorder.method("set_DebugEchoMode").invoke(enabled);
          } catch (e) {
          }
          restartRecorder(recorder);
        }
      } catch (e) {
      }
    }
    function getSoundPreviewSource() {
      try {
        if (soundPreviewSource && !soundPreviewSource.isNull?.()) {
          try {
            soundPreviewSource.method("get_enabled").invoke();
            return soundPreviewSource;
          } catch (e) {
          }
        }
      } catch (e) {
      }
      try {
        soundPreviewObject = createObject(zeroVector, identityQuaternion, [1e-3, 1e-3, 1e-3], 0, [0, 0, 0, 0]);
        Object.method("DontDestroyOnLoad", 1).invoke(soundPreviewObject);
        try {
          Destroy(getComponent(soundPreviewObject, BoxCollider));
        } catch (e) {
        }
        if (AudioSourceClass == null)
          return null;
        soundPreviewSource = addComponent(soundPreviewObject, AudioSourceClass);
        soundPreviewSource.method("set_playOnAwake").invoke(false);
        soundPreviewSource.method("set_loop").invoke(false);
        soundPreviewSource.method("set_spatialBlend").invoke(0);
        soundPreviewSource.method("set_volume").invoke(1);
        return soundPreviewSource;
      } catch (e) {
        return null;
      }
    }
    function playLocalSoundPreview(clip) {
      try {
        const source = getSoundPreviewSource();
        if (!source || source.isNull?.())
          return;
        try {
          source.method("Stop").invoke();
        } catch (e) {
        }
        source.method("set_clip").invoke(clip);
        source.method("set_time").invoke(0);
        source.method("set_volume").invoke(1);
        source.method("set_spatialBlend").invoke(0);
        source.method("set_loop").invoke(false);
        source.method("set_mute").invoke(false);
        source.method("set_enabled").invoke(true);
        source.method("Play", 0).invoke();
      } catch (e) {
      }
    }
    function stopLocalSoundPreview() {
      try {
        const src = getSoundPreviewSource();
        if (!src || src.isNull?.())
          return;
        try {
          src.method("Stop").invoke();
        } catch (e) {
        }
        try {
          src.method("set_clip").invoke(NULL);
        } catch (e) {
        }
      } catch (e) {
      }
    }
    function stopSound() {
      stopLocalSoundPreview();
      const recorder = getRecorder();
      if (recorder && !recorder.isNull()) {
        try {
          try {
            recorder.method("StopRecording").invoke();
          } catch (e) {
          }
          try {
            recorder.method("set_RecordingEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_SourceType").invoke(0);
          } catch (e) {
          }
          try {
            recorder.method("set_AudioClip").invoke(NULL);
          } catch (e) {
          }
          try {
            recorder.method("set_LoopAudioClip").invoke(false);
          } catch (e) {
          }
          try {
            recorder.method("set_TransmitEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_UseOnAudioFilterRead").invoke(false);
          } catch (e) {
          }
          try {
            recorder.method("set_VoiceDetection").invoke(false);
          } catch (e) {
          }
          restartRecorder(recorder);
        } catch (e) {
        }
      }
      isPlayingSound = false;
      currentPlayingClip = null;
    }
    function parseWavBuffer(filePath, buffer) {
      const len = buffer.length;
      const view = new DataView(buffer.buffer);
      if (view.getUint32(0, true) !== 1179011410) {
        return null;
      }
      if (view.getUint32(8, true) !== 1163280727) {
        return null;
      }
      let offset = 12;
      let channels = 0;
      let sampleRate = 0;
      let bitsPerSample = 0;
      let dataOffset = 0;
      let dataSize = 0;
      while (offset < len - 8) {
        const chunkId = view.getUint32(offset, true);
        const chunkSize = view.getUint32(offset + 4, true);
        offset += 8;
        if (chunkId === 544501094) {
          channels = view.getUint16(offset + 2, true);
          sampleRate = view.getUint32(offset + 4, true);
          bitsPerSample = view.getUint16(offset + 14, true);
        } else if (chunkId === 1635017060) {
          dataOffset = offset;
          dataSize = chunkSize;
          break;
        }
        offset += chunkSize % 2 === 0 ? chunkSize : chunkSize + 1;
      }
      if (dataOffset === 0 || dataSize === 0) {
        return null;
      }
      let sampleCount = 0;
      let floatSamples;
      const inv32768 = 1 / 32768;
      const inv128 = 1 / 128;
      if (bitsPerSample === 16) {
        sampleCount = dataSize >> 1;
        const s16 = new Int16Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = s16[i] * inv32768;
      } else if (bitsPerSample === 8) {
        sampleCount = dataSize;
        const u8 = new Uint8Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = (u8[i] - 128) * inv128;
      } else if (bitsPerSample === 32) {
        sampleCount = dataSize >> 2;
        const f32 = new Float32Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        floatSamples.set(f32);
      } else {
        return null;
      }
      if (loudMicEnabled) {
        const boost = 2.5;
        for (let i = 0; i < floatSamples.length; i++) {
          let s = floatSamples[i] * boost;
          if (s > 1)
            s = 1;
          if (s < -1)
            s = -1;
          floatSamples[i] = s;
        }
      }
      if (AudioClipClass == null) {
        return null;
      }
      return buildClipFromFloats(filePath, floatSamples, sampleRate, channels);
    }
    function buildClipFromFloats(filePath, floatSamples, sampleRate, channels) {
      try {
        if (AudioClipClass == null) {
          return null;
        }
        const nameOnly = getFileNameWithoutExtension(filePath);
        const createM = AudioClipClass.tryMethod("Create", 6) || AudioClipClass.tryMethod("Create", 5) || AudioClipClass.tryMethod("Create", 7);
        if (!createM) {
          return null;
        }
        const sampleCount = floatSamples.length;
        const createArgs = [Il2Cpp.string(nameOnly), sampleCount / channels, channels, sampleRate, false];
        while (createArgs.length < createM.parameters.length)
          createArgs.push(NULL);
        const unityClip = createM.invoke(...createArgs);
        const floatClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.Single");
        const unityArray = Il2Cpp.array(floatClass, sampleCount);
        try {
          unityArray.elements.handle.writeByteArray(new Uint8Array(floatSamples.buffer));
          const probe = new Float32Array(unityArray.elements.handle.readByteArray(Math.min(16, sampleCount * 4)));
          if (Math.abs(probe[0] - floatSamples[0]) > 1e-4) {
            for (let i = 0; i < floatSamples.length; i++)
              unityArray.set(i, floatSamples[i]);
          }
        } catch (e) {
          throw e;
        }
        unityClip.method("SetData", 2).invoke(unityArray, 0);
        return { clip: unityClip, duration: sampleCount / (sampleRate * channels), sampleRate, channels };
      } catch (e) {
        return null;
      }
    }
    function parsePcmBuffer(filePath, pcm) {
      try {
        if (pcm == null || pcm.length < 2)
          return null;
        const sampleCount = pcm.length >> 1;
        const s16 = new Int16Array(pcm.buffer, pcm.byteOffset, sampleCount);
        const floatSamples = new Float32Array(sampleCount);
        const inv32768 = 1 / 32768;
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = s16[i] * inv32768;
        if (loudMicEnabled) {
          const boost = 2.5;
          for (let i = 0; i < floatSamples.length; i++) {
            let s = floatSamples[i] * boost;
            if (s > 1)
              s = 1;
            if (s < -1)
              s = -1;
            floatSamples[i] = s;
          }
        }
        return buildClipFromFloats(filePath, floatSamples, 44100, 1);
      } catch (e) {
        return null;
      }
    }
    const soundConvertUrl = "https://fuzzy-bees-tan.loca.lt";
    let soundByteClass = null;
    function getSoundByteClass() {
      if (soundByteClass && !soundByteClass.isNull())
        return soundByteClass;
      const candidates = ["System.Private.CoreLib", "mscorlib", "System.Runtime", "netstandard"];
      for (const an of candidates) {
        try {
          const asm = Il2Cpp.domain.assembly(an);
          if (asm) {
            const k = asm.image.class("System.Byte");
            if (k) {
              soundByteClass = k;
              return k;
            }
          }
        } catch (e) {
        }
      }
      return null;
    }
    function soundBytesToIl2CppArray(bytes) {
      const cls = getSoundByteClass();
      if (!cls)
        throw new Error("no byte class");
      const arr = Il2Cpp.array(cls, bytes.length);
      arr.elements.handle.writeByteArray(bytes);
      return arr;
    }
    function asciiBytes(str) {
      const out = new Uint8Array(str.length);
      for (let i = 0; i < str.length; i++)
        out[i] = str.charCodeAt(i) & 255;
      return out;
    }
    function buildMultipartBody(fileBytes, fileName) {
      const boundary = "----bwah" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
      const safeName = String(fileName).replace(/[^A-Za-z0-9._-]/g, "_");
      const head = "--" + boundary + '\r\nContent-Disposition: form-data; name="audio"; filename="' + safeName + '"\r\nContent-Type: application/octet-stream\r\n\r\n';
      const tail = "\r\n--" + boundary + "--\r\n";
      const headB = asciiBytes(head);
      const tailB = asciiBytes(tail);
      const body = new Uint8Array(headB.length + fileBytes.length + tailB.length);
      body.set(headB, 0);
      body.set(fileBytes, headB.length);
      body.set(tailB, headB.length + fileBytes.length);
      return { body, contentType: "multipart/form-data; boundary=" + boundary };
    }
    function postConvertSound(bodyBytes, contentType, onDone) {
      try {
        let uwrModule = null;
        try {
          uwrModule = Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image;
        } catch (e) {
        }
        if (!uwrModule) {
          onDone(false, null);
          return;
        }
        const uwrClass = uwrModule.class("UnityEngine.Networking.UnityWebRequest");
        const bodyArr = soundBytesToIl2CppArray(bodyBytes);
        const upCls = uwrModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const upInst = upCls.alloc();
        upInst.method(".ctor", ["System.Byte[]"]).invoke(bodyArr);
        const dlCls = uwrModule.class("UnityEngine.Networking.DownloadHandlerBuffer");
        const dlInst = dlCls.alloc();
        dlInst.method(".ctor").invoke();
        const req = uwrClass.method(".ctor", ["System.String", "System.String", "UnityEngine.Networking.DownloadHandler", "UnityEngine.Networking.UploadHandler"]).invoke(Il2Cpp.string(soundConvertUrl), Il2Cpp.string("POST"), dlInst, upInst);
        try {
          req.method("SetRequestHeader").invoke(Il2Cpp.string("Content-Type"), Il2Cpp.string(contentType));
        } catch (e) {
        }
        try {
          req.method("set_timeout").invoke(30);
        } catch (e) {
        }
        req.method("SendWebRequest").invoke();
        let attempts = 0;
        const poll = () => {
          attempts++;
          try {
            if (req.method("get_isDone").invoke()) {
              let code = -1;
              try {
                code = req.method("get_responseCode").invoke();
              } catch (e) {
              }
              if (code === 200) {
                const dh = req.method("get_downloadHandler").invoke();
                const data = dh.method("get_data").invoke();
                const n = data.length;
                const bytes = new Uint8Array(n);
                try {
                  const raw = new Uint8Array(data.elements.handle.readByteArray(n));
                  bytes.set(raw);
                } catch (e) {
                  for (let i = 0; i < n; i++)
                    bytes[i] = data.get(i);
                }
                onDone(true, bytes);
              } else {
                onDone(false, null);
              }
              return;
            }
            if (attempts > 600) {
              onDone(false, null);
              return;
            }
            setTimeout(poll, 50);
          } catch (e) {
            onDone(false, null);
          }
        };
        setTimeout(poll, 50);
      } catch (e) {
        onDone(false, null);
      }
    }
    function readFileBytesRaw(filePath) {
      try {
        const FileClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.File");
        const fileBytes = FileClass.method("ReadAllBytes", 1).invoke(Il2Cpp.string(filePath));
        if (fileBytes && !fileBytes.isNull()) {
          return new Uint8Array(fileBytes.elements.handle.readByteArray(fileBytes.length));
        }
      } catch (e) {
      }
      return null;
    }
    function loadSoundFile(filePath, onDone) {
      try {
        const ext = getFileExtension(filePath).toLowerCase();
        let buffer = readFileBytesRaw(filePath);
        if (!buffer || buffer.length === 0)
          buffer = libcReadFileBytes(filePath);
        if (!buffer || buffer.length === 0) {
          onDone(null);
          return;
        }
        if (ext === "wav") {
          onDone(parseWavBuffer(filePath, buffer));
          return;
        }
        if (ext !== "mp3") {
          onDone(null);
          return;
        }
        const mp = buildMultipartBody(buffer, String(filePath).split(/[\\/]/).pop() || "audio.mp3");
        postConvertSound(mp.body, mp.contentType, (ok, pcm) => {
          onDone(ok && pcm ? parsePcmBuffer(filePath, pcm) : null);
        });
      } catch (e) {
        onDone(null);
      }
    }
    function waveMagicOk(view) {
      try {
        return view.getUint32(0, true) === 1179011410 && view.getUint32(8, true) === 1163280727;
      } catch (_) {
        return false;
      }
    }
    function playLoadedSoundData(filePath, soundData) {
      const recorder = getRecorder();
      if (!recorder || recorder.isNull()) {
        return;
      }
      try {
        try {
          recorder.method("StopRecording").invoke();
        } catch (e) {
        }
        try {
          recorder.method("set_SourceType").invoke(1);
        } catch (e) {
        }
        const clipSet = { ok: true, err: "" };
        try {
          recorder.method("set_AudioClip").invoke(soundData.clip);
        } catch (e) {
          clipSet.ok = false;
          clipSet.err = String(e);
        }
        try {
          recorder.method("set_LoopAudioClip").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_TransmitEnabled").invoke(true);
        } catch (e) {
        }
        try {
          recorder.method("set_RecordingEnabled").invoke(true);
        } catch (e) {
        }
        try {
          recorder.method("set_ReliableMode").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_VoiceDetection").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_StopRecordingWhenPaused").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_DebugEchoMode").invoke(hearMyselfEnabled);
        } catch (e) {
        }
        if (loudMicEnabled) {
          try {
            recorder.method("set_Bitrate").invoke(192e3);
          } catch (e) {
          }
          try {
            recorder.method("set_SamplingRate").invoke(48e3);
          } catch (e) {
          }
        }
        if (!clipSet.ok) {
          return;
        }
        restartRecorder(recorder);
        try {
          recorder.method("StartRecording").invoke();
        } catch (e) {
          return;
        }
        isPlayingSound = true;
        soundEndTime = time + soundData.duration + 0.1;
        currentPlayingClip = soundData.clip;
      } catch (e) {
      }
    }
    function playSound(filePath) {
      if (isPlayingSound)
        stopSound();
      loadSoundFile(filePath, (sd) => {
        if (sd)
          playLoadedSoundData(filePath, sd);
      });
    }
    let libcOpen = null;
    let libcRead = null;
    let libcLseek = null;
    let libcClose = null;
    let libcOpendir = null;
    let libcReaddir = null;
    let libcClosedir = null;
    function ensureLibc() {
      if (libcOpen)
        return true;
      try {
        const libcMod = Process.findModuleByName("libc.so");
        if (!libcMod)
          return false;
        const exp = (name) => {
          try {
            const p = libcMod.findExportByName(name);
            return p && !p.isNull() ? p : null;
          } catch (_) {
            return null;
          }
        };
        libcOpen = new NativeFunction(exp("open") || NULL, "int", ["pointer", "int"]);
        libcRead = new NativeFunction(exp("read") || NULL, "long", ["int", "pointer", "ulong"]);
        libcLseek = new NativeFunction(exp("lseek64") || NULL, "long", ["int", "long", "int"]);
        if (libcLseek.isNull())
          libcLseek = new NativeFunction(exp("lseek") || NULL, "long", ["int", "long", "int"]);
        libcClose = new NativeFunction(exp("close") || NULL, "int", ["int"]);
        libcOpendir = new NativeFunction(exp("opendir") || NULL, "pointer", ["pointer"]);
        libcReaddir = new NativeFunction(exp("readdir64") || NULL, "pointer", ["pointer"]);
        if (libcReaddir.isNull())
          libcReaddir = new NativeFunction(exp("readdir") || NULL, "pointer", ["pointer"]);
        libcClosedir = new NativeFunction(exp("closedir") || NULL, "int", ["pointer"]);
        return !libcOpen.isNull();
      } catch (e) {
        return false;
      }
    }
    function libcReadFileBytes(filePath) {
      try {
        if (!ensureLibc()) {
          return null;
        }
        const path = Memory.allocUtf8String(filePath);
        const fd = libcOpen(path, 0);
        if (fd < 0) {
          return null;
        }
        const size = Number(libcLseek(fd, 0, 2));
        if (size <= 0) {
          return null;
        }
        libcLseek(fd, 0, 0);
        const buf = Memory.alloc(size);
        const got = Number(libcRead(fd, buf, size));
        libcClose(fd);
        if (got <= 0) {
          return null;
        }
        return new Uint8Array(buf.readByteArray(got));
      } catch (e) {
        return null;
      }
    }
    function libcListWavs(dir) {
      const out = [];
      try {
        if (!ensureLibc())
          return out;
        const dirHandle = libcOpendir(Memory.allocUtf8String(dir));
        if (dirHandle.isNull())
          return out;
        for (; ; ) {
          const entry = libcReaddir(dirHandle);
          if (entry.isNull())
            break;
          const d_name = entry.add(19).readUtf8String();
          if (!d_name)
            continue;
          if (d_name === "." || d_name === "..")
            continue;
          if (d_name.toLowerCase().endsWith(".wav") || d_name.toLowerCase().endsWith(".mp3"))
            out.push(dir + "/" + d_name);
        }
        libcClosedir(dirHandle);
      } catch (e) {
      }
      return out;
    }
    function writeTextFile(path, lines) {
      try {
        const f = new File(path, "w");
        f.write(lines.join("\n"));
        f.flush();
        f.close();
        return true;
      } catch (e) {
        return false;
      }
    }
    function dumpIl2CppAll() {
      sendNotification("Dumping il2cpp...", false, 10);
      try {
        Il2Cpp.dump("bwah_dump.cs", "/sdcard/Android/data/com.Flixzy.Bwah/files");
        sendNotification("Saved bwah_dump.cs!", false, 10);
      } catch (e) {
        sendNotification("Dump failed: " + e, false, 10);
      }
    }
    function dumpPhotonPrefabs() {
      try {
        if (!PhotonUnityNetworking) {
          return;
        }
        const PhotonViewClass = PhotonUnityNetworking.class("Photon.Pun.PhotonView");
        const allPVs = Resources.method("FindObjectsOfTypeAll").overload("System.Type").invoke(PhotonViewClass.type.object);
        try {
          const hd = allPVs.handle;
          const bytes = new Uint8Array(hd.readByteArray(64));
          const hex = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join(" ");
        } catch (e) {
        }
        const lines = [];
        lines.push("Total PhotonViews found: " + allPVs.length);
        const unique = /* @__PURE__ */ new Set();
        let rawBase = null;
        let rawOff = 0;
        try {
          allPVs.get(0);
        } catch (e) {
          const ps = Process.pointerSize;
          try {
            const l = Il2Cpp.exports.arrayGetLength(allPVs.handle);
            for (let c = ps; c <= 8 * ps; c += 4) {
              if (allPVs.handle.add(c).readU32() === l) {
                rawOff = c + 4 + ps - 1 & ~(ps - 1);
                break;
              }
            }
          } catch (e2) {
          }
          if (!rawOff)
            rawOff = ps + 4 + ps - 1 & ~(ps - 1);
          rawBase = allPVs.handle;
        }
        for (let i = 0; i < allPVs.length; i++) {
          try {
            let view = rawBase ? new Il2Cpp.Object(rawBase.add(rawOff + i * Process.pointerSize).readPointer()) : allPVs.get(i);
            if (!view || view.isNull())
              continue;
            const go = view.method("get_gameObject").invoke();
            if (!go || go.isNull())
              continue;
            const name = go.method("get_name").invoke().toString();
            unique.add(String(name));
          } catch (e) {
          }
        }
        unique.forEach((name) => lines.push(name));
        const path = "/sdcard/Android/data/com.Flixzy.Bwah/files/bwah_prefabs.txt";
        const ok = writeTextFile(path, lines);
        sendNotification(ok ? "Prefabs saved!" : "Prefab dump failed!", false, 8);
      } catch (e) {
        sendNotification("Prefab dump failed: " + e, false, 8);
      }
    }
    function dumpAssemblies() {
      try {
        const lines = [];
        for (const asm of Il2Cpp.domain.assemblies) {
          try {
            lines.push(String(asm.name) + " : " + String(asm.image.classes.length) + " classes");
          } catch (_) {
            lines.push(String(asm));
          }
        }
        const path = "/sdcard/Android/data/com.Flixzy.Bwah/files/bwah_assemblies.txt";
        const ok = writeTextFile(path, lines);
        sendNotification(ok ? "Assemblies saved!" : "Assembly dump failed", false, 8);
      } catch (e) {
      }
    }
    function getPotentialSoundDirs() {
      const dirs = [];
      try {
        const AppClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Application");
        try {
          const pdp = String(AppClass.method("get_persistentDataPath").invoke()?.content ?? "");
          if (pdp)
            dirs.push(pdp + "/sounds");
        } catch (e) {
        }
        try {
          const dp = String(AppClass.method("get_dataPath").invoke()?.content ?? "");
          if (dp) {
            const exeDir = dp.replace(/[\\/][^\\/]*$/, "").replace(/[\\/][^\\/]*_Data$/, "");
            if (exeDir && exeDir !== dp)
              dirs.push(exeDir + "/sounds");
          }
        } catch (e) {
        }
        try {
          const id = String(AppClass.method("get_identifier").invoke()?.content ?? "");
          if (id)
            dirs.push("/sdcard/Android/data/" + id + "/files/sounds");
        } catch (e) {
        }
      } catch (e) {
      }
      dirs.push("/sdcard/Android/data/com.Flixzy.Bwah/files/sounds");
      dirs.push("/sdcard/Android/data/com.AnotherAxiom.GorillaTag/files/sounds");
      return dirs;
    }
    function rebuildSoundboardButtons() {
      const soundboardButtons = [
        new ButtonInfo({
          buttonText: "Exit Soundboard",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
            reloadMenu();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Reload Sounds",
          method: () => {
            const files = scanSoundFiles();
            fullSoundList = files;
            soundsPreloadedOnce = true;
            preloadStartTime = Date.now();
            preloadSounds(files, 0);
            sendNotification("Reloading " + files.length + " sounds...", false, 2);
            rebuildSoundboardButtons();
            reloadMenu();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Stop All",
          method: () => {
            stopSound();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Hear Myself",
          method: () => {
          },
          enableMethod: () => {
            hearMyselfEnabled = true;
            toggleHearMyself(true);
            reloadMenu();
          },
          disableMethod: () => {
            hearMyselfEnabled = false;
            toggleHearMyself(false);
            reloadMenu();
          },
          isTogglable: true,
          enabled: hearMyselfEnabled,
          toolTip: "Hear the exact broadcast others hear"
        }),
        new ButtonInfo({
          buttonText: "Loud Mic",
          method: () => {
          },
          enableMethod: () => {
            loudMicEnabled = true;
            applyLoudMic(true);
            reloadMenu();
          },
          disableMethod: () => {
            loudMicEnabled = false;
            applyLoudMic(false);
            reloadMenu();
          },
          isTogglable: true,
          enabled: loudMicEnabled,
          toolTip: "Boosts audio + broadcasts louder for everyone"
        })
      ];
      const scannedFiles = scanSoundFiles();
      if (scannedFiles.length === 0) {
        const tipDir = getPotentialSoundDirs()[0] || "sounds/";
        try {
          Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.Directory").method("CreateDirectory", 1).invoke(Il2Cpp.string(tipDir));
        } catch (e) {
        }
        soundboardButtons.push(new ButtonInfo({
          buttonText: "No sounds found",
          method: () => {
          },
          isTogglable: false
        }));
      } else {
        for (const filePath of scannedFiles) {
          const nameOnly = getFileNameWithoutExtension(filePath);
          soundboardButtons.push(new ButtonInfo({
            buttonText: nameOnly,
            method: () => {
              if (soundboardArmed === filePath) {
                soundboardArmed = null;
                const cached = soundboardCache.get(filePath);
                if (cached) {
                  playLoadedSoundData(filePath, cached);
                } else {
                  loadSoundFile(filePath, (sd) => {
                    if (sd) {
                      soundboardCache.set(filePath, sd);
                      playLoadedSoundData(filePath, sd);
                    }
                  });
                }
              } else {
                soundboardArmed = null;
                if (soundboardCache.has(filePath)) {
                  soundboardArmed = filePath;
                } else {
                  loadSoundFile(filePath, (sd) => {
                    if (sd) {
                      soundboardCache.set(filePath, sd);
                      soundboardArmed = filePath;
                    }
                  });
                }
              }
            },
            isTogglable: false
          }));
        }
      }
      buttons[14] = soundboardButtons;
      rebuildButtonMap();
      fullSoundList = scannedFiles;
    }
    function scanSoundFiles() {
      const scanned = [];
      try {
        const DirClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.Directory");
        const dirs = getPotentialSoundDirs();
        for (const dir of dirs) {
          let got = [];
          try {
            const exists = DirClass.method("Exists", 1).invoke(Il2Cpp.string(dir));
            if (!exists)
              continue;
            try {
              const files = DirClass.method("GetFiles", 2).invoke(Il2Cpp.string(dir), Il2Cpp.string("*.wav"));
              if (files && !files.isNull()) {
                for (let i = 0; i < files.length; i++) {
                  const fp = String(files.get(i)?.content ?? files.get(i)?.toString?.() ?? "");
                  const ext = getFileExtension(fp);
                  if (ext === "wav" || ext === "WAV")
                    got.push(fp);
                }
              }
            } catch (e) {
              got = libcListWavs(dir);
            }
            try {
              const mfiles = DirClass.method("GetFiles", 2).invoke(Il2Cpp.string(dir), Il2Cpp.string("*.mp3"));
              if (mfiles && !mfiles.isNull()) {
                for (let i = 0; i < mfiles.length; i++) {
                  const fp = String(mfiles.get(i)?.content ?? mfiles.get(i)?.toString?.() ?? "");
                  const ext = getFileExtension(fp);
                  if (ext === "mp3" || ext === "MP3")
                    got.push(fp);
                }
              }
            } catch (e) {
            }
            if (got.length === 0)
              got = libcListWavs(dir);
            for (const fp of got)
              scanned.push(fp);
            if (scanned.length > 0)
              break;
          } catch (e) {
          }
        }
      } catch (e) {
      }
      return scanned;
    }
    let soundsPreloadedOnce = false;
    let preloadStartTime = 0;
    function preloadAllSoundsOnce() {
      if (soundsPreloadedOnce)
        return;
      soundsPreloadedOnce = true;
      try {
        const files = scanSoundFiles();
        fullSoundList = files;
        if (files.length > 0) {
          preloadStartTime = Date.now();
          preloadSounds(files, 0);
        }
      } catch (e) {
      }
    }
    let preloadScheduled = false;
    function scheduleSoundPreload() {
      if (preloadScheduled)
        return;
      preloadScheduled = true;
      let tries = 0;
      const tryGo = () => {
        tries++;
        try {
          const cc = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          const cam = cc.method("get_main").invoke();
          if (cam && !cam.isNull()) {
            preloadAllSoundsOnce();
            return;
          }
        } catch (e) {
        }
        if (tries >= 40) {
          preloadAllSoundsOnce();
          return;
        }
        setTimeout(tryGo, 1e3);
      };
      setTimeout(tryGo, 1e4);
    }
    scheduleSoundPreload();
    let preloadCompleted = 0;
    let preloadInFlight = 0;
    let preloadDoneAnnounced = false;
    const preloadConcurrency = 8;
    function preloadSounds(files, nextIndex) {
      if (nextIndex === 0) {
        preloadCompleted = 0;
        preloadInFlight = 0;
        preloadDoneAnnounced = false;
      }
      const launch = () => {
        while (preloadInFlight < preloadConcurrency && nextIndex < files.length) {
          const filePath = files[nextIndex];
          nextIndex++;
          preloadInFlight++;
          const doneOne = () => {
            preloadCompleted++;
            preloadInFlight--;
            if (preloadCompleted % 10 === 0 || preloadCompleted === files.length) {
              const elapsed = Math.max(1, Date.now() - preloadStartTime);
              const per = elapsed / preloadCompleted;
              const remaining = files.length - preloadCompleted;
              const etaSec = Math.ceil(per * remaining / 1e3);
              sendNotification("Preloading " + preloadCompleted + "/" + files.length + " sounds... ETA ~" + etaSec + "s", false, 2);
            }
            if (preloadCompleted >= files.length) {
              if (!preloadDoneAnnounced) {
                preloadDoneAnnounced = true;
                const elapsed = Math.max(1, Date.now() - preloadStartTime);
                const totalSec = (elapsed / 1e3).toFixed(1);
                console.log("[dbg] preload done " + files.length + " files in " + totalSec + "s");
                sendNotification("All " + files.length + " sounds preloaded in " + totalSec + "s", false);
              }
            } else if (nextIndex < files.length) {
              launch();
            }
          };
          if (soundboardCache.has(filePath)) {
            doneOne();
          } else {
            try {
              loadSoundFile(filePath, (sd) => {
                if (sd)
                  soundboardCache.set(filePath, sd);
                doneOne();
              });
            } catch (e) {
              doneOne();
            }
          }
        }
      };
      launch();
    }
    function normalizeSoundName(s) {
      return String(s).toLowerCase().replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212\uff0d\u2500\u00ad]/g, "-").replace(/\s+/g, " ").trim();
    }
    function findClipByName(desired) {
      try {
        const want = normalizeSoundName(desired);
        if (AudioSourceClass == null)
          return null;
        const check = (as) => {
          try {
            if (as == null || as.isNull())
              return null;
            const clip = as.method("get_clip").invoke();
            if (clip == null || clip.isNull())
              return null;
            const cn = String(clip.method("get_name").invoke().toString());
            const ncn = normalizeSoundName(cn);
            if (ncn === want || ncn.indexOf(want) !== -1) {
              cachedClickClip = clip;
              if (cachedClickSource == null || cachedClickSource.isNull())
                cachedClickSource = as;
              return clip;
            }
          } catch (e) {
          }
          return null;
        };
        const allAs = findObjectsOfType(AudioSourceClass);
        if (allAs != null) {
          for (let ai = 0; ai < allAs.length; ai++) {
            const r = check(allAs.get(ai));
            if (r != null && !r.isNull())
              return r;
          }
        }
        const allInactive = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
        if (allInactive != null) {
          for (let ai = 0; ai < allInactive.length; ai++) {
            const r = check(allInactive.get(ai));
            if (r != null && !r.isNull())
              return r;
          }
        }
      } catch (e) {
      }
      return null;
    }
    function scanForClickClip() {
      const c = findClipByName("click");
      if (c != null && !c.isNull())
        return c;
      return findClipByName("cash-register-kaching-sound-effect-125042");
    }
    function playClickSound() {
      try {
        const clip = scanForClickClip();
        if (clip == null || clip.isNull())
          return false;
        let src = getSoundPreviewSource();
        if (src == null || src.isNull())
          return false;
        try {
          src.method("Stop").invoke();
        } catch (e) {
        }
        src.method("set_clip").invoke(clip);
        src.method("set_time").invoke(0);
        src.method("set_volume").invoke(1);
        src.method("set_spatialBlend").invoke(0);
        src.method("set_loop").invoke(false);
        src.method("set_mute").invoke(false);
        src.method("set_enabled").invoke(true);
        src.method("Play", 0).invoke();
        let playing = false;
        try {
          playing = src.method("get_isPlaying").invoke();
        } catch (e) {
        }
        if (!playing && cachedClickSource != null && !cachedClickSource.isNull()) {
          try {
            cachedClickSource.method("get_gameObject").invoke().method("SetActive").invoke(true);
            cachedClickSource.method("set_enabled").invoke(true);
            cachedClickSource.method("set_volume").invoke(1);
            cachedClickSource.method("Play", 0).invoke();
          } catch (e) {
          }
        }
        return true;
      } catch (e) {
        return false;
      }
    }
    function playNamedClip(clipName) {
      try {
        const clip = findClipByName(clipName);
        if (clip == null || clip.isNull())
          return false;
        let src = getSoundPreviewSource();
        if (src == null || src.isNull())
          return false;
        try {
          src.method("Stop").invoke();
        } catch (e) {
        }
        src.method("set_clip").invoke(clip);
        src.method("set_time").invoke(0);
        src.method("set_volume").invoke(1);
        src.method("set_spatialBlend").invoke(0);
        src.method("set_loop").invoke(false);
        src.method("set_mute").invoke(false);
        src.method("set_enabled").invoke(true);
        src.method("Play", 0).invoke();
        return true;
      } catch (e) {
        return false;
      }
    }
    function dumpAllSounds() {
      const seen = /* @__PURE__ */ new Set();
      try {
        if (AudioSourceClass != null) {
          const scanList = (list) => {
            for (let ai = 0; ai < list.length; ai++) {
              try {
                const as = list.get(ai);
                if (as == null || as.isNull())
                  continue;
                const clip = as.method("get_clip").invoke();
                if (clip == null || clip.isNull())
                  continue;
                const cn = String(clip.method("get_name").invoke().toString());
                const go = as.method("get_gameObject").invoke();
                const gn = go != null && !go.isNull() ? String(go.method("get_name").invoke().toString()) : "?";
                const key = cn + "|" + gn;
                if (seen.has(key))
                  continue;
                seen.add(key);
                console.log('[SOUND] clip="' + cn + '" on="' + gn + '"');
              } catch (e) {
              }
            }
          };
          const allAs = findObjectsOfType(AudioSourceClass);
          if (allAs != null)
            scanList(allAs);
          const allInactive = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
          if (allInactive != null)
            scanList(allInactive);
        }
      } catch (e) {
      }
      return seen.size;
    }
    function ensureClickClip() {
      let tries = 0;
      const tryScan = () => {
        tries++;
        try {
          if (scanForClickClip() != null)
            return;
        } catch (e) {
        }
        if (tries < 60)
          setTimeout(tryScan, 1e3);
      };
      setTimeout(tryScan, 1e3);
    }
    ensureClickClip();
    const ButtonActivation = GorillaReportButton.method("OnTriggerEnter");
    ButtonActivation.implementation = function(collider) {
      const rawName = this.method("get_name").invoke().toString();
      if (rawName.length > 1 && rawName[1] == "@") {
        if (referenceCollider != null && !referenceCollider.isNull() && collider.handle.equals(referenceCollider.handle)) {
          const goName = rawName.substring(2, rawName.length - 1);
          const _time = Time.method("get_time").invoke();
          if (_time > buttonClickDelay) {
            buttonClickDelay = _time + 0.2;
            const button = getIndex(goName);
            if (button) {
              try {
                playClickSound();
              } catch (e) {
              }
              try {
                if (button.isTogglable) {
                  button.enabled = !button.enabled;
                  if (button.enabled) {
                    if (button.toolTip)
                      sendNotification("[ENABLE] " + button.toolTip, false);
                    if (button.enableMethod) {
                      try {
                        button.enableMethod();
                      } catch (ee) {
                      }
                    }
                  } else {
                    if (button.toolTip)
                      sendNotification("[DISABLE] " + button.toolTip, false);
                    if (button.disableMethod) {
                      try {
                        button.disableMethod();
                      } catch (ee) {
                      }
                    }
                  }
                } else {
                  if (button.toolTip)
                    sendNotification(button.toolTip, false);
                  if (button.method) {
                    try {
                      button.method();
                    } catch (ee) {
                    }
                  }
                }
                reloadMenu();
              } catch (e) {
              }
              return;
            } else {
              return this.method("OnTriggerEnter").invoke(collider);
            }
          }
        }
        return;
      }
      return this.method("OnTriggerEnter").invoke(collider);
    };
    function updateInput() {
      const leftDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(4);
      const rightDevice = InputDevices.method("GetDeviceAtXRNode", 1).invoke(5);
      const outBool = Il2Cpp.alloc(1);
      leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primaryButton").value, outBool);
      leftPrimary = outBool.readU8() !== 0;
      leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("secondaryButton").value, outBool);
      leftSecondary = outBool.readU8() !== 0;
      leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("gripButton").value, outBool);
      leftGrab = outBool.readU8() !== 0;
      leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("triggerButton").value, outBool);
      leftTrigger = outBool.readU8() !== 0;
      leftDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
      leftStick = outBool.readU8() !== 0;
      rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primaryButton").value, outBool);
      rightPrimary = outBool.readU8() !== 0;
      rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("secondaryButton").value, outBool);
      rightSecondary = outBool.readU8() !== 0;
      rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("triggerButton").value, outBool);
      rightTrigger = outBool.readU8() !== 0;
      rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("gripButton").value, outBool);
      rightGrab = outBool.readU8() !== 0;
      rightDevice.method("TryGetFeatureValue", 2).invoke(CommonUsages.field("primary2DAxisClick").value, outBool);
      rightStick = outBool.readU8() !== 0;
      rightDevice.method("TryGetFeatureValue", 2).overload("UnityEngine.XR.InputFeatureUsage<UnityEngine.Vector2>", "UnityEngine.Vector2&").invoke(CommonUsages.field("primary2DAxis").value, ensureOutAxis());
      rightAxis = [outAxis.readFloat(), outAxis.add(4).readFloat()];
      leftDevice.method("TryGetFeatureValue", 2).overload("UnityEngine.XR.InputFeatureUsage<UnityEngine.Vector2>", "UnityEngine.Vector2&").invoke(CommonUsages.field("primary2DAxis").value, ensureOutAxis());
      leftAxis = [outAxis.readFloat(), outAxis.add(4).readFloat()];
    }
    if (GTPlayerClass) {
      GTPlayerClass.method("LateUpdate").implementation = function() {
        GTPlayer = this;
        try {
          leftHandTransform = this.field("leftHandTransform").value;
          rightHandTransform = this.field("rightHandTransform").value;
          headCollider = this.field("headCollider").value;
          bodyCollider = this.field("bodyCollider").value;
        } catch (_) {
        }
        if (!UberShader || UberShader.isNull()) {
          try {
            UberShader = Shader.method("Find").invoke(Il2Cpp.string("Universal Render Pipeline/Unlit"));
            if (!UberShader || UberShader.isNull()) {
              UberShader = Shader.method("Find").invoke(Il2Cpp.string("Unlit/Color"));
            }
            TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"));
            if (!TextShader || TextShader.isNull()) {
              TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default (1)"));
            }
            zeroVector = Vector3.field("zeroVector").value;
            oneVector = Vector3.field("oneVector").value;
            identityQuaternion = Quaternion.field("identityQuaternion").value;
            arial = Resources.method("GetBuiltinResource").overload("System.Type", "System.String").invoke(Font.type.object, Il2Cpp.string("Arial.ttf"));
          } catch (_) {
          }
        }
        deltaTime = Time.method("get_deltaTime").invoke();
        time = Time.method("get_time").invoke();
        if (menuInitTime === 0) {
          menuInitTime = time;
        }
        if (time - menuInitTime < 5) {
          this.method("LateUpdate").invoke();
          return;
        }
        updateInput();
        frameCount++;
        if (allStockOn && time - lastStockApply > 0.5) {
          lastStockApply = time;
          try {
            makeAllInStock();
          } catch (e) {
          }
        }
        if (righthand && rightSecondary || !righthand && leftSecondary) {
          if (currentNotification != "" && time > notifactionResetTime)
            reloadMenu();
          if (menu == null) {
            try {
              renderMenu();
            } catch (e) {
              if (e.stack)
                try {
                  if (menu != null) {
                    Destroy(menu);
                  }
                } catch (e2) {
                }
              menu = null;
            }
          } else {
            try {
              recenterMenu();
            } catch (e) {
              if (e.stack) {
              }
            }
          }
        } else {
          if (menu != null) {
            try {
              Destroy(menu);
            } catch (e) {
            }
            menu = null;
          }
        }
        if (menu == null) {
          if (reference != null) {
            try {
              Destroy(reference);
            } catch (e) {
            }
            reference = null;
          }
        } else {
          if (reference == null) {
            try {
              renderReference();
            } catch (e) {
              if (e.stack) {
              }
            }
          }
        }
        try {
          if (GunPointer != null) {
            if (!GunPointer.method("get_activeSelf").invoke()) {
              Destroy(GunPointer);
              GunPointer = null;
            } else
              GunPointer.method("SetActive").invoke(false);
          }
          let lineObj = GunLine.method("get_gameObject").invoke();
          if (lineObj != null) {
            if (!lineObj.method("get_activeSelf").invoke()) {
              Destroy(lineObj);
              GunLine = null;
            } else
              lineObj.method("SetActive").invoke(false);
          }
        } catch {
        }
        if (menuCanvas && !menuCanvas.isNull()) {
          try {
            const cc = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
            let mc = cc.method("get_main").invoke();
            if (mc && !mc.isNull())
              menuCanvas.method("set_worldCamera").invoke(mc);
          } catch (_) {
          }
        }
        buttons.flat().filter((b) => b.enabled).forEach((b) => {
          if (b.method) {
            try {
              b.method();
            } catch (e) {
              console.error(`[LateUpdate] Error in '${b.buttonText}':`, e);
            }
          }
        });
        this.method("LateUpdate").invoke();
      };
    } else {
    }
    console.log(`
                          _              
   _____  __   ___  _ __ | |_ ___  _ __  
  / _  / /  / _ | '_ | __/ _ | '_  
 |  __/>  <  | (_) | | | | || (_) | |_) |
  ___/_/_  ___/|_| |_|_____/| .__/ 
                                  |_|
        `);
  });
  Il2Cpp.perform(() => {
    try {
      let getUrlFromRequest2 = function(request) {
        if (!request || request.isNull())
          return "unknown";
        try {
          const stored = requestInfo.get(request.handle.toString());
          if (stored && stored.url)
            return stored.url;
        } catch (e) {
        }
        if (helpUrlAttribute) {
          try {
            const urlAttrFields = ["m_HelpURL", "helpURL", "m_Attribute", "attribute"];
            for (const fieldName of urlAttrFields) {
              try {
                const field = request.tryField(fieldName);
                if (field) {
                  const val = field.value;
                  if (val && !val.isNull()) {
                    try {
                      const urlField = val.tryField("m_Url");
                      if (urlField) {
                        const urlVal = urlField.value;
                        if (urlVal && !urlVal.isNull() && urlVal.content) {
                          return urlVal.content;
                        }
                      }
                    } catch (e) {
                    }
                    try {
                      const getUrlMethod = val.tryMethod("get_URL");
                      if (getUrlMethod && !getUrlMethod.virtualAddress.isNull()) {
                        const result = getUrlMethod.invoke();
                        if (result && !result.isNull() && result.content) {
                          return result.content;
                        }
                      }
                    } catch (e) {
                    }
                  }
                }
              } catch (e) {
              }
            }
          } catch (e) {
          }
        }
        const fieldNames = [
          "m_Uri",
          "uri",
          "url",
          "m_url",
          "_url",
          "m_Path",
          "path",
          "m_WebRequest",
          "webRequest",
          "m_Address",
          "address",
          "m_OriginalURL",
          "originalURL",
          "m_Url",
          "Url",
          "m_URL",
          "URL"
        ];
        for (const fieldName of fieldNames) {
          try {
            const field = request.tryField(fieldName);
            if (field) {
              const val = field.value;
              if (val && !val.isNull()) {
                if (val.content !== void 0) {
                  const content = val.content;
                  if (content && content.length > 0) {
                    if (content.includes("playfabapi.com") || content.includes("pythonanywhere.com") || content.startsWith("http://") || content.startsWith("https://")) {
                    }
                  }
                }
              }
            }
          } catch (e) {
          }
        }
        try {
          const method = request.tryMethod("get_url");
          if (method && !method.virtualAddress.isNull()) {
            const result = method.invoke();
            if (result && !result.isNull() && result.content) {
              return result.content;
            }
          }
        } catch (e) {
        }
        try {
          const handle = request.handle;
          for (let offset = 0; offset < 512; offset += 4) {
            try {
              const ptr = handle.add(offset).readPointer();
              if (!ptr.isNull()) {
                const str = ptr.readCString(256);
                if (str) {
                  if (str.includes("playfabapi.com") || str.includes("pythonanywhere.com") || str.startsWith("http://") || str.startsWith("https://")) {
                    const match = str.match(/https?:\/\/[^\s]+/);
                    if (match) {
                      return match[0];
                    }
                    return str;
                  }
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
        return "unknown";
      }, getMethod2 = function(request) {
        if (!request || request.isNull())
          return "UNKNOWN";
        try {
          const stored = requestInfo.get(request.handle.toString());
          if (stored && stored.method)
            return stored.method.toUpperCase();
        } catch (e) {
        }
        const methodFields = ["m_Method", "method", "_method", "m_HttpMethod", "httpMethod"];
        for (const fieldName of methodFields) {
          try {
            const field = request.tryField(fieldName);
            if (field) {
              const val = field.value;
              if (val && !val.isNull() && val.content) {
                return val.content.toUpperCase();
              }
            }
          } catch (e) {
          }
        }
        try {
          const method = request.tryMethod("get_method");
          if (method && !method.virtualAddress.isNull()) {
            const result = method.invoke();
            if (result && !result.isNull() && result.content) {
              return result.content.toUpperCase();
            }
          }
        } catch (e) {
        }
        try {
          const uploadField = request.tryField("m_UploadHandler") || request.tryField("uploadHandler");
          if (uploadField) {
            const upload = uploadField.value;
            if (upload && !upload.isNull()) {
              return "POST";
            }
          }
        } catch (e) {
        }
        return "GET";
      }, getRequestBody2 = function(uploadHandler) {
        if (!uploadHandler || uploadHandler.isNull())
          return null;
        try {
          const captured = uploadHandlerBody.get(uploadHandler.handle.toString());
          if (captured)
            return captured;
        } catch (e) {
        }
        try {
          const dataField = uploadHandler.tryField("m_Data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        try {
          const dataField = uploadHandler.tryField("data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        return null;
      }, getResponseBody2 = function(downloadHandler) {
        if (!downloadHandler || downloadHandler.isNull())
          return null;
        try {
          const getTextMethod = downloadHandler.tryMethod("get_text");
          if (getTextMethod && !getTextMethod.virtualAddress.isNull()) {
            const result = getTextMethod.invoke();
            if (result && !result.isNull()) {
              return result.content;
            }
          }
        } catch (e) {
        }
        try {
          const dataField = downloadHandler.tryField("m_Data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        return null;
      }, bytesToString2 = function(arr) {
        if (!arr || arr.isNull())
          return null;
        try {
          const n = arr.length;
          if (n === 0)
            return "";
          let s = "";
          for (let i = 0; i < n; i++) {
            const b = arr.get(i);
            s += String.fromCharCode(b);
          }
          return s;
        } catch (e) {
          return null;
        }
      }, getByteElementClass2 = function() {
        if (byteElementClass && !byteElementClass.isNull())
          return byteElementClass;
        const candidates = ["System.Private.CoreLib", "mscorlib", "System.Runtime", "netstandard"];
        for (const an of candidates) {
          try {
            const asm = Il2Cpp.domain.assembly(an);
            if (asm) {
              const k = asm.image.class("System.Byte");
              if (k) {
                byteElementClass = k;
                return k;
              }
            }
          } catch (e) {
          }
        }
        try {
          for (const asm of Il2Cpp.domain.assemblies) {
            try {
              const k = asm.image.class("System.Byte");
              if (k) {
                byteElementClass = k;
                return k;
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
        return null;
      }, strToBytes2 = function(str) {
        const cls = getByteElementClass2();
        if (!cls)
          throw new Error("could not resolve System.Byte class");
        const bytes = [];
        for (let i = 0; i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 255);
        return Il2Cpp.array(cls, bytes);
      }, newUploadHandlerFromString2 = function(str) {
        const klass = unityWebRequestModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const inst = klass.alloc();
        const array = strToBytes2(str);
        inst.method(".ctor", ["System.Byte[]"]).invoke(array);
        return inst;
      };
      var getUrlFromRequest = getUrlFromRequest2, getMethod = getMethod2, getRequestBody = getRequestBody2, getResponseBody = getResponseBody2, bytesToString = bytesToString2, getByteElementClass = getByteElementClass2, strToBytes = strToBytes2, newUploadHandlerFromString = newUploadHandlerFromString2;
      let helpUrlAttribute = null;
      try {
        const coreModule = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
        helpUrlAttribute = coreModule.class("UnityEngine.HelpURLAttribute");
      } catch (e) {
      }
      let unityWebRequestModule = null;
      let unityWebRequest = null;
      let downloadHandlerBuffer = null;
      try {
        unityWebRequestModule = Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image;
        unityWebRequest = unityWebRequestModule.class("UnityEngine.Networking.UnityWebRequest");
        downloadHandlerBuffer = unityWebRequestModule.class("UnityEngine.Networking.DownloadHandlerBuffer");
      } catch (e) {
      }
      if (!unityWebRequest || unityWebRequest.isNull())
        return;
      const requestData = /* @__PURE__ */ new Map();
      const requestInfo = /* @__PURE__ */ new Map();
      const uploadHandlerBody = /* @__PURE__ */ new Map();
      try {
        const setUrlMethod = unityWebRequest.tryMethod("set_url");
        if (setUrlMethod && !setUrlMethod.virtualAddress.isNull()) {
          setUrlMethod.implementation = function(urlVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.url = urlVal && !urlVal.isNull() ? urlVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("set_url").invoke(urlVal);
          };
        }
      } catch (e) {
      }
      try {
        const setMethodMethod = unityWebRequest.tryMethod("set_method");
        if (setMethodMethod && !setMethodMethod.virtualAddress.isNull()) {
          setMethodMethod.implementation = function(methodVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.method = methodVal && !methodVal.isNull() ? methodVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("set_method").invoke(methodVal);
          };
        }
      } catch (e) {
      }
      try {
        const internalSetUrl = unityWebRequest.tryMethod("InternalSetUrl");
        if (internalSetUrl && !internalSetUrl.virtualAddress.isNull()) {
          internalSetUrl.implementation = function(urlVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.url = urlVal && !urlVal.isNull() ? urlVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("InternalSetUrl").invoke(urlVal);
          };
        }
      } catch (e) {
      }
      const methodNames = ["GET", "POST", "PUT", "HEAD", "CREATE", "DELETE"];
      try {
        const setCustomMethod = unityWebRequest.tryMethod("SetCustomMethod");
        if (setCustomMethod && !setCustomMethod.virtualAddress.isNull()) {
          setCustomMethod.implementation = function(methodVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.method = methodVal && !methodVal.isNull() ? methodVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("SetCustomMethod").invoke(methodVal);
          };
        }
      } catch (e) {
      }
      try {
        const setMethodEnum = unityWebRequest.tryMethod("InternalSetMethod");
        if (setMethodEnum && !setMethodEnum.virtualAddress.isNull()) {
          setMethodEnum.implementation = function(type) {
            let resolved = null;
            try {
              let idx = parseInt(type.value, 10);
              if (Number.isInteger(idx) && idx >= 0 && idx < 3) {
                resolved = methodNames[idx];
              }
            } catch (e) {
            }
            if (resolved) {
              try {
                const key = this.handle.toString();
                let info = requestInfo.get(key) || {};
                info.method = resolved;
                requestInfo.set(key, info);
              } catch (e) {
              }
            }
            return this.method("InternalSetMethod").invoke(type);
          };
        }
      } catch (e) {
      }
      try {
        const uploadHandlerRawModule = unityWebRequestModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const ctor = uploadHandlerRawModule.method(".ctor", ["System.Byte[]"]);
        if (ctor && !ctor.virtualAddress.isNull()) {
          ctor.implementation = function(data) {
            try {
              const body = bytesToString2(data);
              if (body) {
                uploadHandlerBody.set(this.handle.toString(), body);
              }
            } catch (e) {
            }
            return this.method(".ctor", ["System.Byte[]"]).invoke(data);
          };
        }
      } catch (e) {
      }
      let byteElementClass = null;
      const downloadHandlerClass = unityWebRequestModule.class("UnityEngine.Networking.DownloadHandler");
      try {
        const gt = downloadHandlerClass.tryMethod("get_text");
        if (gt && !gt.virtualAddress.isNull()) {
          gt.implementation = function() {
            return this.method("get_text").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const gd = downloadHandlerClass.tryMethod("get_data");
        if (gd && !gd.virtualAddress.isNull()) {
          gd.implementation = function() {
            return this.method("get_data").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const sendMethod = unityWebRequest.tryMethod("SendWebRequest");
        if (sendMethod && !sendMethod.virtualAddress.isNull()) {
          sendMethod.implementation = function() {
            const url = getUrlFromRequest2(this);
            const method = getMethod2(this);
            let uploadHandler = null;
            let requestBody = null;
            try {
              const uploadField = this.tryField("m_UploadHandler") || this.tryField("uploadHandler");
              if (uploadField) {
                uploadHandler = uploadField.value;
                if (uploadHandler && !uploadHandler.isNull()) {
                  requestBody = getRequestBody2(uploadHandler);
                }
              }
            } catch (e) {
            }
            const requestId = this.handle.toString();
            requestData.set(requestId, {
              url,
              method,
              requestBody,
              startTime: Date.now()
            });
            return this.method("SendWebRequest").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const getResultMethod = unityWebRequest.tryMethod("get_result");
        if (getResultMethod && !getResultMethod.virtualAddress.isNull()) {
          getResultMethod.implementation = function() {
            const result = this.method("get_result").invoke();
            const requestId = this.handle.toString();
            const reqData = requestData.get(requestId);
            if (reqData) {
              requestData.delete(requestId);
              requestInfo.delete(requestId);
            }
            return result;
          };
        }
      } catch (e) {
      }
    } catch (e) {
    }
  }, "logger");
}
var libHookReady = false;
function tryHookLibil2cppFunction(functionName) {
  const libil2cpp = Process.findModuleByName("libil2cpp.so");
  if (!libil2cpp) {
    return;
  }
  const exportAddress = libil2cpp.findExportByName(functionName);
  if (!exportAddress) {
    return;
  }
  Interceptor.attach(exportAddress, {
    onEnter(args) {
      if (!hooksInstalled) {
        hooksInstalled = true;
        Hooks();
      }
    }
  });
  libHookReady = true;
}
(function waitForLib() {
  tryHookLibil2cppFunction(thngtohook);
  if (libHookReady)
    return;
  const t = setInterval(() => {
    if (libHookReady) {
      clearInterval(t);
      return;
    }
    tryHookLibil2cppFunction(thngtohook);
  }, 250);
})();

✄
{
  "version": 3,
  "sources": ["OGFMH.ts"],
  "mappings": "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",
  "names": ["AssemblyCSharp", "_", "getUrlFromRequest", "getMethod", "getRequestBody", "getResponseBody", "bytesToString", "getByteElementClass", "strToBytes", "newUploadHandlerFromString"]
}
