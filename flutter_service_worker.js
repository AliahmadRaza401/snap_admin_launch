'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4955ec507fa1dbd18879f8224d45ce6c",
"assets/AssetManifest.bin.json": "75cc5370bf0aeb91c4dfc287a5025447",
"assets/AssetManifest.json": "5a85e53cf7974b738f14df7e2c47f974",
"assets/assets/approval.png": "2c504af922afa83e2f7e002a152f2165",
"assets/assets/app_icon%2520copy%25202.png": "10b93a1a1cf3ccadaddecfc1fc5cfd54",
"assets/assets/app_icon%2520copy.png": "10b93a1a1cf3ccadaddecfc1fc5cfd54",
"assets/assets/app_icon.png": "10b93a1a1cf3ccadaddecfc1fc5cfd54",
"assets/assets/app_logo_snap_mug_no_bg%2520copy%25202.png": "418e33093e7e92ba81aa553d04100dde",
"assets/assets/app_logo_snap_mug_no_bg%2520copy.png": "418e33093e7e92ba81aa553d04100dde",
"assets/assets/app_logo_snap_mug_no_bg.png": "418e33093e7e92ba81aa553d04100dde",
"assets/assets/app_logo_snap_mug_no_bg_cropped%2520copy%25202.png": "25f2400c11fa936702376fa877c9a667",
"assets/assets/app_logo_snap_mug_no_bg_cropped%2520copy.png": "25f2400c11fa936702376fa877c9a667",
"assets/assets/app_logo_snap_mug_no_bg_cropped.png": "25f2400c11fa936702376fa877c9a667",
"assets/assets/audio-svgrepo-com%2520copy.png": "9701e3b96ada03471e070b70d134c533",
"assets/assets/audio-svgrepo-com.png": "9701e3b96ada03471e070b70d134c533",
"assets/assets/background.png": "1d3e6598f39d25f6121f763c7f37ac34",
"assets/assets/baseline_person_2_24%2520copy%25202.xml": "577fab10d304fb58ea1715186a555742",
"assets/assets/baseline_person_2_24%2520copy.xml": "577fab10d304fb58ea1715186a555742",
"assets/assets/baseline_person_2_24.xml": "577fab10d304fb58ea1715186a555742",
"assets/assets/boat-9-512%2520(2)%2520copy.png": "aa4f9e550ef2fe03a832688b30570a5d",
"assets/assets/boat-9-512%2520(2).png": "aa4f9e550ef2fe03a832688b30570a5d",
"assets/assets/boat-9-512%2520copy.png": "18c1fbc5924faee2e618970ce2db5cae",
"assets/assets/boat-9-512.png": "18c1fbc5924faee2e618970ce2db5cae",
"assets/assets/calendar-date-time-2-svgrepo-com%2520copy.png": "821702eb2e01897ec914a147b770cae1",
"assets/assets/calendar-date-time-2-svgrepo-com.png": "821702eb2e01897ec914a147b770cae1",
"assets/assets/car-25-512%2520(1)%2520copy.png": "46beea46327a8856295b472d9d410ebe",
"assets/assets/car-25-512%2520(1).png": "46beea46327a8856295b472d9d410ebe",
"assets/assets/car-25-512%2520copy.png": "7ec6b64d1d8e65bc63795d3aba3f994d",
"assets/assets/car-25-512.png": "7ec6b64d1d8e65bc63795d3aba3f994d",
"assets/assets/controller_background%2520copy%25202.xml": "17c7aaf1a5c8883beb0882336586fa35",
"assets/assets/controller_background%2520copy.xml": "17c7aaf1a5c8883beb0882336586fa35",
"assets/assets/controller_background.xml": "17c7aaf1a5c8883beb0882336586fa35",
"assets/assets/controll_btn_background%2520copy%25202.xml": "bba5383abe63ef93b2a550009ea05414",
"assets/assets/controll_btn_background%2520copy.xml": "bba5383abe63ef93b2a550009ea05414",
"assets/assets/controll_btn_background.xml": "bba5383abe63ef93b2a550009ea05414",
"assets/assets/country_drop.png": "f64820f2c77416f3ea2b1e006ef587fe",
"assets/assets/distributer.png": "ecefe70457eed6328b6945f516a36003",
"assets/assets/edit_prof_icon.png": "1d87bfce4023859b474916b5fbbed8a7",
"assets/assets/email.png": "65c15c6bfdc0a935732667b5d70398ed",
"assets/assets/facebook%2520copy%25202.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/facebook%2520copy.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/facebook-1924510_1280%2520copy.png": "6a2cd7820356c1b6875c426516776f7a",
"assets/assets/facebook-1924510_1280.png": "6a2cd7820356c1b6875c426516776f7a",
"assets/assets/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/fire-2-512%2520copy.png": "8d7870102fc6d4cc6283925ca31137f7",
"assets/assets/fire-2-512.png": "8d7870102fc6d4cc6283925ca31137f7",
"assets/assets/fire_icon.png": "93ac6261acf631ac2d0372619abcc852",
"assets/assets/gnt_outline_shape%2520copy%25202.xml": "e0bf27824709dc184715f66f45d96392",
"assets/assets/gnt_outline_shape%2520copy.xml": "e0bf27824709dc184715f66f45d96392",
"assets/assets/gnt_outline_shape.xml": "e0bf27824709dc184715f66f45d96392",
"assets/assets/gnt_rounded_corners_shape%2520copy%25202.xml": "4f182cebae6171b213cd7366a13b4480",
"assets/assets/gnt_rounded_corners_shape%2520copy.xml": "4f182cebae6171b213cd7366a13b4480",
"assets/assets/gnt_rounded_corners_shape.xml": "4f182cebae6171b213cd7366a13b4480",
"assets/assets/icons8-music-record-94%2520copy.png": "f6f7f25d6e53d8faf2827df99378043f",
"assets/assets/icons8-music-record-94.png": "f6f7f25d6e53d8faf2827df99378043f",
"assets/assets/ic_album%2520copy%25202.xml": "f7d8dba0e224cb955bdea0fda3d46aa0",
"assets/assets/ic_album%2520copy.xml": "f7d8dba0e224cb955bdea0fda3d46aa0",
"assets/assets/ic_album.xml": "f7d8dba0e224cb955bdea0fda3d46aa0",
"assets/assets/ic_google%2520copy%25202.jpg": "ccb60ed255664621827a620823c5cb9b",
"assets/assets/ic_google%2520copy%25202.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/ic_google%2520copy%25202.xml": "98857bf2d6ecd3764a21f35be51e9e09",
"assets/assets/ic_google%2520copy.jpg": "ccb60ed255664621827a620823c5cb9b",
"assets/assets/ic_google%2520copy.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/ic_google%2520copy.xml": "98857bf2d6ecd3764a21f35be51e9e09",
"assets/assets/ic_google.jpg": "ccb60ed255664621827a620823c5cb9b",
"assets/assets/ic_google.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/ic_google.xml": "98857bf2d6ecd3764a21f35be51e9e09",
"assets/assets/ic_launcher_background%2520copy%25202.xml": "fe3b3d149929ff904240fcdd8da99005",
"assets/assets/ic_launcher_background%2520copy.xml": "fe3b3d149929ff904240fcdd8da99005",
"assets/assets/ic_launcher_background.xml": "fe3b3d149929ff904240fcdd8da99005",
"assets/assets/ic_launcher_foreground%2520copy%25202.xml": "243714dab6aaa5bee788d787804fd9c5",
"assets/assets/ic_launcher_foreground%2520copy.xml": "243714dab6aaa5bee788d787804fd9c5",
"assets/assets/ic_launcher_foreground.xml": "243714dab6aaa5bee788d787804fd9c5",
"assets/assets/ic_music_node%2520copy%25202.xml": "1d329eced54653f98bea021a502c4f77",
"assets/assets/ic_music_node%2520copy.xml": "1d329eced54653f98bea021a502c4f77",
"assets/assets/ic_music_node.xml": "1d329eced54653f98bea021a502c4f77",
"assets/assets/ic_pause%2520copy%25202.xml": "9a19febace7481aaa5891964e6574a4a",
"assets/assets/ic_pause%2520copy.xml": "9a19febace7481aaa5891964e6574a4a",
"assets/assets/ic_pause.xml": "9a19febace7481aaa5891964e6574a4a",
"assets/assets/ic_play%2520copy%25202.xml": "1d9a5daea6a6f1dd6d59652a816f2209",
"assets/assets/ic_play%2520copy.xml": "1d9a5daea6a6f1dd6d59652a816f2209",
"assets/assets/ic_play.xml": "1d9a5daea6a6f1dd6d59652a816f2209",
"assets/assets/ic_repeat%2520copy%25202.xml": "def0015589ca4a0edff678b72179bc5a",
"assets/assets/ic_repeat%2520copy.xml": "def0015589ca4a0edff678b72179bc5a",
"assets/assets/ic_repeat.xml": "def0015589ca4a0edff678b72179bc5a",
"assets/assets/ic_shuffle%2520copy%25202.xml": "a367e79180205f9bcdeccca007f0f537",
"assets/assets/ic_shuffle%2520copy.xml": "a367e79180205f9bcdeccca007f0f537",
"assets/assets/ic_shuffle.xml": "a367e79180205f9bcdeccca007f0f537",
"assets/assets/ic_skip_next%2520copy%25202.xml": "21c039bd82616e5ca90c5160f10901ae",
"assets/assets/ic_skip_next%2520copy.xml": "21c039bd82616e5ca90c5160f10901ae",
"assets/assets/ic_skip_next.xml": "21c039bd82616e5ca90c5160f10901ae",
"assets/assets/ic_skip_previous%2520copy%25202.xml": "14faa7f60f1dec6d88f844fbc59ab29f",
"assets/assets/ic_skip_previous%2520copy.xml": "14faa7f60f1dec6d88f844fbc59ab29f",
"assets/assets/ic_skip_previous.xml": "14faa7f60f1dec6d88f844fbc59ab29f",
"assets/assets/in-love-512%2520copy.png": "9fcd529714a1bccee2583d8b3391ad71",
"assets/assets/in-love-512.png": "9fcd529714a1bccee2583d8b3391ad71",
"assets/assets/instagram%2520copy%25202.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/instagram%2520copy.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/instagram-3814080_1280%2520copy.png": "6850d536baefd13a9f84ed5ac423a14b",
"assets/assets/instagram-3814080_1280.png": "6850d536baefd13a9f84ed5ac423a14b",
"assets/assets/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/logo.png": "d47ec8bc981ef3ab6d3e0ae5e0a82410",
"assets/assets/logout.png": "a4c324982d3ecd4ca90f70fb57cc2b76",
"assets/assets/menu_background_dark%2520copy%25202.xml": "d78be33bd752835f9cf9837d8d894d8f",
"assets/assets/menu_background_dark%2520copy.xml": "d78be33bd752835f9cf9837d8d894d8f",
"assets/assets/menu_background_dark.xml": "d78be33bd752835f9cf9837d8d894d8f",
"assets/assets/mixer-music-6-svgrepo-com%2520copy.png": "dc3e6d7b0f0ea3883d2ae5b7b763d340",
"assets/assets/mixer-music-6-svgrepo-com.png": "dc3e6d7b0f0ea3883d2ae5b7b763d340",
"assets/assets/mobile.png": "67498f2c2b321cb804c04c302236559c",
"assets/assets/money.png": "8ae0aff438c1f2a5c36b2124b0919ec7",
"assets/assets/mtn-mobile-logo-icon%2520copy.png": "23f0c22fc0a99699eff11d5ab6dc7c12",
"assets/assets/mtn-mobile-logo-icon.png": "23f0c22fc0a99699eff11d5ab6dc7c12",
"assets/assets/musician-svgrepo-com%2520copy.png": "6285c2b88a82822cb01c456d7db0dad3",
"assets/assets/musician-svgrepo-com.png": "6285c2b88a82822cb01c456d7db0dad3",
"assets/assets/notii%2520copy.png": "f70b768da94e296cc1e639b3da02d2d7",
"assets/assets/notii.png": "f70b768da94e296cc1e639b3da02d2d7",
"assets/assets/noun-fire-6639941%2520copy.png": "67518a7716156069eabf6ba73b94eaa7",
"assets/assets/noun-fire-6639941.png": "67518a7716156069eabf6ba73b94eaa7",
"assets/assets/noun-menu-4748399%2520copy.png": "bde4481a5bf691ffcabc11fe4005c565",
"assets/assets/noun-menu-4748399.png": "bde4481a5bf691ffcabc11fe4005c565",
"assets/assets/noun-money-bag-icon-2004052%2520copy.png": "fa9f1e5dc221c76375b17d07abefe962",
"assets/assets/noun-money-bag-icon-2004052.png": "fa9f1e5dc221c76375b17d07abefe962",
"assets/assets/noun-multimedia-6419441%2520copy.png": "1cad46a5049c8315bf2aee1e67c0d8dd",
"assets/assets/noun-multimedia-6419441.png": "1cad46a5049c8315bf2aee1e67c0d8dd",
"assets/assets/noun-musician-750606.png": "e629ea876d929b315937e1a1ff94bd32",
"assets/assets/noun-notification-bell-6486567.png": "f70b768da94e296cc1e639b3da02d2d7",
"assets/assets/noun-promotion-6769667%2520copy.png": "cf912c6cb9864ffcbe1d0174d48787eb",
"assets/assets/noun-promotion-6769667.png": "cf912c6cb9864ffcbe1d0174d48787eb",
"assets/assets/noun-search-bar-6219244%2520copy.png": "fa24e0fb1099e4dc3b9141f8780359f8",
"assets/assets/noun-search-bar-6219244.png": "fa24e0fb1099e4dc3b9141f8780359f8",
"assets/assets/noun-upload-6840889%2520copy.png": "65ab5a87957ccc51570a69efb408c0dd",
"assets/assets/noun-upload-6840889.png": "65ab5a87957ccc51570a69efb408c0dd",
"assets/assets/noun-users-6329590.png": "cd9e2c94b6ee652efcf74cb5f26dde90",
"assets/assets/noun-withdraw-6556064%2520copy.png": "dc6f95a37cbf240f1f780d9157ccb568",
"assets/assets/noun-withdraw-6556064.png": "dc6f95a37cbf240f1f780d9157ccb568",
"assets/assets/oval_logo.png": "73b4383ccaa6ae29d551f8135c1d4721",
"assets/assets/paypal-784404_1280%2520copy.png": "0ec8f883a5070e69ca78e2a3ac65be90",
"assets/assets/paypal-784404_1280.png": "0ec8f883a5070e69ca78e2a3ac65be90",
"assets/assets/PinClipart.com_clip-art-2010_1162739%2520copy.png": "e5a19679c382c3f079e4cc08e64adc49",
"assets/assets/PinClipart.com_clip-art-2010_1162739.png": "e5a19679c382c3f079e4cc08e64adc49",
"assets/assets/plus-5-512%2520copy.png": "f6070e851a6405b81c4725c84033f31f",
"assets/assets/plus-5-512.png": "f6070e851a6405b81c4725c84033f31f",
"assets/assets/repeat_one_on%2520copy%25202.xml": "8a9f0c788fa6225d6e9eeed70119480d",
"assets/assets/repeat_one_on%2520copy.xml": "8a9f0c788fa6225d6e9eeed70119480d",
"assets/assets/repeat_one_on.xml": "8a9f0c788fa6225d6e9eeed70119480d",
"assets/assets/rocket-512%2520copy.png": "b3c4dd8257f72a45eff5563f219417f7",
"assets/assets/rocket-512.png": "067a396bca4df4a9148cdccee6732d6a",
"assets/assets/round_arrow_back_24%2520copy%25202.xml": "5943a74e44aa195ce89bc56a0b6dbe6f",
"assets/assets/round_arrow_back_24%2520copy.xml": "5943a74e44aa195ce89bc56a0b6dbe6f",
"assets/assets/round_arrow_back_24.xml": "5943a74e44aa195ce89bc56a0b6dbe6f",
"assets/assets/round_arrow_forward_24%2520copy%25202.xml": "63d4568f52f77c4585ea373a4f442dd9",
"assets/assets/round_arrow_forward_24%2520copy.xml": "63d4568f52f77c4585ea373a4f442dd9",
"assets/assets/round_arrow_forward_24.xml": "63d4568f52f77c4585ea373a4f442dd9",
"assets/assets/round_attach_money_24%2520copy%25202.xml": "4061aa0ffeae03cd47473971ff0a21f7",
"assets/assets/round_attach_money_24%2520copy.xml": "4061aa0ffeae03cd47473971ff0a21f7",
"assets/assets/round_attach_money_24.xml": "4061aa0ffeae03cd47473971ff0a21f7",
"assets/assets/round_delete_forever_24%2520copy%25202.xml": "8e61f1b9828eed8cc13ad0f1e79f21a7",
"assets/assets/round_delete_forever_24%2520copy.xml": "8e61f1b9828eed8cc13ad0f1e79f21a7",
"assets/assets/round_delete_forever_24.xml": "8e61f1b9828eed8cc13ad0f1e79f21a7",
"assets/assets/round_history_24%2520copy%25202.xml": "4a466bfeca14ef2d484af3061c63abad",
"assets/assets/round_history_24%2520copy.xml": "4a466bfeca14ef2d484af3061c63abad",
"assets/assets/round_history_24.xml": "4a466bfeca14ef2d484af3061c63abad",
"assets/assets/round_logout_24%2520copy%25202.xml": "cd7e5399f437e359b9bd9cab3e171708",
"assets/assets/round_logout_24%2520copy.xml": "cd7e5399f437e359b9bd9cab3e171708",
"assets/assets/round_logout_24.xml": "cd7e5399f437e359b9bd9cab3e171708",
"assets/assets/round_money_24%2520copy%25202.xml": "0c241045cd003ecad1dbf37a8dc731e6",
"assets/assets/round_money_24%2520copy.xml": "0c241045cd003ecad1dbf37a8dc731e6",
"assets/assets/round_money_24.xml": "0c241045cd003ecad1dbf37a8dc731e6",
"assets/assets/round_more_vert_24%2520copy%25202.xml": "0d470c7f3ec06e97fecc48d2e8d79482",
"assets/assets/round_more_vert_24%2520copy.xml": "0d470c7f3ec06e97fecc48d2e8d79482",
"assets/assets/round_more_vert_24.xml": "0d470c7f3ec06e97fecc48d2e8d79482",
"assets/assets/round_repeat_24%2520copy%25202.xml": "2152e0f906960b1ddf7d0d2e345fafe9",
"assets/assets/round_repeat_24%2520copy.xml": "2152e0f906960b1ddf7d0d2e345fafe9",
"assets/assets/round_repeat_24.xml": "2152e0f906960b1ddf7d0d2e345fafe9",
"assets/assets/round_repeat_on_24%2520copy%25202.xml": "eac50219e3755320aad01f82b9d8c1ee",
"assets/assets/round_repeat_on_24%2520copy.xml": "eac50219e3755320aad01f82b9d8c1ee",
"assets/assets/round_repeat_on_24.xml": "eac50219e3755320aad01f82b9d8c1ee",
"assets/assets/round_settings_24%2520copy%25202.xml": "5a0455f8420195682f5c05b91d105c99",
"assets/assets/round_settings_24%2520copy.xml": "5a0455f8420195682f5c05b91d105c99",
"assets/assets/round_settings_24.xml": "5a0455f8420195682f5c05b91d105c99",
"assets/assets/round_shuffle_on_24%2520copy%25202.xml": "7eb2b18d0b14355095e5c2f8f4d0fd5d",
"assets/assets/round_shuffle_on_24%2520copy.xml": "7eb2b18d0b14355095e5c2f8f4d0fd5d",
"assets/assets/round_shuffle_on_24.xml": "7eb2b18d0b14355095e5c2f8f4d0fd5d",
"assets/assets/search-2-512%2520copy.png": "6d2d7855afc705f3aafe769ccb9d6e59",
"assets/assets/search-2-512.png": "6d2d7855afc705f3aafe769ccb9d6e59",
"assets/assets/settings-25-512%2520copy.png": "85d8792eda75035d05f3054b820258e9",
"assets/assets/settings-25-512.png": "85d8792eda75035d05f3054b820258e9",
"assets/assets/sharp_edit_24%2520copy%25202.xml": "b344be060fef151ac32b2546666a259b",
"assets/assets/sharp_edit_24%2520copy.xml": "b344be060fef151ac32b2546666a259b",
"assets/assets/sharp_edit_24.xml": "b344be060fef151ac32b2546666a259b",
"assets/assets/sharp_local_fire_department_24%2520copy%25202.xml": "d70082c104eb0228c01579cdca0b05d9",
"assets/assets/sharp_local_fire_department_24%2520copy.xml": "d70082c104eb0228c01579cdca0b05d9",
"assets/assets/sharp_local_fire_department_24.xml": "d70082c104eb0228c01579cdca0b05d9",
"assets/assets/social-3434840_1280%2520copy.png": "fbf5c101680bba2bb610fdcb7010e518",
"assets/assets/social-3434840_1280.png": "fbf5c101680bba2bb610fdcb7010e518",
"assets/assets/splash.png": "a044a4d685744f56007d162cf713d76d",
"assets/assets/splash_icon%2520copy%25202.xml": "93f557b5840f134a0faed01076aaa9da",
"assets/assets/splash_icon%2520copy.xml": "93f557b5840f134a0faed01076aaa9da",
"assets/assets/splash_icon.xml": "93f557b5840f134a0faed01076aaa9da",
"assets/assets/splash_icon_full_size%2520copy%25202.png": "d286d8695408ded388212fe51fde0f7c",
"assets/assets/splash_icon_full_size%2520copy.png": "d286d8695408ded388212fe51fde0f7c",
"assets/assets/splash_icon_full_size.png": "d286d8695408ded388212fe51fde0f7c",
"assets/assets/splash_icon_no_bg%2520copy%25202.png": "35ce5e834d53a8d20fe5cc803d3b0c35",
"assets/assets/splash_icon_no_bg%2520copy.png": "35ce5e834d53a8d20fe5cc803d3b0c35",
"assets/assets/splash_icon_no_bg.png": "35ce5e834d53a8d20fe5cc803d3b0c35",
"assets/assets/tiktok%2520copy%25202.png": "f6d4517e1cc1297564ab25b01415835b",
"assets/assets/tiktok%2520copy.png": "f6d4517e1cc1297564ab25b01415835b",
"assets/assets/tiktok-6338429_1280%2520copy.png": "d0976a29f328fb30eac456a1e3c4304f",
"assets/assets/tiktok-6338429_1280.png": "d0976a29f328fb30eac456a1e3c4304f",
"assets/assets/tiktok.png": "f6d4517e1cc1297564ab25b01415835b",
"assets/assets/trash.png": "4a3d0f6cc21f53f812813297e4f1379b",
"assets/assets/verify_artist.png": "5da1610a5ef897685e52f32f1eb9e7c2",
"assets/assets/visa-6850402_1280%2520copy.png": "418c5c4abb41a5b2934a7140f7ac464c",
"assets/assets/visa-6850402_1280.png": "418c5c4abb41a5b2934a7140f7ac464c",
"assets/assets/worldwide-global-svgrepo-com%2520copy.png": "4203f5e37012b6abdd1644993eda9935",
"assets/assets/worldwide-global-svgrepo-com.png": "4203f5e37012b6abdd1644993eda9935",
"assets/assets/writing-hand-skin-5-svgrepo-com%2520copy.png": "04b5e5327ce0226ecae65eec3fbee058",
"assets/assets/writing-hand-skin-5-svgrepo-com.png": "04b5e5327ce0226ecae65eec3fbee058",
"assets/assets/youtube%2520copy%25202.png": "ec1efab49c24be248d8ee984df407508",
"assets/assets/youtube%2520copy.png": "ec1efab49c24be248d8ee984df407508",
"assets/assets/youtube.png": "ec1efab49c24be248d8ee984df407508",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7c7e3f9dae3b9eb32017e06e5449eaca",
"assets/NOTICES": "fc74e1880b8a201cb765bfd754f7b1e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "44b933bd5ba6cf9606e627b8775bd419",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82b5cd2efd782cac77240e94d95d0926",
"/": "82b5cd2efd782cac77240e94d95d0926",
"main.dart.js": "d8ef6298db8d83972a34cd70d6a41ca6",
"manifest.json": "2d2b073ae11ff84dd3500bf3b16a5fce",
"version.json": "2b4241569898a7267cdc40833103c46e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
