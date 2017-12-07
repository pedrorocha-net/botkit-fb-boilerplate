module.exports = (controller) => {
  controller.api.messenger_profile.greeting("Hi, {{user_first_name}}, i'm your new bot!");
  controller.api.messenger_profile.get_started('PAYLOAD_START');

  const persistentMenu = [
    {
      title: 'Help',
      type: 'postback',
      payload: 'PAYLOAD_HELP',
    },
  ];

  controller.api.messenger_profile.menu([
    {
      locale: 'default',
      call_to_actions: persistentMenu,
    },
    {
      locale: 'en_US',
      call_to_actions: persistentMenu,
    },
  ]);
};
