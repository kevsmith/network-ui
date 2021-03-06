from django.conf.urls import url

from . import consumers

websocket_urlpatterns = [
    url(r'^ws/network_ui$', consumers.NetworkUIConsumer),
]

channel_patterns = {
    "hello": consumers.HelloConsumer,
    "ansible": consumers.AnsibleConsumer,
}
