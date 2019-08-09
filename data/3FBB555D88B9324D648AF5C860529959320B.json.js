GS.dataCache['3FBB555D88B9324D648AF5C860529959320B'] = {
    "uid": "3FBB555D88B9324D648AF5C860529959320B",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Oficina de profesores",
        "type": "vn.scene",
        "parentId": "1D9E4C8E8248D744533AF6841B23E35A6210",
        "chapterUid": "1D9E4C8E8248D744533AF6841B23E35A6210",
        "order": 4,
        "localizableStrings": {
            "7E0698017E17E349882B2C20D502E2C59484": {
                "t": "**T-Shirt barely covers her breast**",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "43ED74571DB67544417A3F221E3CDAB0FD61"
                }
            },
            "D49BAE7C35FF764BD339F677BD491E26D00D": {
                "t": "Rose,",
                "d": {
                    "cid": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "eid": "8E0E352E89BD344DAF2AE451FC4D2B60D7AA"
                }
            },
            "451115B160669840B81BBBC3C0438BA257D7": {
                "t": "Please understand you still need to follow the dress code.",
                "d": {
                    "cid": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "eid": "DC41EDFB9870F34F358B1995C44DB8DB1535"
                }
            },
            "6E811AED14A3D740B86B508481231044E572": {
                "t": "I would. >_<",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "E10DD4DE7D6E85442539AC089BF48EC5CC07"
                }
            },
            "8CDB247345DCB64A3D19DF1059D77B0816D2": {
                "t": "But it's hard to find clothes that fit...",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "0A57313F0B6191449E4853F0359B616C5811"
                }
            },
            "EE9ECF9C15AC7645DC49B185154F2A8EF082": {
                "t": "These did last year... :c",
                "d": {
                    "cid": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "eid": "05F379A45A6BF746196B3BB346083338F9C1"
                }
            },
            "8FB5928654A2B64F5058F4264924C409B234": {
                "t": "J-just... Try to find something that doesn't spring open... okay?",
                "d": {
                    "cid": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "eid": "E371594F0EA56848F109ECC214726E88C728"
                }
            },
            "88724E477774C94A4A6ABA61B20DD41BA9DD": {
                "t": "Now...",
                "d": {
                    "cid": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "eid": "847350C67F580646B2894262F19142D32400"
                }
            },
            "BC90CADC6284A547410974180533AE6AA036": {
                "t": "Megan, come here...",
                "d": {
                    "cid": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "eid": "1846C16D8D4127481D588F60DEFBB2561E87"
                }
            }
        },
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Classroom1_Morning5",
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
                        "duration": 0
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "099A36CB8E040244979833606A0D1A1D47F2",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "School_-_Lunch_Break",
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
                "uid": "15AC39FD80AC7543835A1B93D9B759E4C317",
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
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
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
                        "x": 200,
                        "y": 210
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
                    "duration": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "68705B684EABF34D726B788391E20C7596A1"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 5,
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
                        "x": 500,
                        "y": 0
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
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "11C0CD9128F3D5495519E133F93D07A8F9ED"
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
                "indent": 0,
                "uid": "E3289BC906714949E229C33197E1FD74B97C"
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
                        "lcId": "7E0698017E17E349882B2C20D502E2C59484",
                        "defaultText": "**T-Shirt barely covers her breast**"
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
                "uid": "43ED74571DB67544417A3F221E3CDAB0FD61",
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
                        "lcId": "D49BAE7C35FF764BD339F677BD491E26D00D",
                        "defaultText": "Rose,"
                    },
                    "position": 0,
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "8E0E352E89BD344DAF2AE451FC4D2B60D7AA",
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
                        "lcId": "451115B160669840B81BBBC3C0438BA257D7",
                        "defaultText": "Please understand you still need to follow the dress code."
                    },
                    "position": 0,
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "DC41EDFB9870F34F358B1995C44DB8DB1535",
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
                        "lcId": "6E811AED14A3D740B86B508481231044E572",
                        "defaultText": "I would. >_<"
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
                "uid": "E10DD4DE7D6E85442539AC089BF48EC5CC07",
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
                        "lcId": "8CDB247345DCB64A3D19DF1059D77B0816D2",
                        "defaultText": "But it's hard to find clothes that fit..."
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
                "uid": "0A57313F0B6191449E4853F0359B616C5811",
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
                        "lcId": "EE9ECF9C15AC7645DC49B185154F2A8EF082",
                        "defaultText": "These did last year... :c"
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
                "uid": "05F379A45A6BF746196B3BB346083338F9C1",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.RotateCharacter",
                "params": {
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "duration": 3,
                    "waitForCompletion": 0,
                    "speed": 400,
                    "direction": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "EDB23658122598403E7A57E4EA71B805A291",
                "indent": 0
            },
            {
                "id": "vn.TintCharacter",
                "params": {
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "tone": {
                        "red": -68,
                        "green": -68,
                        "blue": -68,
                        "grey": 0
                    },
                    "duration": 30,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "47B3BD405348F043BC6A01115DEF2E2B24CC",
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
                        "lcId": "8FB5928654A2B64F5058F4264924C409B234",
                        "defaultText": "J-just... Try to find something that doesn't spring open... okay?"
                    },
                    "position": 0,
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E371594F0EA56848F109ECC214726E88C728",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.RotateCharacter",
                "params": {
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "duration": 3,
                    "waitForCompletion": 0,
                    "speed": 400,
                    "direction": 1,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "47FAFAF45EF6344C3A2A9FA30D2B4A5299E4",
                "indent": 0
            },
            {
                "id": "vn.TintCharacter",
                "params": {
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "tone": {
                        "red": 0,
                        "green": 0,
                        "blue": 0,
                        "grey": 0
                    },
                    "duration": 30,
                    "waitForCompletion": 1,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "E04EF4FD1761A444B46BFD4650D90E61BCAF",
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
                        "lcId": "88724E477774C94A4A6ABA61B20DD41BA9DD",
                        "defaultText": "Now..."
                    },
                    "position": 0,
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "847350C67F580646B2894262F19142D32400",
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
                        "lcId": "BC90CADC6284A547410974180533AE6AA036",
                        "defaultText": "Megan, come here..."
                    },
                    "position": 0,
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "1846C16D8D4127481D588F60DEFBB2561E87",
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
                    "expressionId": null,
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
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
                        "x": 600,
                        "y": 200
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
                    "duration": 300,
                    "waitForCompletion": 0,
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
                "uid": "23AA0E805B1F10400959CEC6D647D7367AC2",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "E514B45A5AE80841311BEDE4AE9A9653BDB4",
                    "duration": 300,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 0,
                        "movement": 2,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0
                    }
                },
                "uid": "4D170619356C53491739E56577ED7B459999",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 180
                },
                "uid": "9F0B70FD73F8124C771AF943E60A93EC3D4D",
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
                "uid": "68267BEE42B387438E0B9318EF04F0AECBF3",
                "indent": 0
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
                "uid": "69B8538719FE64487E2978F7314CB416F935",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "A67B5BC805CF31413C2A8A8172044AE7F526",
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
                "indent": 0,
                "uid": "4D5CEF9F7518D74C988A8CD1B7244D4AFDB3"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5C64F7931FF72442468B32F99E98A565DDA8",
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
                "indent": 0,
                "uid": "50C0D9736B27D642E318953733CC7F745E25"
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
                "uid": "818F372265E576489B1825C6A2DC68FD9E7E",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "4E299C6E7765974BB40B3F75D7FE7D7EDE05",
                        "name": "Sala de clases final"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "764AA9BF3622D4458A287D37412D7A99A168",
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
        ]
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