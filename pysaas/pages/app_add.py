import reflex as rx


def app_add() -> rx.Component:
    return rx.text(
        """greenadexchange.com, 12345, DIRECT, d75815a79
        silverssp.com, 9675, RESELLER, 496211
        blueadexchange.com, XF436, DIRECT
        orangeexchange.com, 45678, RESELLER
        silverssp.com, ABE679, RESELLER
        google.com, pub-4964849575236653, DIRECT, f08c47fec0942fa0"""
    )
