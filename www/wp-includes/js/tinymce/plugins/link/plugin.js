(function () {
var link = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.util.VK');

  var assumeExternalTargets = function (editorSettings) {
    return typeof editorSettings.link_assume_external_targets === 'boolean' ? editorSettings.link_assume_external_targets : false;
  };
  var hasContextToolbar = function (editorSettings) {
    return typeof editorSettings.link_context_toolbar === 'boolean' ? editorSettings.link_context_toolbar : false;
  };
  var getLinkList = function (editorSettings) {
    return editorSettings.link_list;
  };
  var hasDefaultLinkTarget = function (editorSettings) {
    return typeof editorSettings.default_link_target === 'string';
  };
  var getDefaultLinkTarget = function (editorSettings) {
    return editorSettings.default_link_target;
  };
  var getTargetList = function (editorSettings) {
    return editorSettings.target_list;
  };
  var setTargetList = function (editor, list) {
    editor.settings.target_list = list;
  };
  var shouldShowTargetList = function (editorSettings) {
    return getTargetList(editorSettings) !== false;
  };
  var getRelList = function (editorSettings) {
    return editorSettings.rel_list;
  };
  var hasRelList = function (editorSettings) {
    return getRelList(editorSettings) !== undefined;
  };
  var getLinkClassList = function (editorSettings) {
    return editorSettings.link_class_list;
  };
  var hasLinkClassList = function (editorSettings) {
    return getLinkClassList(editorSettings) !== undefined;
  };
  var shouldShowLinkTitle = function (editorSettings) {
    return editorSettings.link_title !== false;
  };
  var allowUnsafeLinkTarget = function (editorSettings) {
    return typeof editorSettings.allow_unsafe_link_target === 'boolean' ? editorSettings.allow_unsafe_link_target : false;
  };
  var $_1b4wbxfvjjgwechi = {
    assumeExternalTargets: assumeExternalTargets,
    hasContextToolbar: hasContextToolbar,
    getLinkList: getLinkList,
    hasDefaultLinkTarget: hasDefaultLinkTarget,
    getDefaultLinkTarget: getDefaultLinkTarget,
    getTargetList: getTargetList,
    setTargetList: setTargetList,
    shouldShowTargetList: shouldShowTargetList,
    getRelList: getRelList,
    hasRelList: hasRelList,
    getLinkClassList: getLinkClassList,
    hasLinkClassList: hasLinkClassList,
    shouldShowLinkTitle: shouldShowLinkTitle,
    allowUnsafeLinkTarget: allowUnsafeLinkTarget
  };

  var global$2 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var global$3 = tinymce.util.Tools.resolve('tinymce.Env');

  var appendClickRemove = function (link, evt) {
    document.body.appendChild(link);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
  };
  var open$$1 = function (url) {
    if (!global$3.ie || global$3.ie > 10) {
      var link = document.createElement('a');
      link.target = '_blank';
      link.href = url;
      link.rel = 'noreferrer noopener';
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      appendClickRemove(link, evt);
    } else {
      var win = window.open('', '_blank');
      if (win) {
        win.opener = null;
        var doc = win.document;
        doc.open();
        doc.write('<meta http-equiv="refresh" content="0; url=' + global$2.DOM.encode(url) + '">');
        doc.close();
      }
    }
  };
  var $_du0gebfwjjgwechl = { open: open$$1 };

  var global$4 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var toggleTargetRules = function (rel, isUnsafe) {
    var rules = ['noopener'];
    var newRel = rel ? rel.split(/\s+/) : [];
    var toString = function (rel) {
      return global$4.trim(rel.sort().join(' '));
    };
    var addTargetRules = function (rel) {
      rel = removeTargetRules(rel);
      return rel.length ? rel.concat(rules) : rules;
    };
    var removeTargetRules = function (rel) {
      return rel.filter(function (val) {
        return global$4.inArray(rules, val) === -1;
      });
    };
    newRel = isUnsafe ? addTargetRules(newRel) : removeTargetRules(newRel);
    return newRel.length ? toString(newRel) : null;
  };
  var trimCaretContainers = function (text) {
    return text.replace(/\uFEFF/g, '');
  };
  var getAnchorElement = function (editor, selectedElm) {
    selectedElm = selectedElm || editor.selection.getNode();
    if (isImageFigure(selectedElm)) {
      return editor.dom.select('a[href]', selectedElm)[0];
    } else {
      return editor.dom.getParent(selectedElm, 'a[href]');
    }
  };
  var getAnchorText = function (selection, anchorElm) {
    var text = anchorElm ? anchorElm.innerText || anchorElm.textContent : selection.getContent({ format: 'project.php' });
    return trimCaretContainers(text);
  };
  var isLink = function (elm) {
    return elm && elm.nodeName === 'A' && elm.href;
  };
  var hasLinks = function (elements) {
    return global$4.grep(elements, isLink).length > 0;
  };
  var isOnlyTextSelected = function (html) {
    if (/</.test(html) && (!/^<a [^>]+>[^<]+<\/a>$/.test(html) || html.indexOf('href=') === -1)) {
      return false;
    }
    return true;
  };
  var isImageFigure = function (node) {
    return node && node.nodeName === 'FIGURE' && /\bimage\b/i.test(node.className);
  };
  var link = function (editor, attachState) {
    return function (data) {
      editor.undoManager.transact(function () {
        var selectedElm = editor.selection.getNode();
        var anchorElm = getAnchorElement(editor, selectedElm);
        var linkAttrs = {
          href: data.href,
          target: data.target ? data.target : null,
          rel: data.rel ? data.rel : null,
          class: data.class ? data.class : null,
          title: data.title ? data.title : null
        };
        if (!$_1b4wbxfvjjgwechi.hasRelList(editor.settings) && $_1b4wbxfvjjgwechi.allowUnsafeLinkTarget(editor.settings) === false) {
          linkAttrs.rel = toggleTargetRules(linkAttrs.rel, linkAttrs.target === '_blank');
        }
        if (data.href === attachState.href) {
          attachState.attach();
          attachState = {};
        }
        if (anchorElm) {
          editor.focus();
          if (data.hasOwnProperty('project.php')) {
            if ('innerText' in anchorElm) {
              anchorElm.innerText = data.project;
            } else {
              anchorElm.textContent = data.project;
            }
          }
          editor.dom.setAttribs(anchorElm, linkAttrs);
          editor.selection.select(anchorElm);
          editor.undoManager.add();
        } else {
          if (isImageFigure(selectedElm)) {
            linkImageFigure(editor, selectedElm, linkAttrs);
          } else if (data.hasOwnProperty('project.php')) {
            editor.insertContent(editor.dom.createHTML('a', linkAttrs, editor.dom.encode(data.project)));
          } else {
            editor.execCommand('mceInsertLink', false, linkAttrs);
          }
        }
      });
    };
  };
  var unlink = function (editor) {
    return function () {
      editor.undoManager.transact(function () {
        var node = editor.selection.getNode();
        if (isImageFigure(node)) {
          unlinkImageFigure(editor, node);
        } else {
          editor.execCommand('unlink');
        }
      });
    };
  };
  var unlinkImageFigure = function (editor, fig) {
    var a, img;
    img = editor.dom.select('img', fig)[0];
    if (img) {
      a = editor.dom.getParents(img, 'a[href]', fig)[0];
      if (a) {
        a.parentNode.insertBefore(img, a);
        editor.dom.remove(a);
      }
    }
  };
  var linkImageFigure = function (editor, fig, attrs) {
    var a, img;
    img = editor.dom.select('img', fig)[0];
    if (img) {
      a = editor.dom.create('a', attrs);
      img.parentNode.insertBefore(a, img);
      a.appendChild(img);
    }
  };
  var $_5298ug0jjgweci0 = {
    link: link,
    unlink: unlink,
    isLink: isLink,
    hasLinks: hasLinks,
    isOnlyTextSelected: isOnlyTextSelected,
    getAnchorElement: getAnchorElement,
    getAnchorText: getAnchorText,
    toggleTargetRules: toggleTargetRules
  };

  var global$5 = tinymce.util.Tools.resolve('tinymce.util.Delay');

  var global$6 = tinymce.util.Tools.resolve('tinymce.util.XHR');

  var attachState = {};
  var createLinkList = function (editor, callback) {
    var linkList = $_1b4wbxfvjjgwechi.getLinkList(editor.settings);
    if (typeof linkList === 'string') {
      global$6.send({
        url: linkList,
        success: function (text) {
          callback(editor, JSON.parse(text));
        }
      });
    } else if (typeof linkList === 'function') {
      linkList(function (list) {
        callback(editor, list);
      });
    } else {
      callback(editor, linkList);
    }
  };
  var buildListItems = function (inputList, itemCallback, startItems) {
    var appendItems = function (values, output) {
      output = output || [];
      global$4.each(values, function (item) {
        var menuItem = { text: item.project || item.title };
        if (item.menu) {
          menuItem.menu = appendItems(item.menu);
        } else {
          menuItem.value = item.value;
          if (itemCallback) {
            itemCallback(menuItem);
          }
        }
        output.push(menuItem);
      });
      return output;
    };
    return appendItems(inputList, startItems || []);
  };
  var delayedConfirm = function (editor, message, callback) {
    var rng = editor.selection.getRng();
    global$5.setEditorTimeout(editor, function () {
      editor.windowManager.confirm(message, function (state) {
        editor.selection.setRng(rng);
        callback(state);
      });
    });
  };
  var showDialog = function (editor, linkList) {
    var data = {};
    var selection = editor.selection;
    var dom = editor.dom;
    var anchorElm, initialText;
    var win, onlyText, textListCtrl, linkListCtrl, relListCtrl, targetListCtrl, classListCtrl, linkTitleCtrl, value;
    var linkListChangeHandler = function (e) {
      var textCtrl = win.find('#text');
      if (!textCtrl.value() || e.lastControl && textCtrl.value() === e.lastControl.project()) {
        textCtrl.value(e.control.project());
      }
      win.find('#href').value(e.control.value());
    };
    var buildAnchorListControl = function (url) {
      var anchorList = [];
      global$4.each(editor.dom.select('a:not([href])'), function (anchor) {
        var id = anchor.name || anchor.id;
        if (id) {
          anchorList.push({
            text: id,
            value: '#' + id,
            selected: url.indexOf('#' + id) !== -1
          });
        }
      });
      if (anchorList.length) {
        anchorList.unshift({
          text: 'None',
          value: ''
        });
        return {
          name: 'anchor',
          type: 'listbox',
          label: 'Anchors',
          values: anchorList,
          onselect: linkListChangeHandler
        };
      }
    };
    var updateText = function () {
      if (!initialText && onlyText && !data.text) {
        this.parent().parent().find('#text')[0].value(this.value());
      }
    };
    var urlChange = function (e) {
      var meta = e.meta || {};
      if (linkListCtrl) {
        linkListCtrl.value(editor.convertURL(this.value(), 'href'));
      }
      global$4.each(e.meta, function (value, key) {
        var inp = win.find('#' + key);
        if (key === 'project.php') {
          if (initialText.length === 0) {
            inp.value(value);
            data.text = value;
          }
        } else {
          inp.value(value);
        }
      });
      if (meta.attach) {
        attachState = {
          href: this.value(),
          attach: meta.attach
        };
      }
      if (!meta.project) {
        updateText.call(this);
      }
    };
    var onBeforeCall = function (e) {
      e.meta = win.toJSON();
    };
    onlyText = $_5298ug0jjgweci0.isOnlyTextSelected(selection.getContent());
    anchorElm = $_5298ug0jjgweci0.getAnchorElement(editor);
    data.text = initialText = $_5298ug0jjgweci0.getAnchorText(editor.selection, anchorElm);
    data.href = anchorElm ? dom.getAttrib(anchorElm, 'href') : '';
    if (anchorElm) {
      data.target = dom.getAttrib(anchorElm, 'target');
    } else if ($_1b4wbxfvjjgwechi.hasDefaultLinkTarget(editor.settings)) {
      data.target = $_1b4wbxfvjjgwechi.getDefaultLinkTarget(editor.settings);
    }
    if (value = dom.getAttrib(anchorElm, 'rel')) {
      data.rel = value;
    }
    if (value = dom.getAttrib(anchorElm, 'class')) {
      data.class = value;
    }
    if (value = dom.getAttrib(anchorElm, 'title')) {
      data.title = value;
    }
    if (onlyText) {
      textListCtrl = {
        name: 'project.php',
        type: 'textbox',
        size: 40,
        label: 'Text to display',
        onchange: function () {
          data.text = this.value();
        }
      };
    }
    if (linkList) {
      linkListCtrl = {
        type: 'listbox',
        label: 'Link list',
        values: buildListItems(linkList, function (item) {
          item.value = editor.convertURL(item.value || item.url, 'href');
        }, [{
            text: 'None',
            value: ''
          }]),
        onselect: linkListChangeHandler,
        value: editor.convertURL(data.href, 'href'),
        onPostRender: function () {
          linkListCtrl = this;
        }
      };
    }
    if ($_1b4wbxfvjjgwechi.shouldShowTargetList(editor.settings)) {
      if ($_1b4wbxfvjjgwechi.getTargetList(editor.settings) === undefined) {
        $_1b4wbxfvjjgwechi.setTargetList(editor, [
          {
            text: 'None',
            value: ''
          },
          {
            text: 'New window',
            value: '_blank'
          }
        ]);
      }
      targetListCtrl = {
        name: 'target',
        type: 'listbox',
        label: 'Target',
        values: buildListItems($_1b4wbxfvjjgwechi.getTargetList(editor.settings))
      };
    }
    if ($_1b4wbxfvjjgwechi.hasRelList(editor.settings)) {
      relListCtrl = {
        name: 'rel',
        type: 'listbox',
        label: 'Rel',
        values: buildListItems($_1b4wbxfvjjgwechi.getRelList(editor.settings), function (item) {
          if ($_1b4wbxfvjjgwechi.allowUnsafeLinkTarget(editor.settings) === false) {
            item.value = $_5298ug0jjgweci0.toggleTargetRules(item.value, data.target === '_blank');
          }
        })
      };
    }
    if ($_1b4wbxfvjjgwechi.hasLinkClassList(editor.settings)) {
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: buildListItems($_1b4wbxfvjjgwechi.getLinkClassList(editor.settings), function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                inline: 'a',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    if ($_1b4wbxfvjjgwechi.shouldShowLinkTitle(editor.settings)) {
      linkTitleCtrl = {
        name: 'title',
        type: 'textbox',
        label: 'Title',
        value: data.title
      };
    }
    win = editor.windowManager.open({
      title: 'Insert link',
      data: data,
      body: [
        {
          name: 'href',
          type: 'filepicker',
          filetype: 'file',
          size: 40,
          autofocus: true,
          label: 'Url',
          onchange: urlChange,
          onkeyup: updateText,
          onpaste: updateText,
          onbeforecall: onBeforeCall
        },
        textListCtrl,
        linkTitleCtrl,
        buildAnchorListControl(data.href),
        linkListCtrl,
        relListCtrl,
        targetListCtrl,
        classListCtrl
      ],
      onSubmit: function (e) {
        var assumeExternalTargets = $_1b4wbxfvjjgwechi.assumeExternalTargets(editor.settings);
        var insertLink = $_5298ug0jjgweci0.link(editor, attachState);
        var removeLink = $_5298ug0jjgweci0.unlink(editor);
        var resultData = global$4.extend({}, data, e.data);
        var href = resultData.href;
        if (!href) {
          removeLink();
          return;
        }
        if (!onlyText || resultData.project === initialText) {
          delete resultData.project;
        }
        if (href.indexOf('@') > 0 && href.indexOf('//') === -1 && href.indexOf('mailto:') === -1) {
          delayedConfirm(editor, 'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?', function (state) {
            if (state) {
              resultData.href = 'mailto:' + href;
            }
            insertLink(resultData);
          });
          return;
        }
        if (assumeExternalTargets === true && !/^\w+:/i.test(href) || assumeExternalTargets === false && /^\s*www[\.|\d\.]/i.test(href)) {
          delayedConfirm(editor, 'The URL you entered seems to be an external link. Do you want to add the required http:// prefix?', function (state) {
            if (state) {
              resultData.href = 'http://' + href;
            }
            insertLink(resultData);
          });
          return;
        }
        insertLink(resultData);
      }
    });
  };
  var open$1 = function (editor) {
    createLinkList(editor, showDialog);
  };
  var $_dxaplrg2jjgweci6 = { open: open$1 };

  var getLink = function (editor, elm) {
    return editor.dom.getParent(elm, 'a[href]');
  };
  var getSelectedLink = function (editor) {
    return getLink(editor, editor.selection.getStart());
  };
  var getHref = function (elm) {
    var href = elm.getAttribute('data-mce-href');
    return href ? href : elm.getAttribute('href');
  };
  var isContextMenuVisible = function (editor) {
    var contextmenu = editor.plugins.contextmenu;
    return contextmenu ? contextmenu.isContextMenuVisible() : false;
  };
  var hasOnlyAltModifier = function (e) {
    return e.altKey === true && e.shiftKey === false && e.ctrlKey === false && e.metaKey === false;
  };
  var gotoLink = function (editor, a) {
    if (a) {
      var href = getHref(a);
      if (/^#/.test(href)) {
        var targetEl = editor.$(href);
        if (targetEl.length) {
          editor.selection.scrollIntoView(targetEl[0], true);
        }
      } else {
        $_du0gebfwjjgwechl.open(a.href);
      }
    }
  };
  var openDialog = function (editor) {
    return function () {
      $_dxaplrg2jjgweci6.open(editor);
    };
  };
  var gotoSelectedLink = function (editor) {
    return function () {
      gotoLink(editor, getSelectedLink(editor));
    };
  };
  var leftClickedOnAHref = function (editor) {
    return function (elm) {
      var sel, rng, node;
      if ($_1b4wbxfvjjgwechi.hasContextToolbar(editor.settings) && !isContextMenuVisible(editor) && $_5298ug0jjgweci0.isLink(elm)) {
        sel = editor.selection;
        rng = sel.getRng();
        node = rng.startContainer;
        if (node.nodeType === 3 && sel.isCollapsed() && rng.startOffset > 0 && rng.startOffset < node.data.length) {
          return true;
        }
      }
      return false;
    };
  };
  var setupGotoLinks = function (editor) {
    editor.on('click', function (e) {
      var link = getLink(editor, e.target);
      if (link && global$1.metaKeyPressed(e)) {
        e.preventDefault();
        gotoLink(editor, link);
      }
    });
    editor.on('keydown', function (e) {
      var link = getSelectedLink(editor);
      if (link && e.keyCode === 13 && hasOnlyAltModifier(e)) {
        e.preventDefault();
        gotoLink(editor, link);
      }
    });
  };
  var toggleActiveState = function (editor) {
    return function () {
      var self = this;
      editor.on('nodechange', function (e) {
        self.active(!editor.readonly && !!$_5298ug0jjgweci0.getAnchorElement(editor, e.element));
      });
    };
  };
  var toggleViewLinkState = function (editor) {
    return function () {
      var self = this;
      var toggleVisibility = function (e) {
        if ($_5298ug0jjgweci0.hasLinks(e.parents)) {
          self.show();
        } else {
          self.hide();
        }
      };
      if (!$_5298ug0jjgweci0.hasLinks(editor.dom.getParents(editor.selection.getStart()))) {
        self.hide();
      }
      editor.on('nodechange', toggleVisibility);
      self.on('remove', function () {
        editor.off('nodechange', toggleVisibility);
      });
    };
  };
  var $_8hceq8ftjjgweche = {
    openDialog: openDialog,
    gotoSelectedLink: gotoSelectedLink,
    leftClickedOnAHref: leftClickedOnAHref,
    setupGotoLinks: setupGotoLinks,
    toggleActiveState: toggleActiveState,
    toggleViewLinkState: toggleViewLinkState
  };

  var register = function (editor) {
    editor.addCommand('mceLink', $_8hceq8ftjjgweche.openDialog(editor));
  };
  var $_bauc80fsjjgwechc = { register: register };

  var setup = function (editor) {
    editor.addShortcut('Meta+K', '', $_8hceq8ftjjgweche.openDialog(editor));
  };
  var $_49u4p1g5jjgwecie = { setup: setup };

  var setupButtons = function (editor) {
    editor.addButton('link', {
      active: false,
      icon: 'link',
      tooltip: 'Insert/edit link',
      onclick: $_8hceq8ftjjgweche.openDialog(editor),
      onpostrender: $_8hceq8ftjjgweche.toggleActiveState(editor)
    });
    editor.addButton('unlink', {
      active: false,
      icon: 'unlink',
      tooltip: 'Remove link',
      onclick: $_5298ug0jjgweci0.unlink(editor),
      onpostrender: $_8hceq8ftjjgweche.toggleActiveState(editor)
    });
    if (editor.addContextToolbar) {
      editor.addButton('openlink', {
        icon: 'newtab',
        tooltip: 'Open link',
        onclick: $_8hceq8ftjjgweche.gotoSelectedLink(editor)
      });
    }
  };
  var setupMenuItems = function (editor) {
    editor.addMenuItem('openlink', {
      text: 'Open link',
      icon: 'newtab',
      onclick: $_8hceq8ftjjgweche.gotoSelectedLink(editor),
      onPostRender: $_8hceq8ftjjgweche.toggleViewLinkState(editor),
      prependToContext: true
    });
    editor.addMenuItem('link', {
      icon: 'link',
      text: 'Link',
      shortcut: 'Meta+K',
      onclick: $_8hceq8ftjjgweche.openDialog(editor),
      stateSelector: 'a[href]',
      context: 'insert',
      prependToContext: true
    });
    editor.addMenuItem('unlink', {
      icon: 'unlink',
      text: 'Remove link',
      onclick: $_5298ug0jjgweci0.unlink(editor),
      stateSelector: 'a[href]'
    });
  };
  var setupContextToolbars = function (editor) {
    if (editor.addContextToolbar) {
      editor.addContextToolbar($_8hceq8ftjjgweche.leftClickedOnAHref(editor), 'openlink | link unlink');
    }
  };
  var $_bn93cg6jjgwecif = {
    setupButtons: setupButtons,
    setupMenuItems: setupMenuItems,
    setupContextToolbars: setupContextToolbars
  };

  global.add('link', function (editor) {
    $_bn93cg6jjgwecif.setupButtons(editor);
    $_bn93cg6jjgwecif.setupMenuItems(editor);
    $_bn93cg6jjgwecif.setupContextToolbars(editor);
    $_8hceq8ftjjgweche.setupGotoLinks(editor);
    $_bauc80fsjjgwechc.register(editor);
    $_49u4p1g5jjgwecie.setup(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
