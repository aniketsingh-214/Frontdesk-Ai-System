from datetime import datetime

def format_timestamp(ts):
    """Convert datetime to readable string"""
    if not ts:
        return None
    return ts.strftime("%Y-%m-%d %H:%M:%S")
