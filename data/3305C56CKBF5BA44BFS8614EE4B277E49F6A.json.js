GS.dataCache['3305C56CKBF5BA44BFS8614EE4B277E49F6A'] = {
    "uid": "3305C56CKBF5BA44BFS8614EE4B277E49F6A",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "aeropuerto",
        "type": "vn.scene",
        "parentId": "3EB0897BK4EAAA43A8SA91DEE65923801AB3",
        "chapterUid": "3EB0897BK4EAAA43A8SA91DEE65923801AB3",
        "order": 3,
        "commands": [
            {
                "id": "gs.PlayMusic",
                "params": {
                    "music": {
                        "name": "Tutorial_-_Good_Mood",
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
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "loop": 1,
                    "waitForCompletion": 0
                },
                "indent": 0,
                "uid": "D8970CAA6E90D04EA44B0C56DECCEA62E1C8",
                "expanded": false
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "graphic": {
                        "name": "Shoppingmall_Morning",
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
                    "waitForCompletion": 1,
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
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 0,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "viewport": {
                        "type": "scene"
                    }
                },
                "indent": 0,
                "uid": "11CAF4887C77414E518B4FF5B4C99FAC4BD8",
                "expanded": false
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "predefinedPositionId": 6,
                    "expressionId": null,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "zOrder": 0,
                    "origin": 0,
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
                        "type": 0,
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
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "viewport": {
                        "type": "scene"
                    }
                },
                "indent": 0,
                "uid": "2D4A01253DE3D447FD1B9D8213C0C90A18CF",
                "expanded": false
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
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
                    },
                    "id": "messageBox"
                },
                "indent": 0,
                "uid": "DCDA1E2E60D6C849B48AC3902F17BE0D5007"
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
                        "lcId": "D700A9F7718E204480781CD1762295D8199B",
                        "defaultText": "Finally here..."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AE1D9B194E38874E6B99C335DA1AA7359B3A",
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
                        "lcId": "ECF0D8D672CB8640A878727119B8E9DD29C2",
                        "defaultText": "**typing** Just got through the security check"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "84FE3F0244BFE7470D59D2D20B5EBFD200B1",
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
                        "lcId": "1553A8F4548671437D6BDAF60EC472BB6307",
                        "defaultText": "Hope she didn't wait for long..."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "512806C14B94724F2F297F78A749A1125168",
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "predefinedPositionId": 4,
                    "expressionId": "E47074BB462ED848840BBAD279DC9D2763CB",
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "zOrder": 500,
                    "origin": 0,
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
                        "y": 0,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
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
                    "duration": 60,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "viewport": {
                        "type": "scene"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C09E749467ED2249DC6BE853EE0A366BAFD3",
                "expanded": false
            },
            {
                "id": "gs.ShakeScreen",
                "params": {
                    "duration": 60,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 5,
                        "x": 5
                    },
                    "speed": 500,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "27A20B9869030944637B73788F0E6A151277",
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
                        "lcId": "512143EB3EE3544FFD2B42F08948157D67D5",
                        "defaultText": "WELCOME BACK!!!"
                    },
                    "position": 0,
                    "characterId": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "432F65133C28F44B7B2855E71D438C269D02",
                "expanded": true
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "predefinedPositionId": 4,
                    "duration": 60,
                    "waitForCompletion": 1,
                    "positionType": 2,
                    "position": {
                        "x": 400,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "indent": 0,
                "uid": "95B9EA0B45CC4047D57943A841D97C08EA46"
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
                    "duration": 10,
                    "waitForCompletion": 1,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "expressionId": "8869B0234349C2426D499493503B84B52F87",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "41555A468DF4D048959A0890EE64D605B2A1",
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
                        "lcId": "C6478B0074D981457C0B69668D2485E2BFE6",
                        "defaultText": "!!!\n"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "195136C33AD5C847317AFAD3A2FB70F3DF25",
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
                        "lcId": "87B1602B880407444C880BB41EC4423E9F5C",
                        "defaultText": "S...Sorry! I think you've got the wrong person!"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F893B12F9C1B8444791BE3947A6494E26DB7",
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
                        "lcId": "261E6F262C97C3414728D5705885E195E071",
                        "defaultText": "Oh... my mistake **giggle**"
                    },
                    "position": 0,
                    "characterId": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "825E25AD415688474D7A8CC1DFEEDFCCBC0C",
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
                        "lcId": "10CF8A7C32B70148C27BA2F19C0CE857F241",
                        "defaultText": "So... who're you looking for?"
                    },
                    "position": 0,
                    "characterId": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "64FED72B551E154208197E983062EFF3C854",
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
                        "lcId": "7E93A6B9270F3846212B204506B24B00F9B5",
                        "defaultText": "Eh? Oh, um well..."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "1B413C6B72FD534EB828683751F9DB259154",
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
                        "lcId": "0C8D06527536E34D622B3F43C253B68E134F",
                        "defaultText": "Im looking for my little sister."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F56CD7396ECBA64DB0296AA86F6921C1B94D",
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
                        "lcId": "14FC0D9931FBF94AC03AAD83258EF4D4755A",
                        "defaultText": "I see <3..."
                    },
                    "position": 0,
                    "characterId": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "A521D8644735C540834A0752564E5D6ACCFD",
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
                        "lcId": "566D5DF5484D07432F18A3716AD37EA91566",
                        "defaultText": "So, why don't you try calling her phone?"
                    },
                    "position": 0,
                    "characterId": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C2C2AAEC9E696441FF5B4472CA39E82F9A27",
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
                        "lcId": "45137BA13FA7C746B97B8AD1AA16E8BF739B",
                        "defaultText": "Huh... "
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "BEF2E60923BBD240C2594506AA141BCB4BA2",
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
                        "lcId": "12DB54AE3A2C8848721A4CC6F42B5EC95B6A",
                        "defaultText": "Guess that's not a bad idea."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "ED69FAE6534D9243701AA6B18A31277226DF",
                "expanded": true
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "predefinedPositionId": 4,
                    "duration": 300,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 100,
                        "y": 200
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "indent": 0,
                "uid": "0696996632816442BA6811055893A837F40F",
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
                        "lcId": "E89281097845A64F40987D0965372D395C4E",
                        "defaultText": " Excuse me a moment..."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B190527B152E4842127BAFD73C96564624AB",
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
                        "lcId": "F8CC5AC6629CB441A839F367EFF265D5E883",
                        "defaultText": "Maybe we could meet her together...\n**holds on phone**"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AE0977502EDB3646EE88E3B37A535287D533",
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
                        "lcId": "50D5E61E5627454110195415F0454E406D8F",
                        "defaultText": "..."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "0405EC722897864B53395A002995B1D3DE8B",
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
                        "lcId": "164D406E5154834A502954917D5DFC929458",
                        "defaultText": "Rose! I'm here. Can you see me?"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "1633C5A933F7B54A4E8B90A38383813F0A78",
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
                        "lcId": "AE9B59A46338C147939B72370731FBBE9020",
                        "defaultText": "**Yeah**"
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
                "indent": 0,
                "uid": "9EAB1CBE66F93745A55A5DD173D4733B45BD",
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
                        "lcId": "47A1AE3E278A984D11999AD1704C1098463A",
                        "defaultText": "Fine. Where are you?"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "48A994B994BCA9448978D276ADB35F32D97B",
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
                        "lcId": "E4B363C16AB2E7441129E244B02919EAD005",
                        "defaultText": "**Right behind you...**"
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
                "indent": 0,
                "uid": "C6FBD00E1C6E5448CD1A64800512C0342CA4",
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
                    "duration": 10,
                    "waitForCompletion": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "expressionId": "E47074BB462ED848840BBAD279DC9D2763CB",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "5F05284E536F254C6C282A01AFD9236F69DC",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 0,
                    "duration": 480,
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
                        "lcId": "4D1B2AFF5C17334FE63A03F4956F42ECEADE",
                        "defaultText": "... Onii-chan ;)"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "DE4BB72C5BA1C048B86881B164E8DB97941B",
                "expanded": true
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "predefinedPositionId": 0,
                    "duration": 120,
                    "waitForCompletion": 1,
                    "positionType": 2,
                    "position": {
                        "x": 100,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "F22F31307293F14A299805D6C69727588963",
                "indent": 0
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "FA569D5F464312498F2B1D445CD8A746D495",
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
                        "lcId": "86633D834FD3264B698AE8470921F5C28738",
                        "defaultText": "???!!!"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "D1F2E7F078CEF24ADA9A7EA7561F07A5DABC",
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
                        "lcId": "6D4978BE0CC23341121A72B615E0E6AD819C",
                        "defaultText": "Behind?"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AF568D6829522749649ACF2311B907A12AD2",
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
                        "lcId": "DED7CF0B8E5DF34AAF496190763C7D29E64F",
                        "defaultText": "Oh...\nOni-chan!"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "8D6931741F674443411B5E7828EDE75F9FD4",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": "AC8C1F72406AD041692BA797FE5B5D9BDF7F",
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
                        "lcId": "4C5DDC7F8AA4D64AE7889FC15829BC230B68",
                        "defaultText": "You're so funny\n**boob hug**"
                    },
                    "position": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E8D740FB49ACB1414D58E6E50A7D0329D1B4",
                "expanded": true
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": 0,
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
                    },
                    "id": "messageBox"
                },
                "indent": 0,
                "uid": "1D66A7F0311463425A187AD391943D232EDC"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 0,
                    "duration": 60,
                    "origin": 1,
                    "waitForCompletion": 1,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 3,
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
                        "origin": 1,
                        "duration": 0,
                        "easing.type": 0,
                        "animation.type": 0,
                        "zOrder": 1,
                        "blendMode": 0,
                        "visual.type": 0,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 0,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "boob hug ajustado",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    }
                },
                "uid": "AD0DED0B6793444AC3288B5106DD6056936D",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.UnlockCG",
                "params": {
                    "cgId": "DAEF63F6233E7142856A75C262BD70356981"
                },
                "uid": "BFD37BE211FE7240118BE3232AF343185D00",
                "indent": 0
            },
            {
                "id": "gs.ShakePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 420,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 10,
                        "x": 10
                    },
                    "speed": 500,
                    "easing": {
                        "type": 0,
                        "inOut": 2
                    },
                    "fieldFlags": {
                        "easing.type": 0
                    }
                },
                "indent": 0,
                "uid": "9C5846BB352B4146E38B9E907E2B772FC304",
                "expanded": false
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 300,
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
                        "lcId": "8B01091977FDA94B221AD1A5B017946EF0B8",
                        "defaultText": "Hmmf... hummmf"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 0
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "30003E591F4D334AAD1B32C5C05A6D2F5643",
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
                    "duration": 10,
                    "waitForCompletion": 0,
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "expressionId": "AC8C1F72406AD041692BA797FE5B5D9BDF7F",
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "6F9A3CF84896774AAF3AFD43A65F8C0E61F1",
                "indent": 0
            },
            {
                "id": "gs.ErasePicture",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "duration": 180,
                    "waitForCompletion": 1,
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
                "uid": "C42BFA073BECF44DD988BAD6177833E28592",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
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
                    },
                    "id": "messageBox"
                },
                "indent": 0,
                "uid": "0AC9ABAE1A6077409F19BED3BF6AC7541B27"
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
                        "lcId": "224E3D8E5666E8411F4B003047552E43B2AE",
                        "defaultText": "Wait... you?\n..."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "2DF4817B1B03E344326B7D2736022F1FBA8F",
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
                        "lcId": "E73D3B5182AF22457178380542FFE109D3A1",
                        "defaultText": "I need to sit down for a minute."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5147BE863B20C74F0F49F168A15941EB43F2",
                "expanded": true
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "predefinedPositionId": 5,
                    "duration": 120,
                    "waitForCompletion": 0,
                    "positionType": 2,
                    "position": {
                        "x": 500,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "81C889BD5893044FA6698891B89F7D5DFDBC",
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
                        "lcId": "B82318238B3BF149378BA9F8EA8B55E4DFEC",
                        "defaultText": "Want to grab something to eat, onii-chan?"
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
                "indent": 0,
                "uid": "AC68344687CED24B484B81433E6392EEC04D",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 180,
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
                "uid": "0C510335255DC2407A19133500786F1AA6D2",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 180,
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
                "uid": "15FA4BDE21DAA94E57088704C575134C9D27",
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
                    "duration": 300,
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
                    }
                },
                "uid": "60C3490971A99841AA68CF424FA5D70FDC09",
                "indent": 0,
                "expanded": false
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
                "uid": "911576971042A940E86B79A567F1E3D8286A",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
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
                "uid": "370FD6C5208AF24B7B88AAF8F0CA01E63D4A",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "36782372480875478C39B9185474C33B0F51",
                        "name": "Jack's memories"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "3CE81FDA7F46E441214A35B26BEF6183791B"
            }
        ],
        "background": {
            "graphic": {
                "name": ""
            },
            "offsetX": 0,
            "offsetY": 0
        },
        "localizableStrings": {
            "D700A9F7718E204480781CD1762295D8199B": {
                "t": "Finally here...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "AE1D9B194E38874E6B99C335DA1AA7359B3A"
                }
            },
            "ECF0D8D672CB8640A878727119B8E9DD29C2": {
                "t": "**typing** Just got through the security check",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "84FE3F0244BFE7470D59D2D20B5EBFD200B1"
                }
            },
            "1553A8F4548671437D6BDAF60EC472BB6307": {
                "t": "Hope she didn't wait for long...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "512806C14B94724F2F297F78A749A1125168"
                }
            },
            "512143EB3EE3544FFD2B42F08948157D67D5": {
                "t": "WELCOME BACK!!!",
                "d": {
                    "cid": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "eid": "432F65133C28F44B7B2855E71D438C269D02"
                }
            },
            "C6478B0074D981457C0B69668D2485E2BFE6": {
                "t": "!!!\n",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "195136C33AD5C847317AFAD3A2FB70F3DF25"
                }
            },
            "87B1602B880407444C880BB41EC4423E9F5C": {
                "t": "S...Sorry! I think you've got the wrong person!",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "F893B12F9C1B8444791BE3947A6494E26DB7"
                }
            },
            "261E6F262C97C3414728D5705885E195E071": {
                "t": "Oh... my mistake **giggle**",
                "d": {
                    "cid": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "eid": "825E25AD415688474D7A8CC1DFEEDFCCBC0C"
                }
            },
            "10CF8A7C32B70148C27BA2F19C0CE857F241": {
                "t": "So... who're you looking for?",
                "d": {
                    "cid": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "eid": "64FED72B551E154208197E983062EFF3C854"
                }
            },
            "7E93A6B9270F3846212B204506B24B00F9B5": {
                "t": "Eh? Oh, um well...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "1B413C6B72FD534EB828683751F9DB259154"
                }
            },
            "0C8D06527536E34D622B3F43C253B68E134F": {
                "t": "Im looking for my little sister.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "F56CD7396ECBA64DB0296AA86F6921C1B94D"
                }
            },
            "14FC0D9931FBF94AC03AAD83258EF4D4755A": {
                "t": "I see <3...",
                "d": {
                    "cid": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "eid": "A521D8644735C540834A0752564E5D6ACCFD"
                }
            },
            "566D5DF5484D07432F18A3716AD37EA91566": {
                "t": "So, why don't you try calling her phone?",
                "d": {
                    "cid": "6FF3DEA787C967426F29C1C112789A4E2AB6",
                    "eid": "C2C2AAEC9E696441FF5B4472CA39E82F9A27"
                }
            },
            "45137BA13FA7C746B97B8AD1AA16E8BF739B": {
                "t": "Huh... ",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "BEF2E60923BBD240C2594506AA141BCB4BA2"
                }
            },
            "12DB54AE3A2C8848721A4CC6F42B5EC95B6A": {
                "t": "Guess that's not a bad idea.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "ED69FAE6534D9243701AA6B18A31277226DF"
                }
            },
            "E89281097845A64F40987D0965372D395C4E": {
                "t": " Excuse me a moment...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "B190527B152E4842127BAFD73C96564624AB"
                }
            },
            "F8CC5AC6629CB441A839F367EFF265D5E883": {
                "t": "Maybe we could meet her together...\n**holds on phone**",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "AE0977502EDB3646EE88E3B37A535287D533"
                }
            },
            "50D5E61E5627454110195415F0454E406D8F": {
                "t": "...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "0405EC722897864B53395A002995B1D3DE8B"
                }
            },
            "164D406E5154834A502954917D5DFC929458": {
                "t": "Rose! I'm here. Can you see me?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "1633C5A933F7B54A4E8B90A38383813F0A78"
                }
            },
            "AE9B59A46338C147939B72370731FBBE9020": {
                "t": "**Yeah**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "9EAB1CBE66F93745A55A5DD173D4733B45BD"
                }
            },
            "47A1AE3E278A984D11999AD1704C1098463A": {
                "t": "Fine. Where are you?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "48A994B994BCA9448978D276ADB35F32D97B"
                }
            },
            "E4B363C16AB2E7441129E244B02919EAD005": {
                "t": "**Right behind you...**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "C6FBD00E1C6E5448CD1A64800512C0342CA4"
                }
            },
            "4D1B2AFF5C17334FE63A03F4956F42ECEADE": {
                "t": "... Onii-chan ;)",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "DE4BB72C5BA1C048B86881B164E8DB97941B"
                }
            },
            "86633D834FD3264B698AE8470921F5C28738": {
                "t": "???!!!",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "D1F2E7F078CEF24ADA9A7EA7561F07A5DABC"
                }
            },
            "6D4978BE0CC23341121A72B615E0E6AD819C": {
                "t": "Behind?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "AF568D6829522749649ACF2311B907A12AD2"
                }
            },
            "DED7CF0B8E5DF34AAF496190763C7D29E64F": {
                "t": "Oh...\nOni-chan!",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "8D6931741F674443411B5E7828EDE75F9FD4"
                }
            },
            "4C5DDC7F8AA4D64AE7889FC15829BC230B68": {
                "t": "You're so funny\n**boob hug**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "E8D740FB49ACB1414D58E6E50A7D0329D1B4"
                }
            },
            "8B01091977FDA94B221AD1A5B017946EF0B8": {
                "t": "Hmmf... hummmf",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "30003E591F4D334AAD1B32C5C05A6D2F5643"
                }
            },
            "224E3D8E5666E8411F4B003047552E43B2AE": {
                "t": "Wait... you?\n...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "2DF4817B1B03E344326B7D2736022F1FBA8F"
                }
            },
            "E73D3B5182AF22457178380542FFE109D3A1": {
                "t": "I need to sit down for a minute.",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "5147BE863B20C74F0F49F168A15941EB43F2"
                }
            },
            "B82318238B3BF149378BA9F8EA8B55E4DFEC": {
                "t": "Want to grab something to eat, onii-chan?",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "AC68344687CED24B484B81433E6392EEC04D"
                }
            }
        },
        "numberVariables": [
            {
                "name": "My Local",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "",
                "index": 1,
                "scope": 1,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "Super Loc",
                "index": 2,
                "scope": 0
            }
        ],
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "livePreviewDisabled": false
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