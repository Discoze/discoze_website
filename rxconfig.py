import reflex as rx

config = rx.Config(
    app_name="pysaas",
    db_url="sqlite:///reflex.db",
    backend_port=8080,
    frontend_port=3030,
    env=rx.Env.DEV,
)
