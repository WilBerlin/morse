CODE = {'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.','F':'..-.','G':'--.',
    'H':'....','I':'..','J':'.---','K':'-.-','L':'.-..','M':'--','N':'-.',
        'O':'---','P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-','U':'..-',
            'V':'...-','W':'.--','X':'-..-','Y':'-.--','Z':'--..',
                '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-',
                    '5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',
                        '.':'.-.-.-',
                            ',':'--..--',
                                '?':'..--..',
                                    '/':'--..-.',
                                        '@':'.--.-.',
                                            ' ':' ',
                                            }
                                            

def flash(tempo: number):
    basic.show_leds("""
        . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
    """)
    basic.pause(tempo)
    basic.clear_screen()
txt = "A"
code = 0
basic.show_string(convert_to_text(code))

def on_forever():
    pass
basic.forever(on_forever)
