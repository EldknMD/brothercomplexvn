GS.dataCache['4894A0C041F9D441FC8B4BB2670E7FE46F7F'] = {
    "uid": "4894A0C041F9D441FC8B4BB2670E7FE46F7F",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Vestidores de chicas",
        "type": "vn.scene",
        "parentId": "46C936D6411C874C713BCAB76EDA3BF00B4E",
        "chapterUid": "46C936D6411C874C713BCAB76EDA3BF00B4E",
        "order": 15,
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "lockers ajustado",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "BB483BD14443D64E933A2E273F57F58900B7",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Playful_-_Kidding_Around",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "9224E6C789AF614622791564E4C5D61B668B",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "zOrder": 500,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 800,
                        "y": 50
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    }
                },
                "uid": "D006387535BC374DB26B3DC2A2987553CC59",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "776741152778974A888891389637A3559663",
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "zOrder": 500,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 0,
                        "y": 200
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    }
                },
                "uid": "BC521AA49F5066464E3A96C245F2A4D309F1",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "FFF2E27613BF6446781BD733A73C6390A396",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6CC26AAF3230104E8F5BA6A31C61EF5BCAD5",
                        "defaultText": "That was quite the nice atmosphere you two had!"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "F38EC592110C6344332B7592FCE514504FD9",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "2F57AD243275C54B1E5A074208304093E3B5",
                        "defaultText": "Uh?"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "106FDEE430A51549B81AF535A56D8C14827B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "910D9EAB97E831488248240595BEF34F2F36",
                        "defaultText": "Aaaaa! It's not like that!"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "118FB76459498143D89849B88F56F30B59B7",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "E475933D87F02749E77A77815CD579CABD25",
                        "defaultText": "R-really..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "764CE3E623F071454A29E612251761D15E03",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "397DA52289D0A749FD59C3C8B56767B1D796",
                        "defaultText": "Ugh, no! He's just a friend! That's all..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D5D718CC6A8B364C4A3A2F04A88A3A1DA5A1",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "C06F83A7506B634F968BC65664CB4074D594",
                        "defaultText": "Aww... That's a real shame."
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "646360571BB9C24B1A39D41668F4027248D5",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "86709A64677146458E8B0739E9514D233A17",
                        "defaultText": "You know, you two look soooo cute together!"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "71B24E0298467943BD2B31529F588B68855F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "C6F2CCF042100247203B2AB61E9C389C1596",
                        "defaultText": "Wh- what are you talking about?"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "6C01D34663351842F2782B37FA2C5D40B96E",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B2D9F48E5E27B0459A5BF508384B95E024E5",
                        "defaultText": "Besides..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "1C9BD3E87FB0624C9A290C93052CBCD31CB0",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A1EADA8F245EA64131393E733E6A694A5CE3",
                        "defaultText": "There is that sister of his."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "8AD652507683324B933A5845D9C8C3A6AFC0",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "A2BFD66318876941F89BC748131AA81F66FD",
                        "defaultText": "Y-yeah. "
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "87B486C485B9B3489B4B57732CE06CC5128B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "DF36F0E1634840458A88B57568AED04CBD9F",
                        "defaultText": "He's just some dirty siscon..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "F708AE5448E3A94A665B762407E668E10CB0",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "3BF367D776B7874D136AAFE2F12F7313D484",
                        "defaultText": "So, she's really his little sister, huh? <3"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "DC64B5341A5D75455F7946E2B73F862EF415",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "9600C3C526E835424F4909E300FEC1881C50",
                        "defaultText": "AH!! She's here!!"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "54BD794573C4524BB91ACD816EBAEE5A4484",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "10A6B62B0BE4E849C70B95165EB373E2B92A",
                        "defaultText": "Think she'll notice me?"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "23F7FD8162CC9942724BCB27F2C4B903C968",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "81C4189A62BF0541B36B6285CAE4D745630A",
                        "defaultText": "Oh god..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B5A6AD226CDB5442FD8A44058E89ACA98C9D",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "8869B0234349C2426D499493503B84B52F87",
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 250,
                        "y": 0
                    },
                    "animation": {
                        "type": 0,
                        "movement": 2,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 120,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    }
                },
                "uid": "528F0BF8462F884329696BA7B477704EF501",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "483B3DCA1DD78449596A1416C8419D64BB1A",
                        "defaultText": "Ah... Hi Megan."
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "72BE85D91E63254B6909FE9376C27718F1A2",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "022953E776E14141355A85858A0E37C5AE7C",
                        "defaultText": "Haaaa... <3"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "25388B5F0AB9D24448194AC188D0B82040E8",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8423A3B799DC714A112964C47008EBDC936E",
                        "defaultText": "Think Jack will be watching?"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "1563C29B88146840F55B7BD7FEFA79516A48",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "EE61B0E43195C24A8948B15536E107E05754",
                        "defaultText": "Sorry, Khaty, but that's how it is..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E6AAF1664412D749FD288F42305524FA8565",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6AAB002936B58443927A705295954207B561",
                        "defaultText": "Eh!? But?!"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "7EBF5741355FD146733B89030919BFC84407",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "9BCCB6331791C343D549F11689151B106952",
                        "defaultText": "*Starts changing her clother*"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "15E213FD0F396840B0799C57F6A25B060226",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "E24A88A429784947C85A7972391E1EBDE787",
                        "defaultText": "Khaty, right?"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "80EA71FD3EC89946ED6A03620FC11D1E7CC9",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "9271A293265BC84E575BF927F9DFFC348C08",
                        "defaultText": "Eh?"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D25D3B7893B82847AA792CD7E4E8023BDBBB",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "94B7FB5C8856334D6A28C523B46850C77F32",
                        "defaultText": "Yeah. She's Khaty."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "08ADA314218AE146031959A859FCA148C29F",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B9CFB3FA414C834CCC1AFFF289ACE050DA30",
                        "defaultText": "We're all in the same class."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3463A697501B1542163A8E97A4594C4C22EC",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "114645DA2719394FE74A79F386DC7A995B39",
                        "defaultText": "I-it's nice to meet you."
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "51D98E6C166A2647F718E29521D1B5349FFE",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "3C752D4023E0B2405528190243599DD87028",
                        "defaultText": "You're Jack's lit... hum... sister, right?"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "8247DE4228591449ED9824A58BA3D9509F3C",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterChangeExpression",
                "params": {
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "fading": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "duration": 30,
                    "waitForCompletion": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "E33B497B5E3FA740798937662ACAFB181ECF",
                "indent": 0
            },
            {
                "id": "vn.RotateCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 6,
                    "waitForCompletion": 0,
                    "speed": 200,
                    "direction": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "989E265B571651473D1B595533048F37A90C",
                "indent": 0
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "predefinedPositionId": 0,
                    "duration": 30,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 400,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 1
                    }
                },
                "uid": "B9ABC44D75E8C64F6D5AD926A7027C09FFD3",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8E144FE38C0F0145C75BA5A74168423A6ACE",
                        "defaultText": "We look cute together, RIGHT?"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "F92D2ACA4FE61249F6191554F0952DE72E20",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "7F4846FB6DBE3548EC495174FBDDEBA110F8",
                        "defaultText": "°3°"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E95BD67622D8444A155AD605FE55BDDFA9DD",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "F398E01161BCF54E2C4AE5B7D145CCC55C41",
                        "defaultText": "Think we are a match for each other?"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CA52F4F7883F12447089530880EFD8E35077",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "7DEBDE4C40864844391BB0094BE16E0EC471",
                        "defaultText": "Think he will start noticin me soon? <3"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "ED0B14157DE6574D4C48A3242DF4C03340C4",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "0DBDDA044ECC134DEF481D52C608FF253B18",
                        "defaultText": "°3°"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CE816C1B54EB6841A77B249242E5F1FBED3B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "DC6992BB8603D44C3C3BDF12507F5F1A910B",
                        "defaultText": "He's just so cool, don't you agree?"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3EF460B98D489549A309EDA35D778404DD94",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "48E8CB5C60F50646B8590DB8A180E926C14F",
                        "defaultText": "Sorry... What were you just saying...?"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D42CB8E17AB6D04B56698949D8C733248390",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "expressionId": "F01A3B7466424641365A53F18171DB2B122F",
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "9A660E6A5AD18140ED7B5A887A589FE0019A",
                        "defaultText": "?"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B3231D5821BB24442398A6318AB84F677836",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.TintScreen",
                "params": {
                    "tone": {
                        "red": -255,
                        "green": -255,
                        "blue": -255,
                        "grey": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "1A428B468D43E546E28984E5908D9172DE42",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "9698CDFE48E7664164197B13BAB7BBC8CFF1",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Gym_Morning",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F14448895D7F9745EB2866C41788F5524256"
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "predefinedPositionId": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 500,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "4918BB435CF0A241954A7757229F6379FD9F",
                "indent": 0
            },
            {
                "id": "gs.TintScreen",
                "params": {
                    "tone": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "grey": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "0373DC70213A064E9189CF97F64FE5580549",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "EBA10FAB955B8047537974B619676C42E51A",
                        "defaultText": "Jack's adopted, you know."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "4A5679E56B74D946868BB1324CE5F07E1AD7",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "65A83DA40247C8438538A0F1C822B331CCC4",
                        "defaultText": "It's not like they're related by blood."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "85D0EAC6413D6646F80A5A62B0E15820C6F2",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "EDC59C5740E5F24AB86B18B57C796A14EB6E",
                        "defaultText": "Oh! So that's what is like."
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "5ACCB0C800FDF1455769DC02A7BF278B2DD5",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "E3B5B1B056B8B845393B9DC18229A7D96E28",
                        "defaultText": "Yeah..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "2D87B8324678974AD8088CE79A065DCA8BF9",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "79DB67546579054B48994CF892203B5F6744",
                        "defaultText": "And if you haven't noticed,"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "512647284319A741312884B3138079324410",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "0367837D29CA75496A682642A42B2D9288BB",
                        "defaultText": "She's kind of fond of him..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "3BE093BC2526D8418A7A0602D9C1319F7F15",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "49C5683F3602244C2C6B8984D04BDA78894C",
                        "defaultText": "I get it..."
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "D91F9CB03AB10345708BB7468FFBEDB9F697",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "FE6B7F8A357EC24C96598F1455C191743061",
                        "defaultText": "And they even live in the same house, so she must easily..."
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CC20C0968CCEF148A74914B4228EBFFBB108",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "48FB4A1C858D4147189B5C859C1E3DFD13A7",
                        "defaultText": "HE must have done something to her!"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "83C437C47C00134C3D6A8E91C41D2C7F4A47",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "F6E2654485DC7243A2798C36AB9F7D8B4213",
                        "defaultText": "The fiend! "
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "16DAB1B84F2BA74B1988DA13D3DAB120C3E5",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "059B72B320F8E742CA3BB103239A43512275",
                        "defaultText": "It's my duty to save her!"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "5812878427C6D8484C7B80B5DF6B2308AF30",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8BC46D1129669446717A39D7D2B648CB36E4",
                        "defaultText": "..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "CC4EDA005BA2374EE9691513DFDFE8FA9E7A",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": "8869B0234349C2426D499493503B84B52F87",
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": -1000,
                        "y": 0
                    },
                    "animation": {
                        "type": 0,
                        "movement": 2,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 240,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    }
                },
                "uid": "9CB56F016C226046EB684C07E7A8C4FCA220",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.ZoomCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 50,
                        "y": 50
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "11DF24005667554AEB4BF624A46C73117FBC",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "AEFA32CF1A30B8419E6B41550B1BB52F3CF5",
                        "defaultText": "Sooo, why haven't you just asked him out already?"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "4F64D43C8410B6461759C558D6E7ADAC3D30",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "3D4D00CD785F834807981668901465E9D03E",
                        "defaultText": "WOO!!!"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E521BC4868D9934C1C084DD645943D409BA9",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "B088E49D54B5C242727AD4F14C2AECB21D5A",
                        "defaultText": "Rose, you're awesome!<3"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "2570076E2669E5493B391D901B75E2B6E4CF",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "B27ECB606097D8442E5AA018A39EA8AB6D98",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "355A9BCD38C32549DD2B1236BECE2BD787C3",
                        "defaultText": "Wait a-!\nThat's..."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "6F76702B5B33094EC2587569C1D5E620DD5D",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "6B144E298B6D4548091A8BA250C1024F4D38",
                        "defaultText": "I told you already,"
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "C9729B4450EF064A6D3BEFD6A263F21369EB",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "F126B71A0E0C2642517869204737078F5571",
                        "defaultText": "It's not like that."
                    },
                    "position": 0,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A194322614ED1649C05A4454C80FDEECA4C0",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "892F6AC638E92245CE08397609E3A1522F7B",
                        "defaultText": "Awww... Come on, pleeeeease?"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "C42E8E157C4E124ECB1B0F234EAD6F53B1FC",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "70443D655387B4409C68B1572C145903E31D",
                        "defaultText": "Do it for me? I'll take care of Rose. <3"
                    },
                    "position": 0,
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "6EAC8B3212E41741B23A35F109339D71D72B",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "BC3369AF7484A14E0E5AEDA29C6A7B7F1C99",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "720FAF723086C744D6990261D4595B6705D4",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": 0,
                    "id": "messageBox",
                    "visible": 0,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "19A0F04C26CE16423F28E14275EAA2AC6B7B",
                "indent": 0
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 60,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "C02B17E80B62D642F54927D3C83756AA0A71",
                "indent": 0
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": null,
                    "layer": 0,
                    "duration": 60,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "5CC2AD293BD6324E0929ED219674A29F20B8",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "2D52AB534F72C3408A198864CEA7C28ED15E",
                        "name": "Jack al rescate"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "73B715F97754074D5F3B60547A2175E0C188",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "localizableStrings": {
            "6CC26AAF3230104E8F5BA6A31C61EF5BCAD5": {
                "t": "That was quite the nice atmosphere you two had!",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "F38EC592110C6344332B7592FCE514504FD9"
                }
            },
            "2F57AD243275C54B1E5A074208304093E3B5": {
                "t": "Uh?",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "106FDEE430A51549B81AF535A56D8C14827B"
                }
            },
            "910D9EAB97E831488248240595BEF34F2F36": {
                "t": "Aaaaa! It's not like that!",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "118FB76459498143D89849B88F56F30B59B7"
                }
            },
            "E475933D87F02749E77A77815CD579CABD25": {
                "t": "R-really...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "764CE3E623F071454A29E612251761D15E03"
                }
            },
            "397DA52289D0A749FD59C3C8B56767B1D796": {
                "t": "Ugh, no! He's just a friend! That's all...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "D5D718CC6A8B364C4A3A2F04A88A3A1DA5A1"
                }
            },
            "C06F83A7506B634F968BC65664CB4074D594": {
                "t": "Aww... That's a real shame.",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "646360571BB9C24B1A39D41668F4027248D5"
                }
            },
            "86709A64677146458E8B0739E9514D233A17": {
                "t": "You know, you two look soooo cute together!",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "71B24E0298467943BD2B31529F588B68855F"
                }
            },
            "C6F2CCF042100247203B2AB61E9C389C1596": {
                "t": "Wh- what are you talking about?",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "6C01D34663351842F2782B37FA2C5D40B96E"
                }
            },
            "B2D9F48E5E27B0459A5BF508384B95E024E5": {
                "t": "Besides...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "1C9BD3E87FB0624C9A290C93052CBCD31CB0"
                }
            },
            "A1EADA8F245EA64131393E733E6A694A5CE3": {
                "t": "There is that sister of his.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "8AD652507683324B933A5845D9C8C3A6AFC0"
                }
            },
            "A2BFD66318876941F89BC748131AA81F66FD": {
                "t": "Y-yeah. ",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "87B486C485B9B3489B4B57732CE06CC5128B"
                }
            },
            "DF36F0E1634840458A88B57568AED04CBD9F": {
                "t": "He's just some dirty siscon...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "F708AE5448E3A94A665B762407E668E10CB0"
                }
            },
            "3BF367D776B7874D136AAFE2F12F7313D484": {
                "t": "So, she's really his little sister, huh? <3",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "DC64B5341A5D75455F7946E2B73F862EF415"
                }
            },
            "9600C3C526E835424F4909E300FEC1881C50": {
                "t": "AH!! She's here!!",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "54BD794573C4524BB91ACD816EBAEE5A4484"
                }
            },
            "10A6B62B0BE4E849C70B95165EB373E2B92A": {
                "t": "Think she'll notice me?",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "23F7FD8162CC9942724BCB27F2C4B903C968"
                }
            },
            "81C4189A62BF0541B36B6285CAE4D745630A": {
                "t": "Oh god...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "B5A6AD226CDB5442FD8A44058E89ACA98C9D"
                }
            },
            "483B3DCA1DD78449596A1416C8419D64BB1A": {
                "t": "Ah... Hi Megan.",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "72BE85D91E63254B6909FE9376C27718F1A2"
                }
            },
            "022953E776E14141355A85858A0E37C5AE7C": {
                "t": "Haaaa... <3",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "25388B5F0AB9D24448194AC188D0B82040E8"
                }
            },
            "8423A3B799DC714A112964C47008EBDC936E": {
                "t": "Think Jack will be watching?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "1563C29B88146840F55B7BD7FEFA79516A48"
                }
            },
            "EE61B0E43195C24A8948B15536E107E05754": {
                "t": "Sorry, Khaty, but that's how it is...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "E6AAF1664412D749FD288F42305524FA8565"
                }
            },
            "6AAB002936B58443927A705295954207B561": {
                "t": "Eh!? But?!",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "7EBF5741355FD146733B89030919BFC84407"
                }
            },
            "9BCCB6331791C343D549F11689151B106952": {
                "t": "*Starts changing her clother*",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "15E213FD0F396840B0799C57F6A25B060226"
                }
            },
            "E24A88A429784947C85A7972391E1EBDE787": {
                "t": "Khaty, right?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "80EA71FD3EC89946ED6A03620FC11D1E7CC9"
                }
            },
            "9271A293265BC84E575BF927F9DFFC348C08": {
                "t": "Eh?",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "D25D3B7893B82847AA792CD7E4E8023BDBBB"
                }
            },
            "94B7FB5C8856334D6A28C523B46850C77F32": {
                "t": "Yeah. She's Khaty.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "08ADA314218AE146031959A859FCA148C29F"
                }
            },
            "B9CFB3FA414C834CCC1AFFF289ACE050DA30": {
                "t": "We're all in the same class.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "3463A697501B1542163A8E97A4594C4C22EC"
                }
            },
            "114645DA2719394FE74A79F386DC7A995B39": {
                "t": "I-it's nice to meet you.",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "51D98E6C166A2647F718E29521D1B5349FFE"
                }
            },
            "3C752D4023E0B2405528190243599DD87028": {
                "t": "You're Jack's lit... hum... sister, right?",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "8247DE4228591449ED9824A58BA3D9509F3C"
                }
            },
            "8E144FE38C0F0145C75BA5A74168423A6ACE": {
                "t": "We look cute together, RIGHT?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "F92D2ACA4FE61249F6191554F0952DE72E20"
                }
            },
            "7F4846FB6DBE3548EC495174FBDDEBA110F8": {
                "t": "°3°",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "E95BD67622D8444A155AD605FE55BDDFA9DD"
                }
            },
            "F398E01161BCF54E2C4AE5B7D145CCC55C41": {
                "t": "Think we are a match for each other?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "CA52F4F7883F12447089530880EFD8E35077"
                }
            },
            "7DEBDE4C40864844391BB0094BE16E0EC471": {
                "t": "Think he will start noticin me soon? <3",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "ED0B14157DE6574D4C48A3242DF4C03340C4"
                }
            },
            "0DBDDA044ECC134DEF481D52C608FF253B18": {
                "t": "°3°",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "CE816C1B54EB6841A77B249242E5F1FBED3B"
                }
            },
            "DC6992BB8603D44C3C3BDF12507F5F1A910B": {
                "t": "He's just so cool, don't you agree?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "3EF460B98D489549A309EDA35D778404DD94"
                }
            },
            "48E8CB5C60F50646B8590DB8A180E926C14F": {
                "t": "Sorry... What were you just saying...?",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "D42CB8E17AB6D04B56698949D8C733248390"
                }
            },
            "9A660E6A5AD18140ED7B5A887A589FE0019A": {
                "t": "?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "B3231D5821BB24442398A6318AB84F677836"
                }
            },
            "EBA10FAB955B8047537974B619676C42E51A": {
                "t": "Jack's adopted, you know.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "4A5679E56B74D946868BB1324CE5F07E1AD7"
                }
            },
            "65A83DA40247C8438538A0F1C822B331CCC4": {
                "t": "It's not like they're related by blood.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "85D0EAC6413D6646F80A5A62B0E15820C6F2"
                }
            },
            "EDC59C5740E5F24AB86B18B57C796A14EB6E": {
                "t": "Oh! So that's what is like.",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "5ACCB0C800FDF1455769DC02A7BF278B2DD5"
                }
            },
            "E3B5B1B056B8B845393B9DC18229A7D96E28": {
                "t": "Yeah...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "2D87B8324678974AD8088CE79A065DCA8BF9"
                }
            },
            "79DB67546579054B48994CF892203B5F6744": {
                "t": "And if you haven't noticed,",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "512647284319A741312884B3138079324410"
                }
            },
            "0367837D29CA75496A682642A42B2D9288BB": {
                "t": "She's kind of fond of him...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "3BE093BC2526D8418A7A0602D9C1319F7F15"
                }
            },
            "49C5683F3602244C2C6B8984D04BDA78894C": {
                "t": "I get it...",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "D91F9CB03AB10345708BB7468FFBEDB9F697"
                }
            },
            "FE6B7F8A357EC24C96598F1455C191743061": {
                "t": "And they even live in the same house, so she must easily...",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "CC20C0968CCEF148A74914B4228EBFFBB108"
                }
            },
            "48FB4A1C858D4147189B5C859C1E3DFD13A7": {
                "t": "HE must have done something to her!",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "83C437C47C00134C3D6A8E91C41D2C7F4A47"
                }
            },
            "F6E2654485DC7243A2798C36AB9F7D8B4213": {
                "t": "The fiend! ",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "16DAB1B84F2BA74B1988DA13D3DAB120C3E5"
                }
            },
            "059B72B320F8E742CA3BB103239A43512275": {
                "t": "It's my duty to save her!",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "5812878427C6D8484C7B80B5DF6B2308AF30"
                }
            },
            "8BC46D1129669446717A39D7D2B648CB36E4": {
                "t": "...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "CC4EDA005BA2374EE9691513DFDFE8FA9E7A"
                }
            },
            "AEFA32CF1A30B8419E6B41550B1BB52F3CF5": {
                "t": "Sooo, why haven't you just asked him out already?",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "4F64D43C8410B6461759C558D6E7ADAC3D30"
                }
            },
            "3D4D00CD785F834807981668901465E9D03E": {
                "t": "WOO!!!",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "E521BC4868D9934C1C084DD645943D409BA9"
                }
            },
            "B088E49D54B5C242727AD4F14C2AECB21D5A": {
                "t": "Rose, you're awesome!<3",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "2570076E2669E5493B391D901B75E2B6E4CF"
                }
            },
            "355A9BCD38C32549DD2B1236BECE2BD787C3": {
                "t": "Wait a-!\nThat's...",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "6F76702B5B33094EC2587569C1D5E620DD5D"
                }
            },
            "6B144E298B6D4548091A8BA250C1024F4D38": {
                "t": "I told you already,",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "C9729B4450EF064A6D3BEFD6A263F21369EB"
                }
            },
            "F126B71A0E0C2642517869204737078F5571": {
                "t": "It's not like that.",
                "d": {
                    "cid": "5C64F7931FF72442468B32F99E98A565DDA8",
                    "eid": "A194322614ED1649C05A4454C80FDEECA4C0"
                }
            },
            "892F6AC638E92245CE08397609E3A1522F7B": {
                "t": "Awww... Come on, pleeeeease?",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "C42E8E157C4E124ECB1B0F234EAD6F53B1FC"
                }
            },
            "70443D655387B4409C68B1572C145903E31D": {
                "t": "Do it for me? I'll take care of Rose. <3",
                "d": {
                    "cid": "FC6940F4856B97471C3B2D3446DF69F0FD17",
                    "eid": "6EAC8B3212E41741B23A35F109339D71D72B"
                }
            }
        }
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}