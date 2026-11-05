from app.main import greet


def test_greet() -> None:
    assert greet("Ada") == "Hello, Ada."


def test_greet_blank() -> None:
    assert greet("  ") == "Hello, world."
