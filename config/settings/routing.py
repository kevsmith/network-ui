
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter, ChannelNameRouter
import network_ui_dev.routing


application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(network_ui_dev.routing.websocket_urlpatterns)
    ),

    'channel': ChannelNameRouter(
        network_ui_dev.routing.channel_patterns
    ),
})
